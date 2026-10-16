import type { SkinLook } from './types'

const HAIR = 0x4a4a60
const HAIR_HI = 0x8686a6
const SKIN = 0xf5d0b0
const WHITE = 0xe4e4ec
const JACKET = 0x9a7650
const JACKET_SH = 0x6e5034
const BLUE = 0x3a6ac0
const GEAR = 0x8890a0
const STEEL = 0xb8c4d4

// Levi Ackerman: undercut with straight bangs, a stern face, white cravat,
// Survey Corps jacket with the Wings of Freedom, ODM gear, swords for arms.
export const look: SkinLook = {
  said: 'Buddy turns into Levi.',
  group: 'Anime',
  rows: [
    '..HHkkkk..',
    '.HHkkkkkk.',
    '.Hkkkkkkk.',
    '.kssssssk.',
    '..ssssss..',
    '..jwwwwj..',
    '.jjjwwjjJ.',
    '.jjbwwbjJ.',
    '.jjjbbjjJ.',
    '.JJJJJJJJ.',
  ],
  colors: { k: HAIR, H: HAIR_HI, s: SKIN, w: WHITE, j: JACKET, J: JACKET_SH, b: BLUE },
  eyes: [[3, 3], [6, 3]],
  eyeColor: 0x303040,
  smile: [[4, 4], [5, 4]],
  tear: [3, 4],
  arms: { color: STEEL, down: [[0, 7], [0, 8], [9, 7], [9, 8]], up: [[0, 5], [0, 6], [9, 5], [9, 6]] },
  feet: { color: 0x6a5a48, at: [3, 6] },
  captions: { happy: 'TCH', idle: 'TIDY UP' },
  critters: {
    // Eren in titan form.
    Explore: { rows: ['.hhhhhh.', '########', '.#tttt#.', '..####..'], eye: 1, colors: { '#': 0xa06a44, h: 0x4a3426, t: WHITE }, tint: 0xa06a44 },
    // Hange's goggles.
    Plan: { rows: ['.hhhhhh.', 'hgg##ggh', '.######.', '..####..'], eye: 1, colors: { '#': 0xf0c8a0, h: 0x6a4a30, g: GEAR }, tint: 0x6a4a30 },
    // A little skinless titan.
    fork: { rows: ['.#.##.#.', '########', '.#tttt#.', '..#--#..'], eye: 1, colors: { '#': 0xe0707a, t: WHITE }, tint: 0xe0707a },
    // The Wings of Freedom crest.
    'general-purpose': { rows: ['w#....#w', 'ww#..#ww', '.w####w.', '..####..'], eye: 2, feet: false, arms: false, colors: { '#': BLUE, w: WHITE }, tint: BLUE },
    // A cleaning broom.
    other: { rows: ['...##...', '...##...', '..yyyy..', '.yyyyyy.'], eye: 3, feet: false, arms: false, colors: { '#': 0xb08850, y: 0xd8b860 }, tint: 0xb08850 },
  },
}
