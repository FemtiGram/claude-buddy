import type { SkinLook } from './types'

const RED = 0xd8304a
const BLACK = 0x2e2e3a
const WHITE = 0xf0eee8

// Harley Quinn: a two-tone jester hat with bells, a white face and black eye
// mask, a harlequin bodysuit, a white ruff and a big mallet.
export const look: SkinLook = {
  said: "Buddy suits up as Harley Quinn. Hiya, puddin'!",
  group: 'DC',
  rows: [
    'wr......bw',
    '.rrrrbbbb.',
    '.wwwwwwww.',
    '.wkkwwkkw.',
    '.wwwrrwwwm',
    '.wwwwwwwwm',
    '.rbrbrbrb.',
    '.brbrbrbr.',
    '.rbrbrbrb.',
    '..brbrbr..',
  ],
  colors: { w: WHITE, r: RED, b: BLACK, k: BLACK, m: 0x8a8a98 },
  eyes: [[3, 3], [6, 3]],
  eyeColor: WHITE,
  smile: [[4, 4], [5, 4]],
  smileColor: 0x2c2c38,
  tear: [2, 4],
  arms: { color: 0xc08a50, down: [[0, 7], [9, 6], [9, 7], [9, 8]], up: [[0, 5], [9, 6], [9, 7], [9, 8]] },
  feet: { color: RED, at: [3, 6] },
  captions: { happy: 'PUDDIN', idle: 'HI HI' },
  critters: {
    // A spotted hyena.
    Explore: { rows: ['##....##', '.##k##k.', '.#k####.', '..#kk#..'], eye: 1, feet: false, colors: { '#': 0xc8a060, k: 0x5a4a3a }, tint: 0xc8a060 },
    // A mallet.
    Plan: { rows: ['.######.', '.######.', '...ww...', '...ww...'], eye: 1, feet: false, arms: false, colors: { '#': RED, w: 0xc08a50 }, tint: RED },
    // A mini jester hat.
    fork: { rows: ['w......w', '.##..kk.', '.##kkkk.', '.wwwwww.'], eye: 2, eyeColor: WHITE, feet: false, arms: false, colors: { '#': RED, k: BLACK, w: WHITE }, tint: RED },
    // A bubble-gum bubble.
    'general-purpose': { rows: ['..####..', '.#w####.', '.######.', '..####..'], eye: 2, feet: false, arms: false, colors: { '#': 0xf080b8, w: 0xffc0dc }, tint: 0xf080b8 },
    // A roller skate.
    other: { rows: ['.##.....', '.##.....', '.#######', '.o.oo.o.'], eye: 2, feet: false, arms: false, colors: { '#': 0x3aa0b0, o: 0xa8a0b8 }, tint: 0x3aa0b0 },
  },
}
