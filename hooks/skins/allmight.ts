import type { SkinLook } from './types'

const GOLD = 0xf2c832
const SKIN = 0xf5cfa0
const BLUE = 0x2a4aa8
const RED = 0xc8302c

// All Might: two tall antenna bangs, a huge toothy grin, shadowed eyes,
// a broad blue suit with red and white stripes and gold shoulders.
export const look: SkinLook = {
  said: 'Buddy turns into All Might. I am here!',
  group: 'Anime',
  rows: [
    '..y....y..',
    '..yy..yy..',
    '.yyyyyyyy.',
    '.yssssssy.',
    '.sddssdds.',
    '.swwwwwws.',
    '..ssssss..',
    '.yybbbbyy.',
    '.bwrbbrwb.',
    '..bbyybb..',
  ],
  colors: { y: GOLD, s: SKIN, d: 0x7a5a48, w: 0xe8e8e8, b: BLUE, r: RED },
  eyes: [[3, 4], [6, 4]],
  eyeColor: 0x4a8ad0,
  smile: [[4, 5], [5, 5]],
  tear: [2, 4],
  arms: { color: SKIN, down: [[0, 7], [9, 7]], up: [[0, 5], [9, 5]] },
  feet: { color: RED, at: [3, 6] },
  captions: { happy: 'HERE!', idle: 'HO HO' },
  critters: {
    // A little All Might poster.
    Explore: { rows: ['########', '#yyyyyy#', '#bbssbb#', '########'], eye: 2, feet: false, arms: false, colors: { '#': 0xc8302c, y: 0xf2c832, b: 0x2a4aa8, s: 0xf5cfa0 }, tint: 0xc8302c },
    // Nighteye's round glasses.
    Plan: { rows: ['.##..##.', '#ww##ww#', '#ww..ww#', '.##..##.'], eye: 1, feet: false, arms: false, colors: { '#': 0x4a5a8a, w: 0xcfd8e8 }, tint: 0x4a5a8a },
    // Skinny-form All Might.
    fork: { rows: ['.#.##.#.', '..####..', '..ssss..', '...bb...'], eye: 2, colors: { '#': 0xf2c832, s: 0xf5cfa0, b: 0x5a6a80 }, tint: 0xf2c832 },
    // U.A. High badge.
    'general-purpose': { rows: ['########', '#wwwwww#', '.#wwww#.', '..####..'], eye: 1, feet: false, arms: false, colors: { '#': 0x4a6ac8, w: 0xe8d8a0 }, tint: 0x4a6ac8 },
    // Coffee mug.
    other: { rows: ['.cccccc.', '.######h', '.######h', '..####..'], eye: 1, feet: false, arms: false, colors: { '#': 0xc8b898, c: 0x6a4a30, h: 0x9a8060 }, tint: 0xc8b898 },
  },
}
