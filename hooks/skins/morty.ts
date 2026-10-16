import type { SkinLook } from './types'

const HAIR = 0x7a4a24
const HAIR_L = 0xa86a3a
const SKIN = 0xf2d2b2
const SKIN_D = 0xd8a888
const WHITE = 0xeef0f2
const SHIRT = 0xf2e04a
const SHIRT_D = 0xc8a828
const PANTS = 0x3a6fd8

// Morty Smith, Rick's anxious grandson: a round head under brown hair,
// big white eyes with tiny pupils, a wobbly mouth and his yellow T-shirt.
export const look: SkinLook = {
  said: 'Buddy turns into Morty: aw geez, Rick!',
  group: 'TV cartoons',
  rows: [
    '..llhhhh..',
    '.lhhhhhhh.',
    '.hsssssssh',
    '.swwswwss.',
    '.swwswwsd.',
    '.sssssssd.',
    '..smmmsd..',
    '..yyyyyy..',
    '.yyyyyyYY.',
    '..bbbbbb..',
    '..bb..bb..',
  ],
  colors: { l: HAIR_L, h: HAIR, s: SKIN, d: SKIN_D, w: WHITE, m: 0xa86a5a, y: SHIRT, Y: SHIRT_D, b: PANTS },
  eyes: [[3, 4], [6, 4]],
  smile: [[2, 5], [3, 6], [4, 6], [5, 6], [6, 5]],
  tear: [1, 4],
  arms: { color: SKIN, down: [[0, 9], [9, 9]], up: [[0, 6], [9, 6]] },
  feet: { color: WHITE, at: [2, 7] },
  captions: { happy: 'OH YEAH!', idle: 'AW GEEZ' },
  critters: {
    // Mr. Poopybutthole, top hat and all: ooo-wee!
    Explore: { rows: ['..kkkk..', '.kkkkkk.', '.######.', '..-##-..'], eye: 2, colors: { '#': 0xf2d84a, k: 0x2a2a2a }, tint: 0xf2d84a },
    // Snuffles, the smart dog in his brain-boosting helmet.
    Plan: { rows: ['..gggg..', '-######-', '.######.', '.##kk##.'], eye: 2, colors: { '#': 0xe8e8e0, g: 0x9aa4ac, k: 0x3a3a3a }, tint: 0x9aa4ac },
    // A mini Morty, brown hair and yellow shirt.
    fork: { rows: ['.######.', '.ssssss.', '.ssssss.', '..yyyy..'], eye: 1, colors: { '#': HAIR, s: SKIN, y: SHIRT }, tint: SHIRT },
    // Summer, orange hair and her pink top.
    'general-purpose': { rows: ['.######.', '#ssssss#', '#ssssss#', '..pppp..'], eye: 1, colors: { '#': 0xe07a2a, s: SKIN, p: 0xe86aa8 }, tint: 0xe07a2a },
    // Squanchy, an orange cat-thing with his pointy ears.
    other: { rows: ['#......#', '##-##-##', '.######.', '.######.'], eye: 2, colors: { '#': 0xe89a3a }, tint: 0xe89a3a },
  },
}
