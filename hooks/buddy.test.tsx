import { test, expect, mock } from 'claude-code/testing'
import {
  describeTool, CAPTIONS, SEASON_CAPTIONS, captionFor, captionPixels, captionWidth, elapsed, encode, frame, listOrder, moodOf,
  seasonFor, size, tinyFrame, tintFor,
} from './register'

const MOODS = ['idle', 'think', 'run', 'happy', 'sad'] as const
const HALLOWEEN = new Date(2026, 9, 31, 12).getTime()

const pane = (bodyColumns: number, bodyRows: number) => ({
  title: 'Buddy', isFocused: false, bodyColumns, placement: 'dock' as const,
  scroll: { offset: 0, bodyRows }, view: {},
})

test('every mood draws a 16×14 sprite that encodes to 16×7 cells', () => {
  for (const mood of ['idle', 'think', 'run', 'happy', 'sad'] as const) {
    const px = frame(mood, 3)
    expect(px).toHaveLength(224)
    expect(px.some(c => c === 0xd97757)).toBe(true)
    // 112 cells × 3 u32 = 1344 bytes → 1792 base64 characters
    expect(encode(px)).toHaveLength(1792)
    // at 2×: 32×14 cells → 4× the bytes
    expect(encode(px, 2)).toHaveLength(7168)
  }
})

test('size keeps pixels square', () => {
  expect(size(2)).toEqual({ columns: 32, rows: 14 })
  expect(size(3)).toEqual({ columns: 48, rows: 21 })
})

test('running animates between frames', () => {
  expect(encode(frame('run', 0))).not.toBe(encode(frame('run', 2)))
})

test('the pane draws a Raster on the terminal and text elsewhere', async ($, on) => {
  mock.clock(on)
  // a 36-column pane fits the sprite at 2×
  const term = await $.ui.mount({ plugin: 'buddy', surface: 'terminal', component: 'Pane', requestId: 'buddy', props: pane(36, 40) })
  const raster = await term.find({ type: 'Raster', key: 'sprite' })
  expect(raster?.props.columns).toBe(32)
  expect(raster?.props.rows).toBe(14)
  await term.unmount()

  // a wide but short pane is limited by its rows
  const short = await $.ui.mount({ plugin: 'buddy', surface: 'terminal', component: 'Pane', requestId: 'buddy', props: pane(100, 10) })
  expect((await short.find({ type: 'Raster', key: 'sprite' }))?.props.columns).toBe(16)

  const desk = await $.ui.mount({ plugin: 'buddy', surface: 'desktop', component: 'Pane', requestId: 'buddy', props: pane(36, 40) })
  expect(await desk.find({ type: 'Raster' })).toBeUndefined()
})

test('moods: sad beats running, running beats thinking, happy wears off', () => {
  const b = { mood: 'think' as const, happyUntil: 0, sadUntil: 100, toolsRunning: 1, last: '' }
  expect(moodOf(b, 50)).toBe('sad')
  expect(moodOf(b, 150)).toBe('run')
  expect(moodOf({ ...b, toolsRunning: 0 }, 150)).toBe('think')
  const happy = { ...b, mood: 'happy' as const, happyUntil: 200, sadUntil: 0, toolsRunning: 0 }
  expect(moodOf(happy, 100)).toBe('happy')
  expect(moodOf(happy, 300)).toBe('idle')
  // a finished mini keeps celebrating until it leaves
  expect(moodOf({ ...happy, leaveAt: 400 }, 300)).toBe('happy')
})

test('minis are tinted by agent type', () => {
  expect(tintFor('Explore')).not.toBe(tintFor('general-purpose'))
  expect(tintFor('something-new')).toBe(tintFor('another-new'))
})

test('every mood draws an 8×6 mini that encodes to 8×3 cells', () => {
  for (const mood of ['idle', 'think', 'run', 'happy', 'sad'] as const) {
    const px = tinyFrame(mood, 3, 0xe8a87c)
    expect(px).toHaveLength(48)
    expect(px.some(c => c === 0xe8a87c)).toBe(true)
    // 24 cells × 3 u32 = 288 bytes → 384 base64 characters
    expect(encode(px, 1, 8, 6)).toHaveLength(384)
  }
  expect(encode(tinyFrame('run', 0), 1, 8, 6)).not.toBe(encode(tinyFrame('run', 2), 1, 8, 6))
})

