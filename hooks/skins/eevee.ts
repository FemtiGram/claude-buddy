import type { SkinLook } from './types'

const FUR = 0xb07a42
const DARK = 0x6e4422
const LIGHT = 0xd8a56a
const CREAM = 0xf3e2b8
const SHADE = 0xcdb184

// Eevee, the Evolution Pokémon: brown fur, huge pointed ears with dark
// insides, the big fluffy cream collar and a bushy cream-tipped tail.
export const look: SkinLook = {
  said: 'Buddy turns into Eevee! Vee!',
  group: 'Pokémon',
  rows: [
    'b........b',
    'bd......db',
    'bdb....bdb',
    '.bbbbbbbb.',
    '.hhbbbbbb.',
    '.hbbbbbbb.',
    '..bbbbbb..',
    '.sccccccs.',
    'scccccccsc',
    '.sccccs.bc',
    '..bbbbb.bb',
  ],
  colors: { b: FUR, d: DARK, h: LIGHT, c: CREAM, s: SHADE },
  eyes: [[3, 5], [6, 5]],
  eyeColor: 0x2a1a10,
  smile: [[4, 6], [5, 6]],
  tear: [3, 6],
  arms: { color: FUR, down: [[1, 10], [7, 10]], up: [[0, 6], [9, 6]] },
  feet: { color: DARK, at: [3, 6] },
  captions: { idle: 'VEE', happy: 'EEVEE!' },
  critters: {
    // Jolteon: spiky yellow fur and a white ruff.
    Explore: { rows: ['#..##..#', '.######.', '#w####w#', '.#.##.#.'], eye: 1, colors: { '#': 0xf2c83a, w: 0xf6f0d8 }, tint: 0xf2c83a },
    // Espeon: lilac, with the red gem on its brow.
    Plan: { rows: ['#......#', '.##rr##.', '.######.', '..-##-..'], eye: 2, colors: { '#': 0xc898d8, r: 0xe0304a }, tint: 0xc898d8 },
    // A little Eevee: tall ears, cream collar.
    fork: { rows: ['#......#', '##....##', '.######.', 'cccccccc'], eye: 2, colors: { '#': FUR, c: CREAM }, tint: LIGHT },
    // Vaporeon: sea blue with yellow-white fins for ears.
    'general-purpose': { rows: ['.w....w.', '.######.', '.######.', '..-##--#'], eye: 1, colors: { '#': 0x58a8d8, w: 0xf0e4a0 }, tint: 0x58a8d8 },
    // Umbreon: black with glowing yellow rings and red eyes.
    other: { rows: ['y......y', '##.yy.##', '.######.', '..-##-..'], eye: 2, eyeColor: 0xe0303a, colors: { '#': 0x3a3e50, y: 0xf2d04a }, tint: 0xf2d04a },
  },
}
