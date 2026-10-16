import type { Register } from 'claude-code'

// A 16×16-pixel companion drawn as a 16×8 cell Raster: each cell is "▀" with
// the top pixel as foreground and the bottom pixel as background.
const PANE = 'buddy'
const KEY = 'sprite'
const W = 16
const H = 14 // 16 rows of art, minus the always-empty top and bottom rows
const H_TALL = 16 // a season's hat or the forest spirit's ears need the headroom: all 16 rows, buddy 2 lower
const FRAME_MS = 66
const PANE_COLUMNS = 50 // room for an agent's task on one line
const MAX_SCALE = 4
const MOOD_MS = 2500
const TW = 8 // a mini is an 8×6-pixel sprite: 8 cells by 3 rows, one per text line
const TH = 6
const MINI_ROWS = TH / 2 + 1 // its three lines plus a gap
const MAX_MINIS = 8
const MINI_LINGER_MS = 30_000 // how long a finished agent stays listed, dimmed
const SWEEP_MS = 5000
const CLOCK_MS = 1000 // elapsed times tick once a second

const NONE = 0x01000000 // terminal default (transparent)
const BODY = 0xd97757 // Claude orange
const SHADE = 0xb85c3e
const EYE = 0x1f1e1d
const SPARK = 0xf5d76e
const TEAR = 0x5aa9e6
// Halloween: purple and green, since buddy is orange already.
const HAT = 0x6a3d9a
const BAND = 0x8bc34a
const BAT = 0x8e6bbf
const PUMPKIN = 0xf0882a
const EMBER = 0xc0541c
// Christmas: a Santa hat, snow and a present.
const SANTA = 0xd63a3a
const TRIM = 0xf4f4f4
const SNOW = 0xcfe3f2
const GIFT = 0x3f9b4f
// The forest skin: a grey-blue spirit with a cream belly.
const FUR = 0x8b9099
const BELLY = 0xeee4c8

type Mood = 'idle' | 'think' | 'run' | 'happy' | 'sad'

const CAPTION: Record<Mood, string> = {
  idle: 'CHILLING',
  think: 'THINKING',
  run: 'WORKING!',
  happy: 'DONE!',
  sad: 'OH NO...',
}

// Seasons dress buddy up for a few days a year.
export type Season = 'halloween' | 'christmas'
export const SEASONS: Season[] = ['halloween', 'christmas']

// The week up to Halloween and December up to Boxing Day, by the local calendar.
export function seasonFor(ms: number): Season | undefined {
  const d = new Date(ms)
  if (d.getMonth() === 9 && d.getDate() >= 24) return 'halloween'
  if (d.getMonth() === 11 && d.getDate() <= 26) return 'christmas'
  return undefined
}

// Skins change who buddy is, all year round; `/buddy forest` picks one and it's remembered.
export type Skin = 'classic' | 'forest'
export const SKINS: Skin[] = ['classic', 'forest']

export const heightOf = (season?: Season, skin?: Skin) => (season || skin === 'forest' ? H_TALL : H)

export const SEASON_CAPTIONS: Record<Season, Partial<Record<Mood, string>>> = {
  halloween: { idle: 'SPOOKY', happy: 'BOO!' },
  christmas: { idle: 'HO HO HO', happy: 'MERRY!' },
}
export const SKIN_CAPTIONS: Record<Skin, Partial<Record<Mood, string>>> = {
  classic: {},
  forest: { happy: 'WHEEE!' },
}
export const captionFor = (mood: Mood, season?: Season, skin: Skin = 'classic') =>
  (season && SEASON_CAPTIONS[season][mood]) || SKIN_CAPTIONS[skin][mood] || CAPTION[mood]

