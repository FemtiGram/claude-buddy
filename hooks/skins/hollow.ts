import type { SkinLook } from './types'

const MASK = 0xe9ecef
const SHADE = 0xc2c6cc
const DARK = 0x1b1b2a
const BODY = 0x3c3c5a
const CAPE = 0x3a4a7a

// The Knight from Hollow Knight: a pale horned mask with black eye holes, a
// tiny dark body, a navy cape and the nail for a sword.
export const look: SkinLook = {
  said: 'Buddy turns into the Knight from Hollow Knight.',
  group: 'Games',
  rows: [
    '...w..w...',
    '..ww..ww..',
    '.wwwwwwww.',
    '.wwwwwwww.',
    '.wkwwwwkw.',
    '.wkwwwwkw.',
    '..cccccc..',
    '.nddddddnp',
    '.nnddddnnp',
  ],
  colors: { w: MASK, c: SHADE, k: DARK, d: BODY, n: CAPE, p: 0xb8bcc4 },
  eyes: [[3, 4], [6, 4], [3, 5], [6, 5]],
  eyeColor: DARK,
  smile: [[4, 6], [5, 6]],
  tear: [3, 5],
  arms: { color: MASK, down: [[0, 7]], up: [[0, 6]] },
  feet: { color: BODY, at: [3, 6] },
  captions: { happy: 'REST', idle: '...' },
  critters: {
    // Vengefly: a winged bug.
    Explore: { rows: ['w.####.w', 'ww####ww', '.#.##.#.', '...--...'], eye: 1, feet: false, arms: false, colors: { '#': 0x5a6a8a, w: SHADE }, tint: 0x5a6a8a },
    // Hornet: red cloak, white mask, needle.
    Plan: { rows: ['..####.n', '.#wwww#n', '.######.', '.#.##.#.'], eye: 1, colors: { '#': 0xc93a45, w: MASK, n: 0xd8dce4 }, tint: 0xc93a45 },
    // A pale green grub.
    fork: { rows: ['..####..', '.######.', '########', '.-.-.-.-'], eye: 1, feet: false, arms: false, colors: { '#': 0xa8d8a0 }, tint: 0xa8d8a0 },
    // Crawlid: a shelled bug.
    'general-purpose': { rows: ['........', '.cccccc.', '########', '.#.##.#.'], eye: 2, colors: { '#': 0xb0803c, c: 0x7a7a8a }, tint: 0xb0803c },
    // Tiktik: a spiky round bug.
    other: { rows: ['.s.ss.s.', '.######.', '########', '.#.##.#.'], eye: 2, colors: { '#': 0xc08a4a, s: 0x6a4a2a }, tint: 0xc08a4a },
  },
}
