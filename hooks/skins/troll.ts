import type { SkinLook } from './types'

const MOSS = 0x5e7b4e
const STONE = 0x8a8f8c
const NOSE = 0xc99a6b
const TUSK = 0xf4e8c8
const DARK = 0x2a2a22

// A friendly Norwegian troll, Kittelsen style: mossy and hunched, a big
// bulbous nose, two tusks, a little tree growing on his shaggy head.
export const look: SkinLook = {
  said: 'Buddy turns into a troll.',
  group: 'Cartoons & folklore',
  rows: [
    '....T.....',
    '...hThh...',
    '.ggsgggsg.',
    '.gkkggkkg.',
    '.ggnnnngg.',
    '.gsnnnnsg.',
    '.ggtggtgg.',
    '.gggsgggg.',
    '..gggggg.g',
  ],
  colors: { g: MOSS, s: STONE, n: NOSE, t: TUSK, k: DARK, h: 0x7a6a4a, T: 0x4f9a52 },
  eyes: [[2, 4], [7, 4]],
  eyeColor: 0xf2e8c0,
  smile: [[4, 6], [5, 6]],
  tear: [2, 4],
  arms: { color: MOSS, down: [[0, 6], [9, 6]], up: [[0, 4], [9, 4]] },
  feet: { color: STONE, at: [3, 6] },
  captions: { happy: 'TROLL!', idle: 'GRR' },
  critters: {
    // A billy goat with horns.
    Explore: { rows: ['h......h', '.h####h.', '..####..', '..#..#..'], eye: 2, colors: { '#': 0xd8d2c4, h: 0xb8a070 }, tint: 0xd8d2c4 },
    // A mountain with a snowy top.
    Plan: { rows: ['...ww...', '..####..', '.######.', '########'], eye: 2, feet: false, arms: false, colors: { '#': 0x7d8794, w: 0xe6ecf2 }, tint: 0x7d8794 },
    // A baby troll with a sprout.
    fork: { rows: ['...T....', '.######.', '.##nn##.', '..####..'], eye: 1, colors: { '#': MOSS, n: NOSE, T: 0x4f9a52 }, tint: MOSS },
    // A stone bridge.
    'general-purpose': { rows: ['..####..', '.######.', '########', '#.#..#.#'], eye: 1, feet: false, arms: false, colors: { '#': 0x9a8f80 }, tint: 0x9a8f80 },
    // A rock with eyes.
    other: { rows: ['........', '..####..', '.######.', '########'], eye: 2, feet: false, arms: false, colors: { '#': STONE }, eyeColor: 0xf2e8c0, tint: STONE },
  },
}
