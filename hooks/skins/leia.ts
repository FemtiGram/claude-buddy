import type { SkinLook } from './types'

const BUN = 0x5a3a26
const HAIR = 0x7a5236
const SKIN = 0xf0cba8
const GOWN = 0xf0ece4
const SHADE = 0xcfcbc2
const SILVER = 0x9ba6b4

// Princess Leia (A New Hope): big round side buns, brown hair parted on top,
// a flowing white gown with a silver belt and white boots.
export const look: SkinLook = {
  said: 'Buddy turns into Princess Leia.',
  group: 'Star Wars',
  rows: [
    '..........',
    '..........',
    '.BBHHHHBB.',
    'BBBHHHHBBB',
    'BBHssssHBB',
    '.BHssssHB.',
    '...ssss...',
    '...gwwg...',
    '..wwwwww..',
    '..SSSSSS..',
    '.gwwwwwwg.',
  ],
  colors: { B: BUN, H: HAIR, s: SKIN, w: GOWN, g: SHADE, S: SILVER },
  eyes: [[3, 5], [6, 5]],
  eyeColor: 0x3a2418,
  smile: [[4, 6], [5, 6]],
  tear: [3, 6],
  arms: {
    color: SKIN,
    down: [[1, 9], [8, 9]],
    up: [[1, 6], [8, 6]],
  },
  feet: { color: 0xe2ded4, at: [3, 6] },
  captions: { idle: 'HELP ME', happy: 'HOPE!' },
  critters: {
    // An X-wing: four wings in an X around the fuselage, red wing tips.
    Explore: { rows: ['R......R', '.#.##.#.', '..####..', 'R.#--#.R'], eye: 2, eyes: [3, 4], arms: false, feet: false, colors: { '#': 0xc8c4bc, R: 0xb8453c }, tint: 0xc8c4bc },
    // The Death Star plans: a grey sphere with its dish, a blue holo ring.
    Plan: { rows: ['..bbbb..', '.##o###.', '.######.', '..b--b..'], eye: 2, eyes: [2, 5], eyeColor: 0x3a4658, colors: { '#': 0x8e98a8, o: 0x56606e, b: 0x4fb0d8 }, tint: 0x4fb0d8 },
    // A mini Leia with her buns.
    fork: { rows: ['BBHHHHBB', 'BH####HB', '.######.', '..wwww..'], eye: 1, eyes: [2, 5], eyeColor: 0x3a2418, colors: { '#': SKIN, B: BUN, H: HAIR, w: GOWN }, tint: SKIN },
    // A Rebel Alliance helmet: white with the orange emblem.
    'general-purpose': { rows: ['..####..', '.##OO##.', '.######.', '..#--#..'], eye: 2, eyeColor: 0x3a4250, colors: { '#': 0xe0dcd2, O: 0xd8873a }, tint: 0xd8873a },
    // A blue holographic message: a flickering mini figure with buns.
    other: { rows: ['#..##..#', '#.####.#', '...##...', '.cccccc.'], eye: 1, eyes: [3, 4], eyeColor: 0x1e5a80, arms: false, feet: false, colors: { '#': 0x5ab4e6, c: 0x8fd4f2 }, tint: 0x5ab4e6 },
  },
}
