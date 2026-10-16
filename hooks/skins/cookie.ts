import type { SkinLook } from './types'

const BLUE = 0x2a8ee0
const LIGHT = 0x6ab8f2
const DEEP = 0x1a5ca8
const WHITE = 0xf2f2f2

// Cookie Monster: shaggy blue fur, two googly eyes on top of his head with
// pupils looking every which way, a huge dark mouth with a chocolate-chip
// cookie half in it, crumbs and all.
export const look: SkinLook = {
  said: 'Buddy turns into Cookie Monster: me want cookie!',
  group: 'Muppets',
  rows: [
    '..ww..ww..',
    '.bwwbbwwb.',
    'bLLbbbbbbb',
    'bLbbbbbbbd',
    'bkkkkkkkkd',
    'bkkkkkcCcd',
    'bbkkkkcccd',
    'bbbbbbbbbd',
    '.bLbbbbbd.',
    '.bbbbbbbd.',
    '.d.dd.dd..',
  ],
  colors: { b: BLUE, L: LIGHT, d: DEEP, w: WHITE, k: 0x2a1418, c: 0xc8904a, C: 0x5a3418 },
  eyes: [[2, 1], [6, 1]],
  eyeColor: 0x141414,
  smile: [[1, 3], [8, 3]],
  tear: [3, 2],
  arms: { color: BLUE, down: [[0, 8], [9, 8]], up: [[0, 0], [9, 0]] },
  feet: { color: DEEP, at: [3, 6] },
  captions: { idle: 'COOKIE', happy: 'OM NOM!' },
  critters: {
    // Oscar the Grouch, frowning out of his silver trash can.
    Explore: { rows: ['.ssssss.', '.######.', '.#kkkk#.', 'ssssssss'], eye: 1, eyes: [2, 5], arms: false, feet: false, colors: { '#': 0x7ab83a, s: 0xa4acb4, k: 0x2a3a1a }, tint: 0x7ab83a },
    // The Count: purple, slick black hair, fangs, a black cape.
    Plan: { rows: ['.kkkkkk.', 'k######k', '.##ww##.', 'kkk##kkk'], eye: 1, eyes: [2, 5], colors: { '#': 0x9a6ac8, k: 0x3a2a4a, w: 0xf2f2f2 }, tint: 0x9a6ac8 },
    // A mini Cookie Monster: googly eyes and an open mouth.
    fork: { rows: ['.ww..ww.', '#ww##ww#', '#kkkkkk#', '.######.'], eye: 1, eyes: [2, 5], eyeColor: 0x141414, colors: { '#': BLUE, w: WHITE, k: 0x2a1418 }, tint: BLUE },
    // Grover: furry blue-violet with a pink nose.
    'general-purpose': { rows: ['.#.##.#.', '.######.', '.##pp##.', '..####..'], eye: 1, eyes: [2, 5], colors: { '#': 0x4a6ae0, p: 0xf07aa8 }, tint: 0x4a6ae0 },
    // A chocolate-chip cookie.
    other: { rows: ['..#k##..', '.###k##.', '.######.', '..##k#..'], eye: 2, eyes: [2, 5], arms: false, feet: false, colors: { '#': 0xc8904a, k: 0x5a3418 }, tint: 0xc8904a },
  },
}
