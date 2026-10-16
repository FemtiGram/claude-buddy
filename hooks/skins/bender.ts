import type { SkinLook } from './types'

const GREY = 0x9aa4ae
const DARK = 0x5e6670
const SHINE = 0xd4dce4
const VISOR = 0x1e2228

// Bender of Futurama: a grey steel can of a robot, an antenna on his domed
// head, the black visor with two big eyes, a grille of a mouth and a cigar.
export const look: SkinLook = {
  said: 'Buddy turns into Bender. Bite my shiny metal ass!',
  group: 'Robots',
  rows: [
    '....h.....',
    '....g.....',
    '...hggd...',
    '..hggggd..',
    '.kwwkkwwk.',
    '..gggggd..',
    '..gmdmdgcr',
    '..gggggd..',
    '.hggggggd.',
    '.ggggggdd.',
    '..gggggd..',
  ],
  colors: { g: GREY, d: DARK, h: SHINE, k: VISOR, w: 0xf4f0d0, m: 0xeeeee6, c: 0x8a5a2a, r: 0xff6a2a },
  eyes: [[3, 4], [6, 4]],
  eyeColor: VISOR,
  tear: [3, 5],
  arms: { color: GREY, down: [[0, 9], [9, 9]], up: [[0, 7], [9, 7]] },
  feet: { color: DARK, at: [3, 6] },
  captions: { idle: 'BITE MY', happy: 'IM BACK!' },
  critters: {
    // The Planet Express ship, green, engine glowing.
    Explore: { rows: ['..#.....', '.######.', 'r#####ww', '.######.'], eye: 2, eyes: [6, 7], eyeColor: 0x2a3a4a, feet: false, arms: false, colors: { '#': 0x4ab06a, w: 0xbfe8ff, r: 0xff7a2a }, tint: 0x4ab06a },
    // Leela: purple ponytail, one big eye, white tank top.
    Plan: { rows: ['.pppppp.', 'p#####pp', '..####.p', '.wwwwww.'], eye: 1, eyes: [3, 4], eyeColor: 0x5a2a6a, colors: { '#': 0xf2c8a0, p: 0x8a3ab8, w: 0xf0f0f0 }, tint: 0x8a3ab8 },
    // A mini Bender.
    fork: { rows: ['...#....', '..####..', '.kwkkwk.', '.##mm##.'], eye: 2, colors: { '#': GREY, k: VISOR, w: 0xf4f0d0, m: 0xeeeee6 }, tint: GREY },
    // Zoidberg: red, claws out, face tentacles.
    'general-purpose': { rows: ['..####..', 'c######c', '.#tttt#.', '.t.tt.t.'], eye: 1, feet: false, colors: { '#': 0xe86a5a, c: 0xc84a3a, t: 0xc84a3a }, tint: 0xe86a5a },
    // All glory to the Hypnotoad.
    other: { rows: ['.##..##.', '.######.', '########', '-#....#-'], eye: 0, eyes: [2, 5], eyeColor: 0xe060e0, feet: false, colors: { '#': 0x6aa84a }, tint: 0x6aa84a },
  },
}
