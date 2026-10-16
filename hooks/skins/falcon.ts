import type { SkinLook } from './types'

const HULL = 0xc8ccc8
const PANEL = 0x8e928e
const GLOW = 0x4aa8ff

// The Millennium Falcon from above: round saucer, two forward mandibles, the
// cockpit tube off to the right, the dish in the middle, engine glow behind.
export const look: SkinLook = {
  said: 'Buddy takes the Millennium Falcon. Punch it!',
  group: 'Sci-fi ships',
  rows: [
    '.mm....mm.',
    '.mm....mm.',
    '.gggddggg.',
    'gdgggggdgc',
    'gggdoodggw',
    'gdgdoodgdc',
    'gggdoodggg',
    '.gdggggdg.',
    '.ggdggdgg.',
  ],
  colors: { g: HULL, d: PANEL, m: 0xa4a8a4, o: 0x6a6e72, c: 0xb4b8b4, w: 0x5a8ab8 },
  eyes: [[3, 3], [6, 3]],
  eyeColor: 0x3a6aa0,
  smile: [[4, 7], [5, 7]],
  tear: [2, 6],
  feet: { color: GLOW, at: [2, 4, 5, 7] },
  captions: { happy: 'PUNCH IT', idle: 'HMM' },
  critters: {
    // A mynock, the space bat.
    Explore: { rows: ['#..##..#', '##.##.##', '.######.', '..k..k..'], eye: 2, feet: false, colors: { '#': 0x8a7a6a, k: 0x4a3a2a }, tint: 0x8a7a6a },
    // A dejarik holo-chess board.
    Plan: { rows: ['#b#b#b#b', 'b#b#b#b#', '#b#b#b#b', 'b#b#b#b#'], eye: 1, feet: false, arms: false, colors: { '#': 0x3aa0a0, b: 0x1f5a6a }, tint: 0x3aa0a0 },
    // A little escape pod.
    fork: { rows: ['..####..', '.##ww##.', '.##ww##.', '..####..'], eye: 1, feet: false, colors: { '#': 0xd9803a, w: 0x7ab8e0 }, tint: 0xd9803a },
    // A remote training droid ball.
    'general-purpose': { rows: ['..####..', '.##rr##.', '.######.', '..####..'], eye: 2, feet: false, arms: false, colors: { '#': 0xa0a8b0, r: 0xe05050 }, tint: 0xe05050 },
    // A Cloud City car.
    other: { rows: ['...kk...', '.######.', '########', '..-..-..'], eye: 1, feet: false, colors: { '#': 0xd8cfa8, k: 0x4a4a5a }, tint: 0xd8cfa8 },
  },
}
