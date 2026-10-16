import type { SkinLook } from './types'

const BRONZE = 0xc8963e
const SHADOW = 0x8a5a22
const BLUE = 0x4da6ff

// A Dalek: bronze bell with rows of bumps, a dome with two lights, an
// eyestalk with a glowing blue tip, a plunger arm and a gun arm.
export const look: SkinLook = {
  said: 'Buddy turns into a Dalek. Obey!',
  group: 'Film & TV',
  rows: [
    '...dddd...',
    '..dlddld..',
    'esgnnnn...',
    '..dddddd..',
    '..dhdhdd..',
    '.dddddddd.',
    '.dhdhdhdd.',
    '.dddddddd.',
    'dhdhdhdhds',
    'ssssssssss',
  ],
  colors: { d: BRONZE, s: SHADOW, h: 0xe0b565, l: 0xffe8a0, n: 0x9a8a70, g: 0x8c95a8, e: 0x2f6fb5 },
  eyes: [[0, 2]],
  eyeColor: BLUE,
  smile: [[3, 5]],
  tear: [3, 4],
  arms: { color: 0x8c95a8, down: [[0, 4], [0, 5]], up: [[0, 3], [9, 3]] },
  captions: { happy: 'OBEY', idle: 'SEEK' },
  critters: {
    // A long-stalk Dalek.
    Explore: { rows: ['......e.', '.....s..', '.######.', '########'], eye: 0, eyes: [6], eyeColor: BLUE, feet: false, arms: false, colors: { '#': BRONZE, e: 0x2f6fb5, s: SHADOW }, tint: BRONZE },
    // A gold Dalek emperor.
    Plan: { rows: ['y.y..y.y', '.######.', '.#h##h#.', '########'], eye: 1, feet: false, arms: false, colors: { '#': 0xe0b83a, y: 0xf0d060, h: 0xa07a20 }, tint: 0xe0b83a },
    // A mini Dalek.
    fork: { rows: ['........', '...e....', '..####..', '.######.'], eye: 1, eyes: [3], eyeColor: BLUE, feet: false, arms: false, colors: { '#': BRONZE, e: 0x2f6fb5 }, tint: BRONZE },
    // The TARDIS.
    'general-purpose': { rows: ['...ll...', '.######.', '.#w##w#.', '.######.'], eye: 2, feet: false, arms: false, colors: { '#': 0x2d5fa8, l: 0xffe8a0, w: 0xffe8a0 }, tint: 0x2d5fa8 },
    // A black Dalek.
    other: { rows: ['.s.kkk..', 'e##kkk#.', '.######.', '########'], eye: 1, eyes: [0], eyeColor: BLUE, feet: false, arms: false, colors: { '#': 0x4a4a5c, k: 0x5e5e74, e: 0x2f6fb5, s: 0x8c95a8 }, tint: 0x6e6e86 },
  },
}
