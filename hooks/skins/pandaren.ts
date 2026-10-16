import type { SkinLook } from './types'

const STRAW = 0xd8b45a
const STRAW_LIGHT = 0xf0d890
const STRAW_DARK = 0x9a7a34
const FUR = 0xf0e8d8
const PATCH = 0x2a2420
const BROWN = 0x8a4a2a
const KEG = 0x9a6234

// Chen Stormstout, the Pandaren brewmaster: a wide conical straw hat, a
// cream panda face with dark eye patches and a black nose, dark shoulders,
// a russet robe with a sash, and a banded keg of brew under his arm.
export const look: SkinLook = {
  said: 'Buddy tips the straw hat: Chen Stormstout, brewmaster, at your service!',
  group: 'Warcraft',
  rows: [
    '....HH....',
    '...HhhhH..',
    'hhhhhhhhhd',
    '.kffffffk.',
    '.fkkffkkf.',
    '.fffnnfff.',
    '..ffffff..',
    '..kbbbbk..',
    '..kyyyykKK',
    '..bbbbbbGG',
    '..bbbbbbKK',
  ],
  colors: { H: STRAW_LIGHT, h: STRAW, d: STRAW_DARK, k: PATCH, f: FUR, n: 0x1a1414, b: BROWN, y: 0xd8a02a, K: KEG, G: 0xc8ccd0 },
  eyes: [[3, 4], [6, 4]],
  eyeColor: 0xf0c050,
  smile: [[4, 6], [5, 6]],
  tear: [2, 5],
  arms: { color: PATCH, down: [[1, 8], [8, 7]], up: [[0, 6], [9, 6]] },
  feet: { color: PATCH, at: [3, 6] },
  captions: { idle: 'BREW', happy: 'CHEERS!' },
  critters: {
    // A cloud serpent: a jade sky-dragon coiling through the clouds.
    Explore: { rows: ['.##.....', '####.##.', '..####w#', '.ww..www'], eye: 0, eyes: [1], eyeColor: 0xffe08a, arms: false, feet: false, colors: { '#': 0x3aaa7a, w: 0xe6ecf2 }, tint: 0x3aaa7a },
    // A jinyu waterspeaker: a blue-green fish-man with whiskers and fins.
    Plan: { rows: ['..f##f..', '.######.', 'w##oo##w', '..####..'], eye: 1, colors: { '#': 0x4a9ab8, f: 0x2a6a8a, o: 0xa8d8e0, w: 0xd8e0e8 }, tint: 0x4a9ab8 },
    // A pandaren cub in a tiny straw hat.
    fork: { rows: ['..hhhh..', 'hhhhhhhh', '.k####k.', '..#nn#..'], eye: 2, eyeColor: PATCH, colors: { '#': FUR, h: STRAW, k: PATCH, n: PATCH }, tint: STRAW },
    // A grummle porter: a small furry trader under a huge pack.
    'general-purpose': { rows: ['.ppp....', 'pppp##..', 'pp####..', '..####..'], eye: 2, eyes: [3, 5], colors: { '#': 0x9a8a7a, p: 0x7a5a3a }, tint: 0x7a5a3a },
    // A hozen: a mischievous orange monkey with a pale face.
    other: { rows: ['.#....#.', '.######.', '.#cccc#.', '..#cc#..'], eye: 2, colors: { '#': 0xd8782a, c: 0xf0d0a8 }, tint: 0xd8782a },
  },
}
