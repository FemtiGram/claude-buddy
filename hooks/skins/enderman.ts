import type { SkinLook } from './types'

const BLACK = 0x161418
const RIM = 0x5a5470
const MAGENTA = 0xcc33ff
const SPARK = 0xe0a0ff

// The Minecraft Enderman: a black block head with glowing magenta eye-bars,
// a grey-violet rim so he shows on a dark terminal, purple particles drifting
// over him, long thin arms reaching down to the stolen grass block he holds.
export const look: SkinLook = {
  said: 'Buddy blinks out of the End: vwoop! An Enderman.',
  group: 'Games',
  rows: [
    '.v.....v..',
    '....v.....',
    '.rrrrrrrr.',
    '.rkkkkkkr.',
    '.rPPkkPPr.',
    '.rkkkkkkr.',
    'rrrkkrrgGg',
    'r.rkkr.dDd',
    'r.rkkrrddD',
    'r.r..r....',
    '..r..r....',
  ],
  colors: { r: RIM, k: BLACK, P: MAGENTA, v: SPARK, g: 0x5ab04a, G: 0x8ad86a, d: 0x8a5a3a, D: 0x5e3a22 },
  eyes: [[3, 4], [6, 4]],
  eyeColor: 0xf6d0ff,
  smile: [[4, 5], [5, 5]],
  smileColor: MAGENTA,
  tear: [3, 5],
  feet: { color: RIM, at: [2, 5] },
  captions: { idle: 'VWOOP', happy: 'TELEPORT' },
  critters: {
    // An Endermite: a low violet bug trailing particles.
    Explore: { rows: ['.v....v.', '.######.', '##m##m##', '.#.#.#.#'], eye: 1, eyeColor: MAGENTA, feet: false, arms: false, colors: { '#': 0x6a5080, m: 0x4a3a5a, v: SPARK }, tint: 0xa070d0 },
    // A Shulker: lavender shell lid lifted, its yellow head peeking out.
    Plan: { rows: ['.######.', '.------.', '.#yyyy#.', '.######.'], eye: 2, eyes: [3, 4], feet: false, arms: false, colors: { '#': 0xa070a8, y: 0xe8e0a0 }, tint: 0xa070a8 },
    // A mini Enderman with his own little grass block.
    fork: { rows: ['.######.', '.######.', '..#gg#..', '..#dd#..'], eye: 1, eyeColor: MAGENTA, colors: { '#': 0x3a3448, g: 0x5ab04a, d: 0x8a5a3a }, tint: 0xcc33ff },
    // The Ender Dragon: black with grey wings and purple eyes.
    'general-purpose': { rows: ['ww....ww', 'w######w', '..#--#..', '..#..#..'], eye: 1, eyeColor: 0xd050ff, feet: false, arms: false, colors: { '#': 0x2e2a36, w: 0x7a6a8a }, tint: 0x8a5ad0 },
    // An End Crystal: pink glass in a grey cage, a hot core.
    other: { rows: ['..pppp..', '.p####p.', '.p#cc#p.', '..bbbb..'], eye: 1, feet: false, arms: false, colors: { '#': 0xb07ad8, p: 0x9a9aaa, c: 0xf060c0, b: 0x4a4a4a }, tint: 0xf060c0 },
  },
}
