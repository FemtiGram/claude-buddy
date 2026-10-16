import type { SkinLook } from './types'

const FUR = 0xeadfc4
const WING = 0x7a5fb0

// A Moogle from Final Fantasy: cream fur over a grey belly, a red pom-pom on its
// antenna, little purple bat wings for arms and a pink nose.
export const look: SkinLook = {
  said: 'Buddy turns into a moogle, kupo!',
  group: 'Games',
  rows: [
    '....RR....',
    '..#.a..#..',
    '..######..',
    '.########.',
    '.########.',
    '.###nn###.',
    '.########.',
    '.########.',
    '..gggggg..',
  ],
  colors: { '#': FUR, R: 0xd8485a, a: 0x9a7f8a, n: 0xe87a9a, g: 0xb4acbe },
  eyes: [[2, 4], [7, 4]],
  smile: [[4, 6], [5, 6]],
  tear: [2, 5],
  arms: {
    color: WING,
    down: [[0, 5], [0, 6], [9, 5], [9, 6]],
    up: [[0, 2], [0, 3], [9, 2], [9, 3]],
  },
  feet: { color: 0xe59aa8, at: [3, 6] },
  captions: { idle: 'KUPO', happy: 'KUPO' },
  critters: {
    // A chocobo: yellow bird with a crest and an orange beak.
    Explore: { rows: ['..#.##..', '..####b.', '.######.', '.-####-.'], eye: 1, eyes: [3], colors: { '#': 0xe8c030, b: 0xe8802a }, tint: 0xe8c030 },
    // A black mage: pointed brown-yellow hat, blue robe, glowing yellow eyes.
    Plan: { rows: ['...hh...', '.hhhhhh.', '.######.', '.######.'], eye: 2, eyeColor: 0xffe640, colors: { '#': 0x3f5fc0, h: 0xb08d3c }, tint: 0x5f7fe0 },
    // A baby moogle: cream, a pom-pom on a short antenna.
    fork: { rows: ['...rr...', '.######.', '.######.', '..gggg..'], eye: 1, colors: { '#': FUR, r: 0xd8485a, g: 0xb4acbe }, tint: 0xd8485a },
    // A cactuar caught mid-sprint, arms flung wide.
    'general-purpose': { rows: ['#..##..#', '########', '.######.', '..-##-..'], eye: 1, arms: false, colors: { '#': 0x5fae52 }, tint: 0x5fae52 },
    // A bomb: round, orange-red, with a flame on top.
    other: { rows: ['...yy...', '.######.', '.######.', '..####..'], eye: 1, feet: false, arms: false, colors: { '#': 0xe8502a, y: 0xffc040 }, tint: 0xe8502a },
  },
}
