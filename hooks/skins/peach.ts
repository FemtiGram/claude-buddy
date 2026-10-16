import type { SkinLook } from './types'

const GOLD = 0xf0b020
const HAIR = 0xf8dc60
const HAIR_DARK = 0xd8a830
const SKIN = 0xf8d0b0
const PINK = 0xf27ab4
const PINK_DARK = 0xc8448a
const BLUE = 0x3a7ae0

// Princess Peach: a gold crown with a blue gem, long blonde hair framing her
// face, blue eyes, and the big pink gown with a blue brooch, flaring wider to
// a darker pink hem. White gloves.
export const look: SkinLook = {
  said: 'Buddy curtsies: Princess Peach, at your service!',
  group: 'Nintendo',
  rows: [
    '..c.cc.c..',
    '..ccbbcc..',
    '.yyyyyyyy.',
    'yyssssssyo',
    'yyssssssyo',
    'yossssssyo',
    'yo.pppp.yo',
    'o.ppbbpp.o',
    '..pppppp..',
    '.pppppppp.',
    'dddddddddd',
  ],
  colors: { c: GOLD, b: BLUE, y: HAIR, o: HAIR_DARK, s: SKIN, p: PINK, d: PINK_DARK },
  eyes: [[3, 4], [6, 4]],
  eyeColor: 0x2a5ab8,
  smile: [[4, 5], [5, 5]],
  tear: [3, 5],
  arms: { color: 0xdcdce4, down: [[1, 8], [8, 8]], up: [[2, 6], [7, 6]] },
  feet: { color: PINK_DARK, at: [3, 6] },
  captions: { idle: 'HELLO', happy: 'YAY!' },
  critters: {
    // Toadette: white-spotted pink cap and pigtails.
    Explore: { rows: ['..pwwp..', 'pwppppwp', 'p.####.p', '..rrrr..'], eye: 2, colors: { '#': 0xf2cfa8, p: 0xf06aa8, w: 0xf4f4f4, r: 0xf8a0c8 }, tint: 0xf06aa8 },
    // A Super Star.
    Plan: { rows: ['...##...', '########', '.######.', '.##..##.'], eye: 1, feet: false, arms: false, colors: { '#': 0xffd030 }, tint: 0xffd030 },
    // A little Peach.
    fork: { rows: ['..cccc..', '.yssssy.', '.y####y.', '.######.'], eye: 1, colors: { '#': PINK, c: GOLD, y: HAIR, s: SKIN }, tint: PINK },
    // Fire Flower.
    'general-purpose': { rows: ['.######.', '#ywwwwy#', '.######.', '.gg.gg..'], eye: 1, feet: false, arms: false, colors: { '#': 0xf05a28, y: 0xf8e060, w: 0xf4f4f4, g: 0x2fa040 }, tint: 0xf05a28 },
    // Perry, the talking parasol.
    other: { rows: ['..####..', '.######.', '########', '...h....'], eye: 1, feet: false, arms: false, colors: { '#': 0xb070d0, h: 0x8a5a2a }, tint: 0xb070d0 },
  },
}
