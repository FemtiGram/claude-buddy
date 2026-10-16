import type { SkinLook } from './types'

const FUR = 0x7a5a3a
const HOOD = 0xc2703a
const FACE = 0xd8b48a

// Wicket the Ewok: a round furry brown body, an orange-brown leather hood with
// two little ears poking out of it, a tan face with big dark eyes and a nose.
export const look: SkinLook = {
  said: 'Buddy turns into an Ewok. Yub nub!',
  group: 'Star Wars',
  rows: [
    '..........',
    '.BB....BB.',
    '.BHHHHHHB.',
    '.HHHHHHHH.',
    '.HFFFFFFH.',
    '.HFFFFFFH.',
    '..FFnnFF..',
    '..FFFFFF..',
    '.BBLLLLBB.',
    '.BLLLLLLB.',
    '..DBBBBD..',
  ],
  colors: { B: FUR, L: 0xa07a52, D: 0x553d26, H: HOOD, F: FACE, n: 0x3a2a1c },
  eyes: [[3, 5], [6, 5]],
  eyeColor: 0x2a1e18,
  smile: [[4, 7], [5, 7]],
  tear: [3, 6],
  arms: {
    color: 0x8a6a46,
    down: [[0, 8], [0, 9], [9, 8], [9, 9]],
    up: [[0, 5], [0, 6], [9, 5], [9, 6]],
  },
  feet: { color: 0x553d26, at: [3, 6] },
  captions: { idle: 'YUB', happy: 'YUB NUB' },
  critters: {
    // A speeder bike with an orange exhaust glow.
    Explore: { rows: ['.....dd.', '########', 'oo.####.', '.o.dd...'], eye: 1, eyes: [3, 4], arms: false, feet: false, colors: { '#': 0x8c8a86, d: 0x4a4a52, o: 0xe0904a }, tint: 0x8c8a86 },
    // A treehouse hut up in the leaves.
    Plan: { rows: ['.gggggg.', '..hhhh..', '..####..', '...tt...'], eye: 2, eyes: [3, 4], eyeColor: 0x553d26, colors: { '#': 0xa07a52, g: 0x5a8f4a, h: HOOD, t: 0x553d26 }, tint: 0xa07a52 },
    // A baby Ewok in a tiny hood.
    fork: { rows: ['..####..', '.#FFFF#.', '.#FFFF#.', '..bbbb..'], eye: 2, colors: { '#': HOOD, F: FACE, b: FUR }, tint: HOOD },
    // A log trap hung from ropes.
    'general-purpose': { rows: ['.r....r.', '.r####r.', 'o######o', '.dddddd.'], eye: 2, eyes: [3, 4], arms: false, feet: false, colors: { '#': 0x8a6a46, r: 0xc8b088, o: 0xc09a68, d: 0x553d26 }, tint: 0x8a6a46 },
    // A scout trooper helmet.
    other: { rows: ['..####..', '.######.', '.kk##kk.', '..#kk#..'], eye: 2, eyes: [3, 4], eyeColor: 0x3a3a40, arms: false, feet: false, colors: { '#': 0xdcdcd4, k: 0x3a3a40 }, tint: 0xdcdcd4 },
  },
}
