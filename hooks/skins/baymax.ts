import type { SkinLook } from './types'

const WHITE = 0xeeeeec
const SHADE = 0xb8c2cc
const RED = 0xc23a35

// Baymax of Big Hero 6: a soft white balloon, a small round head with two
// dot eyes joined by a thin line, stubby arms, a red heart on his chest.
export const look: SkinLook = {
  said: 'Buddy turns into Baymax. Hello!',
  group: 'Film & TV',
  rows: [
    '..........',
    '..........',
    '...wwww...',
    '...wkkw...',
    '...wwss...',
    '..wwwwww..',
    '.wwwwwwws.',
    '.wwwhhwws.',
    '.wwwwwwss.',
    '..wwwwss..',
  ],
  colors: { w: WHITE, s: SHADE, k: 0x4a5560, h: RED },
  eyes: [[3, 3], [6, 3]],
  tear: [3, 4],
  arms: { color: SHADE, down: [[0, 7], [9, 7]], up: [[0, 5], [9, 5]] },
  feet: { color: SHADE, at: [3, 6] },
  captions: { happy: 'GOOD', idle: 'HELLO' },
  critters: {
    // A microbot swarm: scattered dark bits.
    Explore: { rows: ['.#.##.#.', '#.####.#', '.######.', '#.#..#.#'], eye: 1, feet: false, arms: false, eyeColor: 0xeeeeec, colors: { '#': 0x5a5f6e }, tint: 0x5a5f6e },
    // Hiro's cap over dark hair.
    Plan: { rows: ['..cccc..', 'cccccccc', '.h####h.', '..####..'], eye: 2, colors: { '#': 0xf2b98a, c: 0x3f7fbf, h: 0x3a2a22 }, tint: 0x3f7fbf },
    // A mini Baymax.
    fork: { rows: ['..####..', '.##kk##.', '.######.', '..-##-..'], eye: 1, colors: { '#': WHITE, '-': SHADE, k: 0x4a5560 }, tint: SHADE },
    // Baymax in his red armour, visor and thrusters.
    'general-purpose': { rows: ['..####..', '.######.', '.#wkkw#.', '.y#--#y.'], eye: 2, colors: { '#': RED, w: WHITE, k: 0x4a5560, y: 0xe0b030 }, tint: RED },
    // A blue heart.
    other: { rows: ['.##..##.', '########', '.######.', '...##...'], eye: 1, feet: false, arms: false, eyeColor: 0xeeeeec, colors: { '#': 0x3a8fd8 }, tint: 0x3a8fd8 },
  },
}
