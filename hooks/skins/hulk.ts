import type { SkinLook } from './types'

const SKIN = 0x5aa83a
const LIGHT = 0x7ac85a
const SHADE = 0x3e7e28
const HAIR = 0x3a4a30
const HAIR_LT = 0x5e7448
const SHORTS = 0x7a44a8

// The Hulk: a huge green body with shoulders filling the width, a small head
// under messy dark hair, a heavy brow, gritted teeth, torn purple shorts.
export const look: SkinLook = {
  said: 'Buddy turns into the Hulk. SMASH!',
  group: 'Marvel',
  rows: [
    '..........',
    '...hHHH...',
    '..HHHHHH..',
    '..GDDDDG..',
    '..GGGGGG..',
    '..GGwwGG..',
    '.LGGGGGGG.',
    '.GDGGGGDG.',
    '.GGGDDGGG.',
    '.PPPPPPPP.',
    '.PP.PPP.P.',
  ],
  colors: { H: HAIR, h: HAIR_LT, G: SKIN, L: LIGHT, D: SHADE, P: SHORTS, w: 0xe0e0d0 },
  eyes: [[3, 4], [6, 4]],
  eyeColor: 0x1e2a1a,
  smile: [[4, 5], [5, 5]],
  tear: [3, 5],
  arms: {
    color: SKIN,
    down: [[0, 7], [0, 8], [9, 7], [9, 8]],
    up: [[0, 4], [0, 5], [9, 4], [9, 5]],
  },
  feet: { color: SKIN, at: [2, 7] },
  captions: { idle: 'GRR', happy: 'HULK!' },
  critters: {
    // Bruce Banner's glasses.
    Explore: { rows: ['.##..##.', '#oo##oo#', '#oo..oo#', '.##..##.'], eye: 1, arms: false, feet: false, colors: { '#': 0x8a6a4a, o: 0x9ac8e0 }, tint: 0x8a6a4a },
    // A gamma-radiation symbol.
    Plan: { rows: ['.#.##.#.', '###oo###', '.##oo##.', '..####..'], eye: 1, arms: false, feet: false, colors: { '#': 0x7ac84a, o: 0xe8d84a }, tint: 0x7ac84a },
    // A mini Hulk.
    fork: { rows: ['..HHHH..', '.######.', '########', '.##..##.'], eye: 1, colors: { '#': SKIN, H: HAIR }, tint: SKIN },
    // She-Hulk: lighter green, dark hair to the shoulders.
    'general-purpose': { rows: ['.HHHHHH.', 'HH####HH', 'H######H', '.H####H.'], eye: 1, colors: { '#': 0x7ccc5a, H: 0x3a2a3a }, tint: 0x7ccc5a },
    // A crumpled car.
    other: { rows: ['..###...', '.##.###.', '########', '.kk..kk.'], eye: 2, eyes: [1, 6], arms: false, feet: false, colors: { '#': 0xc0303a, k: 0x5a5a66 }, tint: 0xc0303a },
  },
}
