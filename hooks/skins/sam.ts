import type { SkinLook } from './types'

const TAN = 0xcfa86e
const SEAM = 0x7a4e2c
const ORANGE = 0xf08a24

// Sam from Trick 'r Treat: orange footie pyjamas, a burlap sack over his head
// with a stitched seam and mouth, two button eyes and a pink lollipop.
export const look: SkinLook = {
  said: 'Buddy pulls on the sack: trick or treat!',
  rows: [
    '...t..t...',
    '..tttttt..',
    '.tttttttt.',
    '.tttttttt.',
    '.tstststt.',
    '..ssssss.P',
    '.ooooooooP',
    '.ooooooook',
    '..oooooo..',
  ],
  colors: { t: TAN, s: SEAM, o: ORANGE, P: 0xe8456a, k: 0xd8d0c0 },
  eyes: [[3, 3], [6, 3]],
  eyeColor: 0x3a2e48,
  smile: [[2, 4], [4, 4], [6, 4]],
  tear: [3, 4],
  arms: {
    color: 0xe07a1c,
    down: [[0, 7], [9, 8]],
    up: [[0, 4], [9, 4]],
  },
  feet: { color: 0xc86a14, at: [3, 6] },
  captions: { idle: 'TRICK', happy: 'SWEET' },
  critters: {
    // A little jack-o'-lantern with a flashlight.
    Explore: { rows: ['...g....', '.######.', '.######f', '..####yy'], eye: 1, eyeColor: 0xffe640, colors: { '#': 0xe8801c, g: 0x6a9a3a, f: 0x7a8aa0, y: 0xffe98a }, tint: 0xe8801c },
    // A candy list on a scroll.
    Plan: { rows: ['.cccccc.', '.######.', '.#llll#.', '.cccccc.'], eye: 1, colors: { '#': 0xe0cfa0, c: 0xa8824c, l: 0x9a6a8a }, tint: 0xc8a860 },
    // A mini sack-head Sam.
    fork: { rows: ['..####..', '.######.', '..oooo..', '..o..o..'], eye: 1, feet: false, colors: { '#': TAN, o: ORANGE }, tint: ORANGE },
    // A wrapped candy.
    'general-purpose': { rows: ['#..pp..#', '########', '#..pp..#', '..####..'], eye: 1, feet: false, arms: false, colors: { '#': 0xe8689a, p: 0xf0e0a0 }, tint: 0xe8689a },
    // A carved pumpkin.
    other: { rows: ['...gg...', '.##-##..', '########', '.######.'], eye: 2, eyeColor: 0xffe640, feet: false, arms: false, colors: { '#': 0xd96a12, g: 0x5f8a30 }, tint: 0xd96a12 },
  },
}
