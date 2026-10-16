import type { SkinLook } from './types'

// Moomintroll: a cream, hippo-like troll with a round snout, small ears,
// a pear-shaped body and a tufted tail. The Moomin valley is his crew.
const CREAM = 0xd9d1bc // a touch darker than paper, so he shows on a light terminal
const LIGHT = 0xf8f4e8
const SHADE = 0xa89f88
const TUFT = 0x6e6450

export const look: SkinLook = {
  said: 'Buddy turns into a Moomin!',
  group: 'Cartoons & folklore',
  rows: [
    '..HM..Ms..',
    '..MM..Ms..',
    '.HHMMMMMs.',
    '.HMMMMMMMH',
    '.MMMMMMMMM',
    '..MMMMMMss',
    '..MMMMMMs.',
    '.MMMMMMMs.',
    'tMMMMMMMs.',
    'ttMMMMMMs.',
  ],
  colors: { M: CREAM, H: LIGHT, s: SHADE, t: TUFT },
  eyes: [[4, 3], [7, 3]],
  smile: [[6, 5], [7, 5]],
  tear: [4, 4],
  arms: {
    color: CREAM,
    down: [[0, 7], [9, 7]],
    up: [[0, 5], [9, 6]],
  },
  feet: { color: SHADE, at: [3, 6] },
  captions: { happy: 'DONE', idle: 'MUMIN' },
  critters: {
    // Snufkin, in his green hat and coat, wandering off.
    Explore: { rows: ['...hh...', '..hhhh..', '.pppppp.', '.######.'], eye: 2, colors: { '#': 0x6f9a4a, h: 0x5f8a3c, p: 0xe8c9a0 }, tint: 0x6f9a4a },
    // The Snork Maiden: pale yellow-green with a blond fringe.
    Plan: { rows: ['.yyyyyy.', '.######.', '.######.', '..-##-..'], eye: 1, colors: { '#': 0xd2e0a4, y: 0xe6c35a }, tint: 0xc5d68e },
    // Little My, tiny and fierce: red dress, orange-red topknot.
    fork: { rows: ['...oo...', '.oppppo.', '.######.', '..####..'], eye: 1, colors: { '#': 0xcc3344, o: 0xe2582c, p: 0xf0d2b0 }, tint: 0xe2582c },
    // A mini Moomin.
    'general-purpose': { rows: ['.oo..oo.', 'o######o', 'o######o', '.o-##-o.'], eye: 1, colors: { '#': CREAM, o: 0x8a8a7a }, tint: SHADE },
    // A Hattifattener: a pale stick of a ghost with little arms.
    other: { rows: ['.o####o.', 'o.####.o', '.o####o.', '..o--o..'], eye: 1, feet: false, arms: false, colors: { '#': 0xdcdccf, o: 0x8c8c80 }, tint: 0xb4b4a6 },
  },
}
