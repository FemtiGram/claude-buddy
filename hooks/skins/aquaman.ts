import type { SkinLook } from './types'

const GOLD = 0xe8a83a
const SKIN = 0xe8b890
const ORANGE = 0xe8902a
const DORANGE = 0xc06a1a
const GREEN = 0x2e8a5a
const TRIDENT = 0xe8c83a

// Aquaman (classic): long blond hair and beard, orange scale shirt with a gold
// belt, green leggings, a golden trident for an arm.
export const look: SkinLook = {
  said: 'Buddy dives in as Aquaman!',
  group: 'DC',
  rows: [
    '..hhhhhh..',
    '.hhhhhhhh.',
    '.hssssssh.',
    '.hssssssh.',
    '.hhhssshh.',
    '.hhhhhhhh.',
    '.oOoOoOoo.',
    '.OoOoOoOo.',
    '.bbbbbbbb.',
    '..gg..gg..',
  ],
  colors: { h: GOLD, s: SKIN, o: ORANGE, O: DORANGE, b: TRIDENT, g: GREEN },
  eyes: [[3, 3], [6, 3]],
  smile: [[4, 4], [5, 4]],
  tear: [3, 4],
  arms: {
    color: TRIDENT,
    down: [[0, 7], [0, 6], [9, 7], [9, 6]],
    up: [[0, 5], [0, 4], [9, 4], [9, 3]],
  },
  feet: { color: GREEN, at: [3, 6] },
  captions: { happy: 'SPLISH', idle: 'BLUB' },
  critters: {
    // An orange fish.
    Explore: { rows: ['..###...', '.#####.#', '########', '.#####.#'], eye: 1, eyes: [2], feet: false, arms: false, colors: { '#': 0xe8782a }, tint: 0xe8782a },
    // A seahorse.
    Plan: { rows: ['.###....', '.##.....', '.###..#.', '..##..#.'], eye: 0, eyes: [2], feet: false, arms: false, colors: { '#': 0xe8c06a }, tint: 0xe8c06a },
    // A mini trident.
    fork: { rows: ['#..#..#.', '.######.', '...##...', '...##...'], eye: 1, feet: false, arms: false, colors: { '#': TRIDENT }, tint: TRIDENT },
    // An octopus.
    'general-purpose': { rows: ['.######.', '########', '########', '#.#.#.#.'], eye: 1, colors: { '#': 0x9a5ad0 }, tint: 0x9a5ad0 },
    // A great white shark.
    other: { rows: ['...##...', '########', 'wwwwwwww', 'w.w.w.w.'], eye: 1, feet: false, arms: false, colors: { '#': 0x6a8aa8, w: 0xe0e8ee }, tint: 0x6a8aa8 },
  },
}
