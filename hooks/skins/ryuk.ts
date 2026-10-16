import type { SkinLook } from './types'

const DARK = 0x4a4a60
const RIM = 0x8484a4
const FACE_HI = 0xb4b4c6
const FACE = 0x8e8ea8
const CHAIN = 0xd0d6e0
const TEETH = 0xf0f0f6

// Ryuk: gangly shinigami, spiky dark hair, dark wings, pale face with a huge
// toothy grin and round yellow-red eyes, leather and chains.
export const look: SkinLook = {
  said: 'Buddy turns into Ryuk. Got any apples?',
  group: 'Anime',
  rows: [
    'H..H..h..h',
    'hhHhhhhhhh',
    '.hhhhhhhh.',
    '.hGgggggh.',
    '.hGrggrgh.',
    '..hhhhhh..',
    '..tttttt..',
    '..gggggg..',
    '.HhhhhhhH.',
    '.hccccchh.',
    '..hh..hh..',
  ],
  colors: { h: DARK, H: RIM, G: FACE_HI, g: FACE, r: 0xd04848, t: TEETH, c: CHAIN },
  eyes: [[3, 3], [6, 3]],
  eyeColor: 0xf2c040,
  smile: [[3, 6], [4, 6], [5, 6], [6, 6]],
  tear: [2, 4],
  arms: { color: FACE_HI, down: [[0, 9], [9, 9]], up: [[0, 7], [9, 7]] },
  feet: { color: DARK, at: [3, 6] },
  captions: { happy: 'APPLES', idle: 'BORED' },
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
