import type { Register } from 'claude-code'

// A 16×16-pixel companion drawn as a 16×8 cell Raster: each cell is "▀" with
// the top pixel as foreground and the bottom pixel as background.
const PANE = 'buddy'
const KEY = 'sprite'
const W = 16
const H = 14 // 16 rows of art, minus the always-empty top and bottom rows
const FRAME_MS = 66
const PANE_COLUMNS = 36 // 2× sprite (32 cells) plus a little air
const MAX_SCALE = 4
const MOOD_MS = 2500
const MINI_COLUMNS = W + 1 // a 1× mini plus a gap
const MINI_ROWS = H / 2 + 2 // its sprite plus a task line and an activity line
const MINI_PER_ROW = 2
const MAX_MINIS = 8 // two columns of four
const MINI_LINGER_MS = 3000 // how long a finished mini celebrates before it leaves
const SWEEP_MS = 5000

const NONE = 0x01000000 // terminal default (transparent)
const BODY = 0xd97757 // Claude orange
const SHADE = 0xb85c3e
const EYE = 0x1f1e1d
const SPARK = 0xf5d76e
const TEAR = 0x5aa9e6

type Mood = 'idle' | 'think' | 'run' | 'happy' | 'sad'

const CAPTION: Record<Mood, string> = {
  idle: 'CHILLING',
  think: 'THINKING',
  run: 'WORKING!',
  happy: 'DONE!',
  sad: 'OH NO...',
}

// A tiny variable-width pixel font, 5 pixels tall, for the caption.
const FONT: Record<string, string[]> = {
  C: ['###', '#..', '#..', '#..', '###'],
  D: ['##.', '#.#', '#.#', '#.#', '##.'],
  E: ['###', '#..', '##.', '#..', '###'],
  G: ['###', '#..', '#.#', '#.#', '###'],
  H: ['#.#', '#.#', '###', '#.#', '#.#'],
  I: ['#', '#', '#', '#', '#'],
  K: ['#.#', '#.#', '##.', '#.#', '#.#'],
  L: ['#..', '#..', '#..', '#..', '###'],
  N: ['#..#', '##.#', '#.##', '#..#', '#..#'],
  O: ['###', '#.#', '#.#', '#.#', '###'],
  R: ['##.', '#.#', '##.', '#.#', '#.#'],
  T: ['###', '.#.', '.#.', '.#.', '.#.'],
  W: ['#...#', '#...#', '#.#.#', '#.#.#', '.#.#.'],
  '!': ['#', '#', '#', '.', '#'],
  '.': ['.', '.', '.', '.', '#'],
  ' ': ['..', '..', '..', '..', '..'],
}
const CAPTION_W = 32 // pixels = cells across
const CAPTION_H = 6 // 5-pixel glyphs plus a pixel to ripple in
const INK = 0xb07a62 // a muted Claude orange, readable on light and dark

export const captionWidth = (text: string) =>
  [...text].reduce((sum, ch) => sum + ((FONT[ch] ?? FONT[' ']!)[0]?.length ?? 0) + 1, -1)

export const CAPTIONS = CAPTION

export function captionPixels(text: string, tick: number, wave: boolean): number[] {
  const px: number[] = new Array(CAPTION_W * CAPTION_H).fill(NONE)
  const glyphs = [...text].map(ch => FONT[ch] ?? FONT[' ']!)
  const width = captionWidth(text)
  let x = Math.max(0, Math.floor((CAPTION_W - width) / 2))
  glyphs.forEach((g, i) => {
    const dy = wave ? (Math.sin(tick / 3 - i * 0.8) > 0 ? 0 : 1) : 0
    g.forEach((row, y) => {
      for (let c = 0; c < row.length; c++) {
        const tx = x + c
        if (row[c] === '#' && tx < CAPTION_W) px[(y + dy) * CAPTION_W + tx] = INK
      }
    })
    x += (g[0]?.length ?? 0) + 1
  })
  return px
}

// Body silhouette, 10 wide × 7 tall ('#' body, '-' shaded underside).
const BODY_ROWS = [
  '..######..',
  '.########.',
  '##########',
  '##########',
  '##########',
  '##########',
  '.--------.',
]

