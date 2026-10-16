import type { SkinLook } from './types'

const SKIN = 0x7fa860

// Frankenstein's monster, Universal 1931: flat-topped head under dark hair, a
// scar over a heavy brow, a stitched mouth, grey neck bolts, a too-small jacket.
export const look: SkinLook = {
  said: "Buddy turns into Frankenstein's monster. It's alive!",
  group: 'Horror',
  rows: [
    '..........',
    '..HHHHHH..',
    '..HHHHHH..',
    '..HH##HH..',
    '..ssssss..',
    '..mmmmmm..',
    '.b######b.',
    '..######..',
    '..#mmmm#..',
    '.jjjjjjjj.',
    '..jjjjjj..',
  ],
  colors: { H: 0x4a4458, '#': SKIN, s: 0x4a7038, m: 0x3a3548, b: 0xb8bcc4, j: 0x5a5e72 },
  eyes: [[3, 6], [6, 6]],
  eyeColor: 0x2a2838,
  smile: [[2, 8], [7, 8]],
  tear: [3, 7],
  arms: { color: SKIN, down: [[0, 9], [9, 9]], up: [[0, 7], [9, 7]] },
  feet: { color: 0x3f3a50, at: [2, 7] },
  captions: { idle: 'GRRR', happy: 'NICE' },
  critters: {
    // A neck bolt holding up a lens.
    Explore: { rows: ['..##.LL.', '.##.L..L', '..##.LL.', '.##.....'], eye: 1, eyes: [2], colors: { '#': 0xb8bcc4, L: 0x7ac0d8 }, tint: 0xb8bcc4 },
    // A lightning rod with a spark on top.
    Plan: { rows: ['....y...', '...y.y..', '...##...', '..####..'], eye: 2, eyes: [3, 4], colors: { '#': 0x9094b0, y: 0xffd040 }, tint: 0xffd040 },
    // A stitched little copy of him.
    fork: { rows: ['.HHHHHH.', '.######.', '.#-xx-#.', '..jjjj..'], eye: 1, colors: { '#': SKIN, H: 0x4a4458, x: 0x3a3548, j: 0x5a5e72 }, tint: SKIN },
    // A lab lever thrown over, red knob up top.
    'general-purpose': { rows: ['......rr', '.....##.', '....##..', '.######.'], eye: 2, eyes: [4, 5], feet: false, arms: false, colors: { '#': 0x8a90a8, r: 0xe05070 }, tint: 0xe05070 },
    // A candle with a flame.
    other: { rows: ['...yy...', '...ww...', '..####..', '..####..'], eye: 2, eyes: [3, 4], feet: false, arms: false, colors: { '#': 0xe8dcc0, y: 0xffb040, w: 0xb0a080 }, tint: 0xffb040 },
  },
}
