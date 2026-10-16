import type { SkinLook } from './types'

const HULL = 0xd0d4d0
const PANEL = 0x8e928e
const DARK = 0x4a4e52
const GLOW = 0x4aa8ff

// The Millennium Falcon from above: round saucer, two forward mandibles, the
// cockpit tube off to the right, the dish ringed in the middle, engine glow behind.
export const look: SkinLook = {
  said: 'Buddy takes the Millennium Falcon. Punch it!',
  group: 'Sci-fi ships',
  rows: [
    'ggkkkkkgg.',
    'ggkkkkkggw',
    'gggkkkgggd',
    'ggggggggg.',
    'ggggggggd.',
    'gggkkkggd.',
    'gggkgkgdd.',
    'gggkkkgdd.',
    '.ggggggd..',
    '..ggggd...',
  ],
  colors: { g: HULL, d: PANEL, k: DARK, w: 0x4a90d8 },
  eyes: [[2, 4], [6, 4]],
  eyeColor: 0x2a6ab0,
  smile: [[3, 8], [5, 8]],
  smileColor: 0x6ac0ff,
  tear: [2, 6],
  feet: { color: GLOW, at: [2, 4, 5, 6] },
  captions: { happy: 'PUNCH IT', idle: 'HMM' },
  critters: {
    // A mynock, the space bat.
    Explore: { rows: ['#..##..#', '##.##.##', '.######.', '..k..k..'], eye: 2, feet: false, colors: { '#': 0x8a7a6a, k: 0x4a3a2a }, tint: 0x8a7a6a },
    // A dejarik holo-chess board.
    Plan: { rows: ['.#.##.#.', '########', '.#.##.#.', '.#-..-#.'], eye: 1, eyes: [2, 5], feet: false, arms: false, colors: { '#': 0x3aa0a0 }, tint: 0x3aa0a0 },
    // A little escape pod.
    fork: { rows: ['..####..', '.##ww##.', '.##ww##.', '..####..'], eye: 1, feet: false, colors: { '#': 0xd9803a, w: 0x7ab8e0 }, tint: 0xd9803a },
    // A remote training droid ball.
    'general-purpose': { rows: ['..####..', '.##rr##.', '.######.', '..####..'], eye: 2, feet: false, arms: false, colors: { '#': 0xa0a8b0, r: 0xe05050 }, tint: 0xe05050 },
    // A Cloud City car.
    other: { rows: ['...kk...', '.######.', '########', '..-..-..'], eye: 1, feet: false, colors: { '#': 0xd8cfa8, k: 0x4a4a5a }, tint: 0xd8cfa8 },
  },
}
