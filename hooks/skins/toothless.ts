import type { SkinLook } from './types'

const DARK = 0x2a2d3a
const HI = 0x5a5f78
const RED = 0xe85d3a
const GREEN = 0x9be34d

// Toothless, the Night Fury: dark dragon, ear-flaps, big green eyes, bat
// wings for arms, a red saddle strap and a red tail fin.
export const look: SkinLook = {
  said: 'Buddy spreads his wings: Toothless!',
  group: 'Film & TV',
  rows: [
    '..e....e..',
    '.edh..hde.',
    '.dhdddddd.',
    '.dddddddd.',
    '.dddddddd.',
    '.dddmmddd.',
    '..dddddd..',
    '..drrrrd..',
    '..dddddd..',
    '...ddd.ddr',
  ],
  colors: { d: DARK, h: HI, e: HI, m: 0xc86a6a, r: RED },
  eyes: [[2, 3], [7, 3]],
  eyeColor: GREEN,
  smile: [[4, 5], [5, 5]],
  tear: [2, 4],
  arms: { color: 0x6e7394, down: [[0, 7], [9, 7]], up: [[0, 5], [9, 5]] },
  feet: { color: HI, at: [3, 6] },
  captions: { happy: 'ROOOR', idle: 'HMM' },
  critters: {
    // Toothless as a wings-out baby.
    Explore: { rows: ['.w.##.w.', 'ww####ww', '.w####w.', '..#..#..'], eye: 1, eyeColor: GREEN, colors: { '#': HI, w: 0x6e7394 }, tint: HI },
    // A Gronckle, round and brown.
    Plan: { rows: ['h.####.h', '.######.', '########', '.#.##.#.'], eye: 1, colors: { '#': 0xa0703c, h: 0x6a4a28 }, tint: 0xa0703c },
    // A hatchling egg, cracked.
    fork: { rows: ['..####..', '.#wmm#..', '.######.', '..####..'], eye: 2, feet: false, arms: false, colors: { '#': 0x5a8aa8, w: 0xe6ecf2, m: 0x3a5a78 }, tint: 0x5a8aa8 },
    // A Light Fury, white with blue eyes.
    'general-purpose': { rows: ['#......#', '##.##.##', '.######.', '..#..#..'], eye: 2, eyeColor: 0x4da6ff, colors: { '#': 0xe3e0ee }, tint: 0xe3e0ee },
    // A Terrible Terror, small and green.
    other: { rows: ['#.#..#.#', '########', '.######.', '.#....#.'], eye: 1, eyeColor: 0xe0c030, colors: { '#': 0x4fae4f }, tint: 0x4fae4f },
  },
}
