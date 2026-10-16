import type { SkinLook } from './types'

const GREEN = 0x6ccb4a
const LIGHT = 0xd9f5c0
const LEAF = 0x2f8f3a

// A junimo from Stardew Valley: a round green bean with a leaf sprout and
// big dark eyes.
export const look: SkinLook = {
  said: 'Buddy turns into a junimo!',
  group: 'Games',
  rows: [
    '....ll....',
    '...lll....',
    '..gggggg..',
    '.gHHggggg.',
    '.gggggggg.',
    '.gggggggg.',
    '.gggggggg.',
    '..gggggg..',
  ],
  colors: { g: GREEN, H: LIGHT, l: LEAF },
  eyes: [[3, 4], [3, 5], [6, 4], [6, 5]],
  smile: [[4, 6], [5, 6]],
  tear: [2, 5],
  arms: { color: GREEN, down: [[0, 6], [9, 6]], up: [[0, 4], [9, 4]] },
  feet: { color: 0x4aa83a, at: [3, 6] },
  captions: { happy: 'BUNDLE', idle: 'HELLO' },
  critters: {
    // Dust sprite: a black fuzzy.
    Explore: { rows: ['#.####.#', '.######.', '########', '#.####.#'], eye: 1, feet: false, arms: false, eyeColor: 0xf2e6c4, colors: { '#': 0x3a3a52 }, tint: 0x6a6a8a },
    // A chicken.
    Plan: { rows: ['..rr....', '.######y', '.######.', '..y..y..'], eye: 1, colors: { '#': 0xe6e6ee, r: 0xe0527a, y: 0xe8b030 }, tint: 0xe6e6ee },
    // A tiny blue junimo.
    fork: { rows: ['...ll...', '.######.', '.######.', '..####..'], eye: 1, colors: { '#': 0x4aa8e8, l: LEAF }, tint: 0x4aa8e8 },
    // A purple junimo with two sprouts.
    'general-purpose': { rows: ['..l..l..', '.######.', '########', '.######.'], eye: 1, colors: { '#': 0xa070d8, l: LEAF }, tint: 0xa070d8 },
    // A green slime.
    other: { rows: ['........', '.w####..', '.######.', '########'], eye: 2, feet: false, arms: false, colors: { '#': 0x7fcf3a, w: LIGHT }, tint: 0x7fcf3a },
  },
}
