import type { SkinLook } from './types'

const TEAL = 0x2e6a80
const LIGHT = 0x5a9ab0
const CREAM = 0xf2e2bc

// Snorlax, the Sleeping Pokémon: a huge dark blue-teal body, little pointed
// ears, a cream face under a widow's peak, eyes shut, and the giant round
// cream belly it naps on.
export const look: SkinLook = {
  said: 'Buddy turns into Snorlax and blocks the path. Zzz...',
  group: 'Pokémon',
  rows: [
    '.t......t.',
    '.lttttttt.',
    '.lffttfft.',
    '.tfffffft.',
    '.tfffffft.',
    '.tttttttt.',
    'tttbbbbttt',
    'ltbbbbbbtt',
    'ttbbbbbbtt',
    'tttbbbbttt',
    '.tttttttt.',
  ],
  colors: { t: TEAL, l: LIGHT, f: CREAM, b: CREAM },
  eyes: [[3, 3], [6, 3]],
  eyeColor: 0x1f2a30,
  smile: [[3, 4], [4, 4], [5, 4], [6, 4]],
  tear: [2, 4],
  arms: { color: TEAL, down: [[0, 10], [9, 10]], up: [[0, 4], [9, 4]] },
  feet: { color: CREAM, at: [2, 7] },
  captions: { idle: 'ZZZ', happy: 'MUNCH!' },
  critters: {
    // Zubat: a blue bat on purple wings.
    Explore: { rows: ['p.#..#.p', 'pp####pp', '.######.', '..#..#..'], eye: 1, feet: false, colors: { '#': 0x5a8ad8, p: 0x9a5ab8 }, tint: 0x5a8ad8 },
    // Slowpoke: pink, cream muzzle, in no hurry at all.
    Plan: { rows: ['.#....#.', '.######.', '.#cccc#.', '..-##-..'], eye: 1, colors: { '#': 0xf0a0b8, c: 0xf6e2c8 }, tint: 0xf0a0b8 },
    // A little Snorlax with its cream belly.
    fork: { rows: ['.#....#.', '.#cccc#.', '########', '##cccc##'], eye: 1, colors: { '#': TEAL, c: CREAM }, tint: LIGHT },
    // Psyduck: yellow, three hairs, a cream bill.
    'general-purpose': { rows: ['..k.k...', '.######.', '.#oooo#.', '..####..'], eye: 1, colors: { '#': 0xf2d04a, k: 0x3a3a3a, o: 0xf2e8b8 }, tint: 0xf2d04a },
    // Lapras: a blue neck over a grey shell.
    other: { rows: ['...##...', '..####..', '.ssssss.', 'ssssssss'], eye: 1, feet: false, colors: { '#': 0x5ab0e0, s: 0x9a9aa8 }, tint: 0x5ab0e0 },
  },
}
