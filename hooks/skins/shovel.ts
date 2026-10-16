import type { SkinLook } from './types'

const BLUE = 0x3b8be0
const HORN = 0xf2e6c4
const GOLD = 0xe8c547
const VISOR = 0x1c1c2c
const STEEL = 0xc5ced8

// Shovel Knight: blue helmet with cream horns, a dark T visor, gold trim,
// and the shovel for one arm.
export const look: SkinLook = {
  said: 'Buddy turns into Shovel Knight!',
  group: 'Games',
  rows: [
    '.c......c.',
    '.cbbbbbbc.',
    '.bbbbbbbb.',
    '.bvvvvvvb.',
    'Sbbbvvbbb.',
    'S.gbbbbg..',
    'S.bbbbbb..',
    'SSbbggbb..',
  ],
  colors: { c: HORN, b: BLUE, v: VISOR, g: GOLD, S: STEEL },
  eyes: [[3, 3], [6, 3]],
  eyeColor: 0xf2f2e6,
  smile: [[3, 4], [6, 4]],
  tear: [2, 3],
  arms: { color: BLUE, down: [[9, 6]], up: [[9, 5]] },
  feet: { color: GOLD, at: [3, 6] },
  captions: { happy: 'GEMS', idle: 'DIG' },
  critters: {
    // Beeto: an orange beetle.
    Explore: { rows: ['.#....#.', '.######.', '#-####-#', '.#.##.#.'], eye: 1, colors: { '#': 0xe8872a }, tint: 0xe8872a },
    // Blorb: a green blob with drips.
    Plan: { rows: ['..####..', '.######.', '########', '#.#..#.#'], eye: 1, feet: false, arms: false, colors: { '#': 0x5cc060 }, tint: 0x5cc060 },
    // Divedrake: a small dragon with gold wings.
    fork: { rows: ['w#....#w', 'ww####ww', '.######.', '..#..#..'], eye: 2, colors: { '#': 0xc9475a, w: GOLD }, tint: 0xc9475a },
    // Propeller Rat.
    'general-purpose': { rows: ['.pppppp.', '##.##.##', '.######.', '..#--#..'], eye: 2, colors: { '#': 0xa8a39a, p: STEEL }, tint: 0xa8a39a },
    // A treasure gem.
    other: { rows: ['...ww...', '..####..', '.######.', '..####..'], eye: 2, feet: false, arms: false, colors: { '#': 0x3fd0d8, w: 0xd8f6f8 }, tint: 0x3fd0d8 },
  },
}
