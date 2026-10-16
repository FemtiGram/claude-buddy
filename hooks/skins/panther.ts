import type { SkinLook } from './types'

const SUIT = 0x3a3a48
const SHEEN = 0x6a6488
const SILVER = 0xc8ccd6
const GLOW = 0x9a6ae0

// Black Panther: a sleek dark suit with a purple-silver sheen, a cat-eared mask
// with silver lenses, a vibranium necklace, silver claws, a purple glow.
export const look: SkinLook = {
  said: 'Buddy turns into Black Panther. Wakanda forever!',
  group: 'Marvel',
  rows: [
    '.K......K.',
    '.KS....SK.',
    '.KKKKKKKK.',
    '.KSKKKKSK.',
    '.KLLKKLLK.',
    '.KKKKKKKK.',
    '..KKKKKK..',
    '.SnnnnnnS.',
    '.KKSnnSKK.',
    '.KKKPPKKK.',
  ],
  colors: { K: SUIT, S: SHEEN, L: 0x9aa0b8, n: SILVER, P: GLOW },
  eyes: [[3, 4], [6, 4]],
  eyeColor: 0xe6eaf8,
  smile: [[4, 6], [5, 6]],
  smileColor: GLOW,
  tear: [3, 5],
  arms: {
    color: SILVER,
    down: [[0, 8], [0, 9], [9, 8], [9, 9]],
    up: [[0, 5], [0, 6], [9, 5], [9, 6]],
  },
  feet: { color: SHEEN, at: [3, 6] },
  captions: { idle: 'HMM', happy: 'KING!' },
  critters: {
    // Shuri: dark braids, a brown face, purple gauntlets on both sides.
    Explore: { rows: ['..hhhh..', '.h####h.', 'p######p', 'p.####.p'], eye: 1, colors: { '#': 0x9a6a48, h: 0x4a4458, p: GLOW }, tint: 0x9a6a48 },
    // A kimoyo bead bracelet: a ring of purple beads.
    Plan: { rows: ['..#g##..', '.#....#.', '.##..g#.', '..####..'], eye: 0, arms: false, feet: false, colors: { '#': GLOW, g: SILVER }, tint: GLOW },
    // A black panther cub.
    fork: { rows: ['.#....#.', '.######.', '.######.', '..#qq#..'], eye: 2, eyeColor: 0xe6eaf8, colors: { '#': 0x4a4a5c, q: 0xb0a0c8 }, tint: 0x4a4a5c },
    // A vibranium crystal, purple-blue.
    'general-purpose': { rows: ['...pp...', '..p##p..', '.p####p.', '..pppp..'], eye: 2, arms: false, feet: false, colors: { '#': 0x6a7ae8, p: 0x9a8af0 }, tint: 0x6a7ae8 },
    // A Wakandan ceremonial mask in gold.
    other: { rows: ['.######.', '##k##k##', '.######.', '..#gg#..'], eye: 1, eyeColor: 0xe6eaf8, arms: false, feet: false, colors: { '#': 0xb8864a, k: 0x4a3a50, g: SILVER }, tint: 0xb8864a },
  },
}
