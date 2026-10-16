import type { SkinLook } from './types'

const GREEN = 0x6fae45
const DARK = 0x4a8a30
const CREAM = 0xe6e0c8

// Stripe from Gremlins: green scaly skin, a spiky white mohawk, big pointed bat
// ears, red eyes, a yellow-cream belly and a wide toothy grin.
export const look: SkinLook = {
  said: "Buddy turns into Stripe. Don't feed him after midnight!",
  group: 'Horror',
  rows: [
    '...W..W...',
    '..eWWWWe..',
    'ee######ee',
    '.e######e.',
    '..######..',
    '..#TTTT#..',
    '..#yyyy#..',
    '..#yyyy#..',
    '..dyyyyd..',
  ],
  colors: { '#': GREEN, e: DARK, d: DARK, W: 0xe6e0c8, T: 0xe6e0c8, y: 0xe0cf85 },
  eyes: [[3, 4], [6, 4]],
  eyeColor: 0xe02828,
  smile: [[3, 5], [4, 5], [5, 5], [6, 5]],
  tear: [3, 5],
  arms: {
    color: 0x8ac45a,
    down: [[1, 7], [8, 7]],
    up: [[1, 4], [8, 4]],
  },
  feet: { color: DARK, at: [3, 6] },
  captions: { idle: 'NO LIGHT', happy: 'HEHE' },
  critters: {
    // A mogwai (brown and cream, big ears) with a flashlight.
    Explore: { rows: ['##....##', '.######.', '.#cccc#L', '..#--#LL'], eye: 1, colors: { '#': 0x8a5a38, c: CREAM, L: 0xfff0a0 }, tint: 0x8a5a38 },
    // A clock showing midnight.
    Plan: { rows: ['.######.', '#ccHHcc#', '#ccHcc.#', '.######.'], eye: 1, feet: false, arms: false, colors: { '#': 0x6a6f8a, c: CREAM, H: 0x4a4a5a }, tint: 0x8a90b0 },
    // A cocoon, the gremlin copy about to hatch.
    fork: { rows: ['...kk...', '.######.', '.##k###.', '..####..'], eye: 1, eyeColor: 0xe02828, feet: false, arms: false, colors: { '#': 0xd8d0b8, k: 0x6fae45 }, tint: 0xd8d0b8 },
    // A mini gremlin.
    'general-purpose': { rows: ['e..WW..e', 'ee####ee', '.######.', '..#..#..'], eye: 2, eyeColor: 0xe02828, colors: { '#': GREEN, e: DARK, W: CREAM }, tint: GREEN },
    // A pizza slice.
    other: { rows: ['bbbbbbbb', '.#pp#p#.', '..#pp#..', '...##...'], eye: 1, feet: false, arms: false, colors: { '#': 0xe8b040, b: 0xb06a30, p: 0xb8403a }, tint: 0xe8b040 },
  },
}
