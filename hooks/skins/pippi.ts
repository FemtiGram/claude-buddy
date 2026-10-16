import type { SkinLook } from './types'

const SKIN = 0xf2c9a0
const RED = 0xd9501e

// Pippi Longstocking: carrot braids straight out sideways, freckles, a big
// smile, a patched blue dress and odd stockings.
export const look: SkinLook = {
  said: 'Buddy turns into Pippi Longstocking!',
  group: 'Cartoons & folklore',
  rows: [
    '...rrrr...',
    '..rrrrrr..',
    'rrrrrrrrrr',
    '..ssssss..',
    '..sfssfs..',
    '..ssssss..',
    '..bbbbbb..',
    '..bbpbbb..',
    '..bbbbbb..',
    '...n..d...',
  ],
  colors: { r: RED, s: SKIN, f: 0xd08a5a, b: 0x3e6fb5, p: 0xc0392b, n: 0x6b4a2b, d: 0x2e2a28 },
  eyes: [[3, 3], [6, 3]],
  smile: [[3, 5], [4, 5], [5, 5], [6, 5]],
  tear: [3, 4],
  arms: { color: SKIN, down: [[1, 7], [8, 7]], up: [[1, 4], [8, 4]] },
  feet: { color: 0x26211f, at: [2, 7] },
  captions: { happy: 'PIPPI!', idle: 'PIPPI' },
  critters: {
    // Mr Nilsson, the monkey in his little hat.
    Explore: { rows: ['..hhhh..', '.######.', '.#cccc#.', '..####..'], eye: 2, colors: { '#': 0x8a5a30, h: 0xb8433a, c: 0xf0d2a8 }, tint: 0x8a5a30 },
    // Tommy: neat brown hair, blue jacket.
    Plan: { rows: ['..hhhh..', '.hhhhhh.', '.######.', '..bbbb..'], eye: 2, colors: { '#': SKIN, h: 0x6a4428, b: 0x4a78c0 }, tint: 0x4a78c0 },
    // Annika: blond with low pigtails.
    fork: { rows: ['..yyyy..', '.yyyyyy.', '.y####y.', 'y.pppp.y'], eye: 2, colors: { '#': SKIN, y: 0xe2c25a, p: 0xd9779a }, tint: 0xe2c25a },
    // A mini Pippi head with braids.
    'general-purpose': { rows: ['..rrrr..', 'rrrrrrrr', '.######.', '..-##-..'], eye: 2, colors: { '#': SKIN, r: RED }, tint: RED },
    // Lilla Gubben, the spotted white horse.
    other: { rows: ['.#.mm.#.', '.######.', '.#s##s#.', '..#nn#..'], eye: 2, colors: { '#': 0xe6e2da, m: 0x6b4a2b, s: 0x5a5a66, n: 0xd9a0a0 }, tint: 0xe6e2da },
  },
}
