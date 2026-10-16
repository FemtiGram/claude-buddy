import type { SkinLook } from './types'

const SKIN = 0xf2c9a0
const BLUE = 0x2e6db4

// Tintin: the ginger-blond quiff, dot eyes, blue jumper, brown plus-fours.
export const look: SkinLook = {
  said: 'Buddy turns into Tintin!',
  group: 'Cartoons & folklore',
  rows: [
    '....yy....',
    '...yyyyq..',
    '..yyyyyq..',
    '..ssssss..',
    '..ssssss..',
    '..ssssss..',
    '..jwwwwj..',
    '..jjjjjj..',
    '..pppppp..',
    '..ww..ww..',
  ],
  colors: { y: 0xe3a93b, q: 0xb87a20, s: SKIN, j: BLUE, w: 0xffffff, p: 0x7a5230 },
  eyes: [[3, 4], [6, 4]],
  smile: [[4, 5], [5, 5]],
  tear: [3, 5],
  arms: { color: SKIN, down: [[1, 7], [8, 7]], up: [[1, 5], [8, 5]] },
  feet: { color: 0x6b4020, at: [3, 6] },
  captions: { happy: 'SUPERB', idle: 'HMM' },
  critters: {
    // Snowy, the white terrier.
    Explore: { rows: ['.#....#.', '.######.', '.######.', '..#kk#..'], eye: 2, colors: { '#': 0xe6e6ea, k: 0x3a3a48 }, tint: 0xe6e6ea },
    // Professor Calculus: bald, round glasses.
    Plan: { rows: ['..-##-..', '.######.', '.gg##gg.', '..bbbb..'], eye: 2, colors: { '#': SKIN, g: 0x9cc4e4, b: 0x6a5a48 }, tint: 0x9cc4e4 },
    // Thomson and Thompson: a pair of bowlers, the copy.
    fork: { rows: ['.kk..kk.', 'kkkkkkkk', '.##..##.', '.dd..dd.'], eye: 2, colors: { '#': SKIN, k: 0x3a3a48, d: 0x4a4a5c }, tint: 0x4a4a5c },
    // A mini Tintin with his quiff.
    'general-purpose': { rows: ['...yy...', '.yyyyy..', '.######.', '..jjjj..'], eye: 2, colors: { '#': SKIN, y: 0xe3a93b, j: BLUE }, tint: 0xe3a93b },
    // Captain Haddock: captain's cap, black beard.
    other: { rows: ['..cccc..', '.cccccc.', '.######.', '.bbbbbb.'], eye: 2, colors: { '#': 0xe8b894, c: 0x2a3a6a, b: 0x3a3330 }, tint: 0x2a3a6a },
  },
}
