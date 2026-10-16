import type { SkinLook } from './types'

const FUR = 0xeadfc4
const SHADE = 0xc8b89a
const WING = 0x7a5fb0

// A Moogle from Final Fantasy: cream fur with a tan shade, a red pom-pom on a
// straight antenna, two little purple bat wings and a pink nose.
export const look: SkinLook = {
  said: 'Buddy turns into a moogle, kupo!',
  group: 'Games',
  rows: [
    '....RR....',
    '....RR....',
    '....a.....',
    'W.#####s.W',
    '.W#####sW.',
    '.#######s.',
    '.###nn##s.',
    '.#######s.',
    '..ssssss..',
  ],
  colors: { '#': FUR, s: SHADE, R: 0xd8485a, a: 0x9a7f8a, n: 0xe87a9a, W: WING },
  eyes: [[2, 5], [7, 5]],
  smile: [[4, 7], [5, 7]],
  tear: [2, 6],
  feet: { color: 0xe59aa8, at: [3, 6] },
  captions: { idle: 'KUPO', happy: 'KUPO' },
  critters: {
    // A chocobo: yellow bird with a crest and an orange beak.
    Explore: { rows: ['..#.##..', '..####b.', '.######.', '.-####-.'], eye: 1, eyes: [3], colors: { '#': 0xe8c030, b: 0xe8802a }, tint: 0xe8c030 },
    // A black mage: pointed brown-yellow hat, blue robe, glowing yellow eyes.
    Plan: { rows: ['...hh...', '.hhhhhh.', '.######.', '.######.'], eye: 2, eyeColor: 0xffe640, colors: { '#': 0x3f5fc0, h: 0xb08d3c }, tint: 0x5f7fe0 },
    // A baby moogle: cream, a pom-pom on a short antenna.
    fork: { rows: ['...rr...', '.######.', '.######.', '..gggg..'], eye: 1, colors: { '#': FUR, r: 0xd8485a, g: SHADE }, tint: 0xd8485a },
    // A cactuar caught mid-sprint, arms flung wide.
    'general-purpose': { rows: ['#..##..#', '########', '.######.', '..-##-..'], eye: 1, arms: false, colors: { '#': 0x5fae52 }, tint: 0x5fae52 },
    // A bomb: round, orange-red, with a flame on top.
    other: { rows: ['...yy...', '.######.', '.######.', '..####..'], eye: 1, feet: false, arms: false, colors: { '#': 0xe8502a, y: 0xffc040 }, tint: 0xe8502a },
  },
}
