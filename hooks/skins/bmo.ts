import type { SkinLook } from './types'

const BODY = 0x6ec6b0
const LIGHT = 0xa6e4d4
const DARK = 0x3a8a7c
const SCREEN = 0xd4f6dc

// BMO: a little teal game console with a pale green screen for a face, the
// disc slot, a yellow D-pad and the coloured buttons below.
export const look: SkinLook = {
  said: 'Buddy boots up as BMO. Who wants to play video games?',
  group: 'TV cartoons',
  rows: [
    '..........',
    '.dddddddd.',
    '.dllttttd.',
    '.dssssssd.',
    '.dssssssd.',
    '.dssssssd.',
    '.dtkkkktd.',
    '.dtytttbd.',
    '.dyyytgrd.',
    '.dtyttttd.',
    '.dddddddd.',
  ],
  colors: { t: BODY, l: LIGHT, d: DARK, s: SCREEN, k: 0x24524a, y: 0xf2c230, b: 0x3a6fd8, g: 0x40b050, r: 0xe0342b },
  eyes: [[3, 3], [6, 3]],
  eyeColor: 0x1e3a30,
  smile: [[3, 4], [4, 5], [5, 5], [6, 4]],
  tear: [2, 4],
  arms: { color: BODY, down: [[0, 8], [9, 8]], up: [[0, 5], [9, 5]] },
  feet: { color: BODY, at: [3, 6] },
  captions: { happy: 'YAAAY!', idle: 'BEEP' },
  critters: {
    // The Earl of Lemongrab: a pointy lemon head over a grey suit.
    Explore: { rows: ['...#....', '..####..', '..#mm#..', '.kkkkkk.'], eye: 1, colors: { '#': 0xf2e050, m: 0x5a3a20, k: 0x7a7a98 }, tint: 0xf2e050 },
    // NEPTR, the pie-throwing robot, on his wheel with a pie.
    Plan: { rows: ['..####..', '.######.', 'p######.', '..----..'], eye: 1, feet: false, colors: { '#': 0xa8b0bc, p: 0xe8c070 }, tint: 0xa8b0bc },
    // A mini BMO with its screen and buttons.
    fork: { rows: ['.######.', '.#ssss#.', '.#ssss#.', '.#y#r##.'], eye: 1, eyes: [3, 4], colors: { '#': BODY, s: SCREEN, y: 0xf2c230, r: 0xe0342b }, tint: BODY },
    // Cinnamon Bun: a brown bun with white icing.
    'general-purpose': { rows: ['.wwwwww.', '########', '#-####-#', '.######.'], eye: 2, colors: { '#': 0xc8844a, w: 0xf4ece0 }, tint: 0xc8844a },
    // Flame Princess: flame hair with a yellow gem, orange face.
    other: { rows: ['.o.yy.o.', '.oooooo.', '.######.', '..rrrr..'], eye: 2, colors: { '#': 0xf09040, o: 0xe84a28, y: 0xf2d040, r: 0xc83020 }, tint: 0xe84a28 },
  },
}
