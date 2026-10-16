import type { SkinLook } from './types'

const FUR = 0x8a5630
const LIGHT = 0xb47c48
const DARK = 0x5a3418
const TAN = 0xe8c890

// Taz, the Tasmanian Devil: a wide brown body with two fur tufts on top,
// angry brows slanting down over white eyes, a tan muzzle and the huge open
// maw full of jagged teeth, a tan belly.
export const look: SkinLook = {
  said: 'Buddy whirls in as the Tasmanian Devil. Grrrblbl!',
  group: 'TV cartoons',
  rows: [
    '..d....d..',
    '..dLbbbd..',
    '.LLddbddD.',
    '.LwwddwwD.',
    'bbwwbbwwbD',
    'bbccccccbD',
    'bttttttttD',
    'brtrrrrtrD',
    'brrrrrrrrD',
    'bttrttrttD',
    '.bccccccD.',
  ],
  colors: { b: FUR, L: LIGHT, d: DARK, D: DARK, w: 0xf8f6ee, c: TAN, t: 0xfffff4, r: 0x7a1824 },
  eyes: [[3, 4], [6, 4]],
  eyeColor: 0x2a1a10,
  smile: [[1, 5], [8, 5]],
  tear: [1, 5],
  arms: { color: FUR, down: [[0, 10], [9, 10]], up: [[0, 3], [9, 3]] },
  feet: { color: DARK, at: [2, 3, 6, 7] },
  captions: { idle: 'GRRR', happy: 'RAWRR!' },
  critters: {
    // Wile E. Coyote: grey-brown, tall ears, a tan muzzle.
    Explore: { rows: ['.#....#.', '.##..##.', '.######.', '..tttt..'], eye: 2, colors: { '#': 0x8a7a60, t: 0xd8c09a }, tint: 0x8a7a60 },
    // Sylvester: a black cat with yellow eyes, a white muzzle and a red nose.
    Plan: { rows: ['.#....#.', '.######.', '.#wrrw#.', '..wwww..'], eye: 1, eyeColor: 0xe8d040, colors: { '#': 0x3a3a46, w: 0xf0f0ea, r: 0xd03a3a }, tint: 0xa0a0b0 },
    // A little Taz: tufts, then a maw of teeth over red.
    fork: { rows: ['.-....-.', '.######.', '#tttttt#', '.#rrrr#.'], eye: 1, colors: { '#': FUR, t: 0xfffff4, r: 0x9a2030 }, tint: LIGHT },
    // Foghorn Leghorn: a white rooster, red comb and wattle, yellow beak.
    'general-purpose': { rows: ['...rr...', '..####..', '.###yy..', '..r###..'], eye: 1, eyes: [3, 4], colors: { '#': 0xe8e4d8, y: 0xf0b020, r: 0xd03020 }, tint: 0xe8e4d8 },
    // Pepé Le Pew: a black skunk with his white stripe.
    other: { rows: ['...ww...', '.##ww##.', '.######.', '..#ww#..'], eye: 1, eyes: [1, 6], eyeColor: 0xe0e0b0, colors: { '#': 0x2c2c38, w: 0xf0f0f0 }, tint: 0xf0f0f0 },
  },
}
