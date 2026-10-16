import type { SkinLook } from './types'

const TAN = 0x9a8a6e
const DARK = 0x6e604a
const RUST = 0xa0582e
const GLOW = 0xffb040

// Serenity, a Firefly-class transport: a rounded bridge with big windows, a
// neck, a bulbous cargo body and two engine pods glowing at the back.
export const look: SkinLook = {
  said: 'Buddy flies Serenity. Shiny!',
  group: 'Sci-fi ships',
  rows: [
    '..........',
    '..dtttd...',
    '.dwwwwwd..',
    '.dtttttd..',
    '..dtttd...',
    '.tttttttdp',
    'ttttrtttpp',
    'tdtttttdpp',
    '.dddddddd.',
  ],
  colors: { t: TAN, d: DARK, r: RUST, w: 0x9ad0e0, p: GLOW },
  eyes: [[2, 2], [4, 2]],
  smile: [[3, 6], [4, 6], [5, 6]],
  tear: [1, 7],
  feet: { color: GLOW, at: [8, 9] },
  captions: { happy: 'SHINY!', idle: 'HMM' },
  critters: {
    // The shuttle.
    Explore: { rows: ['...##...', '..####..', '#wwwwww#', '.s....s.'], eye: 2, feet: false, arms: false, colors: { '#': TAN, w: 0x9ad0e0, s: DARK }, tint: TAN },
    // Mal's brown coat, pistol on the hip.
    Plan: { rows: ['..hhhh..', '.#hhhh#.', '.######.', '.#k##k#.'], eye: 1, colors: { '#': 0x8a5a3a, h: 0xe0b090, k: 0x4a4a58 }, tint: 0x8a5a3a },
    // Jayne's orange knit cap.
    fork: { rows: ['...yy...', '..####..', '.#hhhh#.', '.#h##h#.'], eye: 2, colors: { '#': 0xe87a1a, y: 0xf0c060, h: 0xe0b090 }, tint: 0xe87a1a },
    // A Reaver ship.
    'general-purpose': { rows: ['#.#..#.#', '.######.', '########', '.######.'], eye: 2, eyeColor: 0xd04040, feet: false, arms: false, colors: { '#': 0x5a2a34 }, tint: 0xd04040 },
    // Wash's plastic dinosaur.
    other: { rows: ['.##.....', '###...#.', '########', '.#.##.#.'], eye: 1, eyes: [1], colors: { '#': 0x4aa86a }, tint: 0x4aa86a },
  },
}
