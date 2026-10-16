import type { SkinLook } from './types'

const BLUE = 0x1f4f9a
const DARK = 0x163a72
const EDGE = 0x3a6ab8

// The TARDIS: a blue police box with a lamp on top, the black POLICE BOX sign,
// white-framed windows and door panels. Its lamp goes dark when it's happy
// (the flash), a faint time vortex swirls below.
export const look: SkinLook = {
  said: 'Buddy steps into the TARDIS. Allons-y!',
  group: 'Sci-fi ships',
  rows: [
    '....yy....',
    '...ldbl...',
    '..lbbbbl..',
    '.nwnwnwnn.',
    '.dfgffgfd.',
    '.dfgffgfd.',
    '.dbbddbbd.',
    '.dlbddblb.',
    '.dbbddbbd.',
    '.dddddddd.',
  ],
  colors: { y: 0xffe9a0, l: EDGE, d: DARK, b: BLUE, n: 0x26344f, w: 0xe8e8e8, f: 0xe8e8e8, g: 0x9fc8f0 },
  eyes: [[3, 4], [6, 4]],
  smile: [[4, 0], [5, 0]],
  smileColor: 0xfff6c8, // the lamp flashes on when he's happy
  tear: [1, 7],
  feet: { color: 0x6fb0ff, at: [2, 7] },
  captions: { happy: 'GERONIMO', idle: 'WHO' },
  critters: {
    // A sonic screwdriver.
    Explore: { rows: ['.....g..', '....#...', '.######.', '.#h##h#.'], eye: 3, colors: { '#': 0x7c8aa0, g: 0x4ad0a0, h: 0xc8c8cc }, tint: 0x4ad0a0 },
    // A fez.
    Plan: { rows: ['....t...', '..####..', '.######.', '.#h##h#.'], eye: 3, colors: { '#': 0xb03040, t: 0x202020, h: 0xe0b090 }, tint: 0xb03040 },
    // A mini TARDIS, lamp lit.
    fork: { rows: ['...yy...', '...yy...', '..####..', '..#ww#..'], eye: 3, eyes: [3, 4], feet: false, arms: false, colors: { '#': BLUE, y: 0xffe9a0, w: 0xe8e8e8 }, tint: BLUE },
    // K-9.
    'general-purpose': { rows: ['....a...', '#######s', '##h##h#s', '.#.##.#.'], eye: 2, colors: { '#': 0x7c8aa0, a: 0xe0e0e0, s: 0x5a6478, h: 0xd05050 }, tint: 0x7c8aa0 },
    // A Weeping Angel, hands over its eyes.
    other: { rows: ['w..##..w', 'ww####ww', '.#hhhh#.', '.######.'], eye: 2, feet: false, colors: { '#': 0xa8aab0, w: 0xc0c0c8, h: 0xc8c8cc }, tint: 0xa8aab0 },
  },
}
