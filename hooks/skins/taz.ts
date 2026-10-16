import type { SkinLook } from './types'

const FUR = 0x8a5630
const LIGHT = 0xb47c48
const DARK = 0x5a3418
const TAN = 0xe8c890

// Taz, the Tasmanian Devil: a wide brown body, little pointed ears, heavy
// brows over white eyes, and the huge grin full of teeth with its red maw,
// a tan belly.
export const look: SkinLook = {
  said: 'Buddy whirls in as the Tasmanian Devil. Grrrblbl!',
  group: 'TV cartoons',
  rows: [
    '.d......d.',
    '.db....bd.',
    '.LddbbddbD',
    'bLwwbbwwbD',
    'bbwwbbwwbD',
    'bcttttttcD',
    'btrrrrrrtD',
    'bcttttttcD',
    '.bccccccD.',
    '..bccccD..',
  ],
  colors: { b: FUR, L: LIGHT, d: DARK, D: DARK, w: 0xf8f6ee, c: TAN, t: 0xfffff4, r: 0xb8283a },
  eyes: [[3, 3], [6, 3]],
  eyeColor: 0x2a1a10,
  smile: [[2, 6], [7, 6]],
  tear: [1, 4],
  arms: { color: FUR, down: [[0, 8], [9, 8]], up: [[0, 1], [9, 1]] },
  feet: { color: DARK, at: [2, 3, 6, 7] },
  captions: { idle: 'GRRR', happy: 'RAWRR!' },
  critters: {
    // Wile E. Coyote: grey-brown, tall ears, a tan muzzle.
    Explore: { rows: ['.#....#.', '.##..##.', '.######.', '..tttt..'], eye: 2, colors: { '#': 0x8a7a60, t: 0xd8c09a }, tint: 0x8a7a60 },
    // Sylvester: a black cat with yellow eyes, a white muzzle and a red nose.
    Plan: { rows: ['.#....#.', '.######.', '.#wrrw#.', '..wwww..'], eye: 1, eyeColor: 0xe8d040, colors: { '#': 0x3a3a46, w: 0xf0f0ea, r: 0xd03a3a }, tint: 0xa0a0b0 },
    // A little Taz, all teeth.
    fork: { rows: ['.-....-.', '.######.', '.#tttt#.', '..####..'], eye: 1, colors: { '#': FUR, t: 0xfffff4 }, tint: LIGHT },
    // Foghorn Leghorn: a white rooster, red comb and wattle, yellow beak.
    'general-purpose': { rows: ['...rr...', '..####..', '.###yy..', '..r###..'], eye: 1, eyes: [3, 4], colors: { '#': 0xe8e4d8, y: 0xf0b020, r: 0xd03020 }, tint: 0xe8e4d8 },
    // Pepé Le Pew: a black skunk with his white stripe.
    other: { rows: ['...ww...', '.##ww##.', '.######.', '..#ww#..'], eye: 1, eyes: [1, 6], eyeColor: 0xe0e0b0, colors: { '#': 0x2c2c38, w: 0xf0f0f0 }, tint: 0xf0f0f0 },
  },
}
