import type { SkinLook } from './types'

const MASK = 0xe8e4d8
const RED = 0xd23a32
const JACKET = 0x5e6e74

// Jason Voorhees: an off-white hockey mask with red chevrons and dark eye holes,
// a grey-teal work jacket, dark trousers and boots. No weapon.
export const look: SkinLook = {
  said: 'Buddy puts on the hockey mask.',
  group: 'Horror',
  rows: [
    '..........',
    '..........',
    '..######..',
    '..#R##R#..',
    '.########.',
    '.########.',
    '.R######R.',
    '..##dd##..',
    '.JJJJJJJJ.',
    '.JJJJJJJJ.',
    '..pppppp..',
  ],
  colors: { '#': MASK, R: RED, d: 0x8a8478, J: JACKET, p: 0x4a525a },
  eyes: [[3, 4], [6, 4]],
  eyeColor: 0x4a4458,
  smile: [[4, 7], [5, 7]],
  tear: [3, 5],
  arms: {
    color: 0x74868c,
    down: [[0, 8], [0, 9], [9, 8], [9, 9]],
    up: [[0, 5], [0, 6], [9, 5], [9, 6]],
  },
  feet: { color: 0x6a6258, at: [3, 6] },
  captions: { idle: 'WOODS', happy: 'NICE' },
  critters: {
    // A tiny hockey mask with a flashlight beam.
    Explore: { rows: ['..####..', '.#R##R#y', '.######y', '..####yy'], eye: 1, eyes: [2, 5], eyeColor: 0x4a4458, colors: { '#': MASK, R: RED, y: 0xe8d890 }, tint: MASK },
    // A lakeside cabin: brown roof over walls, a water line.
    Plan: { rows: ['...rr...', '..rrrr..', '.######.', 'wwwwwwww'], eye: 2, eyes: [3, 5], eyeColor: 0xe8d890, colors: { '#': 0x8a6a4a, r: 0x5e4a3a, w: 0x4f86a8 }, tint: 0x8a6a4a },
    // A smaller second mask, the copy.
    fork: { rows: ['........', '..####..', '.#R##R#.', '..####..'], eye: 2, colors: { '#': MASK, R: RED }, tint: RED },
    // A canoe on the water.
    'general-purpose': { rows: ['........', '#......#', '.######.', 'wwwwwwww'], eye: 2, eyes: [3, 4], arms: false, feet: false, colors: { '#': 0xb0763c, w: 0x4f86a8 }, tint: 0xb0763c },
    // A hockey stick.
    other: { rows: ['.......#', '......#.', '..#..#..', '..####..'], eye: 3, eyes: [3, 4], arms: false, feet: false, colors: { '#': 0xa88a58 }, tint: 0xa88a58 },
  },
}
