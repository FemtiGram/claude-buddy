import type { SkinLook } from './types'

const BLUE = 0x0078fc
const CYAN = 0x00f8fc
const SKIN = 0xffcca8

// Mega Man, NES style: blue helmet with cyan panels, arm cannon, blue boots.
export const look: SkinLook = {
  said: 'Buddy turns into Mega Man!',
  group: 'Games',
  rows: [
    '...bbbb...',
    '..bbccbb..',
    '.bbbbbbbb.',
    '.bssssssb.',
    '..bssssb..',
    '..bbbbbb..',
    '..bccccb..',
    '..bbbbbb..',
    '..bb..bb..',
  ],
  colors: { b: BLUE, c: CYAN, s: SKIN },
  eyes: [[3, 3], [6, 3]],
  eyeColor: 0x2a2a44,
  smile: [[4, 4], [5, 4]],
  tear: [3, 4],
  arms: { color: CYAN, down: [[1, 6], [8, 6]], up: [[1, 5], [8, 5]] },
  feet: { color: 0x0058c8, at: [3, 6] },
  captions: { happy: 'GOOD', idle: 'GO' },
  critters: {
    // Met: a yellow hard hat over a face.
    Explore: { rows: ['..####..', '.######.', '.ssssss.', '..s..s..'], eye: 2, colors: { '#': 0xe8c02a, s: 0xf0d8a8 }, tint: 0xe8c02a },
    // Dr. Light: blue cap, white beard, lab coat.
    Plan: { rows: ['..bbbb..', '.bssssb.', '.wwwwww.', '.######.'], eye: 1, colors: { '#': 0xc0c8d8, b: 0x3a6fd8, s: SKIN, w: 0xe6e6ee }, tint: 0xe6e6ee },
    // Rush: the red robot dog.
    fork: { rows: ['.rr..rr.', '.######.', '.######.', '.w.rr.w.'], eye: 1, colors: { '#': 0xe0342b, r: 0xb02420, w: 0xe6e6ee }, tint: 0xe0342b },
    // Eddie: red helper with a yellow flip-top lid.
    'general-purpose': { rows: ['.yyyyyy.', 'yy####yy', '.######.', '.y.yy.y.'], eye: 2, eyeColor: 0xf2d040, colors: { '#': 0xd0342c, y: 0xf2c230 }, tint: 0xf2c230 },
    // E-tank: a blue canister with a window.
    other: { rows: ['..cccc..', '.######.', '.#wwww#.', '.######.'], eye: 1, feet: false, arms: false, colors: { '#': 0x3c78d8, c: 0xa8c8f0, w: 0xf0e8c0 }, tint: 0x3c78d8 },
  },
}
