import type { SkinLook } from './types'

const HEAD = 0xe8ecdf
const SHADE = 0xa8b89a

// A kodama: a small pale tree spirit with a big, oddly tilted round head,
// three dark holes, a thin body and stick arms.
export const look: SkinLook = {
  said: 'Buddy turns into a kodama. *rattle*',
  group: 'Ghibli',
  rows: [
    '..........',
    '..........',
    '...hhhhh..',
    '..hhhhhhh.',
    '..hhhhhhh.',
    '..shhdhs..',
    '....ss....',
    '....bb....',
    '....bb....',
    '....bb....',
  ],
  colors: { h: HEAD, s: SHADE, d: 0x3a4a3a, b: 0xc5cfb5 },
  eyes: [[3, 4], [6, 4]],
  eyeColor: 0x3a4a3a,
  smile: [[4, 5], [5, 5]],
  tear: [3, 5],
  arms: {
    color: SHADE,
    down: [[3, 7], [3, 8], [6, 7], [6, 8]],
    up: [[3, 6], [2, 6], [7, 6], [6, 6]],
  },
  feet: { color: SHADE, at: [4, 5] },
  captions: { idle: 'CLICK', happy: 'HEHE' },
  critters: {
    // Head cocked to one side.
    Explore: { rows: ['.#####..', '.######.', '....##..', '....##..'], eye: 1, arms: false, colors: { '#': 0xe8ecdf }, tint: 0xa8b89a },
    // Two heads.
    Plan: { rows: ['.##..##.', '.##..##.', '..####..', '...##...'], eye: 0, eyes: [2, 5], arms: false, colors: { '#': 0xe8ecdf }, tint: 0xa8b89a },
    // A tiny seedling kodama.
    fork: { rows: ['...gg...', '..####..', '..####..', '...##...'], eye: 1, arms: false, colors: { '#': 0xe8ecdf, g: 0x6fa85a }, tint: 0x6fa85a },
    // The standard one.
    'general-purpose': { rows: ['.######.', '.######.', '...##...', '..#..#..'], eye: 1, arms: false, feet: false, colors: { '#': 0xe8ecdf }, tint: 0xa8b89a },
    // One wearing a mushroom cap.
    other: { rows: ['.mmmmmm.', '..####..', '..####..', '...##...'], eye: 1, arms: false, colors: { '#': 0xe8ecdf, m: 0xb8644e }, tint: 0xb8644e },
  },
}
