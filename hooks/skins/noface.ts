import type { SkinLook } from './types'

const ROBE = 0x4c4668
const RIM = 0x8c86b4
const DEEP = 0x2a2438
const MASK = 0xf1ede0
const MASK_SH = 0xc4bfae
const PURPLE = 0x7a4fa0

// No-Face: a tall dark purple-grey robe, a white mask with slit eyes, a small
// mouth and purple stripes, thin sleeve arms.
export const look: SkinLook = {
  said: 'Buddy turns into No-Face. Ah... ah...',
  group: 'Ghibli',
  rows: [
    '..........',
    '..........',
    '...mmmm...',
    '..mmmmmn..',
    '..PmmmmP..',
    '...mDDn...',
    '..RRRRRR..',
    '.RrrrrrrR.',
    '.RrrrrrrR.',
    '.RrrrrrrR.',
    '..RrrrrR..',
  ],
  colors: { m: MASK, n: MASK_SH, P: PURPLE, D: DEEP, r: ROBE, R: RIM },
  eyes: [[3, 3], [6, 3]],
  eyeColor: 0x2a2438,
  smile: [[4, 5], [5, 5]],
  tear: [3, 4],
  arms: {
    color: RIM,
    down: [[0, 7], [0, 8], [9, 7], [9, 8]],
    up: [[0, 5], [0, 6], [9, 5], [9, 6]],
  },
  captions: { idle: 'UH UH', happy: 'THANKS' },
  critters: {
    // Haku: a white-green dragon with a teal mane.
    Explore: { rows: ['.tt.....', 'tdd###..', '.t#####.', '..#####.'], eye: 1, eyes: [3, 5], arms: false, feet: false, colors: { '#': 0xd6e8dc, t: 0x2fa89a, d: 0x4fc4b0 }, tint: 0x2fa89a },
    // Kamaji: a many-armed spider-man with round goggles.
    Plan: { rows: ['..gggg..', 'a.gddg.a', '.a####a.', 'a.a..a.a'], eye: 1, eyes: [2, 5], eyeColor: 0x3a3048, colors: { '#': 0x8a6a52, g: 0xd8d4c0, d: 0x5a4a3a, a: 0xb08a68 }, tint: 0xb08a68 },
    // A soot sprite holding a pink star candy.
    fork: { rows: ['.f.##.f.', '..####..', '.f####f.', '...pp...'], eye: 1, eyeColor: 0xf1ede0, colors: { '#': 0x4a4658, f: 0x6a6680, p: 0xe89ab8 }, tint: 0xe89ab8 },
    // A pale, big radish spirit.
    'general-purpose': { rows: ['..g..g..', '.######.', '.######.', '..####..'], eye: 1, arms: false, feet: false, colors: { '#': 0xeadfe6, g: 0x6fa860 }, tint: 0xeadfe6 },
    // Boh: a fat grey mouse blob.
    other: { rows: ['.##..##.', '.######.', '########', '.######.'], eye: 1, arms: false, feet: false, colors: { '#': 0x8a8a98 }, tint: 0x8a8a98 },
  },
}
