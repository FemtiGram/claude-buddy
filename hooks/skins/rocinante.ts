import type { SkinLook } from './types'

const HULL = 0x5a6270
const LIGHT = 0x8c9098
const DARK = 0x3a404a
const DRIVE = 0x7fd0ff

// The Rocinante: a tall, narrow Martian corvette flying nose-up, point-defence
// cannons at the waist, an Epstein drive plume burning below.
export const look: SkinLook = {
  said: 'Buddy boards the Rocinante.',
  group: 'Sci-fi ships',
  rows: [
    '....ll....',
    '...llll...',
    '...lwwl...',
    '...hhhh...',
    '..hhhhhh..',
    '.chhhhhhc.',
    '.dhhhhhhd.',
    '..hhhhhh..',
    '..dhhhhd..',
    '...dddd...',
  ],
  colors: { l: LIGHT, h: HULL, d: DARK, w: DRIVE, c: 0xc0c8d4 },
  eyes: [[4, 2], [5, 2]],
  eyeColor: 0x2a3a50,
  smile: [[1, 5], [8, 5]],
  tear: [4, 7],
  feet: { color: DRIVE, at: [3, 4, 5, 6] },
  captions: { happy: 'BURN!', idle: 'ROCI' },
  critters: {
    // A Razorback racing pinnace.
    Explore: { rows: ['...##...', '..####..', '.#o##o#.', '#-#--#-#'], eye: 2, eyeColor: 0x7fd0ff, feet: false, arms: false, colors: { '#': 0xa04a3a, o: 0x7fd0ff }, tint: 0xa04a3a },
    // Naomi's hand terminal.
    Plan: { rows: ['########', '#gggggg#', '#g.gg.g#', '########'], eye: 1, eyes: [2, 5], feet: false, arms: false, colors: { '#': 0x4a5060, g: 0x7fd0ff }, tint: 0x7fd0ff },
    // A torpedo.
    fork: { rows: ['...##...', '...##...', '..####..', '..-##-..'], eye: 2, eyes: [3, 4], eyeColor: 0xe0a030, feet: false, arms: false, colors: { '#': 0xb0b4bc, '-': 0xe0a030 }, tint: 0xb0b4bc },
    // A MCRN marine helmet.
    'general-purpose': { rows: ['..####..', '.######.', '#wwwwww#', '#.#..#.#'], eye: 2, eyes: [2, 5], feet: false, arms: false, colors: { '#': 0x8c4a3a, w: 0x6ab0d0 }, tint: 0x8c4a3a },
    // Protomolecule glow.
    other: { rows: ['..#..#..', '.######.', '##w##w##', '.######.'], eye: 2, eyeColor: 0x1a3a6a, feet: false, arms: false, colors: { '#': 0x3a8cff, w: 0xd0f0ff }, tint: 0x3a8cff },
  },
}
