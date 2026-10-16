import type { SkinLook } from './types'

const RED = 0xd02a2a
const DARK_RED = 0x9a1e1e
const GOLD = 0xf2c83a
const WHITE = 0xeeeae4
const SKIN = 0xe8b890

// The Flash: red cowl with gold lightning wings at the ears, bare lower face,
// a gold bolt on a white circle, gold boots, speed streaks for arms.
export const look: SkinLook = {
  said: 'Buddy suits up as the Flash!',
  group: 'DC',
  rows: [
    '.y......y.',
    '.yyhhrryy.',
    '.yhrrrrRy.',
    '.rrrrrrRr.',
    '.rrssssrr.',
    '..rrrrRR..',
    '.rrwwyyrR.',
    '.rrwyywrR.',
    '.rrwywwrR.',
    '..rrRRRR..',
  ],
  colors: { r: RED, h: 0xf0604c, R: DARK_RED, y: GOLD, w: WHITE, s: SKIN, m: 0xb05040 },
  eyes: [[3, 3], [6, 3]],
  eyeColor: 0xfff4d0,
  smile: [[3, 4], [4, 4], [5, 4], [6, 4]],
  tear: [3, 4],
  arms: { color: 0xfff0a0, down: [[0, 7], [9, 7]], up: [[0, 5], [9, 5]] },
  feet: { color: GOLD, at: [3, 6] },
  captions: { happy: 'ZOOM!', idle: 'BRB' },
  critters: {
    // A lightning bolt.
    Explore: { rows: ['...###..', '..###...', '.######.', '..##....'], eye: 2, feet: false, arms: false, colors: { '#': GOLD }, tint: GOLD },
    // The cosmic treadmill.
    Plan: { rows: ['y.....kk', '.....k..', '.######.', '.o....o.'], eye: 2, feet: false, arms: false, colors: { '#': 0x5a5ab0, o: 0xc080f0, k: 0xa8a0b8, y: 0xf0e8a0 }, tint: 0x8a8ad0 },
    // Kid Flash, yellow and red.
    fork: { rows: ['..r##r..', '.#ssss#.', '.######.', '..r..r..'], eye: 1, colors: { '#': 0xe8c030, r: RED, s: SKIN }, tint: 0xe8c030 },
    // A S.T.A.R. Labs badge.
    'general-purpose': { rows: ['.######.', '.#yyyy#.', '.#wwww#.', '.######.'], eye: 1, feet: false, arms: false, colors: { '#': 0x3a6ac0, y: GOLD, w: WHITE }, tint: 0x3a6ac0 },
    // A burger.
    other: { rows: ['.######.', 'gggggggg', '.mmmmmm.', '.######.'], eye: 0, feet: false, arms: false, colors: { '#': 0xd89a4a, g: 0x6cb04a, m: 0x7a4a2a }, tint: 0xd89a4a },
  },
}
