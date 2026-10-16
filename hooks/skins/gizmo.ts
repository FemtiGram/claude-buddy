import type { SkinLook } from './types'

const BROWN = 0x8b5a2b
const EAR = 0x6b4220
const CREAM = 0xf3e6cf

// Gizmo of Gremlins: a round brown-and-cream mogwai, huge fan ears to both
// sides, big dark eyes, a little pink nose, tufts on his head.
export const look: SkinLook = {
  said: 'Buddy turns into Gizmo!',
  group: 'Film & TV',
  rows: [
    '..........',
    '...b..b...',
    '..bbbbbb..',
    'e..bbbb..e',
    'ee.bbbb.ee',
    'ecebbbbece',
    'ecebbbbece',
    '.eecnncee.',
    '...bccb...',
    '...bbbb...',
  ],
  colors: { b: BROWN, e: EAR, c: CREAM, n: 0xe58aa0 },
  eyes: [[3, 5], [6, 5]],
  eyeColor: 0x1e120a,
  smile: [[3, 7], [6, 7]],
  tear: [3, 6],
  arms: { color: CREAM, down: [[2, 9], [7, 9]], up: [[2, 8], [7, 8]] },
  feet: { color: BROWN, at: [3, 6] },
  captions: { happy: 'COOL', idle: 'HUM' },
  critters: {
    // A mogwai with a flashlight.
    Explore: { rows: ['e.####.e', 'ee####ee', '.######y', '..####yy'], eye: 2, colors: { '#': 0x9a6a3a, e: EAR, y: 0xf2e08a }, tint: 0x9a6a3a },
    // A mogwai with a clipboard.
    Plan: { rows: ['e.####.e', 'ee####ee', '.######.', '.pkkkkp.'], eye: 2, colors: { '#': 0x7d5a3c, e: 0x5a3e28, p: 0xe8e2d0, k: 0x6a6a70 }, tint: 0x7d5a3c },
    // A cocoon.
    fork: { rows: ['..-##-..', '.#-##-#.', '.######.', '..-##-..'], eye: 2, feet: false, arms: false, colors: { '#': 0xc8d0b0, '-': 0x98a080 }, tint: 0xc8d0b0 },
    // A mini mogwai, cream and grey.
    'general-purpose': { rows: ['g..##..g', 'gg####gg', '.######.', '..#nn#..'], eye: 2, colors: { '#': 0xefe0c4, g: 0x8a8f99, n: 0xe58aa0 }, tint: 0x8a8f99 },
    // A green gremlin: mohawk, red eyes, fangs.
    other: { rows: ['.#.##.#.', 'e######e', '.######.', '..#ww#..'], eye: 2, eyeColor: 0xe0342b, colors: { '#': 0x58a86a, e: 0x3a7a4a, w: 0xf0f0e8 }, tint: 0x58a86a },
  },
}
