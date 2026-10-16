import type { SkinLook } from './types'

const BLUE = 0x4a7fd8
const LIGHT = 0x7aa8ec
const NAVY = 0x1c2c6a
const PALE = 0xa8d0f4
const PINK = 0xf08ab0

// Stitch, Experiment 626: huge ears flaring out to the corners with pink
// insides, a head far wider than his little body, big dark glassy eyes, a
// fat navy nose over a wide grin, and a pale belly patch.
export const look: SkinLook = {
  said: 'Buddy turns into Stitch: ohana means family!',
  group: 'Pixar & Disney',
  rows: [
    'bb......bb',
    'bkb....bkb',
    'bkkbhhbkkb',
    'bhgnbbngbb',
    'bblbnnblbb',
    '.bbllllbb.',
    '..bbbbbb..',
    '..bllllb..',
    '..bllllb..',
    '..bbbbbb..',
  ],
  colors: { b: BLUE, h: LIGHT, k: PINK, n: NAVY, l: PALE, g: 0xe8f4ff },
  eyes: [[3, 3], [6, 3]],
  eyeColor: 0x0c1230,
  smile: [[3, 5], [4, 5], [5, 5], [6, 5]],
  tear: [2, 4],
  arms: { color: BLUE, down: [[1, 7], [8, 7]], up: [[0, 5], [9, 5]] },
  feet: { color: NAVY, at: [3, 6] },
  captions: { idle: 'ALOHA', happy: 'OHANA!' },
  critters: {
    // Pleakley: a tall, thin green alien with one big eye on a stalk.
    Explore: { rows: ['..####..', '..#ww#..', '...##...', '..#--#..'], eye: 1, eyes: [4], colors: { '#': 0x9cc85a, w: 0xf4f4ea }, tint: 0x9cc85a },
    // Jumba: big round purple genius with four eyes.
    Plan: { rows: ['..####..', '########', '########', '.------.'], eye: 1, eyes: [1, 3, 4, 6], colors: { '#': 0x8a5ab8 }, tint: 0x8a5ab8 },
    // A mini Stitch: wide ears, big dark eyes, navy nose.
    fork: { rows: ['k#....#k', '########', '#n#nn#n#', '..####..'], eye: 2, eyes: [1, 6], eyeColor: PALE, colors: { '#': BLUE, k: PINK, n: NAVY }, tint: BLUE },
    // Scrump: Lilo's green rag doll with black tufts of hair.
    'general-purpose': { rows: ['.k.kk.k.', '.######.', '.######.', '..#--#..'], eye: 1, colors: { '#': 0x7a9a6a, k: 0x2a2a2a }, tint: 0x7a9a6a },
    // Angel, Experiment 624: pink, with long antennae and pale eye patches.
    other: { rows: ['#......#', '.#....#.', '.w####w.', '..####..'], eye: 2, eyes: [1, 6], colors: { '#': 0xe87ab8, w: 0xf8d8ec }, tint: 0xe87ab8 },
  },
}
