import type { SkinLook } from './types'

const HAIR = 0x3a3a48
const WING = 0x4a4a5e
const FACE = 0xc8c8d2
const LEATHER = 0x40404e
const CHAIN = 0xb0b8c4
const TEETH = 0xe8e8ee

// Ryuk: gangly shinigami, spiky dark hair, dark wings, pale face with a huge
// toothy grin and round yellow-red eyes, leather and chains.
export const look: SkinLook = {
  said: 'Buddy turns into Ryuk. Got any apples?',
  group: 'Anime',
  rows: [
    'w..h..h..w',
    'wwhhhhhhww',
    '.whhhhhhw.',
    '.wggggggw.',
    '.wgrggrgw.',
    '..mmmmmm..',
    '..tttttt..',
    '.kkkkkkkk.',
    '.kcccccck.',
    '..kk..kk..',
  ],
  colors: { w: WING, h: HAIR, g: FACE, r: 0xd04848, m: HAIR, t: TEETH, k: LEATHER, c: CHAIN },
  eyes: [[3, 3], [6, 3]],
  eyeColor: 0xf2c040,
  smile: [[3, 6], [4, 6], [5, 6], [6, 6]],
  tear: [2, 4],
  arms: { color: FACE, down: [[0, 8], [9, 8]], up: [[0, 6], [9, 6]] },
  feet: { color: LEATHER, at: [3, 6] },
  captions: { happy: 'YUMMY', idle: 'BORED' },
  critters: {
    // A red apple.
    Explore: { rows: ['...gl...', '.######.', '########', '..####..'], eye: 1, feet: false, arms: false, colors: { '#': 0xd84040, g: 0x7a5030, l: 0x58a858 }, tint: 0xd84040 },
    // The Death Note.
    Plan: { rows: ['########', '#wwwwww#', '########', '.#.##.#.'], eye: 1, colors: { '#': 0x4a4a5e, w: 0xe8e8ee }, tint: 0x4a4a5e },
    // Rem: white shinigami with dark markings.
    fork: { rows: ['k.####.k', 'kk####kk', '.######.', '..#--#..'], eye: 2, colors: { '#': 0xdadae4, k: 0x4a4a5e }, tint: 0xdadae4 },
    // L: messy black hair, crouching in a white shirt.
    'general-purpose': { rows: ['#.####.#', '.######.', '.ssssss.', 'wwwwwwww'], eye: 2, feet: false, colors: { '#': 0x4a4a5e, s: 0xe8d8d0, w: 0xe8e8ee }, tint: 0x6a6a82 },
    // Light's bag of potato chips.
    other: { rows: ['.#.##.#.', '########', '#yyyyyy#', '########'], eye: 1, feet: false, colors: { '#': 0x4a90d8, y: 0xf0c040 }, tint: 0x4a90d8 },
  },
}
