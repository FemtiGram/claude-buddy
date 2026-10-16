import type { SkinLook } from './types'

const YELLOW = 0xffe000

const ghost = (eyeRow: string[], base: number, eyes?: number[]) => ({ rows: eyeRow, eye: eyeRow.findIndex(r => r.includes('w')), eyes, colors: { '#': base, w: 0xe6e6e6 }, tint: base })

// Pac-Man: a yellow disc with a wedge mouth opening right, one eye, a cherry
// on top and a pellet to eat.
export const look: SkinLook = {
  said: 'Buddy turns into Pac-Man. Waka waka!',
  group: 'Games',
  rows: [
    '......s...',
    '....rr.rr.',
    '..yyyyyy..',
    '.yyyyyyyy.',
    'yyyyyyyy..',
    'yyyyy..p..',
    'yyyyyyyy..',
    '.yyyyyyyy.',
    '..yyyyyy..',
  ],
  colors: { y: YELLOW, r: 0xe03838, s: 0x3a9a3a, p: 0xe6e6e6 },
  eyes: [[5, 3]],
  smile: [[2, 5], [3, 5], [4, 5]],
  tear: [4, 4],
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