test('elapsed reads as m:ss, then hours', () => {
  expect(elapsed(0)).toBe('0:00')
  expect(elapsed(42_500)).toBe('0:42')
  expect(elapsed(70_000)).toBe('1:10')
  expect(elapsed(3_725_000)).toBe('1h02')
})

test('running agents list first, oldest on top; finished ones after, latest first', () => {
  const order = listOrder([
    ['done-early', { startedAt: 0, leaveAt: 100 }],
    ['run-late', { startedAt: 20 }],
    ['done-late', { startedAt: 5, leaveAt: 200 }],
    ['run-early', { startedAt: 10 }],
  ]).map(([id]) => id)
  expect(order).toEqual(['run-early', 'run-late', 'done-late', 'done-early'])
})

test('a spawned agent gets a labelled mini below the big buddy', async ($, on) => {
  mock.clock(on)
  on('agent.spawn', () => ({ model: 'test', agentId: 'agent-1' }))
  await $.agent.spawn({
    tool_use_id: 'toolu_1', prompt: 'look around', description: 'Find map files', subagentType: 'Explore',
    provider: { plugin: 'engine', tier: 'core' }, parentModel: 'test', background: true, fork: false,
  })

  const term = await $.ui.mount({ plugin: 'buddy', surface: 'terminal', component: 'Pane', requestId: 'buddy', props: pane(36, 40) })
  const mini = await term.find({ type: 'Raster', key: 'mini-agent-1' })
  expect(mini?.props.columns).toBe(8)
  expect(mini?.props.rows).toBe(3)
  // its name on one line, its task below
  expect(await term.find({ text: 'Explore' })).toBeDefined()
  expect(await term.find({ text: 'Find map files' })).toBeDefined()
  // the big buddy steps down to 1× to leave the list room
  expect((await term.find({ type: 'Raster', key: 'sprite' }))?.props.columns).toBe(16)
})

test('empty halves never paint the default foreground', () => {
  const b64 = encode(frame('idle', 0))
  const bin = Uint8Array.from(atob(b64), ch => ch.charCodeAt(0))
  const words = new Uint32Array(bin.buffer)
  for (let i = 0; i < words.length; i += 3) {
    // a drawn glyph always has a real (non-default) foreground
    if (words[i] !== 0x20) expect(words[i + 1]).not.toBe(0x01000000)
  }
})

test('every caption fits the 32-pixel caption row and draws ink', () => {
  for (const text of Object.values(CAPTIONS)) {
    expect(captionWidth(text)).toBeLessThanOrEqual(32)
    expect(captionPixels(text, 0, true).some(c => c !== 0x01000000)).toBe(true)
  }
})

test('activity lines name the tool and its most telling argument', () => {
  expect(describeTool('Read', { file_path: '/Users/x/code/kart/src/app/page.tsx' })).toBe('Read page.tsx')
  expect(describeTool('Grep', { pattern: 'Promise.all', path: 'src' })).toBe('Grep Promise.all')
  expect(describeTool('Bash', { command: 'npm   test' })).toBe('Bash npm test')
  expect(describeTool('TodoWrite', {})).toBe('TodoWrite')
})

test('agents list one per row with a name, a task and an activity line', async ($, on) => {
  mock.clock(on)
  let n = 0
  on('agent.spawn', () => ({ model: 'test', agentId: `agent-${++n}` }))
  for (let i = 0; i < 5; i++) {
    await $.agent.spawn({
      tool_use_id: `toolu_${i}`, prompt: 'x', description: `Task ${i}`, subagentType: 'Explore',
      provider: { plugin: 'engine', tier: 'core' }, parentModel: 'test', background: true, fork: false,
    })
  }
  const term = await $.ui.mount({ plugin: 'buddy', surface: 'terminal', component: 'Pane', requestId: 'buddy', props: pane(50, 80) })
  expect(await term.findAll({ type: 'Raster' })).toHaveLength(1 + 5) // big buddy (1×, text caption) + 5 minis
  expect(await term.find({ text: 'Task 4' })).toBeDefined()
  expect(await term.findAll({ type: 'Text', text: '▸ starting…' })).toHaveLength(5)
  await term.unmount()

  // a short pane lists what fits and counts the rest
  const short = await $.ui.mount({ plugin: 'buddy', surface: 'terminal', component: 'Pane', requestId: 'buddy', props: pane(50, 24) })
  expect(await short.findAll({ type: 'Raster' })).toHaveLength(1 + 3)
  expect(await short.find({ text: '  +2 more' })).toBeDefined()
})

