import type { SkinLook } from './types'

const FUR = 0x34323f
const SHADE = 0x24232e
const RIM = 0x9c9ab8
const WHITE = 0xf2f2f8
const BOW = 0xd62839

// Jiji, the black cat of Kiki's Delivery Service: dark fur with a pale rim on
// ears, head and back, big white eyes with dark pupils, a red bow, and a tail
// curling into a ring beside him.
export const look: SkinLook = {
  said: 'Buddy turns into Jiji.',
  group: 'Ghibli',
  rows: [
    '..r....r..',
    '.rbr..rbr.',
    '.rbbrrbbr.',
    '.rwwbbwwb.',
    '.bwwbbwwb.',
    '..bbppbbrr',
    '.bbbbbbb.r',
    '.bbbbbbsrr',
    '..bbbbss..',
  ],
  colors: { b: FUR, s: SHADE, r: RIM, w: WHITE, p: BOW },
  eyes: [[3, 3], [6, 3]],
  smile: [[4, 4], [5, 4]],
  tear: [1, 4],
  arms: { color: RIM, down: [[0, 7], [8, 6]], up: [[0, 5], [9, 4]] },
  feet: { color: RIM, at: [2, 6] },
  captions: { happy: 'MEOW!', idle: 'MEOW' },
  critters: {
    // A crow with wings spread.
    Explore: { rows: ['#..##..#', '########', '.##yy##.', '..#..#..'], eye: 1, eyeColor: 0xe8e8f0, colors: { '#': 0x5a5a78, y: 0xe8b030 }, tint: 0x8a8aa8 },
    // A delivery map with a dotted route.
    Plan: { rows: ['########', '#.#..#.#', '#.rrr..#', '########'], eye: 1, feet: false, colors: { '#': 0xd9c48a, r: 0xd62839 }, tint: 0xd9c48a },
    // A kitten.
    fork: { rows: ['#......#', '########', '########', '.#-pp-#.'], eye: 2, colors: { '#': 0x7a7890, p: 0xe58aa0 }, tint: 0x7a7890 },
    // A loaf of bread.
    'general-purpose': { rows: ['..####..', '.#-##-#.', '########', '.######.'], eye: 2, colors: { '#': 0xe0b068 }, tint: 0xe0b068 },
    // Lily, the white cat.
    other: { rows: ['.#....#.', '.######.', '.######.', '.#####.#'], eye: 2, eyeColor: 0x3a8ad8, colors: { '#': 0xe6e0ee }, tint: 0xe6e0ee },
  },
}
