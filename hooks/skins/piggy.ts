import type { SkinLook } from './types'

const PINK = 0xf2a2b6
const SNOUT = 0xe07a96
const HAIR = 0xf0c848
const BLONDE = 0xfbe48c
const CURL = 0xc8962a
const GOWN = 0x9a56c8

// Miss Piggy: a mane of blonde curls with a golden tiara, a pink face with a
// big darker snout and nostrils, blue eyes, red lipstick, a string of pearls
// and a lavender-purple gown.
export const look: SkinLook = {
  said: 'Buddy puts on the pearls: hi-YAH! Moi is Miss Piggy!',
  group: 'Muppets',
  rows: [
    '...gtg....',
    '.cYYYYYc..',
    'cYyppppyyc',
    'cyppppppyc',
    'cyppssppyc',
    'cypsnnspyc',
    '.cyprrpyc.',
    '..wwwwww..',
    '.vVvvvvvv.',
    '.vVvvvvvv.',
    '..dvvvvd..',
  ],
  colors: { g: 0xe8b830, t: 0xbfe8ff, c: CURL, Y: BLONDE, y: HAIR, p: PINK, s: SNOUT, n: 0x9a3a5a, r: 0xd8304e, w: 0xf6f0e4, v: GOWN, V: 0xbc8ae6, d: 0x6a3a96 },
  eyes: [[3, 3], [6, 3]],
  eyeColor: 0x2a5ab8,
  smile: [[3, 6], [6, 6]],
  tear: [3, 4],
  arms: { color: 0xe8d8f4, down: [[0, 8], [9, 8]], up: [[0, 6], [9, 6]] },
  feet: { color: GOWN, at: [3, 6] },
  captions: { idle: 'MOI', happy: 'HIYAH!' },
  critters: {
    // Pepe the King Prawn: orange-red, feelers up, a segmented tail.
    Explore: { rows: ['a....a..', '.a####a.', '.######.', '..-#-#-.'], eye: 1, eyes: [2, 5], colors: { '#': 0xe8603a, a: 0xb83820 }, tint: 0xe8603a },
    // Camilla the Chicken: a tan hen with a red comb and an orange beak.
    Plan: { rows: ['...rr...', '..####..', '.##oo##.', '.######.'], eye: 1, eyes: [2, 5], colors: { '#': 0xe8c870, r: 0xd8303a, o: 0xf08a2a }, tint: 0xe8c870 },
    // A little Piggy: blonde curls, pink face and snout, pearls.
    fork: { rows: ['.yyyyyy.', 'y######y', 'y#-nn-#y', '.wwwwww.'], eye: 1, eyes: [2, 5], eyeColor: 0x2a5ab8, colors: { '#': PINK, y: HAIR, n: 0x9a3a5a, w: 0xf6f0e4 }, tint: PINK },
    // Foo-Foo: Piggy's white poodle with a pink bow and floppy ears.
    'general-purpose': { rows: ['.pp###..', '-######-', '-##kk##-', '..####..'], eye: 1, eyes: [2, 5], colors: { '#': 0xeeeae6, p: 0xf06aa0, k: 0x3a2a30 }, tint: 0xf06aa0 },
    // Her tiara: gold, with a big diamond in front.
    other: { rows: ['...ww...', '#..##..#', '########', '.-####-.'], eye: 2, eyes: [2, 5], arms: false, feet: false, colors: { '#': 0xe8c040, w: 0xbfe8ff }, tint: 0xe8c040 },
  },
}
