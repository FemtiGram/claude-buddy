import type { SkinLook } from './types'

const TAN = 0xa8935a

// The Predator: dark dreadlocks framing a wide mottled tan face, yellow eyes
// under a dark brow, four pale mandibles round a dark mouth, a grey mesh chest
// and a red laser dot.
export const look: SkinLook = {
  said: 'Buddy turns into a Predator. The hunt is on!',
  group: 'Horror',
  rows: [
    '...DhDD...',
    '..DhDDDD..',
    'DhHHTrTTDD',
    'DDTkkkkTDD',
    'DTTkTTkTTD',
    'DDTsTTsTDD',
    'D.TmkkmT.D',
    'D..mkkm..D',
    '..gLgggg..',
    '..gggGgg..',
  ],
  colors: { D: 0x5e4a32, h: 0x8c7048, T: TAN, H: 0xc8b878, s: 0x7a6838, r: 0xe24d4d, m: 0xeee4b8, k: 0x2e2030, g: 0x8d9aa6, L: 0xc4d0da, G: 0x6c7886 },
  eyes: [[3, 4], [6, 4]],
  eyeColor: 0xe8d84a,
  smile: [[4, 6], [5, 6]],
  tear: [3, 5],
  arms: {
    color: 0xb8a068,
    down: [[1, 8], [1, 9], [8, 8], [8, 9]],
    up: [[1, 6], [1, 7], [8, 6], [8, 7]],
  },
  feet: { color: 0x6b5a3c, at: [3, 6] },
  captions: { idle: 'HUNT', happy: 'NICE' },
  critters: {
    // A bio-mask with one glowing lens.
    Explore: { rows: ['.######.', '########', '#-#yy#-#', '.#-##-#.'], eye: 2, eyes: [3], eyeColor: 0xe8d84a, colors: { '#': 0x8d9aa6, y: 0xe8d84a }, tint: 0x8d9aa6, feet: false, arms: false },
    // A star map: dark panel dotted with stars.
    Plan: { rows: ['#.#..#.#', '#..##..#', '##.##.##', '#.#..#.#'], eye: 1, eyes: [3, 4], eyeColor: 0xe8d84a, colors: { '#': 0x5a6a8a }, tint: 0x5a6a8a, feet: false, arms: false },
    // A smart-disc that splits: two halves.
    fork: { rows: ['..####..', '.##--##.', '.##--##.', '..####..'], eye: 1, eyes: [2, 5], eyeColor: 0xe8d84a, colors: { '#': 0xb8b0a0 }, tint: 0xb8b0a0, feet: false, arms: false },
    // A wrist gauntlet with a little glowing panel.
    'general-purpose': { rows: ['########', '#gggggg#', '#g-yy-g#', '########'], eye: 2, eyes: [3, 4], eyeColor: 0xe8d84a, colors: { '#': 0x7a8590, g: 0x5e6a74, y: 0xe8d84a }, tint: 0x7a8590, feet: false, arms: false },
    // A cute trophy skull.
    other: { rows: ['.######.', '########', '.######.', '..#--#..'], eye: 1, colors: { '#': 0xd8d0b0 }, tint: 0xd8d0b0, feet: false, arms: false },
  },
}