// Minis are tinted by agent type so a few at once tell apart.
const TINT: Record<string, number> = {
  Explore: 0xe8a87c,
  Plan: 0xc9a0dc,
  fork: 0xc96442,
  'general-purpose': BODY,
}
export const tintFor = (type: string) => TINT[type] ?? 0xd4a27f
const darken = (c: number) =>
  (Math.floor(((c >> 16) & 255) * 0.82) << 16) | (Math.floor(((c >> 8) & 255) * 0.82) << 8) | Math.floor((c & 255) * 0.82)

export function frame(mood: Mood, tick: number, body = BODY): number[] {
  const BODY = body
  const SHADE = darken(body)
  const px: number[] = new Array(W * H).fill(NONE)
  const set = (x: number, y: number, c: number) => {
    y -= 1 // the art is laid out on 16 rows; row 0 is never drawn on
    if (x >= 0 && x < W && y >= 0 && y < H) px[y * W + x] = c
  }

  // Vertical motion per mood.
  let dy = 0
  if (mood === 'idle') dy = Math.round(Math.sin(tick / 8) * 0.6)
  if (mood === 'think') dy = Math.round(Math.sin(tick / 5) * 0.6)
  if (mood === 'run') dy = tick % 4 < 2 ? -1 : 0
  if (mood === 'happy') dy = -Math.round(Math.abs(Math.sin(tick / 3)) * 3)
  if (mood === 'sad') dy = 1

  const ox = 3
  const oy = 5 + dy

  BODY_ROWS.forEach((row, y) => {
    for (let x = 0; x < row.length; x++) {
      if (row[x] === '#') set(ox + x, oy + y, BODY)
      if (row[x] === '-') set(ox + x, oy + y, SHADE)
    }
  })

  // Arms: wave up when happy, pump when running.
  const armUp = mood === 'happy' || (mood === 'run' && tick % 4 < 2)
  set(ox - 1, oy + (armUp ? 2 : 4), BODY)
  set(ox + 10, oy + (armUp ? 2 : 4), BODY)
  if (mood === 'happy') {
    set(ox - 2, oy + 1, BODY)
    set(ox + 11, oy + 1, BODY)
  }

  // Legs: alternate while running, otherwise both down.
  const legY = oy + 7
  if (mood === 'run') {
    const step = tick % 4 < 2
    set(ox + 2, legY, BODY)
    set(ox + 7, legY, BODY)
    set(ox + (step ? 1 : 3), legY + 1, SHADE)
    set(ox + (step ? 8 : 6), legY + 1, SHADE)
  } else {
    set(ox + 2, legY, SHADE)
    set(ox + 7, legY, SHADE)
  }

  // Eyes.
  const blink = mood === 'idle' && tick % 48 >= 46
  if (mood === 'sad') {
    // Droopy eyes looking down, slanted brows.
    for (const ex of [ox + 2, ox + 6]) {
      set(ex + 1, oy + 3, EYE)
      set(ex + 1, oy + 4, EYE)
    }
    set(ox + 2, oy + 2, EYE)
    set(ox + 8, oy + 2, EYE)
  } else if (mood === 'happy') {
    // ^ ^
    for (const ex of [ox + 2, ox + 6]) {
      set(ex, oy + 3, EYE)
      set(ex + 1, oy + 2, EYE)
      set(ex + 2, oy + 3, EYE)
    }
  } else if (blink) {
    for (const ex of [ox + 2, ox + 6]) {
      set(ex, oy + 3, EYE)
      set(ex + 1, oy + 3, EYE)
    }
  } else {
    // Eyes dart side to side while thinking.
    const look = mood === 'think' ? ([0, 1, 0, -1][Math.floor(tick / 10) % 4] ?? 0) : 0
    for (const ex of [ox + 2 + look, ox + 6 + look]) {
      set(ex + 1, oy + 2, EYE)
      set(ex + 1, oy + 3, EYE)
    }
  }

  // Sparkles when happy, a thought dot when thinking.
  if (mood === 'happy') {
    const on = tick % 6 < 3
    set(on ? 1 : 14, on ? 2 : 1, SPARK)
    set(on ? 14 : 1, on ? 4 : 3, SPARK)
  }
  if (mood === 'sad') {
    // A tear that slides down the cheek and drips.
    const t = tick % 16
    set(ox + 2, oy + 5 + Math.min(t >> 2, 3), TEAR)
  }
  if (mood === 'think') {
    const n = Math.floor(tick / 6) % 4
    for (let i = 0; i < n; i++) set(11 + i * 2, 1, SHADE)
  }

  return px
}

