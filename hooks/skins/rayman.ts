import type { SkinLook } from './types'

const GLOVE = 0xf2f2ee
const SHOE = 0xf2d13b

// Rayman: limbless. A floating head under a big orange tuft, a purple torso
// with a red scarf, and gloves and shoes hovering free of the body.
export const look: SkinLook = {
  said: 'Buddy has no arms and no legs: Rayman!',
  group: 'Games',
  rows: [
    '...h.hh...',
    '..hhhhhh..',
    '..ssssss..',
    '..sssssnn.',
    '..ssssss..',
    '..........',
    '...rrrr...',
    '...pppp...',
    '...pppp...',
    '..........',
  ],
  colors: { h: 0xf5a623, s: 0xf2c48d, n: 0xe29a6c, r: 0xd32f2f, p: 0x7b4fb0 },
  eyes: [[3, 3], [5, 3]],
  smile: [[4, 4], [5, 4]],
  tear: [3, 4],
  arms: {
    color: GLOVE,
    down: [[1, 7], [8, 7]],
    up: [[0, 5], [9, 5]],
  },
  feet: { color: SHOE, at: [3, 6] },
  captions: { happy: 'HERO', idle: 'YO' },
  critters: {
    // Murfy the fly: green-teal with wings.
    Explore: { rows: ['.w.##.w.', 'ww####ww', '..####..', '...##...'], eye: 1, feet: false, colors: { '#': 0x4fb88a, w: 0xe4eef8 }, tint: 0x4fb88a },
    // Globox: a big blue frog, eyes on top, pale belly.
    Plan: { rows: ['.##..##.', '########', '#bbbbbb#', '.bbbbbb.'], eye: 0, colors: { '#': 0x3a7bd5, b: 0xbfd9f5 }, tint: 0x3a7bd5 },
    // A yellow Lum: a glowing orb with a sparkle.
    fork: { rows: ['...ww...', '.######.', '.######.', '..####..'], eye: 2, feet: false, colors: { '#': 0xf7e25a, w: 0xfffbe0 }, tint: 0xf7e25a },
    // A Teensy: small king, gold crown, purple robe.
    'general-purpose': { rows: ['.y.yy.y.', '.yyyyyy.', '.######.', '.pppppp.'], eye: 2, colors: { '#': 0xe9c9a0, y: 0xf2c230, p: 0x7d5ba6 }, tint: 0xf2c230 },
    // A Livingstone: olive hunter hat, big moustache.
    other: { rows: ['...hh...', '.hhhhhh.', '.######.', '.#mmmm#.'], eye: 2, colors: { '#': 0xe8a878, h: 0x5e7a3a, m: 0x4a2a14 }, tint: 0x5e7a3a },
  },
}
