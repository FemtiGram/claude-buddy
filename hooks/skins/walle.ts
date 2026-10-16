import type { SkinLook } from './types'

const YELLOW = 0xd9a93b
const RUST = 0x8c6a2a
const GREY = 0x6e6e6e

// WALL-E: boxy rusty body with a front panel, binocular eyes on a neck,
// grabber arms and tank treads.
export const look: SkinLook = {
  said: 'Buddy turns into WALL-E!',
  group: 'Film & TV',
  rows: [
    '.ggg..ggg.',
    '.gLL..LLg.',
    '....gg....',
    '.yyyyyyyy.',
    '.yyyyyyyy.',
    '.yrrrrrry.',
    '.yrrrrrry.',
    '.yyyyyyyy.',
    '.rrrrrrrr.',
  ],
  colors: { g: GREY, L: 0x2a3a5c, y: YELLOW, r: RUST },
  eyes: [[2, 1], [7, 1]],
  eyeColor: 0xbfe0ff,
  smile: [[4, 6], [5, 6]],
  tear: [3, 3],
  arms: { color: 0x7a7a7a, down: [[0, 5], [9, 5]], up: [[0, 3], [9, 3]] },
  feet: { color: GREY, at: [2, 3, 6, 7] },
  captions: { happy: 'WOW!', idle: 'HELLO' },
  critters: {
    // EVE: a white egg with a dark face band and blue eyes.
    Explore: { rows: ['..####..', '.#kkkk#.', '.######.', '..####..'], eye: 1, eyeColor: 0x4aa3f0, feet: false, colors: { '#': 0xe4e8ec, k: 0x2a3550 }, tint: 0x4aa3f0 },
    // M-O: a round cleaner bot with a brush.
    Plan: { rows: ['..####..', '.#wwww#.', '.######.', 'bbbbbbbb'], eye: 1, feet: false, colors: { '#': 0x7fa6c9, w: 0xe0e6ec, b: 0xe0a030 }, tint: 0x7fa6c9 },
    // The cockroach.
    fork: { rows: ['.k....k.', '..####..', '.######.', 'k.k..k.k'], eye: 1, feet: false, colors: { '#': 0x7a4a24, k: 0x4a2a14 }, tint: 0x7a4a24 },
    // A mini WALL-E cube.
    'general-purpose': { rows: ['.g....g.', '.######.', '.#rrrr#.', '.######.'], eye: 0, eyes: [1, 6], eyeColor: 0xbfe0ff, colors: { '#': YELLOW, g: GREY, r: RUST }, tint: YELLOW },
    // A seedling in a boot.
    other: { rows: ['.gg..gg.', '..gggg..', '.######.', '-######-'], eye: 2, colors: { '#': 0x8a5a2b, g: 0x4fa860 }, tint: 0x4fa860 },
  },
}
