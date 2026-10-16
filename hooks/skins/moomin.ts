import type { SkinLook } from './types'

// Moomintroll: a cream, hippo-like troll with a round snout, small ears,
// a pear-shaped body and a tufted tail. The Moomin valley is his crew.
const CREAM = 0xe9e3d3
const SHADE = 0xb9b09a

export const look: SkinLook = {
  said: 'Buddy turns into a Moomin!',
  rows: [
    '..MM..MM..',
    '..MM..MM..',
    '.MMMMMMMM.',
    '.MMMMMMMMM',
    '.MMMMMMMMM',
    '..MMMMMMM.',
    '..MMMMMM..',
    '.MMMMMMMM.',
    '.MMMMMMMM.',
    'sMMMMMMMs.',
  ],
  colors: { M: CREAM, s: SHADE },
  eyes: [[4, 3], [7, 3]],
  smile: [[6, 5], [7, 5]],
  tear: [4, 4],
  arms: {
    color: CREAM,
    down: [[0, 7], [9, 7]],
    up: [[0, 5], [9, 5]],
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
    'general-purpose': { rows: ['.#....#.', '.######.', '.#######', '..-##-..'], eye: 1, colors: { '#': CREAM }, tint: SHADE },
    // A Hattifattener: a pale stick of a ghost with little arms.
    other: { rows: ['..####..', '#.####.#', '..####..', '..-##-..'], eye: 1, feet: false, arms: false, colors: { '#': 0xdcdccf }, tint: 0xb4b4a6 },
  },
}
