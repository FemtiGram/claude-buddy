import type { SkinLook } from './types'

const LIGHT = 0xdce0e8
const METAL = 0xb8bec8
const DARK = 0x7e868e
const SKIN = 0x8a5a3e
const SKIN_DARK = 0x6a4430
const PANEL = 0x5a6a88
const RED = 0xe83a3a

// Cyborg (Victor Stone): half silver metal head with a glowing red eye, half
// brown skin with a normal eye; an armoured body with blue-grey panels, red
// lights and a sonic cannon for an arm.
export const look: SkinLook = {
  said: 'Buddy boots up as Cyborg!',
  group: 'DC',
  rows: [
    '..Lmmbbb..',
    '.Lmmmbbbb.',
    '.mMrMLLbb.',
    '.mmmmbbbB.',
    '..mmMbbB..',
    '.LmnnnnMm.',
    '.mnrnnrnML',
    '.mmnnnnMMM',
    '..mm..MM..',
  ],
  colors: { L: LIGHT, m: METAL, M: DARK, n: PANEL, r: RED, b: SKIN, B: SKIN_DARK },
  eyes: [[6, 2]],
  smile: [[5, 4], [6, 4]],
  tear: [6, 2],
  arms: { color: DARK, down: [[0, 6], [0, 7]], up: [[0, 4], [0, 5]] },
  feet: { color: DARK, at: [2, 7] },
  captions: { happy: 'BOOYAH!', idle: 'BEEP' },
  critters: {
    // A blue Boom Tube portal.
    Explore: { rows: ['.######.', '#..##..#', '#..##..#', '.######.'], eye: 1, eyes: [], feet: false, arms: false, colors: { '#': 0x3a8ae8 }, tint: 0x3a8ae8 },
    // A Mother Box, a glowing cube.
    Plan: { rows: ['.######.', '#-#--#-#', '########', '.#-##-#.'], eye: 1, feet: false, arms: false, colors: { '#': 0xd8c040 }, tint: 0xd8c040 },
    // A mini cyborg eye.
    fork: { rows: ['.######.', '#wwwwww#', '#wwrrww#', '.######.'], eye: 2, eyes: [], feet: false, arms: false, colors: { '#': 0x9aa4b0, w: 0xd8dce4, r: RED }, tint: 0x9aa4b0 },
    // A Teen Titans T badge.
    'general-purpose': { rows: ['########', '#tttttt#', '#..tt..#', '########'], eye: 2, eyes: [], feet: false, arms: false, colors: { '#': 0x4a6ac8, t: 0xe8e0d0 }, tint: 0x4a6ac8 },
    // A burrito.
    other: { rows: ['.######.', '#wwwwww#', '#-gg-rr#', '.######.'], eye: 1, feet: false, arms: false, colors: { '#': 0xd8b878, w: 0xe8d8a8, g: 0x58a848, r: 0xc8483a }, tint: 0xd8b878 },
  },
}
