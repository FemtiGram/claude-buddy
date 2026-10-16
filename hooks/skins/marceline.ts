import type { SkinLook } from './types'

const HAIR = 0x2a2438
const SHINE = 0x6a5a9a
const SKIN = 0x9fb0c4
const TOP = 0x707080
const JEANS = 0x3a5a9a

// Marceline the Vampire Queen: grey-blue skin, floor-length black hair with a
// violet sheen, one white fang, a grey tank top over blue jeans and red boots.
export const look: SkinLook = {
  said: 'Buddy floats in as Marceline, the Vampire Queen.',
  group: 'TV cartoons',
  rows: [
    '...hhhh...',
    '..hHHhhh..',
    '.hHhhhhhh.',
    '.hhsssshh.',
    '.hssssssh.',
    '.hsssfssh.',
    'hhsgggsshh',
    'hhggggggHh',
    'hh.bbbb.hh',
    'Hh.bbbb.hH',
  ],
  colors: { h: HAIR, H: SHINE, s: SKIN, f: 0xf8f8f8, g: TOP, b: JEANS },
  eyes: [[3, 4], [6, 4]],
  eyeColor: 0x1a1a24,
  smile: [[3, 5], [4, 5], [6, 5]],
  tear: [2, 5],
  arms: { color: SKIN, down: [[2, 8], [7, 8]], up: [[0, 4], [9, 4]] },
  feet: { color: 0xc02a2a, at: [3, 6] },
  captions: { idle: 'HEY', happy: 'ROCK ON!' },
  critters: {
    // A bat: Marceline's own shape, red eyes, wings spread.
    Explore: { rows: ['#......#', '##-##-##', '.######.', '..#..#..'], eye: 1, eyes: [3, 4], eyeColor: 0xe02a2a, feet: false, arms: false, colors: { '#': 0x6a5a8a }, tint: 0x8a7ab0 },
    // Hambo: her old patched teddy, brown with a stitched button eye.
    Plan: { rows: ['.#....#.', '.######.', '.#p##-#.', '..####..'], eye: 1, colors: { '#': 0xa87a54, p: 0xe8a0b0 }, tint: 0xa87a54 },
    // A mini Marceline: black hair, grey-blue face, fang.
    fork: { rows: ['.hhhhhh.', 'hh####hh', 'hh#f##hh', 'h.gggg.h'], eye: 1, colors: { '#': SKIN, h: HAIR, f: 0xf8f8f8, g: TOP }, tint: SHINE },
    // A strawberry, red drained to grey where she's had a bite.
    'general-purpose': { rows: ['..gggg..', '.######.', '.#y##-#.', '..####..'], eye: 1, feet: false, colors: { '#': 0xe03a40, g: 0x4aa040, y: 0xf0e070 }, tint: 0xe03a40 },
    // A ghost from the Nightosphere's edge: pale, wavy hem.
    other: { rows: ['..####..', '.######.', '.######.', '.#.##.#.'], eye: 1, feet: false, eyeColor: 0x3a3a60, colors: { '#': 0xd8e4f4 }, tint: 0xb8c8e8 },
  },
}
