import type { SkinLook } from './types'

const BLUE = 0x2f5fd0
const RED = 0xd42a2a
const SILVER = 0xb4bac4
const GLASS = 0x8ad0ff
const GLOW = 0x3aa8ff

// Optimus Prime, G1: a blue helmet with antenna fins and a silver crest, a
// silver faceplate with mouth vents, red chest with the two truck windows and a
// silver grille, blue legs.
export const look: SkinLook = {
  said: 'Buddy transforms into Optimus Prime. Roll out!',
  group: 'Robots',
  rows: [
    '.b..cc..b.',
    '.bbbccbbb.',
    '.bhssssbb.',
    '.bssssssb.',
    '.bsssssdb.',
    '..fgffgf..',
    '.rrrrrrrr.',
    '.rwwrrwwr.',
    '.rrggggrr.',
    '..bbbbbb..',
    '..bB..bB..',
  ],
  colors: { b: BLUE, B: 0x20409a, c: SILVER, h: 0xe4e8ee, s: SILVER, d: 0x8a92a0, f: 0xd0d4dc, g: 0x7a828e, r: RED, w: GLASS },
  eyes: [[3, 3], [6, 3]],
  eyeColor: GLOW,
  smile: [[3, 5], [6, 5]],
  tear: [2, 4],
  arms: { color: RED, down: [[0, 7], [9, 7]], up: [[0, 5], [9, 5]] },
  feet: { color: SILVER, at: [2, 3, 6, 7] },
  captions: { idle: 'AUTOBOTS', happy: 'ROLL OUT' },
  critters: {
    // Megatron: silver bucket helm, red eyes, the fusion cannon on his arm.
    Explore: { rows: ['..####..', '.#kkkk#.', '.######.', 'cc####..'], eye: 1, eyeColor: 0xff3030, colors: { '#': 0xa8acb4, k: 0x3a3a44, c: 0x2a2a30 }, tint: 0xa8acb4 },
    // The Autobot insignia, a red face with a crested brow.
    Plan: { rows: ['#.####.#', '########', '.#k##k#.', '..####..'], eye: 2, feet: false, arms: false, colors: { '#': RED, k: 0x7a1414 }, tint: RED },
    // A mini Optimus in truck mode: red cab, blue windshield, silver grille.
    fork: { rows: ['..####..', '.#wwww#.', '########', '.kggggk.'], eye: 1, eyeColor: 0x1a2a5a, feet: false, colors: { '#': RED, w: GLASS, g: SILVER, k: 0x2a2a2a }, tint: RED },
    // Soundwave: blue, red visor, a cassette door on his chest.
    'general-purpose': { rows: ['.######.', '.#vvvv#.', '########', '.#yyyy#.'], eye: 1, eyeColor: 0xffd040, colors: { '#': 0x3a5ac8, v: 0xd04040, y: 0xe8c840 }, tint: 0x5a7ae0 },
    // The Matrix of Leadership: a blue glow held in silver handles.
    other: { rows: ['.#....#.', '.##cc##.', '.#cccc#.', '..####..'], eye: 2, feet: false, arms: false, colors: { '#': 0xc0c4cc, c: 0x6ad8ff }, tint: 0x6ad8ff },
  },
}