// Cells for a sprite drawn `scale`× as big: each pixel is `scale` columns wide
// and `scale` half-rows tall, so it stays square.
export const size = (scale: number) => ({ columns: W * scale, rows: (H * scale) / 2 })

export function encode(px: number[], scale = 1, width = W, height = H): string {
  const columns = width * scale
  const rows = (height * scale) / 2
  const at = (c: number, y: number) => px[Math.floor(y / scale) * width + Math.floor(c / scale)] ?? NONE
  const words = new Uint32Array(columns * rows * 3)
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < columns; c++) {
      const i = (r * columns + c) * 3
      const top = at(c, 2 * r)
      const bottom = at(c, 2 * r + 1)
      // Only paint what's there: an empty half must stay the terminal's own
      // background, never "▀" in the default (bright) foreground colour.
      if (top === NONE && bottom === NONE) {
        words[i] = 0x20 // space
        words[i + 1] = NONE
        words[i + 2] = NONE
      } else if (top === NONE) {
        words[i] = 0x2584 // ▄ lower half in the bottom colour
        words[i + 1] = bottom
        words[i + 2] = NONE
      } else {
        words[i] = 0x2580 // ▀ top half in the top colour
        words[i + 1] = top
        words[i + 2] = bottom
      }
    }
  }
  return base64(new Uint8Array(words.buffer))
}

const B64 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'

function base64(bytes: Uint8Array): string {
  let out = ''
  for (let i = 0; i < bytes.length; i += 3) {
    const a = bytes[i] ?? 0
    const b = bytes[i + 1]
    const c = bytes[i + 2]
    const n = (a << 16) | ((b ?? 0) << 8) | (c ?? 0)
    out += B64[(n >> 18) & 63]! + B64[(n >> 12) & 63]!
    out += b === undefined ? '=' : B64[(n >> 6) & 63]!
    out += c === undefined ? '=' : B64[n & 63]!
  }
  return out
}

// "Read page.tsx", "Grep Promise.all", "Bash npm test": the tool and the
// most telling bit of its input, for a mini's activity line.
export function describeTool(tool: string, input: unknown): string {
  const args = (input && typeof input === 'object' ? input : {}) as Record<string, unknown>
  const raw = ['file_path', 'pattern', 'command', 'query', 'url', 'path', 'description']
    .map(k => args[k])
    .find((v): v is string => typeof v === 'string' && v.length > 0)
  if (!raw) return tool
  const arg = /^[~./]/.test(raw) || raw.includes('/') ? (raw.split('/').filter(Boolean).pop() ?? raw) : raw
  return `${tool} ${arg.replace(/\s+/g, ' ')}`
}

type Buddy = {
  mood: 'idle' | 'think' | 'happy'
  happyUntil: number
  sadUntil: number // sad overrides everything until then
  toolsRunning: number
  last: string
  lastCaption?: string
  // minis only
  label?: string
  activity?: string // what it's doing right now, e.g. "▸ Read page.tsx"
  body?: number
  phase?: number // offsets the animation so minis don't bob in sync
  leaveAt?: number // set when its agent's turn ends
}

const fresh = (): Buddy => ({ mood: 'idle', happyUntil: 0, sadUntil: 0, toolsRunning: 0, last: '' })

export const moodOf = (b: Buddy, now: number): Mood => {
  if (now < b.sadUntil) return 'sad'
  if (b.toolsRunning > 0) return 'run'
  if (b.mood === 'happy' && now >= b.happyUntil && !b.leaveAt) return 'idle'
  return b.mood
}

const miniKey = (id: string) => `mini-${id.replace(/[^A-Za-z0-9_-]/g, '').slice(0, 40)}`
const clip = (text: string, n: number) => (text.length > n ? `${text.slice(0, n - 1)}…` : text)

