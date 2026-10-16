import { test, expect, mock } from 'claude-code/testing'
import {
  describeTool, CAPTIONS, SEASON_CAPTIONS, SKIN_CAPTIONS, CRITTERS, critterFor, captionFor, captionPixels, captionWidth, elapsed, encode, frame, listOrder, moodOf,
  remotePx, seasonFor, size, svgOf, tinyFrame, tintFor,
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

test('christmas is December up to Boxing Day', () => {
  expect(seasonFor(new Date(2026, 10, 30, 23).getTime())).toBeUndefined()
  expect(seasonFor(new Date(2026, 11, 1, 0).getTime())).toBe('christmas')
  expect(seasonFor(new Date(2026, 11, 24, 18).getTime())).toBe('christmas')
  expect(seasonFor(new Date(2026, 11, 26, 23).getTime())).toBe('christmas')
  expect(seasonFor(new Date(2026, 11, 27, 0).getTime())).toBeUndefined()
})

test('the Santa hat stays whole, the snow stays behind buddy, the present sits at his feet', () => {
  const SANTA = 0xd63a3a
  const TRIM = 0xf4f4f4
  const GIFT = 0x3f9b4f
  const TEAR = 0x5aa9e6
  for (const mood of MOODS) {
    for (let tick = 0; tick < 96; tick++) {
      const px = frame(mood, tick, undefined, 'christmas')
      expect(px).toHaveLength(256)
      // cone 6 + 4 red; brim 8 + pom-pom 1 white
      expect(px.filter(c => c === SANTA)).toHaveLength(10)
      expect(px.filter(c => c === TRIM)).toHaveLength(9)
      expect(px.filter(c => c === GIFT)).toHaveLength(6)
      if (mood === 'sad') expect(px.filter(c => c === TEAR)).toHaveLength(1)
      // snow never covers buddy: he has as much body as without it
      const plain = frame(mood, tick, undefined, 'halloween').filter(c => c === 0xd97757).length
      expect(px.filter(c => c === 0xd97757)).toHaveLength(plain)
    }
  }
  const mini = tinyFrame('run', 0, undefined, 'christmas')
  expect(mini.some(c => c === SANTA)).toBe(true)
  expect(mini.some(c => c === TRIM)).toBe(true)
})

test('seasonal captions fit and fall back to the usual ones', () => {
  for (const captions of Object.values(SEASON_CAPTIONS)) {
    for (const text of Object.values(captions)) {
      expect(captionWidth(text!)).toBeLessThanOrEqual(32)
      expect(captionPixels(text!, 0, true).some(c => c !== 0x01000000)).toBe(true)
    }
  }
  expect(captionFor('idle', 'halloween')).toBe('SPOOKY')
  expect(captionFor('happy', 'christmas')).toBe('MERRY!')
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
  expect((await $.command.run({ command: 'buddy', args: 'christmas' })).text).toBe('Buddy dresses up for christmas!')
  expect(await rows()).toBe(16)
  expect((await $.command.run({ command: 'buddy', args: 'auto' })).text).toBe('Buddy follows the calendar again.')
  expect(await rows()).toBe(14)
  expect((await $.command.run({ command: 'buddy', args: 'easter' })).text).toContain("doesn't know")
})

const FUR = 0x8b9099
const BELLY = 0xeee4c8

test('the forest spirit is 16×16 and never clips its ears, its feet or the tear', () => {
  const TEAR = 0x5aa9e6
  expect(size(2, undefined, 'forest')).toEqual({ columns: 32, rows: 16 })
  for (const mood of MOODS) {
    const fur = frame(mood, 0, undefined, undefined, 'forest').filter(c => c === FUR).length
    for (let tick = 0; tick < 96; tick++) {
      const px = frame(mood, tick, undefined, undefined, 'forest')
      expect(px).toHaveLength(256)
      // as much fur at every height of every jump: nothing falls off the edge
      expect(px.filter(c => c === FUR)).toHaveLength(fur)
      expect(px.some(c => c === BELLY)).toBe(true)
      expect(px.some(c => c === 0xd97757)).toBe(false)
      if (mood === 'sad') expect(px.filter(c => c === TEAR)).toHaveLength(1)
    }
  }
  expect(encode(frame('run', 0, undefined, undefined, 'forest'), 1, 16, 16)).not.toBe(encode(frame('run', 2, undefined, undefined, 'forest'), 1, 16, 16))
})

test('the forest spirit skips the hats but keeps the season\'s props, behind or beside it', () => {
  const HAT = 0x6a3d9a
  const SANTA = 0xd63a3a
  const PUMPKIN = 0xf0882a
  const GIFT = 0x3f9b4f
  for (const mood of MOODS) {
    for (let tick = 0; tick < 96; tick++) {
      const fur = frame(mood, tick, undefined, undefined, 'forest').filter(c => c === FUR).length
      const spooky = frame(mood, tick, undefined, 'halloween', 'forest')
      expect(spooky.some(c => c === HAT)).toBe(false)
      expect(spooky.some(c => c === PUMPKIN)).toBe(true)
      expect(spooky.filter(c => c === FUR)).toHaveLength(fur)
      const merry = frame(mood, tick, undefined, 'christmas', 'forest')
      expect(merry.some(c => c === SANTA)).toBe(false)
      expect(merry.filter(c => c === GIFT)).toHaveLength(6)
      expect(merry.filter(c => c === FUR)).toHaveLength(fur)
    }
  }
  // minis are forest critters and wear no hat
  for (const mood of MOODS) expect(tinyFrame(mood, 3, 0xe8a87c, 'halloween', 'forest').some(c => c === HAT)).toBe(false)
})

test('the forest spirit cheers WHEEE!; a season\'s caption still wins', () => {
  for (const captions of Object.values(SKIN_CAPTIONS)) {
    for (const text of Object.values(captions)) expect(captionWidth(text!)).toBeLessThanOrEqual(32)
  }
  expect(captionFor('happy', undefined, 'forest')).toBe('WHEEE!')
  expect(captionFor('idle', undefined, 'forest')).toBe(CAPTIONS.idle)
  expect(captionFor('happy', 'christmas', 'forest')).toBe('MERRY!')
})

test('/buddy forest changes skin and remembers it; classic changes back', async ($, on) => {
  mock.clock(on)
  const store = new Map<string, unknown>()
  on('store.set', ($, e) => (store.set(e.key, e.value), { value: undefined }))
  on('ui.panes', () => ({ value: [] }))
  on('ui.open', () => ({ value: { isPlaced: true } as never }))
  const rows = async () => {
    const term = await $.ui.mount({ plugin: 'buddy', surface: 'terminal', component: 'Pane', requestId: 'buddy', props: pane(36, 40) })
    const r = (await term.find({ type: 'Raster', key: 'sprite' }))?.props.rows
    await term.unmount()
    return r
  }
  expect(await rows()).toBe(14)
  expect((await $.command.run({ command: 'buddy', args: 'Forest' })).text).toBe('Buddy turns into a forest spirit!')
  expect(await rows()).toBe(16)
  expect(store.get('skin')).toBe('forest')
  // a season costume on top keeps the skin
  await $.command.run({ command: 'buddy', args: 'halloween' })
  expect(await rows()).toBe(16)
  await $.command.run({ command: 'buddy', args: 'normal' })
  expect(await rows()).toBe(16)
  expect((await $.command.run({ command: 'buddy', args: 'classic' })).text).toBe('Buddy is himself again.')
  expect(await rows()).toBe(14)
  expect(store.get('skin')).toBe('classic')
})

test('a skin picked in an earlier session comes back', async ($, on) => {
  mock.clock(on)
  mock.store(on, { skin: 'forest' })
  on('ui.panes', () => ({ value: [] }))
  on('ui.open', () => ({ value: { isPlaced: true } as never }))
  on('command.register', () => ({ value: undefined }))
  on('session.start', ($, e) => ({ cwd: e.cwd }))
  await $.session.start({ cwd: '/tmp', surface: 'terminal', isInteractive: true })
  const term = await $.ui.mount({ plugin: 'buddy', surface: 'terminal', component: 'Pane', requestId: 'buddy', props: pane(36, 40) })
  expect((await term.find({ type: 'Raster', key: 'sprite' }))?.props.rows).toBe(16)
})

test('in the forest each agent type is its own critter, whole in every mood', () => {
  expect(critterFor('Explore')).toBe('sprout')
  expect(critterFor('Plan')).toBe('owl')
  expect(critterFor('fork')).toBe('acorn')
  expect(critterFor('general-purpose')).toBe('spirit')
  expect(critterFor('something-new')).toBe('mushroom')
  const looks = new Set<string>()
  for (const [critter, { colors }] of Object.entries(CRITTERS) as [keyof typeof CRITTERS, (typeof CRITTERS)[keyof typeof CRITTERS]][]) {
    looks.add(encode(tinyFrame('idle', 0, undefined, undefined, 'forest', critter), 1, 8, 6))
    for (const mood of MOODS) {
      // every pixel drawn but a sparkle or a thought dot, which come and go in the corner
      // (a thinking critter holds still, so its corner is always the dot's)
      const drawn = (px: number[]) => px.filter((c, i) => c !== 0x01000000 && !(i === 7 && (c === 0xf5d76e || mood === 'think'))).length
      const own = drawn(tinyFrame(mood, 0, undefined, undefined, 'forest', critter))
      for (let tick = 0; tick < 96; tick++) {
        const px = tinyFrame(mood, tick, 0xe8a87c, undefined, 'forest', critter)
        expect(px).toHaveLength(48)
        // drawn in its own colours, never the agent's tint
        expect(px.some(c => c === 0xe8a87c)).toBe(false)
        // nothing falls off the top or bottom at any point of a bob
        expect(drawn(px)).toBe(own)
        expect(px.some(c => c === colors['#'])).toBe(true)
      }
    }
  }
  expect(looks.size).toBe(Object.keys(CRITTERS).length)
})

test('in the forest an agent\'s name takes its critter\'s colour', async ($, on) => {
  mock.clock(on)
  on('ui.panes', () => ({ value: [] }))
  on('ui.open', () => ({ value: { isPlaced: true } as never }))
  mock.store(on)
  on('agent.spawn', () => ({ model: 'test', agentId: 'agent-1' }))
  await $.agent.spawn({
    tool_use_id: 'toolu_1', prompt: 'x', description: 'Plan the move', subagentType: 'Plan',
    provider: { plugin: 'engine', tier: 'core' }, parentModel: 'test', background: true, fork: false,
  })
  await $.command.run({ command: 'buddy', args: 'forest' })
  const term = await $.ui.mount({ plugin: 'buddy', surface: 'terminal', component: 'Pane', requestId: 'buddy', props: pane(50, 40) })
  expect((await term.find({ type: 'Text', text: 'Plan' }))?.props.color).toBe(`#${CRITTERS.owl.tint.toString(16)}`)
})

test('the masked girl is 16×16 and never clips her horns, her mask or her boots', () => {
  const MASK = 0xb8322a
  const RIM = 0xf2b632
  const PELT = 0xece6d6
  const SHOE = 0x5a3d2b
  const EYE = 0x1f1e1d
  const TEAR = 0x5aa9e6
  const HAT = 0x6a3d9a
  const SANTA = 0xd63a3a
  const count = (px: number[], ...cs: number[]) => px.filter(p => cs.includes(p)).length
  expect(size(2, undefined, 'mask')).toEqual({ columns: 32, rows: 16 })
  for (const mood of MOODS) {
    const plain = frame(mood, 0, undefined, undefined, 'mask')
    for (let tick = 0; tick < 96; tick++) {
      const px = frame(mood, tick, undefined, undefined, 'mask')
      expect(px).toHaveLength(256)
      // the tear runs over the mask, so it counts with it
      expect(count(px, MASK, TEAR)).toBe(count(plain, MASK, TEAR))
      // a blink turns pupils back to rim, so they count together
      expect(count(px, RIM, EYE)).toBe(count(plain, RIM, EYE))
      expect(count(px, PELT)).toBe(count(plain, PELT))
      expect(count(px, SHOE)).toBe(4)
      expect(px.some(c => c === 0xd97757)).toBe(false)
      // seasons bring props but no hat, and never cover her
      const spooky = frame(mood, tick, undefined, 'halloween', 'mask')
      const merry = frame(mood, tick, undefined, 'christmas', 'mask')
      expect(spooky.some(c => c === HAT)).toBe(false)
      expect(merry.some(c => c === SANTA)).toBe(false)
      for (const c of [MASK, RIM, PELT]) {
        expect(count(spooky, c)).toBe(count(px, c))
        expect(count(merry, c)).toBe(count(px, c))
      }
    }
  }
  // two eyes show through two eyeholes: looking up when happy, apart when sad,
  // hidden in a blink
  const pupils = (px: number[]) => px.flatMap((c, i) => (c === EYE ? [[i % 16, Math.floor(i / 16)]] : []))
  const idle = pupils(frame('idle', 0, undefined, undefined, 'mask'))
  const happy = pupils(frame('happy', 0, undefined, undefined, 'mask'))
  const sad = pupils(frame('sad', 0, undefined, undefined, 'mask'))
  expect(idle).toHaveLength(2)
  expect(idle[0]![1]).toBe(idle[1]![1]) // side by side, on one row
  expect(happy).toHaveLength(2)
  expect(sad[1]![0]! - sad[0]![0]!).toBeGreaterThan(idle[1]![0]! - idle[0]![0]!)
  expect(pupils(frame('idle', 47, undefined, undefined, 'mask'))).toHaveLength(0)
  expect(captionFor('happy', undefined, 'mask')).toBe('WILD!')
  // her agents are forest critters too
  expect(tinyFrame('idle', 0, 0xe8a87c, undefined, 'mask', 'owl')).toEqual(tinyFrame('idle', 0, 0xe8a87c, undefined, 'forest', 'owl'))
})

test('/buddy mask puts the mask on, and it is remembered', async ($, on) => {
  mock.clock(on)
  const store = new Map<string, unknown>()
  on('store.set', ($, e) => (store.set(e.key, e.value), { value: undefined }))
  on('ui.panes', () => ({ value: [] }))
  on('ui.open', () => ({ value: { isPlaced: true } as never }))
  expect((await $.command.run({ command: 'buddy', args: 'mask' })).text).toBe('Buddy puts on the mask!')
  expect(store.get('skin')).toBe('mask')
  const term = await $.ui.mount({ plugin: 'buddy', surface: 'terminal', component: 'Pane', requestId: 'buddy', props: pane(36, 40) })
  expect((await term.find({ type: 'Raster', key: 'sprite' }))?.props.rows).toBe(16)
})

test('svgOf draws one rect per run of a colour and leaves the empty pixels out', () => {
  const N = 0x01000000
  const svg = svgOf([0xff0000, 0xff0000, N, 0x00ff00, N, N, N, 0x00ff00], 4, 2, 5)
  expect(svg).toContain('width="20" height="10"')
  expect(svg.match(/<rect /g)).toHaveLength(3)
  expect(svg).toContain('<rect x="0" y="0" width="10" height="5" fill="#ff0000"/>')
  expect(svg).toContain('<rect x="15" y="5" width="5" height="5" fill="#00ff00"/>')
  // a whole buddy stays far under the 128 KiB an Svg may hold
  expect(svgOf(frame('happy', 3, undefined, 'christmas', 'forest'), 16, 16, 8).length).toBeLessThan(20_000)
})

test('the desktop, the editor and the phone draw buddy and his agents as SVG', async ($, on) => {
  mock.clock(on)
  on('agent.spawn', () => ({ model: 'test', agentId: 'agent-1' }))
  await $.agent.spawn({
    tool_use_id: 'toolu_1', prompt: 'x', description: 'Find map files', subagentType: 'Explore',
    provider: { plugin: 'engine', tier: 'core' }, parentModel: 'test', background: true, fork: false,
  })
  for (const surface of ['desktop', 'vscode', 'mobile'] as const) {
    const view = await $.ui.mount({ plugin: 'buddy', surface, component: 'Pane', requestId: 'buddy', props: pane(36, 40) })
    expect(await view.find({ type: 'Raster' })).toBeUndefined()
    const svgs = await view.findAll({ type: 'Svg' })
    expect(svgs).toHaveLength(3) // buddy, his caption, one mini
    const [body, caption, mini] = svgs.map(s => s.props as { source: string; alt: string })
    expect(body!.alt).toBe('Buddy, chilling')
    // with an agent listed, buddy steps down to 12 CSS pixels a pixel
    expect(body!.source).toContain('width="192" height="168"')
    expect(body!.source).toContain('fill="#d97757"')
    expect(caption!.alt).toBe('CHILLING')
    expect(caption!.source).toContain('width="192"') // as wide as buddy
    expect(mini!.alt).toBe('Explore, think')
    expect(mini!.source).toContain('width="32" height="24"')
    expect(await view.find({ text: 'Find map files' })).toBeDefined()
    expect(await view.find({ text: 'Explore' })).toBeDefined()
    await view.unmount()
  }
})

test('on the desktop the pane redraws as buddy bobs', async ($, on) => {
  const clock = mock.clock(on)
  mock.store(on)
  on('command.register', () => ({ value: undefined }))
  on('ui.panes', () => ({ value: [{ id: 'buddy' }] as never }))
  on('session.start', ($, e) => ({ cwd: e.cwd }))
  await $.session.start({ cwd: '/tmp', surface: 'desktop', isInteractive: true })
  const view = await $.ui.mount({ plugin: 'buddy', surface: 'desktop', component: 'Pane', requestId: 'buddy', props: pane(36, 40) })
  const body = async () => ((await view.find({ type: 'Svg' }))?.props as { source: string }).source
  const seen = new Set([await body()])
  for (let i = 0; i < 20; i++) {
    await clock.advance(132)
    seen.add(await body())
  }
  // idle buddy bobs up and down, so the drawing changed as time went by
  expect(seen.size).toBeGreaterThan(1)
})

test('on the desktop buddy grows to fit the pane, up to a limit', async ($, on) => {
  mock.clock(on)
  const width = async (columns: number) => {
    const view = await $.ui.mount({ plugin: 'buddy', surface: 'desktop', component: 'Pane', requestId: 'buddy', props: pane(columns, 40) })
    const source = ((await view.find({ type: 'Svg' }))?.props as { source: string }).source
    await view.unmount()
    return Number(/width="(\d+)"/.exec(source)![1])
  }
  const narrow = await width(24)
  const wide = await width(36)
  expect(wide).toBeGreaterThan(narrow)
  // drawn a little wider than the pane (10 CSS pixels a column), for the pane to shrink to fit
  expect(wide).toBeGreaterThanOrEqual(36 * 8)
  expect(await width(400)).toBe(16 * 24)
  // a tiny pane still gets a buddy you can see; the minis grow with him but stay small
  expect(remotePx(2, false)).toEqual({ body: 4, caption: 2, mini: 4 })
  expect(remotePx(400, false).mini).toBe(8)
  expect(remotePx(400, true).body).toBe(12)
})
