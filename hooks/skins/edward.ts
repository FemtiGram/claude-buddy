import type { SkinLook } from './types'

const HAIR = 0xe8c04a
const SKIN = 0xf2c8a0
const COAT = 0xb8282e
const BLACK = 0x3a3a48
const STEEL = 0xb8bec8

// Edward Elric: blond braid and ahoge, gold eyes, red coat over black, a
// silver automail arm and a white-gloved one.
export const look: SkinLook = {
  said: 'Buddy turns into Edward Elric.',
  group: 'Anime',
  rows: [
    '....y.....',
    '.yyyyyyyy.',
    '.yysyysyy.',
    '.yssssssyy',
    '..ssssss.y',
    '..rkkkkr..',
    'mrrkkkkrr.',
    'mrrrkkrrr.',
    '.rrrrrrrr.',
    '..kk..kk..',
  ],
  colors: { y: HAIR, s: SKIN, r: COAT, k: BLACK, m: STEEL },
  eyes: [[3, 3], [6, 3]],
  eyeColor: 0xc88a10,
  smile: [[4, 4], [5, 4]],
  tear: [3, 4],
  arms: { color: 0xe8e8ee, down: [[9, 7]], up: [[9, 5]] },
  feet: { color: BLACK, at: [3, 6] },
  captions: { happy: 'TRUTH', idle: 'HMPH' },
  critters: {
    // Alphonse: big silver armour, red plume, glowing eyes.
    Explore: { rows: ['...rr...', '.######.', '########', '.##--##.'], eye: 1, eyeColor: 0xd04848, colors: { '#': 0xb8bec8, r: 0xb8282e }, tint: 0xb8bec8 },
    // A gold transmutation circle.
    Plan: { rows: ['.######.', '#.#..#.#', '#.#..#.#', '.######.'], eye: 1, feet: false, arms: false, colors: { '#': 0xe0b030 }, tint: 0xe0b030 },
    // Nina the chimera dog.
    fork: { rows: ['ee.##.ee', 'e.####.e', '.######.', '..#--#.#'], eye: 1, colors: { '#': 0xb88858, e: 0x8a5a38 }, tint: 0xb88858 },
    // Winry's wrench.
    'general-purpose': { rows: ['.##..##.', '..####..', '...hh...', '...hh...'], eye: 1, colors: { '#': 0x8a92a0, h: 0xd08838 }, tint: 0x8a92a0 },
    // The Philosopher's Stone: a crimson gem.
    other: { rows: ['..w###..', '.######.', '..####..', '...##...'], eye: 1, feet: false, arms: false, colors: { '#': 0xb8205a, w: 0xf0a0c0 }, tint: 0xb8205a },
  },
}
