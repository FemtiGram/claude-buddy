import type { SkinLook } from './types'

const PINK = 0xf7a8c8
const SHADE = 0xd9709e
const LIGHT = 0xffdcea
const TEAL = 0x3fb6cc

// Jigglypuff, the balloon Pokémon: a round pink ball, pointed ears with dark
// insides, the curl of hair on the forehead and huge teal eyes with a shine.
export const look: SkinLook = {
  said: 'Buddy puffs up and sings: Jigglypuff!',
  group: 'Pokémon',
  rows: [
    '.p......p.',
    '.pk.cc.kp.',
    '.hppcpppd.',
    'hhppppppdd',
    'hpwtppwtpd',
    'hpttppttpd',
    'hppppppppd',
    '.pppppppd.',
    '..pppppd..',
    '...dddd...',
  ],
  colors: { p: PINK, h: LIGHT, d: SHADE, c: 0xe888b4, k: 0x3a2a3a, w: 0xffffff, t: TEAL },
  eyes: [[3, 5], [7, 5]],
  eyeColor: 0x1c4a66,
  smile: [[4, 7], [5, 7]],
  tear: [2, 6],
  arms: { color: PINK, down: [[0, 7], [9, 7]], up: [[0, 2], [9, 2]] },
  feet: { color: SHADE, at: [3, 6] },
  captions: { idle: 'LA LA', happy: 'JIGGLY!' },
  critters: {
    // Zubat: a blue bat with purple wings and a fanged mouth.
    Explore: { rows: ['p.#..#.p', 'pp####pp', 'p#kkkk#p', '..#ww#..'], eye: 1, feet: false, colors: { '#': 0x4a8ad8, p: 0x9a5ac8, k: 0x3a1030, w: 0xffffff }, tint: 0x4a8ad8 },
    // Clefairy: pale pink, brown-tipped ears, a curl and tiny wings.
    Plan: { rows: ['.k....k.', '.#.##.#.', 'w######w', '..####..'], eye: 2, colors: { '#': 0xf8bcc8, k: 0x6a4030, w: 0xfde8ec }, tint: 0xf8a0b0 },
    // Igglybuff: a tiny Jigglypuff, all curl and eyes.
    fork: { rows: ['...#-...', '..####..', '.######.', '..####..'], eye: 2, eyeColor: 0x2a8aa8, colors: { '#': PINK }, tint: PINK },
    // Wigglytuff: tall bunny ears, a big curl and a white belly.
    'general-purpose': { rows: ['.#....#.', '.##--##.', '.######.', '.#wwww#.'], eye: 2, eyeColor: 0x2a6a8a, colors: { '#': 0xf090b8, w: 0xfff0f4 }, tint: 0xf090b8 },
    // Togepi: a yellow head peeking out of a red-and-blue spotted egg.
    other: { rows: ['..y..y..', '.yyyyyy.', '.#r##b#.', '.######.'], eye: 1, arms: false, colors: { '#': 0xf6f2e6, y: 0xf6e08a, r: 0xe04040, b: 0x3a6ad8 }, tint: 0xe04040 },
  },
}
