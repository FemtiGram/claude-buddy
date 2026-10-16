import type { SkinLook } from './types'

const HELM = 0x3a3a48
const SHEEN = 0x7a7a90
const RIM = 0x8a8ea0
const CAPE = 0x2e2e3a
const EDGE = 0x4a4a5c
const SILVER = 0x9fa3b0
const SABER = 0xe8303a

// Darth Vader: a glossy dark helmet with a pale rim light on dome and
// shoulders, red-amber lenses, a silver grille, an edged cape, a chest box
// with lights, a red saber at his side.
export const look: SkinLook = {
  said: 'Buddy puts on the helmet. *kshhh*',
  group: 'Star Wars',
  rows: [
    '..........',
    '...RRRR...',
    '..RSSHHH..',
    '.RSHHHHHH.',
    '.RHHHHHHH.',
    '.RHHHHHHH.',
    '..RHggHH..',
    '.RHHggHHH.',
    '.RRCCCCCE.',
    '.ECCrgCCE.',
  ],
  colors: { H: HELM, S: SHEEN, R: RIM, C: CAPE, E: EDGE, g: SILVER, r: SABER },
  eyes: [[3, 4], [6, 4]],
  eyeColor: 0xd8503a,
  smile: [[4, 7], [5, 7]],
  tear: [3, 5],
  arms: {
    color: SABER,
    down: [[0, 8], [0, 9], [9, 8], [9, 9]],
    up: [[0, 5], [0, 6], [9, 5], [9, 6]],
  },
  feet: { color: 0x4a4a5c, at: [3, 6] },
  captions: { idle: 'KSHHH', happy: 'POWER' },
  critters: {
    // A TIE fighter: two wing panels round a cockpit.
    Explore: { rows: ['#..cc..#', '###cc###', '###cc###', '#..cc..#'], eye: 1, eyes: [3, 4], eyeColor: 0xd8503a, arms: false, feet: false, colors: { '#': 0x7a7a8c, c: 0x4a5a6a }, tint: 0x7a7a8c },
    // An Imperial officer's cap with a red badge.
    Plan: { rows: ['..####..', '.##R###.', '########', 'bbbbbbbb'], eye: 2, colors: { '#': 0x6a7a6a, R: SABER, b: HELM }, tint: 0x6a7a6a },
    // A mini Vader.
    fork: { rows: ['..####..', '.######.', '.######.', '..#gg#..'], eye: 1, eyeColor: 0xd8503a, colors: { '#': 0x4a4a5c, g: SILVER }, tint: 0x4a4a5c },
    // A Death Star: grey ball with the dish.
    'general-purpose': { rows: ['..####..', '.###oo#.', '########', '.######.'], eye: 2, arms: false, feet: false, colors: { '#': 0x8a8e9a, o: 0x5a5e6a }, tint: 0x8a8e9a },
    // A red lightsaber hilt with its blade.
    other: { rows: ['.....##.', '....##..', '..hh#...', '.hh.....'], eye: 2, eyes: [2, 3], arms: false, feet: false, colors: { '#': SABER, h: SILVER }, tint: SABER },
  },
}
