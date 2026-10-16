import type { SkinLook } from './types'

const YELLOW = 0xfed41d
const EDGE = 0xc99a10
const STUBBLE = 0xb08a5a
const WHITE = 0xf2f2ee
const BLUE = 0x3a6fd8

// Homer Simpson: a bald yellow dome with his two hairs on top and the
// zigzag over the ear, big white eyes, the nose, the five-o'clock stubble
// round the mouth, a white shirt over blue trousers.
export const look: SkinLook = {
  said: "Buddy turns into Homer Simpson. Mmm... donuts.",
  group: 'TV cartoons',
  rows: [
    '...k.k....',
    '..kyky....',
    '.hyyyyyye.',
    '.ywwywwye.',
    'kyywyywye.',
    'ekyyyynnn.',
    '.ysssssse.',
    '.ssmmmsse.',
    '..ssssse..',
    '.wwwwwwwe.',
    '.bbbbbbbb.',
  ],
  colors: { y: YELLOW, h: 0xfff08a, e: EDGE, k: 0x3a2a1a, w: WHITE, n: 0xf0b800, s: STUBBLE, m: 0x6a2a1a, b: BLUE },
  eyes: [[3, 4], [6, 4]],
  eyeColor: 0x1a1a1a,
  smile: [[2, 7], [6, 7]],
  tear: [2, 5],
  arms: { color: WHITE, down: [[0, 9], [9, 9]], up: [[0, 7], [9, 7]] },
  feet: { color: 0x3a2a1a, at: [2, 7] },
  captions: { idle: 'MMM', happy: 'WOOHOO!' },
  critters: {
    // Santa's Little Helper: the brown greyhound with floppy ears.
    Explore: { rows: ['.-....-.', '.######.', '.##nn##.', '..#..#..'], eye: 1, colors: { '#': 0xa07a52, n: 0x2a1a10 }, tint: 0xa07a52 },
    // Marge: a tall blue beehive over a yellow face, green dress.
    Plan: { rows: ['..bbbb..', '.bbbbbb.', '.b####b.', '..gggg..'], eye: 2, colors: { '#': YELLOW, b: 0x3a5ad8, g: 0x6ac04a }, tint: 0x3a5ad8 },
    // A mini Homer: two hairs, big eyes, stubble.
    fork: { rows: ['..k.k...', '.######.', '.#w##w#.', '.#ssss#.'], eye: 2, colors: { '#': YELLOW, k: 0x3a2a1a, w: WHITE, s: STUBBLE }, tint: YELLOW },
    // A pink-frosted donut with sprinkles.
    'general-purpose': { rows: ['..pppp..', '.pcppcp.', '.##..##.', '..####..'], eye: 2, arms: false, colors: { '#': 0xd8a060, p: 0xf07ab0, c: 0x4ad0f0 }, tint: 0xf07ab0 },
    // A can of Duff: red can, white label.
    other: { rows: ['..ssss..', '.rrrrrr.', '.r####r.', '.rrrrrr.'], eye: 2, eyes: [3, 4], arms: false, feet: false, colors: { '#': 0xf2f0e8, r: 0xd8302a, s: 0xb8bcc4 }, tint: 0xd8302a },
  },
}
