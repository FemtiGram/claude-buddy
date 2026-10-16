import type { SkinLook } from './types'

const RED = 0xd32f2f
const CREAM = 0xf2c79a
const YELLOW = 0xf2c230
const DARK = 0x3a2020

// Red of Angry Birds: round red bird, feather crest, scowling brows, yellow
// beak, cream belly and a little tail feather.
export const look: SkinLook = {
  said: "Buddy turns into Red. He's angry!",
  group: 'Games',
  rows: [
    '....r.r...',
    '...rrrr...',
    '.rrrrrrrr.',
    '.rkkrrkkr.',
    '.rwwrrwwr.',
    '.rrryyrrr.',
    '.rrbbbbrr.',
    'kkrbbbbr..',
    '..rrrrrr..',
  ],
  colors: { r: RED, k: DARK, w: 0xeef0f2, y: YELLOW, b: CREAM },
  eyes: [[3, 4], [6, 4]],
  smile: [[4, 6], [5, 6]],
  tear: [3, 4],
  arms: { color: 0xb02323, down: [[0, 6], [9, 6]], up: [[0, 4], [9, 4]] },
  feet: { color: YELLOW, at: [3, 6] },
  captions: { happy: 'YES!', idle: 'RED' },
  critters: {
    // Chuck: a yellow triangle bird.
    Explore: { rows: ['...##...', '..####..', '.######.', '########'], eye: 2, feet: false, colors: { '#': 0xf2d230 }, tint: 0xf2d230 },
    // Bomb: black-grey bird with a lit fuse.
    Plan: { rows: ['....y...', '..####..', '.######.', '..####..'], eye: 2, colors: { '#': 0x55595f, y: YELLOW }, tint: 0x8a9099 },
    // A Blue: small blue bird with a crest.
    fork: { rows: ['..b..b..', '.######.', '.######.', '..####..'], eye: 1, colors: { '#': 0x3a7bd5, b: 0x7fb0ee }, tint: 0x3a7bd5 },
    // A mini Red.
    'general-purpose': { rows: ['...rr...', '.######.', '.######.', '..bbbb..'], eye: 1, colors: { '#': RED, r: 0xb02323, b: CREAM }, tint: RED },
    // A green pig.
    other: { rows: ['.#....#.', '.######.', '.#pppp#.', '..####..'], eye: 1, colors: { '#': 0x5fb04a, p: 0xa6d96a }, tint: 0x5fb04a },
  },
}
