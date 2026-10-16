import type { SkinLook } from './types'

const ORANGE = 0xe8822a
const DARK = 0xb8601c
const BLADE = 0xb8bec8
const TEETH = 0x8a929e
const TONGUE = 0xf08098
const CORD = 0xd8c8a0

// Pochita: round orange devil dog, chainsaw out of his forehead, a tail with
// a pull cord, a happy open mouth.
export const look: SkinLook = {
  said: 'Buddy turns into Pochita. Woof!',
  group: 'Anime',
  rows: [
    '....bk....',
    '....bk....',
    '...oooo...',
    '.dooooood.',
    '.oooooooo.',
    '.ooooooooc',
    '.oooppoooo',
    '.oooooooo.',
    '..oooooo..',
  ],
  colors: { o: ORANGE, d: DARK, b: BLADE, k: TEETH, p: TONGUE, c: CORD },
  eyes: [[3, 4], [6, 4]],
  eyeColor: 0x3a2018,
  smile: [[4, 5], [5, 5]],
  tear: [3, 5],
  arms: { color: DARK, down: [[0, 7], [9, 7]], up: [[0, 4], [9, 4]] },
  feet: { color: DARK, at: [2, 7] },
  captions: { happy: 'BRRRR!', idle: 'WOOO' },
  critters: {
    // Denji's chainsaw head.
    Explore: { rows: ['.k.kk.k.', '.######.', '.######.', '..-##-..'], eye: 1, colors: { '#': 0xd8602a, k: 0xb8bec8 }, tint: 0xd8602a },
    // Makima's eyes: red rings, gold centres.
    Plan: { rows: ['.##..##.', '#oo##oo#', '.##..##.', '..####..'], eye: 1, feet: false, arms: false, colors: { '#': 0xc83a4a, o: 0xe8c050 }, tint: 0xc83a4a },
    // A mini Pochita.
    fork: { rows: ['...k....', '..####..', '.######.', '.#-##-#.'], eye: 2, colors: { '#': 0xe8822a, k: 0xb8bec8 }, tint: 0xe8822a },
    // Power: blond with red horns.
    'general-purpose': { rows: ['r..##..r', 'r.####.r', '.######.', '..-##-..'], eye: 2, colors: { '#': 0xf0d060, r: 0xe04848 }, tint: 0xf0d060 },
    // A slice of toast with jam.
    other: { rows: ['.######.', '########', '#rrrrrr#', '.######.'], eye: 2, colors: { '#': 0xd8a860, r: 0xa8304a }, tint: 0xd8a860 },
  },
}
