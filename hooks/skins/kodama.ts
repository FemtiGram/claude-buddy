import type { SkinLook } from './types'

const HEAD = 0xe8ecdf
const EDGE = 0x8a9a7a

// A kodama: a small pale tree spirit with a big, oddly tilted round head,
// three dark holes, a thin body and stick arms.
export const look: SkinLook = {
  said: 'Buddy turns into a kodama. *rattle*',
  group: 'Ghibli',
  rows: [
    '..........',
    '..........',
    '...hhhhh..',
    '..hhhhhhs.',
    '..hhhhhhs.',
    '..hhhdhs..',
    '...ssss...',
    '....bs....',
    '....bs....',
    '....bs....',
  ],
  colors: { h: HEAD, s: EDGE, d: 0x3a4a3a, b: 0xd8e8c8 },
  eyes: [[3, 4], [6, 4]],
  eyeColor: 0x3a4a3a,
  smile: [[4, 5], [5, 5]],
  tear: [3, 5],
  arms: {
    color: EDGE,
    down: [[3, 7], [3, 8], [6, 7], [6, 8]],
    up: [[2, 6], [1, 6], [7, 6], [8, 6]],
  },
  feet: { color: EDGE, at: [4, 5] },
  captions: { idle: 'CLICK', happy: 'HEHE' },
  critters: {
    // An explorer with a walking stick, head cocked.
    Explore: { rows: ['.#####.k', '.######k', '....#-.k', '....-#.k'], eye: 1, arms: false, colors: { '#': 0xb8d89a, k: 0x8a6a40 }, tint: 0x8fbf6a },
    // Two heads, aqua.
    Plan: { rows: ['.##..##.', '.##..##.', '..####..', '...-#...'], eye: 0, eyes: [2, 5], arms: false, colors: { '#': 0x9ccfc8 }, tint: 0x6fb5ac },
    // A tiny seedling kodama with a two-leaf sprout.
    fork: { rows: ['..g..g..', '...gg...', '..####..', '..-##-..'], eye: 2, arms: false, colors: { '#': 0xdcecb0, g: 0x5a9a48 }, tint: 0x5a9a48 },
    // A wide, squat one.
    'general-purpose': { rows: ['.######.', '########', '.######.', '..-..-..'], eye: 1, arms: false, feet: false, colors: { '#': 0xe0cf90 }, tint: 0xc4ae62 },
    // One wearing a mushroom cap.
    other: { rows: ['..mmmm..', '.mmmmmm.', '..####..', '...##...'], eye: 2, arms: false, colors: { '#': 0xf0e0c8, m: 0xb8644e }, tint: 0xb8644e },
  },
}
