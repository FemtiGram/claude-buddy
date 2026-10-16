import type { SkinLook } from './types'

const WHITE = 0xf2f2ee
const CAP_SHADE = 0xd8dce6
const BLUE = 0x3f8fd6
const NOSE = 0x62aae6
const SUN = 0xf2c230

// A Smurf: white Phrygian cap with its tip folding forward, blue skin, big
// round nose, white trousers and a little tail.
export const look: SkinLook = {
  said: 'Buddy turns into a Smurf!',
  group: 'Cartoons & folklore',
  rows: [
    '...ww.....',
    '..wwwwwwg.',
    '.wwwwwwwg.',
    '.bbbbbbbb.',
    '.bbbnnbbb.',
    '.bbbnnbbb.',
    '.bbbbbbbb.',
    '..bbbbbb..',
    '..wwwwwww.',
    '..wwwwww..',
  ],
  colors: { w: WHITE, g: CAP_SHADE, b: BLUE, n: NOSE },
  eyes: [[3, 3], [6, 3]],
  smile: [[3, 6], [4, 6], [5, 6], [6, 6]],
  tear: [3, 4],
  arms: { color: BLUE, down: [[1, 7], [8, 7]], up: [[0, 5], [9, 5]] },
  feet: { color: BLUE, at: [3, 6] },
  captions: { happy: 'BLUE!', idle: 'HUMM' },
  critters: {
    // Brainy: blue face, white cap, big glasses.
    Explore: { rows: ['..wwww..', '.wwwwww.', '.#l##l#.', '.######.'], eye: 2, colors: { '#': BLUE, w: WHITE, l: 0xe8f0fa }, tint: BLUE },
    // Papa Smurf: red cap, white beard.
    Plan: { rows: ['..rrrr..', '.rrrrrr.', '.######.', '.wwwwww.'], eye: 2, colors: { '#': BLUE, r: 0xd8402e, w: WHITE }, tint: 0xd8402e },
    // Baby Smurf: tiny, in his nappy.
    fork: { rows: ['...ww...', '..####..', '.######.', '..wwww..'], eye: 2, colors: { '#': BLUE, w: WHITE }, tint: NOSE },
    // A mushroom house.
    'general-purpose': { rows: ['.rrrrrr.', 'rwrrrrwr', '.######.', '.##kk##.'], eye: 2, colors: { '#': 0xf0e2b8, r: 0xd8402e, w: WHITE, k: 0x6a4a2a }, tint: 0xd8402e },
    // Smurfette: blond hair.
    other: { rows: ['.wwwwww.', '.yyyyyy.', 'yy####yy', 'y.####.y'], eye: 2, colors: { '#': BLUE, w: WHITE, y: SUN }, tint: SUN },
  },
}
