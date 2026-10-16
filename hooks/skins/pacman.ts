import type { SkinLook } from './types'

const YELLOW = 0xffe000

const ghost = (eyeRow: string[], base: number, eyes?: number[]) => ({ rows: eyeRow, eye: eyeRow.findIndex(r => r.includes('w')), eyes, colors: { '#': base, w: 0xe6e6e6 }, tint: base })

// Pac-Man: a yellow disc with a wedge mouth opening right, one eye, a shaded
// lower-left and a pellet to eat.
export const look: SkinLook = {
  said: 'Buddy turns into Pac-Man. Waka waka!',
  group: 'Games',
  rows: [
    '..yyyyyy..',
    '.yyyyyyyy.',
    'yyyyyyy...',
    'yyyyy....p',
    'oyyyyyy...',
    '.ooyyyyyy.',
    '..oyyyyy..',
  ],
  colors: { y: YELLOW, o: 0xc9a400, p: 0xff9a8c },
  eyes: [[5, 1]],
  smile: [[2, 3], [3, 3], [4, 3]],
  tear: [4, 2],
  captions: { happy: 'CHOMP', idle: 'WOKKO' },
  critters: {
    // Blinky: red, looking right.
    Explore: ghost(['..####..', '.#ww#ww.', '########', '##.##.##'], 0xe03838, [3, 6]),
    // Pinky: pink, looking left.
    Plan: ghost(['..####..', '.#ww#ww.', '########', '#.#..#.#'], 0xf08ac8, [2, 5]),
    // Inky: cyan, eyes low.
    fork: ghost(['..####..', '.######.', '#ww##ww#', '##.##.##'], 0x38c8d8, [1, 6]),
    // Clyde: orange, cross-eyed.
    'general-purpose': ghost(['.######.', '.ww##ww.', '########', '#.#..#.#'], 0xf09838, [2, 5]),
    // Frightened: blue, wavy mouth, scared eyes.
    other: { rows: ['..####..', '.######.', '#w#w#w#w', '##.##.##'], eye: 1, eyeColor: 0xf0d0b0, colors: { '#': 0x3050c0, w: 0xf0d0b0 }, tint: 0x3050c0 },
  },
}
