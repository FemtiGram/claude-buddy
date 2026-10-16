import type { SkinLook } from './types'

const FUR = 0x8a4a22
const LIGHT = 0xc07a3e
const DARK = 0x5a2e14
const FACE = 0xf0c08a
const RED = 0xe0302a
const YELLOW = 0xf6d030

// Donkey Kong: a big brown ape with a tuft on top, a pale heart-shaped face
// and wide muzzle, and his red DK tie with the yellow letters hanging down a
// broad furry chest.
export const look: SkinLook = {
  said: 'Buddy knots the red tie: Donkey Kong!',
  group: 'Nintendo',
  rows: [
    '....LL....',
    '...LBBL...',
    '..LLBBBB..',
    '.LBBBBBBD.',
    '.LFFBBFFD.',
    'LBFFFFFFBD',
    'LBFFnnFFBD',
    '.BFFFFFFD.',
    '.LBBrrBBD.',
    '.LBryyrBD.',
    '..BBrrBD..',
  ],
  colors: { B: FUR, L: LIGHT, D: DARK, F: FACE, n: 0x5a3018, r: RED, y: YELLOW },
  eyes: [[3, 5], [6, 5]],
  eyeColor: 0x2a1408,
  smile: [[3, 7], [4, 7], [5, 7], [6, 7]],
  tear: [2, 6],
  arms: { color: LIGHT, down: [[0, 8], [9, 8], [0, 9], [9, 9]], up: [[0, 3], [9, 3], [0, 4], [9, 4]] },
  feet: { color: DARK, at: [3, 6] },
  captions: { idle: 'OOH OOH', happy: 'BANANA!' },
  critters: {
    // Squawks the parrot, the green scout with his flashlight beak.
    Explore: { rows: ['..##....', '.######.', '.##oo##.', '..-##-..'], eye: 1, eyes: [2, 5], colors: { '#': 0x3cbf4a, o: 0xf2a02a }, tint: 0x3cbf4a },
    // Cranky Kong: the bald grey-bearded elder with his cane.
    Plan: { rows: ['..####..', '.#ffff#.', '.wwwwww.', '..wwww.c'], eye: 1, eyeColor: 0x2a1408, colors: { '#': 0x8a6a4a, f: FACE, w: 0xe8e8e0, c: 0xa07a4a }, tint: 0xe8e8e0 },
    // Diddy Kong: a little monkey in a red cap and shirt.
    fork: { rows: ['.rrrrr..', '.#ffff#.', '..rrrr..', '..#rr#..'], eye: 1, colors: { '#': FUR, f: FACE, r: RED }, tint: RED },
    // Rambi the rhino: grey with a big horn.
    'general-purpose': { rows: ['......w.', '.#####w.', '########', '.-####-.'], eye: 2, eyes: [4, 6], arms: false, colors: { '#': 0x9a9a9a, w: 0xf0ead8 }, tint: 0x9a9a9a },
    // A Zinger: a yellow-and-black striped wasp with wings.
    other: { rows: ['ww....ww', '.######.', '.kkkkkk.', '..####..'], eye: 1, feet: false, arms: false, colors: { '#': 0xf2c41a, k: 0x2a2010, w: 0xd8eef8 }, tint: 0xf2c41a },
  },
}
