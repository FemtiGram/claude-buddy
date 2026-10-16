import type { SkinLook } from './types'

const STRAW = 0xe8c060
const STRAW_LIT = 0xfff0a0
const STRAW_DARK = 0xb08830
const BAND = 0xc84030
const HAIR = 0x7a4a24
const SKIN = 0xf2c49a
const SHIRT = 0x4aa04a
const DENIM = 0x3a64b8

// The Stardew Valley farmer: a wide straw hat with a red band, brown hair,
// a green work shirt under blue overalls, ready for another day in Pelican Town.
export const look: SkinLook = {
  said: 'Buddy puts on the straw hat and heads out to the farm.',
  group: 'Games',
  rows: [
    '...lyyy...',
    '..yrrrry..',
    'kyyyyyyyyk',
    '.hhssssh..',
    '.hssssssh.',
    '..ssssss..',
    '.gggggggg.',
    '..bggggb..',
    '..bbbbbb..',
  ],
  colors: { l: STRAW_LIT, y: STRAW, k: STRAW_DARK, r: BAND, h: HAIR, s: SKIN, g: SHIRT, b: DENIM },
  eyes: [[3, 4], [6, 4]],
  eyeColor: 0x3a2414,
  smile: [[4, 5], [5, 5]],
  tear: [3, 5],
  arms: { color: SKIN, down: [[1, 7], [8, 7]], up: [[0, 6], [9, 6]] },
  feet: { color: 0x6b3e1e, at: [3, 6] },
  captions: { idle: 'HOWDY', happy: 'HARVEST!' },
  critters: {
    // A spotted cow, out to pasture.
    Explore: { rows: ['k.####.k', '.######.', '.#pppp#.', '..pppp..'], eye: 1, colors: { '#': 0xeeeae0, k: 0x6a4428, p: 0xf0a0a8 }, tint: 0xb08860 },
    // A parsnip, the first crop of spring.
    Plan: { rows: ['..g..g..', '...gg...', '.######.', '...##...'], eye: 2, feet: false, arms: false, colors: { '#': 0xe8d49a, g: 0x4ab84a }, tint: 0xe8d49a },
    // A tiny farmer: straw hat with its red band, brown hair, green shirt
    // under the blue overall bib.
    fork: { rows: ['..#rr#..', '-######-', '.hsssshh', '.goooog.'], eye: 2, colors: { '#': STRAW, r: BAND, h: HAIR, s: SKIN, g: SHIRT, o: DENIM }, tint: STRAW },
    // A white hen, red comb, yellow beak.
    'general-purpose': { rows: ['...rr...', '.-####-.', '-##yy##-', '.-####-.'], eye: 1, colors: { '#': 0xf4f2ea, r: 0xe0302a, y: 0xf2b830 }, tint: 0xd8d0b8 },
    // Krobus, the shadow who lives in the sewers: a pointed purple hood
    // around a black face and two glowing eyes.
    other: { rows: ['...##...', '.##kk##.', '.#kkkk#.', '##-##-##'], eye: 2, eyeColor: 0xffe060, colors: { '#': 0x6a5a9a, k: 0x1a1428 }, tint: 0x8a7ac0 },
  },
}
