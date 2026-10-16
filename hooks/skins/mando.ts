import type { SkinLook } from './types'

const SILVER = 0xa8b0b8
const LIGHT = 0xd0d6dc
const SHADE = 0x7c848c
const VISOR = 0x2c303a
const CAPE = 0x8a6e4e
const SUIT = 0x4a505a

// The Mandalorian: a polished beskar helmet with the dark T-visor, silver chest
// plates, a brown cloak over one shoulder, a dark flight suit, a jetpack behind.
export const look: SkinLook = {
  said: 'Buddy puts on the beskar. This is the way.',
  group: 'Star Wars',
  rows: [
    '..........',
    '..........',
    '...SLLS...',
    '..SLLSSD..',
    '..VVVVVV..',
    '..SSVVSD..',
    '..SSVVSD..',
    '.J.DSSD.J.',
    '.CCSLLSGG.',
    '.CCSSSSGG.',
    '..GGGGGG..',
  ],
  colors: { S: SILVER, L: LIGHT, D: SHADE, V: VISOR, C: CAPE, G: SUIT, J: 0x6c7480 },
  eyes: [[3, 4], [6, 4]],
  eyeColor: 0x5a6272,
  smile: [[4, 7], [5, 7]],
  tear: [3, 5],
  arms: {
    color: SILVER,
    down: [[0, 9], [9, 9]],
    up: [[0, 6], [9, 6]],
  },
  feet: { color: 0x5c4a3a, at: [3, 6] },
  captions: { idle: 'BESKR', happy: 'DONE' },
  critters: {
    // The Razor Crest: a swept grey ship with a cockpit glow.
    Explore: { rows: ['...##...', '..####y.', '.#######', '#.-##-.#'], eye: 1, eyes: [3], eyeColor: 0x2c303a, arms: false, feet: false, colors: { '#': 0x9a9ea6, y: 0xe8c860, '-': 0x6c7480 }, tint: 0x9a9ea6 },
    // The Armorer's forge: a hammer over a glowing anvil.
    Plan: { rows: ['.####...', '.####.#.', '..oo..#.', '.####### '.trim()], eye: 1, eyes: [2, 3], eyeColor: 0x2c303a, arms: false, feet: false, colors: { '#': 0x7c848c, o: 0xe8884a }, tint: 0xe8884a },
    // A mini Mando helmet.
    fork: { rows: ['..####..', '.#SSSS#.', '.#VVVV#.', '..#VV#..'], eye: 2, eyes: [3, 4], eyeColor: 0x5a6272, colors: { '#': SILVER, S: LIGHT, V: VISOR }, tint: SILVER },
    // A blurrg: a hunched green-brown beast with a long snout.
    'general-purpose': { rows: ['..##....', '.####.##', '########', '.#.##.#.'], eye: 1, eyes: [3], eyeColor: 0x2c303a, colors: { '#': 0x7e8a5a }, tint: 0x7e8a5a },
    // IG-11's round white head with a red-lit visor band.
    other: { rows: ['..####..', '.######.', '.#rrrr#.', '..####..'], eye: 2, eyes: [2, 5], eyeColor: 0x2c303a, arms: false, colors: { '#': 0xc4c8cc, r: 0xc84a4a }, tint: 0xc4c8cc },
  },
}
