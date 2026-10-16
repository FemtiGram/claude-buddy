import type { SkinLook } from './types'

const METAL = 0xb8bec8
const DARK = 0x7e868e
const SKIN = 0x8a5a3e
const PANEL = 0x5a6a88
const RED = 0xe83a3a

// Cyborg (Victor Stone): half silver metal head with a glowing red eye, half
// brown skin; an armoured body with panels and red lights and a sonic cannon.
export const look: SkinLook = {
  said: 'Buddy boots up as Cyborg!',
  group: 'DC',
  rows: [
    '..........',
    '..mmmbbb..',
    '.mmmmbbbb.',
    '.mrMmbbbb.',
    '.mmmMbbbb.',
    '..mmbbbb..',
    '.mmnnnnMm.',
    '.mnrnnrnM.',
    '.mmnnnnMm.',
    '..mm..Mm..',
  ],
  colors: { m: METAL, M: DARK, b: SKIN, n: PANEL, r: RED },
  eyes: [[6, 3]],
  smile: [[5, 5], [6, 5]],
  tear: [6, 3],
  arms: { color: DARK, down: [[0, 7], [9, 7]], up: [[0, 5], [9, 5]] },
  feet: { color: DARK, at: [2, 7] },
  captions: { happy: 'ONLINE', idle: 'BEEP' },
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
