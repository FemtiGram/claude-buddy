import type { SkinLook } from './types'

const SKIN = 0x9cc27e
const SHADE = 0x7fa35f
const DARK = 0x2e2a2c
const ROBE = 0xc9ae80
const ROBE_D = 0x9c7f55

// Grogu: a big round green head, very wide drooping ears, huge dark eyes, a tiny
// mouth, and a small body in an oversized beige-brown robe with a big collar.
export const look: SkinLook = {
  said: 'Buddy turns into Grogu.',
  group: 'Star Wars',
  rows: [
    '..........',
    '..........',
    '..gggggg..',
    '.gggggggg.',
    'sggggggggs',
    'sgkggggkgs',
    'ssggggggss',
    '.cccccccc.',
    '.rrrrrrrr.',
    '.rrrrrrrr.',
    '..rrrrrr..',
  ],
  colors: { g: SKIN, s: SHADE, k: DARK, c: ROBE, r: ROBE_D },
  eyes: [[3, 5], [6, 5]],
  eyeColor: DARK,
  smile: [[4, 6], [5, 6]],
  tear: [3, 6],
  arms: {
    color: SKIN,
    down: [[0, 8], [9, 8]],
    up: [[0, 7], [9, 7]],
  },
  feet: { color: ROBE_D, at: [3, 6] },
  captions: { idle: 'COO', happy: 'COO!' },
  critters: {
    // The floating pram: a grey dome over a hover base.
    Explore: { rows: ['..####..', '.######.', '########', '..bbbb..'], eye: 1, eyes: [2, 5], feet: false, arms: false, colors: { '#': 0x8c98a4, b: 0x7a6a58 }, tint: 0x8c98a4 },
    // The Mandalorian's helmet: silver with a dark T-visor.
    Plan: { rows: ['..####..', '.vvvvvv.', '.##vv##.', '..#vv#..'], eye: 1, eyes: [2, 5], eyeColor: 0x3a4650, arms: false, colors: { '#': 0xb4bcc6, v: 0x3a4650 }, tint: 0xb4bcc6 },
    // A mini Grogu with wide ears.
    fork: { rows: ['ss....ss', 'ss####ss', '..####..', '..cccc..'], eye: 1, eyes: [3, 4], colors: { '#': SKIN, s: SHADE, c: ROBE }, tint: SKIN },
    // The blue frog, his snack.
    'general-purpose': { rows: ['.##..##.', '.######.', '########', '#.#..#.#'], eye: 0, eyes: [1, 6], arms: false, feet: false, colors: { '#': 0x4a86c8 }, tint: 0x4a86c8 },
    // A silver ball knob on the ship's lever.
    other: { rows: ['..###...', '.#####..', '..###...', '....ll..'], eye: 1, eyes: [2, 3], arms: false, feet: false, colors: { '#': 0xc2ccd6, l: 0x6a7480 }, tint: 0xc2ccd6 },
  },
}
