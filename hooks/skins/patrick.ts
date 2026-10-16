import type { SkinLook } from './types'

const PINK = 0xf49ab0
const LIGHT = 0xfcc8d4
const DEEP = 0xc8607c
const WHITE = 0xf2f2f2
const GREEN = 0x7ac04a
const PURPLE = 0x8a4ab8

// Patrick Star of Bikini Bottom: a pink starfish with a pointed head, two
// eyes close together under heavy brows, and his green shorts dotted with
// purple flowers.
export const look: SkinLook = {
  said: "Buddy turns into Patrick: is mayonnaise an instrument?",
  group: 'TV cartoons',
  rows: [
    '....lp....',
    '...lppd...',
    '...kppk...',
    '...wppw...',
    'lppwppwppd',
    '.lpmppmdd.',
    '..pmmmpd..',
    '..gvggvg..',
    '..ggvggg..',
    '..dd..dd..',
  ],
  colors: { l: LIGHT, p: PINK, d: DEEP, k: 0x6a2a3a, m: 0xe07890, w: WHITE, g: GREEN, v: PURPLE },
  eyes: [[3, 4], [6, 4]],
  smile: [[3, 5], [4, 6], [5, 6], [6, 5]],
  tear: [3, 4],
  arms: { color: PINK, down: [[0, 5], [9, 5]], up: [[0, 3], [9, 3]] },
  feet: { color: DEEP, at: [2, 7] },
  captions: { happy: 'FIRMLY!', idle: 'DUH' },
  critters: {
    // A Jellyfish Fields jellyfish, pink bell and trailing tentacles.
    Explore: { rows: ['..####..', '.#w####.', '.######.', '.-.-.-.-'], eye: 2, feet: false, arms: false, colors: { '#': 0xe070c8, w: 0xf8d0f0 }, tint: 0xe070c8 },
    // Mrs. Puff, the pufferfish teacher, under her blue sailor hat.
    Plan: { rows: ['..bbbb..', '-######-', '.######.', '-.####.-'], eye: 1, colors: { '#': 0xe2cf96, b: 0x3a6fd8 }, tint: 0xe2cf96 },
    // A mini Patrick in his flowered shorts.
    fork: { rows: ['...##...', '.######.', '########', '..gvvg..'], eye: 1, colors: { '#': PINK, g: GREEN, v: PURPLE }, tint: PINK },
    // A Krabby Patty: sesame bun, lettuce, patty, bun.
    'general-purpose': { rows: ['.#w##w#.', '.######.', 'gggggggg', '.bbbbbb.'], eye: 1, feet: false, arms: false, colors: { '#': 0xe0a050, w: 0xf6ecd0, g: 0x5ac040, b: 0x7a4020 }, tint: 0xe0a050 },
    // Plankton: tiny and green, antennae up, one red eye.
    other: { rows: ['..-..-..', '..####..', '..#ww#..', '...##...'], eye: 2, eyes: [4], eyeColor: 0xd82020, colors: { '#': 0x3a9a40, w: 0xf2f2e0 }, tint: 0x3a9a40 },
  },
}
