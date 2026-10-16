import type { SkinLook } from './types'

const YELLOW = 0xf7d84a
const GOLD = 0xc9a21e
const BLUE = 0x3a7bd5

// Joy of Inside Out: a glowing yellow star of a girl, spiky blue hair, a
// wide smile and a green dress. Darker gold edges keep her readable on light.
export const look: SkinLook = {
  said: 'Buddy glows: Joy!',
  group: 'Film & TV',
  rows: [
    '.h..hh..h.',
    '..hhhhhh..',
    '..yyyyyy..',
    'oyyyyyyyyo',
    '.oyyyyyyo.',
    '.yyammayy.',
    '..oyyyyo..',
    '.gggggggg.',
    '..oo..oo..',
  ],
  colors: { h: BLUE, y: YELLOW, o: GOLD, a: GOLD, m: 0x9a3a2a, g: 0x7bc86c },
  eyes: [[3, 4], [6, 4]],
  eyeColor: 0x1f2f7a,
  smile: [[4, 5], [5, 5]],
  tear: [3, 4],
  arms: {
    color: YELLOW,
    down: [[0, 7], [9, 7], [0, 8], [9, 8]],
    up: [[0, 5], [9, 5], [0, 4], [9, 4]],
  },
  feet: { color: GOLD, at: [2, 7] },
  captions: { happy: 'WOO!', idle: 'OK' },
  critters: {
    // Sadness: blue, round glasses.
    Explore: { rows: ['..hhhh..', '.######.', '.gwggwg.', '..####..'], eye: 2, colors: { '#': 0x5fa0e0, h: 0x2e6ab8, g: 0x2a2a44, w: 0xe8f0f8 }, tint: 0x5fa0e0 },
    // Disgust: green with a pink scarf.
    Plan: { rows: ['.hhhhhh.', 'h######h', '.######.', '..-ss-..'], eye: 2, colors: { '#': 0x7fcb5e, h: 0x7a3a8a, s: 0xd060a0 }, tint: 0x7fcb5e },
    // A golden memory orb.
    fork: { rows: ['..oooo..', '.o####o.', '.o####o.', '..oooo..'], eye: 1, feet: false, colors: { '#': 0xf2c94c, o: GOLD }, tint: 0xf2c94c },
    // Anger: squat red box, flat top.
    'general-purpose': { rows: ['.hhhhhh.', '########', '##b##b##', '########'], eye: 2, colors: { '#': 0xcc3b30, h: 0xa02820, b: 0x4a1410 }, tint: 0xcc3b30 },
    // Fear: thin, purple, wild hair.
    other: { rows: ['h.h..h.h', '.#wwww#.', '..####..', '..#..#..'], eye: 1, colors: { '#': 0x9c7fd0, h: 0x7458b8, w: 0xe8e0f4 }, tint: 0x9c7fd0 },
  },
}
