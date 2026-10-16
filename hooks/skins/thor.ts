import type { SkinLook } from './types'

const SHINE = 0xdde1e8
const SILVER = 0x9aa2ae
const SHADE = 0x6a707c
const HAIR = 0xe8c060
const SKIN = 0xe8b890
const BEARD = 0xc09048
const ARMOUR = 0x56688a
const CAPE = 0xc82e34
const HANDLE = 0x8a5e3a

// Thor: a silver winged helmet, long blond hair, a short beard, armour with
// silver discs, a red cape, and Mjolnir held out on the right.
export const look: SkinLook = {
  said: 'Buddy lifts the hammer: Thor!',
  group: 'Marvel',
  rows: [
    '.W......W.',
    '.WS.WW.SW.',
    '..SWSSSS..',
    '.YYssssYY.',
    '.YYssssYY.',
    '.YYbbbbYMM',
    '.RAdAAdAMM',
    '.RAAAAAARn',
    '.RAAAAAARn',
    '.RAAAAAARn',
  ],
  colors: { W: SHINE, S: SILVER, Y: HAIR, s: SKIN, b: BEARD, A: ARMOUR, d: SHINE, R: CAPE, M: SHADE, n: HANDLE },
  eyes: [[3, 4], [6, 4]],
  eyeColor: 0x3a4a7a,
  smile: [[4, 5], [5, 5]],
  tear: [3, 5],
  arms: {
    color: SKIN,
    down: [[0, 7], [0, 8]],
    up: [[0, 4], [0, 5]],
  },
  feet: { color: 0x7a5a3a, at: [3, 6] },
  captions: { idle: 'WORTHY', happy: 'BRING IT' },
  critters: {
    // Loki's horned helmet, gold with green horns.
    Explore: { rows: ['g..##..g', 'gg####gg', '.######.', '.##..##.'], eye: 2, colors: { '#': 0xd8b040, g: 0x4aae6a }, tint: 0xd8b040 },
    // Stormbreaker, the axe: a big head on a handle.
    Plan: { rows: ['###.....', '####hhhh', '###.....', '........'], eye: 1, eyes: [1, 2], arms: false, feet: false, colors: { '#': 0x8a96a8, h: HANDLE }, tint: 0x8a96a8 },
    // A frog Thor with a tiny helmet.
    fork: { rows: ['..vvvv..', '.######.', '########', '.#....#.'], eye: 2, colors: { '#': 0x5aae5a, v: SHINE }, tint: 0x5aae5a },
    // A lightning bolt.
    'general-purpose': { rows: ['...###..', '..##....', '.######.', '....##..'], eye: 2, arms: false, feet: false, colors: { '#': 0xf0d040 }, tint: 0xf0d040 },
    // The Bifrost, a rainbow strip.
    other: { rows: ['rrrrrrrr', 'yyyyyyyy', '########', 'bbbbbbbb'], eye: 2, arms: false, feet: false, colors: { '#': 0x4ab04a, r: 0xe8505a, y: 0xe8c040, b: 0x5a8ae8 }, tint: 0x4ab04a },
  },
}