// A tiny variable-width pixel font, 5 pixels tall, for the caption.
const FONT: Record<string, string[]> = {
  B: ['##.', '#.#', '##.', '#.#', '##.'],
  C: ['###', '#..', '#..', '#..', '###'],
  D: ['##.', '#.#', '#.#', '#.#', '##.'],
  E: ['###', '#..', '##.', '#..', '###'],
  G: ['###', '#..', '#.#', '#.#', '###'],
  H: ['#.#', '#.#', '###', '#.#', '#.#'],
  I: ['#', '#', '#', '#', '#'],
  K: ['#.#', '#.#', '##.', '#.#', '#.#'],
  L: ['#..', '#..', '#..', '#..', '###'],
  M: ['#...#', '##.##', '#.#.#', '#...#', '#...#'],
  N: ['#..#', '##.#', '#.##', '#..#', '#..#'],
  O: ['###', '#.#', '#.#', '#.#', '###'],
  P: ['###', '#.#', '###', '#..', '#..'],
  R: ['##.', '#.#', '##.', '#.#', '#.#'],
  S: ['###', '#..', '###', '..#', '###'],
  T: ['###', '.#.', '.#.', '.#.', '.#.'],
  U: ['#.#', '#.#', '#.#', '#.#', '###'],
  W: ['#...#', '#...#', '#.#.#', '#.#.#', '.#.#.'],
  Y: ['#.#', '#.#', '.#.', '.#.', '.#.'],
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
export const hex = (c: number) => `#${c.toString(16).padStart(6, '0')}`
const darken = (c: number) =>
  (Math.floor(((c >> 16) & 255) * 0.82) << 16) | (Math.floor(((c >> 8) & 255) * 0.82) << 8) | Math.floor((c & 255) * 0.82)

type Draw = (x: number, y: number, c: number) => void

// Buddy himself: body, arms, legs, eyes and a tear, `oy` the top of his head.
function classicBody(set: Draw, mood: Mood, tick: number, ox: number, oy: number, BODY: number, SHADE: number) {
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

  if (mood === 'sad') {
    // A tear that slides down the cheek and drips.
    const t = tick % 16
    set(ox + 2, oy + 5 + Math.min(t >> 2, 3), TEAR)
  }
}

// The forest spirit, 10 wide: ears above the head ('#' fur, '=' belly, '-' the
// shaded bottom), a pear-shaped body with a chevron on its belly.
const SPIRIT_ROWS = [
  '.#......#.',
  '.##....##.',
  '.########.',
  '##########',
  '##########',
  '##########',
  '###====###',
  '##==##==##',
  '#==#==#==#',
  '.#======#.',
  '..------..',
]

// `oy` is the top of the head; the ears stick up two rows above it, the feet
// sit one below the shaded bottom.
function spiritBody(set: Draw, mood: Mood, tick: number, ox: number, oy: number, FUR: number, SHADE: number) {
  SPIRIT_ROWS.forEach((row, y) => {
    for (let x = 0; x < row.length; x++) {
      if (row[x] === '#') set(ox + x, oy - 2 + y, FUR)
      if (row[x] === '=') set(ox + x, oy - 2 + y, BELLY)
      if (row[x] === '-') set(ox + x, oy - 2 + y, SHADE)
    }
  })

  // Stubby arms, up when happy or running.
  const armUp = mood === 'happy' || (mood === 'run' && tick % 4 < 2)
  set(ox - 1, oy + (armUp ? 2 : 4), FUR)
  set(ox + 10, oy + (armUp ? 2 : 4), FUR)
  if (mood === 'happy') {
    set(ox - 2, oy + 1, FUR)
    set(ox + 11, oy + 1, FUR)
  }

  // Wide clawed feet that shuffle while running.
  const feet = mood === 'run' ? (tick % 4 < 2 ? [1, 2, 6, 7] : [2, 3, 7, 8]) : [2, 3, 6, 7]
  for (const fx of feet) set(ox + fx, oy + 9, SHADE)

  // A small nose above the eyes.
  set(ox + 4, oy + 1, SHADE)
  set(ox + 5, oy + 1, SHADE)

  // Big round eyes: a white and a pupil each.
  const blink = mood === 'idle' && tick % 48 >= 46
  if (mood === 'happy') {
    // ^ ^ and the famous grin.
    for (const ex of [ox + 1, ox + 6]) {
      set(ex, oy + 2, EYE)
      set(ex + 1, oy + 1, EYE)
      set(ex + 2, oy + 2, EYE)
    }
    for (let x = ox + 3; x <= ox + 6; x++) set(x, oy + 3, EYE)
  } else if (mood === 'sad') {
    // Heavy lids over small pupils.
    set(ox + 1, oy + 2, SHADE)
    set(ox + 2, oy + 2, EYE)
    set(ox + 7, oy + 2, EYE)
    set(ox + 8, oy + 2, SHADE)
  } else if (blink) {
    for (const x of [ox + 1, ox + 2, ox + 7, ox + 8]) set(x, oy + 2, EYE)
  } else {
    // Pupils look inward, and dart side to side while thinking.
    const look = mood === 'think' ? ([0, 1, 0, -1][Math.floor(tick / 10) % 4] ?? 0) : 0
    const left = look < 0 ? 1 : 2
    const right = look > 0 ? 8 : 7
    for (const x of [ox + 1, ox + 2, ox + 7, ox + 8]) set(x, oy + 2, TRIM)
    set(ox + left, oy + 2, EYE)
    set(ox + right, oy + 2, EYE)
  }

  if (mood === 'sad') {
    // A tear that runs down the fur beside the belly.
    const t = tick % 16
    set(ox + 1, oy + 3 + Math.min(t >> 2, 2), TEAR)
  }
}

export function frame(mood: Mood, tick: number, body = BODY, season?: Season, skin: Skin = 'classic'): number[] {
  const forest = skin === 'forest'
  const BODY = forest ? FUR : body
  const SHADE = darken(BODY)
  const h = heightOf(season, skin)
  const top = h === H_TALL ? 2 : 0 // the tall sprite moves buddy down to make room for a hat or ears
  const px: number[] = new Array(W * h).fill(NONE)
  const set: Draw = (x, y, c) => {
    y -= 1 // the art is laid out on 16 rows; row 0 is never drawn on
    if (x >= 0 && x < W && y >= 0 && y < h) px[y * W + x] = c
  }

  // Vertical motion per mood.
  let dy = 0
  if (mood === 'idle') dy = Math.round(Math.sin(tick / 8) * 0.6)
  if (mood === 'think') dy = Math.round(Math.sin(tick / 5) * 0.6)
  if (mood === 'run') dy = tick % 4 < 2 ? -1 : 0
  if (mood === 'happy') dy = -Math.round(Math.abs(Math.sin(tick / 3)) * 3)
  if (mood === 'sad') dy = 1

  const ox = 3
  // The spirit is taller: his ears reach row 1 at the top of a jump, his feet row 16 when sad.
  const oy = (forest ? 6 : 5 + top) + dy

  // Snow falls and the bat flits behind buddy.
  if (season === 'christmas') {
    for (const [x, phase] of [[0, 0], [2, 9], [8, 5], [13, 3], [15, 12]] as const) {
      set(x, 1 + (Math.floor(tick / 4 + phase) % 16), SNOW)
    }
  }
  if (season === 'halloween') {
    const bx = 1 + Math.round(Math.sin(tick / 11))
    const by = 3 + Math.round(Math.sin(tick / 7) * 0.6)
    const wing = tick % 6 < 3 ? -1 : 0
    set(bx, by, BAT)
    set(bx - 1, by + wing, BAT)
    set(bx + 1, by + wing, BAT)
  }

  if (forest) spiritBody(set, mood, tick, ox, oy, BODY, SHADE)
  else classicBody(set, mood, tick, ox, oy, BODY, SHADE)

  // Sparkles when happy, thought dots when thinking, clear of arms and ears.
  if (mood === 'happy') {
    const on = tick % 6 < 3
    const [l, r] = forest ? [0, 15] : [1, 14]
    set(on ? l : r, top + (on ? 2 : 1), SPARK)
    set(on ? r : l, top + (on ? 4 : 3), SPARK)
  }
  if (mood === 'think') {
    const n = Math.floor(tick / 6) % 4
    for (let i = 0; i < n; i++) set(11 + i * 2, forest ? 1 : 1 + top, SHADE)
  }

  // The spirit's ears leave no room for a hat; he still gets the props.
  if (season === 'halloween' && !forest) {
    // A witch hat in the headroom, bent at the tip, with a green band.
    for (let x = ox + 1; x <= ox + 8; x++) set(x, oy - 1, HAT)
    for (let x = ox + 3; x <= ox + 6; x++) set(x, oy - 2, BAND)
    for (let x = ox + 5; x <= ox + 7; x++) set(x, oy - 3, HAT)
  }
  if (season === 'halloween') {
    // A jack-o'-lantern at his feet, its face flickering.
    for (let x = 11; x <= 15; x++) {
      set(x, 15, PUMPKIN)
      set(x, 16, PUMPKIN)
    }
    set(13, 14, BAND)
    const glow = tick % 9 < 7 ? SPARK : EMBER
    set(12, 15, glow)
    set(14, 15, glow)
    set(13, 16, glow)
  }

  if (season === 'christmas' && !forest) {
    // A Santa hat: white brim, red cone, its pom-pom flopped to the side.
    for (let x = ox + 1; x <= ox + 8; x++) set(x, oy - 1, TRIM)
    for (let x = ox + 2; x <= ox + 7; x++) set(x, oy - 2, SANTA)
    for (let x = ox + 4; x <= ox + 7; x++) set(x, oy - 3, SANTA)
    set(ox + 8, oy - 3, TRIM)
  }
  if (season === 'christmas') {
    // A present at his feet, tied with a gold ribbon and bow.
    for (let x = 12; x <= 15; x++) {
      set(x, 15, GIFT)
      set(x, 16, GIFT)
    }
    set(13, 15, SPARK)
    set(13, 16, SPARK)
    set(12, 14, SPARK)
    set(14, 14, SPARK)
  }

  return px
}

// In the forest every agent type is a creature of its own, told apart by
// shape: 4 rows over a pair of feet, '#' its colour, '-' that colour shaded,
// other letters from `colors`; `eye` is the row its eyes sit on.
export type Critter = 'spirit' | 'sprout' | 'owl' | 'acorn' | 'mushroom'
export const CRITTERS: Record<Critter, { rows: string[]; eye: number; colors: Record<string, number>; tint: number }> = {
  // The big spirit's little cousin: ears and a belly.
  spirit: { rows: ['.#.##.#.', '.######.', '.##==##.', '.------.'], eye: 1, colors: { '#': 0x7f9fc0, '=': BELLY }, tint: 0x7f9fc0 },
  // A moss blob with a sprout on top, out looking around.
  sprout: { rows: ['...aa...', '.######.', '.######.', '.------.'], eye: 2, colors: { '#': 0x9cc27a, a: 0x4f8f3a }, tint: 0x8fbf6a },
  // A wise owl with ear tufts, a beak and a pale front, for planning.
  owl: { rows: ['#......#', '.######.', '.##bb##.', '.#====#.'], eye: 1, colors: { '#': 0x9a7650, '=': 0xd9c29a, b: 0xe8a33d }, tint: 0xb08a5e },
  // A forked agent is a seed of its parent: an acorn in its cap.
  acorn: { rows: ['cccccccc', '.######.', '.######.', '..----..'], eye: 1, colors: { '#': 0xc8954f, c: 0x7a5230 }, tint: 0xc8954f },
  // Anyone else: a spotted mushroom, its face on the stem.
  mushroom: { rows: ['.rrwrrr.', 'rwrrrrwr', '.######.', '..----..'], eye: 2, colors: { '#': 0xefe3c8, r: 0xd04a3a, w: TRIM }, tint: 0xd65a4a },
}
const CRITTER_FOR: Record<string, Critter> = { Explore: 'sprout', Plan: 'owl', fork: 'acorn', 'general-purpose': 'spirit' }
export const critterFor = (type: string) => CRITTER_FOR[type] ?? 'mushroom'

function critterFrame(mood: Mood, tick: number, critter: Critter): number[] {
  const { rows, eye, colors } = CRITTERS[critter]
  const main = colors['#']!
  const SHADE = darken(main)
  const px: number[] = new Array(TW * TH).fill(NONE)
  const set = (x: number, y: number, c: number) => {
    if (x >= 0 && x < TW && y >= 0 && y < TH) px[y * TW + x] = c
  }
  let dy = 0
  if (mood === 'idle') dy = Math.sin(tick / 8) > 0.6 ? -1 : 0
  if (mood === 'run') dy = tick % 4 < 2 ? -1 : 0
  if (mood === 'happy') dy = Math.abs(Math.sin(tick / 3)) > 0.5 ? -1 : 0
  const oy = 1 + dy

  rows.forEach((row, y) => {
    for (let x = 0; x < row.length; x++) {
      const ch = row[x]!
      if (ch !== '.') set(x, oy + y, ch === '-' ? SHADE : (colors[ch] ?? main))
    }
  })
  // Arms right beside the body: level with the eyes when waving, below them otherwise.
  const armUp = mood === 'happy' || (mood === 'run' && tick % 4 < 2)
  const armRow = eye + (armUp ? 0 : 1)
  const row = rows[armRow]!
  set(row.search(/[^.]/) - 1, oy + armRow, main)
  set(row.length - [...row].reverse().join('').search(/[^.]/), oy + armRow, main)
  const step = mood === 'run' && tick % 4 < 2
  set(step ? 1 : 2, oy + 4, SHADE)
  set(step ? 6 : 5, oy + 4, SHADE)

  const e = oy + eye
  const blink = mood === 'idle' && tick % 48 >= 46
  if (mood === 'happy') {
    // Eyes and a smile.
    set(2, e, EYE)
    set(3, e + 1, EYE)
    set(4, e + 1, EYE)
    set(5, e, EYE)
  } else if (mood === 'sad') {
    set(2, e, EYE)
    set(5, e, EYE)
    if (tick % 16 < 10) set(2, e + 1, TEAR)
  } else if (blink) {
    set(2, e, SHADE)
    set(5, e, SHADE)
  } else {
    const look = mood === 'think' ? ([0, 1, 0, -1][Math.floor(tick / 10) % 4] ?? 0) : 0
    set(2 + look, e, EYE)
    set(5 + look, e, EYE)
  }
  // A sparkle or a thought dot in the corner, unless an ear or a cap is there.
  const free = px[7] === NONE
  if (free && mood === 'happy' && tick % 6 < 3) set(7, 0, SPARK)
  if (free && mood === 'think' && Math.floor(tick / 6) % 2) set(7, 0, SHADE)
  return px
}

// The mini, 8×6 pixels: a body with two eyes, arms and legs, enough room for
// a bob, a blink, happy ^^ eyes and a tear. In the forest it's a critter.
export function tinyFrame(mood: Mood, tick: number, body = BODY, season?: Season, skin: Skin = 'classic', critter: Critter = 'spirit'): number[] {
  if (skin === 'forest') return critterFrame(mood, tick, critter)
  const SHADE = darken(body)
  const px: number[] = new Array(TW * TH).fill(NONE)
  const set = (x: number, y: number, c: number) => {
    if (x >= 0 && x < TW && y >= 0 && y < TH) px[y * TW + x] = c
  }
  let dy = 0
  if (mood === 'idle') dy = Math.sin(tick / 8) > 0.6 ? -1 : 0
  if (mood === 'run') dy = tick % 4 < 2 ? -1 : 0
  if (mood === 'happy') dy = Math.abs(Math.sin(tick / 3)) > 0.5 ? -1 : 0
  const oy = 1 + dy

  for (let x = 1; x <= 6; x++) {
    set(x, oy, body)
    set(x, oy + 1, body)
    set(x, oy + 2, body)
    set(x, oy + 3, SHADE)
  }
  set(1, oy, NONE)
  set(6, oy, NONE)
  const armUp = mood === 'happy' || (mood === 'run' && tick % 4 < 2)
  set(0, oy + (armUp ? 1 : 2), body)
  set(7, oy + (armUp ? 1 : 2), body)
  const step = mood === 'run' && tick % 4 < 2
  set(step ? 1 : 2, oy + 4, SHADE)
  set(step ? 6 : 5, oy + 4, SHADE)

  const blink = mood === 'idle' && tick % 48 >= 46
  if (mood === 'happy') {
    set(2, oy + 2, EYE)
    set(3, oy + 1, EYE)
    set(4, oy + 1, EYE)
    set(5, oy + 2, EYE)
  } else if (mood === 'sad') {
    set(2, oy + 2, EYE)
    set(5, oy + 2, EYE)
    if (tick % 16 < 10) set(2, oy + 3, TEAR)
  } else if (!blink) {
    const look = mood === 'think' ? ([0, 1, 0, -1][Math.floor(tick / 10) % 4] ?? 0) : 0
    set(2 + look, oy + 1, EYE)
    set(5 + look, oy + 1, EYE)
  } else {
    set(2, oy + 2, EYE)
    set(5, oy + 2, EYE)
  }
  if (mood === 'happy' && tick % 6 < 3) set(7, 0, SPARK)
  if (mood === 'think' && Math.floor(tick / 6) % 2) set(7, 0, SHADE)
  if (season === 'halloween') {
    // No headroom here: the hat's brim takes the top of the head.
    for (let x = 1; x <= 6; x++) set(x, oy, HAT)
    set(3, oy - 1, HAT)
    set(4, oy - 1, HAT)
  }
  if (season === 'christmas') {
    // A red cap over the head, its pom-pom on the corner.
    for (let x = 2; x <= 5; x++) set(x, oy, SANTA)
    set(6, oy, TRIM)
  }
  return px
}

// Cells for a sprite drawn `scale`× as big: each pixel is `scale` columns wide
// and `scale` half-rows tall, so it stays square.
export const size = (scale: number, season?: Season, skin?: Skin) => ({ columns: W * scale, rows: (heightOf(season, skin) * scale) / 2 })

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
  activity?: string // what it's doing right now, e.g. "▸ Read page.tsx"
  // minis only
  name?: string // its agent's name, else its type
  label?: string // its task
  body?: number
  type?: string // its agent's type, which picks its critter in the forest
  phase?: number // offsets the animation so minis don't bob in sync
  startedAt?: number
  endedAt?: number
  tools?: number
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

export const elapsed = (ms: number) => {
  const s = Math.max(0, Math.floor(ms / 1000))
  return s < 3600 ? `${Math.floor(s / 60)}:${String(s % 60).padStart(2, '0')}` : `${Math.floor(s / 3600)}h${String(Math.floor(s / 60) % 60).padStart(2, '0')}`
}

// Running agents first, newest at the bottom; finished ones after, latest first.
export const listOrder = <T extends { leaveAt?: number; startedAt?: number }>(minis: [string, T][]) =>
  [...minis].sort(([, a], [, b]) =>
    !a.leaveAt !== !b.leaveAt ? (a.leaveAt ? 1 : -1) : a.leaveAt ? b.leaveAt! - a.leaveAt : (a.startedAt ?? 0) - (b.startedAt ?? 0),
  )

export const register: Register = on => {
  const main = fresh()
  const minis = new Map<string, Buddy>()
  let scale = 2
  let isShown = false
  let tick = 0
  let wallNow = 0 // the clock as of the last frame, for drawing times
  let season: Season | undefined
  let preview: Season | 'none' | undefined // `/buddy halloween` overrides the calendar
  const seasonAt = (now: number) => (preview === 'none' ? undefined : (preview ?? seasonFor(now)))
  let skin: Skin = 'classic' // as last drawn
  let chosenSkin: Skin = 'classic' // as picked with `/buddy forest`, kept in the store

  // The buddy a loop's events belong to: the main one, or its agent's mini.
  const buddyFor = (agentId: string | undefined, create: boolean): Buddy | undefined => {
    if (!agentId) return main
    let mini = minis.get(agentId)
    if (!mini && create) {
      mini = { ...fresh(), mood: 'think', phase: minis.size * 7, name: 'agent', label: '', body: BODY, startedAt: wallNow, tools: 0 }
      minis.set(agentId, mini)
    }
    return mini
  }

  on('session.start', async ($, e, next) => {
    await $.command.register({ name: 'buddy', description: 'Show or hide your pixel buddy', argumentHint: '[forest|classic|halloween|christmas|normal|auto]' })
    const stored = await $.store.get('skin').catch(() => undefined)
    if ((SKINS as unknown[]).includes(stored)) chosenSkin = stored as Skin
    isShown = (await $.ui.panes()).some(pane => pane.id === PANE)
    if (!isShown) void $.ui.open({ id: PANE, title: 'Buddy', rows: 18, columns: PANE_COLUMNS })

    $.clock.every(FRAME_MS, async () => {
      if (!isShown) return
      tick++
      const now = (wallNow = await $.clock.now())

      // A season starting or ending, or a new skin, changes the sprite's size: lay out again.
      if (seasonAt(now) !== season || chosenSkin !== skin) return $.ui.invalidate('ui.render')

      // Finished minis leave once they've celebrated.
      let left = false
      for (const [id, mini] of minis) {
        if (mini.leaveAt && now >= mini.leaveAt) {
          minis.delete(id)
          left = true
        }
      }
      if (left) return $.ui.invalidate('ui.render')

      const paint = async (b: Buddy, key: string, cells: string) => {
        if (cells === b.last) return
        b.last = cells
        await $.ui.blit({ requestId: PANE, key, cells })
      }
      await paint(main, KEY, encode(frame(moodOf(main, now), tick, BODY, season, skin), scale, W, heightOf(season, skin)))
      if (scale >= 2) {
        const mood = moodOf(main, now)
        const caption = encode(captionPixels(captionFor(mood, season, skin), tick, mood === 'think'), 1, CAPTION_W, CAPTION_H)
        if (caption !== main.lastCaption) {
          main.lastCaption = caption
          await $.ui.blit({ requestId: PANE, key: 'caption', cells: caption })
        }
      }
      for (const [id, mini] of minis) {
        await paint(mini, miniKey(id), encode(tinyFrame(moodOf(mini, now), tick + (mini.phase ?? 0), mini.body, season, skin, critterFor(mini.type ?? '')), 1, TW, TH))
      }
    })

    // Running agents' elapsed times tick.
    $.clock.every(CLOCK_MS, () => {
      if (isShown && [...minis.values()].some(m => !m.leaveAt)) $.ui.invalidate('ui.render')
    })

    // Safety net: drop minis whose agent ended without a turn.complete (killed).
    $.clock.every(SWEEP_MS, async () => {
      if (minis.size === 0) return
      const agents = await $.agent.list()
      const now = await $.clock.now()
      for (const [id, mini] of minis) {
        const agent = agents.find(a => a.id === id)
        const isOver = !agent || ['completed', 'failed', 'killed'].includes(agent.status)
        if (isOver && !mini.leaveAt) {
          mini.leaveAt = now + MINI_LINGER_MS
          mini.endedAt = now
          mini.activity = agent?.status === 'failed' ? '✗ failed' : agent?.status === 'completed' ? '✓ done' : '■ stopped'
          $.ui.invalidate('ui.render')
        }
      }
    })

    return next(e)
  })

  on('command.run', { command: 'buddy' }, async ($, e) => {
    // `/buddy christmas` tries a costume on now; `normal` takes it off;
    // `auto` goes back to the calendar. `/buddy forest` and `classic` pick a
    // skin, remembered across sessions.
    const arg = e.args.trim().toLowerCase()
    if ((SKINS as string[]).includes(arg)) {
      chosenSkin = arg as Skin
      await $.store.set('skin', chosenSkin)
      $.ui.invalidate('ui.render')
      if (!(await $.ui.panes()).some(pane => pane.id === PANE)) {
        await $.ui.open({ id: PANE, title: 'Buddy', rows: 18, columns: PANE_COLUMNS })
      }
      return { text: chosenSkin === 'forest' ? 'Buddy turns into a forest spirit!' : 'Buddy is himself again.' }
    }
    if (arg) {
      if (arg === 'auto') preview = undefined
      else if (arg === 'normal') preview = 'none'
      else if ((SEASONS as string[]).includes(arg)) preview = arg as Season
      else return { text: `Buddy doesn't know "${arg}". Try ${[...SKINS, ...SEASONS, 'normal', 'auto'].join(', ')}.` }
      $.ui.invalidate('ui.render')
      if (!(await $.ui.panes()).some(pane => pane.id === PANE)) {
        await $.ui.open({ id: PANE, title: 'Buddy', rows: 18, columns: PANE_COLUMNS })
      }
      return {
        text: preview === undefined ? 'Buddy follows the calendar again.' : preview === 'none' ? 'Buddy dresses down.' : `Buddy dresses up for ${preview}!`,
      }
    }
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
      mini.name = e.name || e.subagentType
      mini.label = e.description
      mini.body = tintFor(e.subagentType)
      mini.type = e.subagentType
      mini.startedAt = await $.clock.now()
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
        if (agent && b.name === 'agent') {
          b.name = agent.name || agent.type
          b.label = agent.description
          b.body = tintFor(agent.type)
          b.type = agent.type
          $.ui.invalidate('ui.render')
        }
      })
    }
    b.mood = 'think'
    b.leaveAt = undefined
    b.endedAt = undefined
    if (b.toolsRunning === 0) b.activity = '▸ thinking…'
    $.ui.invalidate('ui.render')
    return yield* next(e)
  })

  on('tool.call', async ($, e, next) => {
    const b = buddyFor(e.agentId, false)
    if (!b) return next(e)
    b.toolsRunning++
    if (b !== main) b.tools = (b.tools ?? 0) + 1
    b.activity = `▸ ${describeTool(e.tool, e)}`
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
      if (b === main) b.activity = undefined
      else {
        b.leaveAt = now + MINI_LINGER_MS
        b.endedAt = now
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
    season = seasonAt(now)
    skin = chosenSkin
    const spriteH = heightOf(season, skin) // not `h`: that's the JSX factory
    const caption = captionFor(mood, season, skin)
    if (e.surface !== 'terminal') {
      const { Text } = $.ui.resolve(e)
      return <Text dimColor>Buddy lives in the terminal ({caption})</Text>
    }
    const { Box, Text, Raster } = $.ui.resolve(e)
    isShown = true
    const { bodyColumns, scroll } = e.props

    // The agent list sits below the big buddy, as many as fit; the big one
    // shrinks to 1× while there are agents, to leave them room.
    const ordered = listOrder([...minis])
    const headerRows = minis.size > 0 ? 1 : 0
    const mainActivity = main.activity ? 1 : 0
    const fit = Math.max(1, Math.floor((scroll.bodyRows - spriteH / 2 - 1 - mainActivity - headerRows - 1) / MINI_ROWS))
    const shown = ordered.slice(0, Math.min(MAX_MINIS, fit))
    const extra = minis.size - shown.length
    const cap = minis.size > 0 ? 1 : MAX_SCALE
    const roomRows = scroll.bodyRows - CAPTION_H / 2 - mainActivity
    scale = Math.max(1, Math.min(cap, Math.floor(bodyColumns / W), Math.floor((roomRows * 2) / spriteH)))
    main.last = encode(frame(mood, tick, BODY, season, skin), scale, W, spriteH)
    const { columns, rows } = size(scale, season, skin)
    const running = ordered.filter(([, m]) => !m.leaveAt).length
    const textColumns = Math.max(8, bodyColumns - TW - 3)

    return (
      <Box flexDirection="column">
        <Box flexDirection="column" alignItems="center">
          <Raster key={KEY} columns={columns} rows={rows} cells={main.last} />
          {scale >= 2 ? (
            <Raster key="caption" columns={CAPTION_W} rows={CAPTION_H / 2} cells={(main.lastCaption = encode(captionPixels(caption, tick, mood === 'think'), 1, CAPTION_W, CAPTION_H))} />
          ) : (
            <Text color={hex(INK)} bold>{caption.toLowerCase()}</Text>
          )}
          {main.activity && <Text dimColor wrap="truncate">{main.activity}</Text>}
        </Box>
        {minis.size > 0 && (
          <Box marginTop={1}>
            <Text dimColor wrap="truncate">
              {`── agents · ${running ? `${running} running` : 'all done'} `.padEnd(bodyColumns - 1, '─')}
            </Text>
          </Box>
        )}
        {shown.map(([id, mini]) => {
          const isDone = !!mini.leaveAt
          mini.last = encode(tinyFrame(moodOf(mini, now), tick + (mini.phase ?? 0), mini.body, season, skin, critterFor(mini.type ?? '')), 1, TW, TH)
          const time = elapsed((mini.endedAt ?? now) - (mini.startedAt ?? now))
          const meta = `${mini.tools ? `${mini.tools} tool${mini.tools === 1 ? '' : 's'} · ` : ''}${time}`
          const activity = mini.activity ?? '▸ starting…'
          const statusColor = activity.startsWith('✓') ? 'success' : activity.startsWith('✗') ? 'error' : undefined
          return (
            <Box flexDirection="row" gap={1} marginTop={1}>
              <Box paddingLeft={1}>
                <Raster key={miniKey(id)} columns={TW} rows={TH / 2} cells={mini.last} />
              </Box>
              <Box flexDirection="column" width={textColumns}>
                <Box flexDirection="row" justifyContent="space-between">
                  <Text bold color={isDone ? undefined : hex(skin === 'forest' ? CRITTERS[critterFor(mini.type ?? '')].tint : (mini.body ?? BODY))} dimColor={isDone} wrap="truncate">
                    {mini.name ?? 'agent'}
                  </Text>
                  <Text dimColor>{meta}</Text>
                </Box>
                <Text dimColor={isDone} wrap="truncate">{mini.label || '…'}</Text>
                <Text dimColor={!statusColor} color={statusColor} wrap="truncate">{activity}</Text>
              </Box>
            </Box>
          )
        })}
        {extra > 0 && <Text dimColor>{`  +${extra} more`}</Text>}
      </Box>
    )
  })
}
