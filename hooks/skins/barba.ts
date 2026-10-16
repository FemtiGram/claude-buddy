import type { SkinLook } from './types'

// Barbapapa: a pink pear-shaped blob, and the Barba family as minis.
export const look: SkinLook = {
  said: 'Buddy turns into Barbapapa!',
  group: 'Cartoons & folklore',
  rows: [
    '..........',
    '....pp....',
    '...pppp...',
    '..pppppp..',
    '..pppppp..',
    '..pppppp..',
    '.pppppppp.',
    '.pppppppp.',
    'pppppppppp',
    'dddddddddd',
    '.dddddddd.',
  ],
  colors: { p: 0xf06fa8, d: 0xd4538f },
  eyes: [[3, 3], [6, 3]],
  smile: [[4, 4], [5, 4]],
  tear: [3, 4],
  arms: {
    color: 0xd4538f,
    down: [[0, 7], [9, 7]],
    up: [[1, 4], [8, 4]],
  },
  feet: { color: 0xd4538f, at: [2, 7] },
  captions: { happy: 'DONE', idle: 'BLOB' },
  critters: {
    Explore: {
      rows: ['..####..', '.g#gg#g.', '########', '-######-'],
      eye: 1,
      colors: { '#': 0x4f9fe0, '-': 0x3a7fba, g: 0xe8e8ee },
      tint: 0x4f9fe0,
    },
    Plan: {
      rows: ['..#bb#..', '.######.', '########', '-######-'],
      eye: 1,
      eyeColor: 0xf0e4f6,
      colors: { '#': 0x6e5d80, '-': 0x56486a, b: 0xf06fa8 },
      tint: 0x9a86b0,
    },
    fork: {
      rows: ['.....##.', '..####..', '.######.', '-######-'],
      eye: 1,
      colors: { '#': 0xf7a1c4, '-': 0xe083ab },
      tint: 0xf7a1c4,
    },
    'general-purpose': {
      rows: ['...##...', '..####..', '.######.', '########'],
      eye: 1,
      colors: { '#': 0xf06fa8, '-': 0xd4538f },
      tint: 0xf06fa8,
    },
    other: {
      rows: ['..####..', '.######.', '########', '-######-'],
      eye: 1,
      colors: { '#': 0xf2a03a, '-': 0xd5842a },
      tint: 0xf2a03a,
    },
  },
}
