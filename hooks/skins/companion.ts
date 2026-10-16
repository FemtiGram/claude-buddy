import type { SkinLook } from './types'

// The Weighted Companion Cube from Portal: a grey cube, one pink heart.
export const look: SkinLook = {
  said: 'Buddy turns into the companion cube. <3',
  group: 'Games',
  rows: [
    '..........',
    '..........',
    'eeeeeeeeee',
    'edggggggde',
    'egppggppge',
    'egppppppge',
    'eggppppgge',
    'egggppggge',
    'edggggggde',
    'eeeeeeeeee',
  ],
  colors: { e: 0xd8dce2, g: 0x8a8f98, d: 0x6a6f78, p: 0xff6eb4 },
  eyes: [[3, 5], [6, 5]],
  eyeColor: 0xd8dce2,
  smile: [[4, 6], [5, 6]],
  tear: [3, 6],
  feet: { color: 0x6a6f78, at: [1, 8] },
  captions: { happy: 'HUGS', idle: 'HUG' },
  critters: {
    // Sentry turret: white tripod, one red eye.
    Explore: { rows: ['..####..', '.######.', '..####..', '.#.##.#.'], eye: 1, eyes: [3], eyeColor: 0xe03030, colors: { '#': 0xdcdcdc }, tint: 0xe03030 },
    // GLaDOS: hanging from her cable, one yellow-white eye.
    Plan: { rows: ['...ww...', '...ww...', '.######.', '..####..'], eye: 2, eyes: [3, 4], eyeColor: 0xf0d040, feet: false, arms: false, colors: { '#': 0xe4e4ea, w: 0x8a8f98 }, tint: 0xf0d040 },
    // Frankenturret: mismatched turret parts.
    fork: { rows: ['gg.##.ww', '..####..', '.##w##g.', '.#.##.#.'], eye: 1, eyeColor: 0xe03030, colors: { '#': 0xc8c8d0, g: 0x6a8a6a, w: 0xe8e0c0 }, tint: 0x6a8a6a },
    // P-body: orange co-op bot with a visor.
    'general-purpose': { rows: ['..####..', '.#wwww#.', '.######.', '..#..#..'], eye: 1, colors: { '#': 0xe8782c, w: 0xe6e6ee }, tint: 0xe8782c },
    // Wheatley: a core sphere with one blue lens.
    other: { rows: ['..####..', '.######.', '.#wwww#.', '..####..'], eye: 2, eyes: [3, 4], eyeColor: 0x3a9cff, feet: false, arms: false, colors: { '#': 0xb8bcc8, w: 0xe6e6ee }, tint: 0x3a9cff },
  },
}
