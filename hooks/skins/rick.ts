import type { SkinLook } from './types'

const HAIR = 0xa6d8ec
const HAIR_D = 0x5a9ab8
const SKIN = 0xf0d2b4
const COAT = 0xeef2f4
const COAT_D = 0xa8b4bc
const SHIRT = 0x7ab8d8
const DROOL = 0x9ae05a

// Rick Sanchez, the genius scientist: spiky pale blue hair, one long
// unibrow, a white lab coat over a light blue shirt and a line of drool.
export const look: SkinLook = {
  said: 'Buddy turns into Rick: wubba lubba dub dub!',
  group: 'TV cartoons',
  rows: [
    'h.h.hh.h.h',
    'hhhhhhhhhh',
    '.HsssssshH',
    '.Hkkkkkkh.',
    '..ssssss..',
    '..sssssg..',
    '..smmmms..',
    '.cwssssc..',
    'cwwbbbbwwc',
    'cwwbbbbwwc',
    '.cw.bb.wc.',
  ],
  colors: { h: HAIR, H: HAIR_D, s: SKIN, k: 0x5a6a78, m: 0xb88a78, g: DROOL, c: COAT_D, w: COAT, b: SHIRT },
  eyes: [[3, 4], [6, 4]],
  smile: [[3, 6], [4, 6], [5, 6], [6, 6]],
  smileColor: 0x3a2a2a,
  tear: [2, 4],
  arms: { color: SKIN, down: [[0, 10], [9, 10]], up: [[0, 6], [9, 6]] },
  feet: { color: 0x6a4a2a, at: [3, 6] },
  captions: { happy: 'WUBBA!', idle: 'BURP' },
  critters: {
    // The portal gun, its green tube glowing.
    Explore: { rows: ['.######.', '##gg####', '.######.', '....--..'], eye: 0, eyes: [1, 6], feet: false, arms: false, colors: { '#': 0xd8dce0, g: 0x6ae04a }, tint: 0x6ae04a },
    // Mr. Meeseeks, tall and blue: look at me!
    Plan: { rows: ['..####..', '..####..', '..#kk#..', '..####..'], eye: 1, colors: { '#': 0x6ab8f0, k: 0x2a4a6a }, tint: 0x6ab8f0 },
    // A mini Rick with his spiky hair and coat.
    fork: { rows: ['#.#.#.#.', '########', '.ssssss.', '.wwbbww.'], eye: 2, colors: { '#': HAIR, s: SKIN, w: COAT, b: SHIRT }, tint: HAIR },
    // Pickle Rick!
    'general-purpose': { rows: ['..####..', '.#-##-#.', '.######.', '..-##-..'], eye: 1, colors: { '#': 0x6aa83a }, tint: 0x6aa83a },
    // Birdperson, a feathered warrior with a beak.
    other: { rows: ['.r####..', '.######y', '.######.', '..-..-..'], eye: 1, eyes: [3, 5], colors: { '#': 0x8a6a4a, r: 0xc04030, y: 0xe8c040 }, tint: 0x8a6a4a },
  },
}