export const register: Register = on => {
  const main = fresh()
  const minis = new Map<string, Buddy>()
  let scale = 2
  let isShown = false
  let tick = 0

  // The buddy a loop's events belong to: the main one, or its agent's mini.
  const buddyFor = (agentId: string | undefined, create: boolean): Buddy | undefined => {
    if (!agentId) return main
    let mini = minis.get(agentId)
    if (!mini && create) {
      mini = { ...fresh(), mood: 'think', phase: minis.size * 7, label: 'agent', body: BODY }
      minis.set(agentId, mini)
    }
    return mini
  }

  on('session.start', async ($, e, next) => {
    await $.command.register({ name: 'buddy', description: 'Show or hide your pixel buddy' })
    isShown = (await $.ui.panes()).some(pane => pane.id === PANE)
    if (!isShown) void $.ui.open({ id: PANE, title: 'Buddy', rows: 18, columns: PANE_COLUMNS })

    $.clock.every(FRAME_MS, async () => {
      if (!isShown) return
      tick++
      const now = await $.clock.now()

      // Finished minis leave once they've celebrated.
      let left = false
      for (const [id, mini] of minis) {
        if (mini.leaveAt && now >= mini.leaveAt) {
          minis.delete(id)
          left = true
        }
      }
      if (left) return $.ui.invalidate('ui.render')

      const paint = async (b: Buddy, key: string, s: number, t: number) => {
        const cells = encode(frame(moodOf(b, now), t, b.body), s)
        if (cells === b.last) return
        b.last = cells
        await $.ui.blit({ requestId: PANE, key, cells })
      }
      await paint(main, KEY, scale, tick)
      if (scale >= 2) {
        const mood = moodOf(main, now)
        const caption = encode(captionPixels(CAPTION[mood], tick, mood === 'think'), 1, CAPTION_W, CAPTION_H)
        if (caption !== main.lastCaption) {
          main.lastCaption = caption
          await $.ui.blit({ requestId: PANE, key: 'caption', cells: caption })
        }
      }
      let n = 0
      for (const [id, mini] of minis) {
        if (n++ >= MAX_MINIS) break
        await paint(mini, miniKey(id), 1, tick + (mini.phase ?? 0))
      }
    })

    // Safety net: drop minis whose agent ended without a turn.complete (killed).
    $.clock.every(SWEEP_MS, async () => {
      if (minis.size === 0) return
      const agents = await $.agent.list()
      const now = await $.clock.now()
      for (const [id, mini] of minis) {
        const agent = agents.find(a => a.id === id)
        const isOver = !agent || ['completed', 'failed', 'killed'].includes(agent.status)
        if (isOver && !mini.leaveAt) mini.leaveAt = now + MINI_LINGER_MS
      }
    })

    return next(e)
  })

  on('command.run', { command: 'buddy' }, async $ => {
    if ((await $.ui.panes()).some(pane => pane.id === PANE)) {
      await $.ui.close({ id: PANE })
      return { text: 'Buddy is taking a nap.' }
    }
    const opened = await $.ui.open({ id: PANE, title: 'Buddy', rows: 18, columns: PANE_COLUMNS })
    return { text: opened.isPlaced ? 'Buddy is here!' : 'Buddy is waiting for more room.' }
  })

  on('ui.close', async ($, e, next) => {
    if (e.id === PANE) isShown = false
    return next(e)
  })

  // A new agent: its mini pops in, tinted by type and labelled with its task.
  on('agent.spawn', async ($, e, next) => {
    const result = await next(e)
    if (result.agentId) {
      const mini = buddyFor(result.agentId, true)!
      mini.label = e.description || e.subagentType
      mini.body = tintFor(e.subagentType)
      $.ui.invalidate('ui.render')
    }
    return result
  })

  // Every model request, main's or a subagent's: that buddy starts thinking.
  // (turn.start can't tell whose turn it is; turn.step carries agentId.)
  on('turn.step', async function* ($, e, next) {
    const isNew = !!e.agentId && !minis.has(e.agentId)
    const b = buddyFor(e.agentId, true)!
    // A mini made from a loop's events alone (after a reload, say) asks the
    // engine for its agent's task and type.
    if (isNew && e.agentId) {
      const id = e.agentId
      void $.agent.list().then(agents => {
        const agent = agents.find(a => a.id === id)
        if (agent && b.label === 'agent') {
          b.label = agent.description || agent.type
          b.body = tintFor(agent.type)
          $.ui.invalidate('ui.render')
        }
      })
    }
    b.mood = 'think'
    b.leaveAt = undefined
    if (b !== main && b.toolsRunning === 0) b.activity = '▸ thinking…'
    $.ui.invalidate('ui.render')
    return yield* next(e)
  })

  on('tool.call', async ($, e, next) => {
    const b = buddyFor(e.agentId, false)
    if (!b) return next(e)
    b.toolsRunning++
    if (b !== main) b.activity = `▸ ${describeTool(e.tool, e)}`
    $.ui.invalidate('ui.render')
    try {
      const result = await next(e)
      if (result.isError) {
        b.sadUntil = (await $.clock.now()) + MOOD_MS
        $.clock.after(MOOD_MS + 100, () => $.ui.invalidate('ui.render'))
      }
      return result
    } finally {
      b.toolsRunning--
      $.ui.invalidate('ui.render')
    }
  })

  on('turn.complete', async ($, e, next) => {
    const b = buddyFor(e.agentId, false)
    if (b) {
      const now = await $.clock.now()
      if (e.reason === 'answer') {
        b.mood = 'happy'
        b.happyUntil = now + MOOD_MS
      } else {
        b.mood = 'idle'
        if (e.reason !== 'aborted') b.sadUntil = now + MOOD_MS
      }
      if (b !== main) {
        b.leaveAt = now + MINI_LINGER_MS
        b.activity = e.reason === 'answer' ? '✓ done' : e.reason === 'aborted' ? '■ stopped' : '✗ failed'
      }
      $.clock.after(MOOD_MS + 100, () => $.ui.invalidate('ui.render'))
      $.ui.invalidate('ui.render')
    }
    return next(e)
  })

  on('ui.render', { component: 'Pane', requestId: PANE }, async ($, e) => {
    const now = await $.clock.now()
    const mood = moodOf(main, now)
    if (e.surface !== 'terminal') {
      const { Text } = $.ui.resolve(e)
      return <Text dimColor>Buddy lives in the terminal ({CAPTION[mood]})</Text>
    }
    const { Box, Text, Raster } = $.ui.resolve(e)
    isShown = true
    const { bodyColumns, scroll } = e.props

    // Minis sit in rows below the big buddy; the big one gets what's left.
    const shown = [...minis].slice(0, MAX_MINIS)
    const extra = minis.size - shown.length
    const perRow = Math.max(1, Math.min(MINI_PER_ROW, Math.floor(bodyColumns / MINI_COLUMNS)))
    const miniRows = Math.ceil(shown.length / perRow)
    const roomRows = scroll.bodyRows - CAPTION_H / 2 - miniRows * MINI_ROWS - (extra > 0 ? 1 : 0)
    scale = Math.max(1, Math.min(MAX_SCALE, Math.floor(bodyColumns / W), Math.floor((roomRows * 2) / H)))
    main.last = encode(frame(mood, tick), scale)
    const { columns, rows } = size(scale)

    const rowsOfMinis: (typeof shown)[] = []
    for (let i = 0; i < shown.length; i += perRow) rowsOfMinis.push(shown.slice(i, i + perRow))

    return (
      <Box flexDirection="column" alignItems="center">
        <Raster key={KEY} columns={columns} rows={rows} cells={main.last} />
        {scale >= 2 ? (
          <Raster key="caption" columns={CAPTION_W} rows={CAPTION_H / 2} cells={(main.lastCaption = encode(captionPixels(CAPTION[mood], tick, mood === 'think'), 1, CAPTION_W, CAPTION_H))} />
        ) : (
          <Text dimColor>{CAPTION[mood].toLowerCase()}</Text>
        )}
        {rowsOfMinis.map(row => (
          <Box flexDirection="row" gap={1}>
            {row.map(([id, mini]) => {
              mini.last = encode(frame(moodOf(mini, now), tick + (mini.phase ?? 0), mini.body), 1)
              return (
                <Box flexDirection="column" alignItems="center" width={W}>
                  <Raster key={miniKey(id)} columns={W} rows={H / 2} cells={mini.last} />
                  <Text wrap="truncate">{clip(mini.label ?? 'agent', W)}</Text>
                  <Text dimColor wrap="truncate">{clip(mini.activity ?? '▸ starting…', W)}</Text>
                </Box>
              )
            })}
          </Box>
        ))}
        {extra > 0 && <Text dimColor>+{extra} more</Text>}
      </Box>
    )
  })
}
