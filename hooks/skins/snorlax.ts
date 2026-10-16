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
    // Diglett: a brown nub with a pink nose, popping out of the ground.
    Explore: { rows: ['..####..', '.######.', '.##pp##.', 'gggggggg'], eye: 1, eyes: [2, 5], feet: false, arms: false, colors: { '#': 0xa8743c, p: 0xf08aa8, g: 0x5a3a22 }, tint: 0xa8743c },
    // Chansey: a pink egg of a Pokémon with a white egg in its belly pouch.
    Plan: { rows: ['p.####.p', '.######.', '.##ww##.', '..#ww#..'], eye: 1, eyes: [2, 5], colors: { '#': 0xf4a0b8, p: 0xf4a0b8, w: 0xffffff }, tint: 0xf4a0b8 },
    // A little Snorlax with its cream belly.
    fork: { rows: ['.#....#.', '.#cccc#.', '########', '##cccc##'], eye: 1, colors: { '#': TEAL, c: CREAM }, tint: LIGHT },
    // Meowth: a cream cat with brown-tipped ears and the gold coin on its brow.
    'general-purpose': { rows: ['.k#..#k.', '.##yy##.', '.######.', '..#..#..'], eye: 2, eyes: [2, 5], colors: { '#': 0xf2e0b0, k: 0x7a4a2a, y: 0xf0b820 }, tint: 0xf0b820 },
    // Lapras: blue, with a cream belly and its grey-knobbed shell.
    other: { rows: ['.h####h.', '.######.', 's#cccc#s', 'ss#cc#ss'], eye: 1, eyes: [2, 5], feet: false, colors: { '#': 0x4a9ae0, h: 0x4a9ae0, c: 0xf2e2bc, s: 0x8a8a98 }, tint: 0x4a9ae0 },
  },
}
