import type { SkinLook } from './types'

const YELLOW = 0xfed41d
const EDGE = 0xc99a10
const WHITE = 0xf2f2ee
const RED = 0xe8502a
const BLUE = 0x3a6fd8

// Bart Simpson: the flat-topped yellow head with its row of spikes, big
// white eyes, the nose, a cheeky grin, the orange-red T-shirt and blue shorts.
export const look: SkinLook = {
  said: 'Buddy turns into Bart Simpson. Eat my shorts!',
  group: 'TV cartoons',
  rows: [
    '.y.y.y.y.e',
    '.yyyyyyyye',
    '.hyyyyyyye',
    '.ywwywwyye',
    '.yywyywyye',
    'eyyyyynnn.',
    '.yyyyyyye.',
    '.ymmmmmye.',
    '..yyyyye..',
    '.rrrrrrrr.',
    '..bbbbbb..',
  ],
  colors: { y: YELLOW, h: 0xfff08a, e: EDGE, w: WHITE, n: 0xf0b800, m: 0x6a2a1a, r: RED, b: BLUE },
  eyes: [[3, 4], [6, 4]],
  eyeColor: 0x1a1a1a,
  smile: [[2, 6], [7, 6]],
  tear: [2, 5],
  arms: { color: YELLOW, down: [[0, 10], [9, 10]], up: [[0, 8], [9, 8]] },
  feet: { color: 0x2a3a6a, at: [2, 7] },
  captions: { idle: 'DUDE', happy: 'CARAMBA!' },
  critters: {
    // Milhouse: blue hair, thick glasses, pale skin, red shirt.
    Explore: { rows: ['.bbbbb..', '.######.', '.gwggwg.', '..rrrr..'], eye: 2, colors: { '#': 0xf2d88a, b: 0x3a5ad8, g: 0x8a8a9a, w: WHITE, r: RED }, tint: 0x3a5ad8 },
    // Lisa: the star of spikes, yellow face, red dress.
    Plan: { rows: ['#.#..#.#', '.######.', '.######.', '..rrrr..'], eye: 2, colors: { '#': YELLOW, r: 0xd8302a }, tint: 0xd8302a },
    // A mini Bart, spikes and red shirt.
    fork: { rows: ['.#.#.#..', '.######.', '.######.', '.rrrrrr.'], eye: 2, colors: { '#': YELLOW, r: RED }, tint: RED },
    // Krusty the Clown: green hair tufts, white face, red nose and mouth.
    'general-purpose': { rows: ['gg....gg', 'g######g', '.##rr##.', '..rrrr..'], eye: 1, colors: { '#': 0xf0ece0, g: 0x5ab04a, r: 0xd8302a }, tint: 0x5ab04a },
    // Sideshow Bob: the huge red palm-tree hair, green shirt.
    other: { rows: ['rr.rr.rr', 'rrrrrrrr', '.r####r.', '..gggg..'], eye: 2, colors: { '#': YELLOW, r: 0xd84a2a, g: 0x5a8a4a }, tint: 0xd84a2a },
  },
}
