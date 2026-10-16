import type { SkinLook } from './types'

const HAT_HI = 0xa87048
const HAT = 0x7a4e32
const HAT_SH = 0x4e2e20
const FACE = 0xe0b090
const SCAR = 0xb06a58
const RED = 0xc8383a
const GREEN = 0x5e9a3c
const PANTS = 0x6b4a34
const BLADE = 0xdfe4ea

// Freddy Krueger, cute-creepy: brown fedora, scarred face, red and green
// striped sweater, one clawed glove.
export const look: SkinLook = {
  said: 'Buddy puts on the striped sweater. Sweet dreams!',
  group: 'Horror',
  rows: [
    '...HHhh...',
    '..HHhhdd..',
    'HHhhhhhhdd',
    '..ssssss..',
    '..ffffsf..',
    '..fddddf..',
    '.rrrrrrrr.',
    '.gggggggg.',
    '.rrrrrrrr.',
    '.gggggggg.',
    '..pppppp..',
  ],
  colors: { H: HAT_HI, h: HAT, d: HAT_SH, f: FACE, s: SCAR, r: RED, g: GREEN, p: PANTS },
  eyes: [[3, 4], [6, 4]],
  smile: [[3, 5], [4, 5], [5, 5], [6, 5]],
  tear: [2, 5],
  arms: { color: BLADE, down: [[9, 7], [9, 8], [9, 9]], up: [[9, 4], [9, 5], [9, 6]] },
  feet: { color: 0x5a3a28, at: [3, 6] },
  captions: { happy: 'SWEET', idle: 'DOZE' },
  critters: {
    // Explore: a tiny fedora with a magnifier.
    Explore: { rows: ['..####..', '.######.', '#......m', '.....mm.'], eye: 1, feet: false, arms: false, colors: { '#': HAT, m: BLADE }, tint: HAT },
    // Plan: a bed.
    Plan: { rows: ['bb......', 'bbwwwwww', '#######.', '#.....#.'], eye: 1, eyes: [3, 5], colors: { '#': 0x8a6a4a, b: 0xb36a8a, w: 0xcdb8a0 }, tint: 0xb36a8a },
    // fork: a mini claw glove.
    fork: { rows: ['.b.b.b..', '.b.b.b..', '.######.', '..####..'], eye: 2, colors: { '#': RED, b: BLADE }, tint: BLADE },
    // general-purpose: a boiler pipe.
    'general-purpose': { rows: ['..----..', '.######.', '.#o##o#.', '..-##-..'], eye: 2, colors: { '#': 0x8a8f99, o: 0xc8803a }, tint: 0x8a8f99 },
    // other: a coffee cup.
    other: { rows: ['.s..s...', '######..', '#####.##', '.####.#.'], eye: 1, feet: false, arms: false, colors: { '#': 0xa8704a, s: 0xa0a8b8 }, tint: 0xa8704a },
  },
}
