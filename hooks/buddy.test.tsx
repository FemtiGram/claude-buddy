import { test, expect, mock } from 'claude-code/testing'
import { describeTool, CAPTIONS, captionPixels, captionWidth, encode, frame, moodOf, size, tintFor } from './register'

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

test('a spawned agent gets a labelled mini below the big buddy', async ($, on) => {
  mock.clock(on)
  on('agent.spawn', () => ({ model: 'test', agentId: 'agent-1' }))
  await $.agent.spawn({
    tool_use_id: 'toolu_1', prompt: 'look around', description: 'Find map files', subagentType: 'Explore',
    provider: { plugin: 'engine', tier: 'core' }, parentModel: 'test', background: true, fork: false,
  })

  const term = await $.ui.mount({ plugin: 'buddy', surface: 'terminal', component: 'Pane', requestId: 'buddy', props: pane(36, 40) })
  const mini = await term.find({ type: 'Raster', key: 'mini-agent-1' })
  expect(mini?.props.columns).toBe(16)
  expect(mini?.props.rows).toBe(7)
  expect(await term.find({ text: 'Find map files' })).toBeDefined()
  // the big buddy still gets its 2× size
  expect((await term.find({ type: 'Raster', key: 'sprite' }))?.props.columns).toBe(32)
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

test('minis sit two to a row with a task and an activity line', async ($, on) => {
  mock.clock(on)
  let n = 0
  on('agent.spawn', () => ({ model: 'test', agentId: `agent-${++n}` }))
  for (let i = 0; i < 5; i++) {
    await $.agent.spawn({
      tool_use_id: `toolu_${i}`, prompt: 'x', description: `Task ${i}`, subagentType: 'Explore',
      provider: { plugin: 'engine', tier: 'core' }, parentModel: 'test', background: true, fork: false,
    })
  }
  const term = await $.ui.mount({ plugin: 'buddy', surface: 'terminal', component: 'Pane', requestId: 'buddy', props: pane(60, 80) })
  expect(await term.findAll({ type: 'Raster' })).toHaveLength(2 + 5) // big buddy + caption + 5 minis
  expect(await term.find({ text: 'Task 4' })).toBeDefined()
  expect(await term.findAll({ type: 'Text', text: '▸ starting…' })).toHaveLength(5)
})
