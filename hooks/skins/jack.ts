import type { SkinLook } from './types'

const BONE = 0xf0ebdd
const SUIT = 0x2e2e40
const SOCKET = 0x2a2a38

// Jack Skellington: round white skull, dark sockets, stitched grin, a slim
// pinstriped suit and a bat bow tie.
export const look: SkinLook = {
  said: "Buddy is the Pumpkin King: what's this?",
  group: 'Film & TV',
  rows: [
    '..........',
    '..........',
    '..wwwwww..',
    '.wwwwwwww.',
    '.wkkwwkkw.',
    '.wkkwwkkw.',
    '.wmwmwmwm.',
    '..vvwwvv..',
    '..uwuuwu..',
    '..uu..uu..',
  ],
  colors: { w: BONE, k: SOCKET, m: 0x4a4a60, v: 0x7a7a9c, u: SUIT },
  eyes: [[3, 4], [6, 4]],
  eyeColor: 0x9a9ac0,
  smile: [[2, 6], [4, 6], [6, 6]],
  tear: [3, 5],
  arms: {
    color: SUIT,
    down: [[1, 8], [8, 8], [1, 9], [8, 9]],
    up: [[0, 6], [9, 6], [0, 5], [9, 5]],
  },
  feet: { color: SOCKET, at: [2, 7] },
  captions: { happy: 'BOO!', idle: 'HMM' },
  critters: {
    // Zero, the ghost dog with his glowing nose.
    Explore: { rows: ['.##..##.', '.######.', '..#nn#..', '...##...'], eye: 1, feet: false, colors: { '#': 0xdde4ee, n: 0xe8791f }, tint: 0xe8791f },
    // Sally, patched blue-white with red hair.
    Plan: { rows: ['.hhhhhh.', 'hh####hh', '.#p##p#.', '..####..'], eye: 2, colors: { '#': 0x9cc0e0, h: 0xb8452e, p: 0xe8e0c8 }, tint: 0xb8452e },
    // A mini skull.
    fork: { rows: ['..####..', '.######.', '.#kk#kk.', '..#-#-..'], eye: 2, eyeColor: 0xb0b0d0, colors: { '#': BONE, k: SOCKET }, tint: BONE },
    // A jack-o'-lantern with a lit grin.
    'general-purpose': { rows: ['...g....', '.######.', '##k##k##', '.#yyyy#.'], eye: 2, colors: { '#': 0xe07a24, g: 0x4f8f3a, k: 0x3a2010, y: 0xf2d060 }, tint: 0xe07a24 },
    // Oogie Boogie, a stitched burlap sack.
    other: { rows: ['...tt...', '.######.', '.######.', '.#m--m#.'], eye: 1, colors: { '#': 0xb8975f, t: 0x8a6a3a, m: 0x4a3a22 }, tint: 0xb8975f },
  },
}
