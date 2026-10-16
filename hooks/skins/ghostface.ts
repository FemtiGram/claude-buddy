import type { SkinLook } from './types'

const MASK = 0xedeaf0
const HOOD = 0x4a4a5e
const EDGE = 0x6e6e86
const DARK = 0x3c3456

// Ghostface from Scream: a long white mask with drooping eye holes and a
// screaming mouth, inside a lifted slate hood and robe with a jagged hem.
export const look: SkinLook = {
  said: 'Buddy puts on the Ghostface mask.',
  rows: [
    '...hhhh...',
    '..hHHHHh..',
    '.hHMMMMHh.',
    '.hHMMMMHh.',
    '.hHMMMMHh.',
    '.hHDMMDHh.',
    '.hHMDDMHh.',
    '.hHMDDMHh.',
    '.hHMMMMHh.',
    'hHHHHHHHHh',
    '.H.HH.HH.H',
  ],
  colors: { M: MASK, H: HOOD, h: EDGE, D: DARK },
  eyes: [[3, 4], [6, 4]],
  eyeColor: DARK,
  smile: [[4, 8], [5, 8]],
  tear: [3, 6],
  arms: {
    color: 0x5a5a68,
    down: [[0, 7], [0, 8], [9, 7], [9, 8]],
    up: [[0, 4], [0, 5], [9, 4], [9, 5]],
  },
  feet: { color: 0x5a5a68, at: [3, 6] },
  captions: { idle: 'HELLO', happy: 'NICE' },
  critters: {
    // A ringing phone.
    Explore: { rows: ['r..##..r', '.######.', '.######.', '.##..##.'], eye: 1, colors: { '#': 0xc0405a, r: 0xe0a0b0 }, tint: 0xc0405a },
    // A mask pinned to a clipboard.
    Plan: { rows: ['..cccc..', '.#MMMM#.', '.#MMMM#.', '.######.'], eye: 1, colors: { '#': 0xb08d5a, c: 0x8a8a98, M: MASK }, tint: 0xb08d5a },
    // A smaller second mask, the copy.
    fork: { rows: ['..####..', '.######.', '.##DD##.', '..####..'], eye: 1, eyeColor: DARK, colors: { '#': MASK, D: DARK }, tint: 0xb8b0c8 },
    // A little hooded figure.
    'general-purpose': { rows: ['..####..', '.#MMMM#.', '.#MMMM#.', '########'], eye: 1, eyeColor: DARK, colors: { '#': HOOD, M: MASK }, tint: EDGE },
    // A rotary phone.
    other: { rows: ['..####..', '.######.', '########', '.#.##.#.'], eye: 1, feet: false, arms: false, colors: { '#': 0x3c8a9a }, tint: 0x3c8a9a },
  },
}
