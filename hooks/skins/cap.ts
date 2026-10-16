import type { SkinLook } from './types'

const BLUE = 0x2a4a9a
const RED = 0xc0303a
const WHITE = 0xe8eaf0
const SKIN = 0xe8b48a
const BROWN = 0x8a5a3a

// Captain America: a blue cowl with a white mark and small wings, a blue suit
// with a white star and red-white stripes at the waist, brown gloves and
// boots, and the round shield on his left arm.
export const look: SkinLook = {
  said: 'Buddy picks up the shield: Captain America!',
  group: 'Marvel',
  rows: [
    '..........',
    '...BBBB...',
    '.W.BWWB.W.',
    '..BSSSSB..',
    '..BSSSSB..',
    'RWRBBBBBB.',
    'WBWBWWBBB.',
    'RWRBWWWWB.',
    '.RRRRRRRR.',
    '.WWWWWWWW.',
    '..BB..BB..',
  ],
  colors: { B: BLUE, R: RED, W: WHITE, S: SKIN },
  eyes: [[3, 3], [6, 3]],
  smile: [[4, 4], [5, 4]],
  tear: [3, 4],
  arms: {
    color: BROWN,
    down: [[9, 6], [9, 7]],
    up: [[9, 3], [9, 4]],
  },
  feet: { color: BROWN, at: [2, 6] },
  captions: { idle: 'HOLD', happy: 'SHIELD' },
  critters: {
    // The Falcon, wings out.
    Explore: { rows: ['#..oo..#', '##oooo##', '.######.', '..#..#..'], eye: 1, arms: false, feet: false, colors: { '#': RED, o: 0xd8d0c0 }, tint: RED },
    // Peggy's compass.
    Plan: { rows: ['..####..', '.##rb##.', '.##br##.', '..####..'], eye: 1, arms: false, feet: false, colors: { '#': 0xc8a050, r: RED, b: WHITE }, tint: 0xc8a050 },
    // A mini shield.
    fork: { rows: ['.######.', '#WWWWWW#', '#WbbbbW#', '.######.'], eye: 1, arms: false, feet: false, colors: { '#': RED, W: WHITE, b: BLUE }, tint: RED },
    // Bucky, metal arm.
    'general-purpose': { rows: ['..hhhh..', '.hssssh.', '.hssss##', '...hh###'], eye: 1, colors: { '#': 0xa8b0c0, h: 0x6a4a3a, s: SKIN }, tint: 0xa8b0c0 },
    // A SHIELD agent in a dark suit.
    other: { rows: ['..ssss..', '.######.', '.#WWWW#.', '.#.##.#.'], eye: 0, colors: { '#': 0x4a5a7a, s: SKIN, W: WHITE }, tint: 0x4a5a7a },
  },
}
