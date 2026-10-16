import type { SkinLook } from './types'

const BLUE = 0x2f66c0

// The TARDIS: a blue police box in a 3-tone ramp with a lamp on top, the dark
// POLICE BOX sign, white-framed windows and door panels. Its lamp flashes on
// when it's happy.
export const look: SkinLook = {
  said: 'Buddy steps into the TARDIS. Allons-y!',
  group: 'Sci-fi ships',
  rows: [
    '....yy....',
    '...HyyS...',
    '..HbbbbS..',
    '.HnwnwnwS.',
    '.HWgWWgWS.',
    '.HWgWWgWS.',
    '.HHbSSHbS.',
    '.HbbSSbbS.',
    '.HHbSSHbS.',
    '.SSSSSSSS.',
  ],
  colors: { y: 0xffe9a0, H: 0x6a9cf0, b: BLUE, S: 0x1d4a96, n: 0x1c2438, w: 0xe8e8e8, W: 0xf0f0f0, g: 0x9fc8f0 },
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
