import type { SkinLook } from './types'

const YELLOW = 0xf7d32e
const BLUE = 0x3f6fb5
const DARK = 0x3a3a44

// A Minion: yellow capsule, one big goggle on a black strap, hair strands,
// denim overalls with a pocket, black gloves and shoes.
export const look: SkinLook = {
  said: 'Buddy turns into a Minion. Bello!',
  group: 'Film & TV',
  rows: [
    '....k.k...',
    '.....k....',
    '..yyyyyy..',
    '.kggggggk.',
    '.ygwwwwgy.',
    '.ygwiiwgy.',
    '.yyyyyyyy.',
    '.yybbbbyy.',
    '.yybpbbyy.',
    '..bbbbbb..',
  ],
  colors: { y: YELLOW, k: DARK, g: 0x8e949c, w: 0xeef0f2, i: 0x8a5a2b, b: BLUE, p: 0x2f558f },
  eyes: [[4, 5], [5, 5]],
  eyeColor: 0x2a1a0a,
  smile: [[4, 6], [5, 6]],
  tear: [3, 5],
  arms: { color: DARK, down: [[0, 7], [9, 7]], up: [[0, 5], [9, 5]] },
  feet: { color: DARK, at: [3, 6] },
  captions: { happy: 'BANANA!', idle: 'BELLO' },
  critters: {
    // One-eyed minion with a magnifier.
    Explore: { rows: ['..####..', '.#gwwg#m', '.#####m.', '..-##-..'], eye: 1, eyes: [4], colors: { '#': YELLOW, g: 0x8e949c, w: 0xeef0f2, m: 0xc8ccd2 }, tint: YELLOW },
    // Tall thin minion.
    Plan: { rows: ['...k....', '..####..', '..#gg#..', '..bbbb..'], eye: 2, eyes: [3, 4], colors: { '#': YELLOW, k: DARK, g: 0x8e949c, b: BLUE }, tint: YELLOW },
    // Purple evil minion.
    fork: { rows: ['k..##..k', '.######.', '.#gwwg#.', '..bbbb..'], eye: 2, eyes: [3, 4], colors: { '#': 0x7b4fa8, k: 0x3a3a44, g: 0x8e949c, w: 0xeef0f2, b: 0x4a3070 }, tint: 0x7b4fa8 },
    // A banana.
    'general-purpose': { rows: ['......#k', '....###.', '..####..', '.##k....'], eye: 2, feet: false, colors: { '#': 0xf2d84a, k: 0x6a5a20 }, tint: 0xf2d84a },
    // A fluffy unicorn plush.
    other: { rows: ['..my.m..', '.######.', '.######.', '..####..'], eye: 1, colors: { '#': 0xf0b8d8, m: 0x5bc0be, y: 0xf2c230 }, tint: 0xf0b8d8 },
  },
}
