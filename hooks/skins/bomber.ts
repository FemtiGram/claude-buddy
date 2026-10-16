import type { SkinLook } from './types'

const WHITE = 0xeeeef4
const SHADE = 0xa4aac0
const BLUE = 0x3858d8
const BLUE_DK = 0x22389a
const PINK = 0xf4a6b8
const VISOR = 0x232638

// Bomberman: round white helmet shaded grey, a dark visor with bright eyes,
// a pink antenna ball, blue suit, pink gloves and boots.
export const look: SkinLook = {
  said: 'Buddy lights the fuse: Bomberman!',
  group: 'Games',
  rows: [
    '....pp....',
    '...swws...',
    '..swwwws..',
    '..wvvvvs..',
    '..wvvvvs..',
    '..wwwwss..',
    '...BBBn...',
    '..BBBBBn..',
    '...BB.nn..',
  ],
  colors: { p: 0xe8506a, w: WHITE, s: SHADE, v: VISOR, B: BLUE, n: BLUE_DK },
  eyes: [[3, 3], [6, 3]],
  eyeColor: 0x8ff0ff,
  smile: [[4, 4], [5, 4]],
  smileColor: 0x8ff0ff,
  tear: [3, 4],
  arms: {
    color: PINK,
    down: [[1, 7], [8, 7]],
    up: [[1, 5], [8, 5]],
  },
  feet: { color: PINK, at: [3, 6] },
  captions: { happy: 'BOMB', idle: 'BOOM' },
  critters: {
    // A Ballom: an orange balloon with a trailing tie.
    Explore: { rows: ['.######.', '########', '########', '...-#...'], eye: 1, feet: false, colors: { '#': 0xf39a2b }, tint: 0xf39a2b },
    // Pommy: a round pink-purple pet with two little horns.
    Plan: { rows: ['##....##', '.######.', '.######.', '..####..'], eye: 1, colors: { '#': 0xd88ad0 }, tint: 0xd88ad0 },
    // A mini bomb with a lit fuse.
    fork: { rows: ['.....y..', '.######.', '.######.', '..####..'], eye: 2, eyeColor: 0xf2f2f8, colors: { '#': 0x4a5070, y: 0xf7c93a }, tint: 0x4a5070 },
    // Louie the kangaroo: tall ears, cream belly.
    'general-purpose': { rows: ['.#....#.', '.######.', '.#cccc#.', '..#cc#..'], eye: 1, colors: { '#': 0xc9a06a, c: 0xf0e0c0 }, tint: 0xc9a06a },
    // A fire power-up: a flame.
    other: { rows: ['...#....', '..##.#..', '.#yyyy#.', '.######.'], eye: 2, feet: false, colors: { '#': 0xe8532b, y: 0xf7c93a }, tint: 0xe8532b },
  },
}
