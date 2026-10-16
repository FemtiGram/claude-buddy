import type { SkinLook } from './types'

const BLUE = 0x4a7fd8
const NAVY = 0x223a8a
const PALE = 0xa8d0f4
const PINK = 0xf08ab0

// Stitch, Experiment 626: big notched ears with pink insides, a wide blue
// head, pale patches around the eyes and chest, a dark navy nose.
export const look: SkinLook = {
  said: 'Buddy turns into Stitch: ohana means family!',
  group: 'Pixar & Disney',
  rows: [
    'ee......ee',
    'ekhbbbbbke',
    '.bhbbbbbb.',
    '.bllbbllb.',
    '.bbbnnbbb.',
    '..bllllb..',
    '...bllb...',
    '..bbllbb..',
    '..bbllbb..',
    '...b..b...',
  ],
  colors: { b: BLUE, h: 0x7aa8ec, e: NAVY, k: PINK, l: PALE, n: NAVY },
  eyes: [[3, 3], [6, 3]],
  eyeColor: 0x10142a,
  smile: [[3, 5], [4, 5], [5, 5], [6, 5]],
  tear: [2, 4],
  arms: { color: BLUE, down: [[1, 7], [8, 7]], up: [[1, 5], [8, 5]] },
  feet: { color: NAVY, at: [3, 6] },
  captions: { idle: 'ALOHA', happy: 'OHANA!' },
  critters: {
    // Pleakley: a green one-eyed alien on his tall stalk.
    Explore: { rows: ['...##...', '..####..', '...##...', '..####..'], eye: 1, eyes: [3], colors: { '#': 0x9cc85a }, tint: 0x9cc85a },
    // Jumba: big round purple genius with four eyes.
    Plan: { rows: ['..####..', '########', '########', '.------.'], eye: 1, eyes: [1, 3, 4, 6], colors: { '#': 0x8a5ab8 }, tint: 0x8a5ab8 },
    // A mini Stitch: ears up, pale eye patches, navy nose.
    fork: { rows: ['#......#', '.#l##l#.', '..#nn#..', '..#ll#..'], eye: 1, colors: { '#': BLUE, l: PALE, n: NAVY }, tint: BLUE },
    // Scrump: Lilo's green rag doll with black tufts of hair.
    'general-purpose': { rows: ['.k.kk.k.', '.######.', '.######.', '..#--#..'], eye: 1, colors: { '#': 0x7a9a6a, k: 0x2a2a2a }, tint: 0x7a9a6a },
    // Angel, Experiment 624: pink, with long antennae and pale eye patches.
    other: { rows: ['#......#', '.#....#.', '.w####w.', '..####..'], eye: 2, eyes: [1, 6], colors: { '#': 0xe87ab8, w: 0xf8d8ec }, tint: 0xe87ab8 },
  },
}