test('halloween is the week up to October 31, by the local calendar', () => {
  expect(seasonFor(new Date(2026, 9, 23, 23).getTime())).toBeUndefined()
  expect(seasonFor(new Date(2026, 9, 24, 0).getTime())).toBe('halloween')
  expect(seasonFor(HALLOWEEN)).toBe('halloween')
  expect(seasonFor(new Date(2026, 10, 1, 0).getTime())).toBeUndefined()
  expect(seasonFor(new Date(2026, 6, 15).getTime())).toBeUndefined()
})

test('a season grows the sprite to 16×16 and never clips the hat or the tear', () => {
  const HAT = 0x6a3d9a
  const PUMPKIN = 0xf0882a
  const TEAR = 0x5aa9e6
  expect(size(2, 'halloween')).toEqual({ columns: 32, rows: 16 })
  for (const mood of MOODS) {
    for (let tick = 0; tick < 96; tick++) {
      const px = frame(mood, tick, undefined, 'halloween')
      expect(px).toHaveLength(256)
      // brim 8 + tip 3, whole at every height of every jump
      expect(px.filter(c => c === HAT)).toHaveLength(11)
      expect(px.some(c => c === PUMPKIN)).toBe(true)
      if (mood === 'sad') expect(px.filter(c => c === TEAR)).toHaveLength(1)
    }
    // 128 cells × 3 u32 = 1536 bytes → 2048 base64 characters
    expect(encode(frame(mood, 3, undefined, 'halloween'), 1, 16, 16)).toHaveLength(2048)
  }
  // minis wear a hat too
  expect(tinyFrame('idle', 0, undefined, 'halloween').some(c => c === HAT)).toBe(true)
  expect(tinyFrame('idle', 0).some(c => c === HAT)).toBe(false)
})

test('seasonal captions fit and fall back to the usual ones', () => {
  for (const captions of Object.values(SEASON_CAPTIONS)) {
    for (const text of Object.values(captions)) {
      expect(captionWidth(text!)).toBeLessThanOrEqual(32)
      expect(captionPixels(text!, 0, true).some(c => c !== 0x01000000)).toBe(true)
    }
  }
  expect(captionFor('idle', 'halloween')).toBe('SPOOKY')
  expect(captionFor('run', 'halloween')).toBe(CAPTIONS.run)
  expect(captionFor('idle')).toBe(CAPTIONS.idle)
})

test('on halloween the pane draws the taller sprite', async ($, on) => {
  mock.clock(on, { now: HALLOWEEN })
  const term = await $.ui.mount({ plugin: 'buddy', surface: 'terminal', component: 'Pane', requestId: 'buddy', props: pane(36, 40) })
  const raster = await term.find({ type: 'Raster', key: 'sprite' })
  expect(raster?.props.columns).toBe(32)
  expect(raster?.props.rows).toBe(16)
})

test('/buddy halloween tries the costume on; normal and auto take it off', async ($, on) => {
  mock.clock(on)
  let opened = 0
  on('ui.panes', () => ({ value: [] }))
  on('ui.open', () => (opened++, { value: { isPlaced: true } as never }))
  const rows = async () => {
    const term = await $.ui.mount({ plugin: 'buddy', surface: 'terminal', component: 'Pane', requestId: 'buddy', props: pane(36, 40) })
    const r = (await term.find({ type: 'Raster', key: 'sprite' }))?.props.rows
    await term.unmount()
    return r
  }
  expect(await rows()).toBe(14)
  expect((await $.command.run({ command: 'buddy', args: 'Halloween' })).text).toBe('Buddy dresses up for halloween!')
  expect(await rows()).toBe(16)
  expect(opened).toBe(1) // trying a costume on opens the pane if it's closed
  expect((await $.command.run({ command: 'buddy', args: 'normal' })).text).toBe('Buddy dresses down.')
  expect(await rows()).toBe(14)
  await $.command.run({ command: 'buddy', args: 'halloween' })
  expect((await $.command.run({ command: 'buddy', args: 'auto' })).text).toBe('Buddy follows the calendar again.')
  expect(await rows()).toBe(14)
  expect((await $.command.run({ command: 'buddy', args: 'xmas' })).text).toContain("doesn't know")
})
