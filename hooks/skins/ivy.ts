import type { SkinLook } from './types'

const HAIR = 0xc8402a
const LEAF = 0x4a9a3a
const DARK = 0x2e6a2a
const SKIN = 0xb8d8a0
const LIPS = 0xd02840

// Poison Ivy: long wavy red hair with leaves woven in, pale-green skin, red
// lips, a leafy bodysuit and vines for arms.
export const look: SkinLook = {
  said: 'Buddy blossoms into Poison Ivy.',
  group: 'DC',
  rows: [
    '..vRRRRv..',
    '.RRRRRRRR.',
    'RvRppppRvR',
    'RRpppppRRR',
    'RRppppppRR',
    '.RRppmpRR.',
    '..vvVVvv..',
    '.vvvVVvvv.',
    '..vVvvVv..',
    '...vvvv...',
  ],
  colors: { R: HAIR, v: LEAF, V: DARK, p: SKIN, m: LIPS },
  eyes: [[3, 3], [6, 3]],
  eyeColor: 0x2e8a3a,
  smile: [[5, 5]],
  tear: [3, 3],
  arms: { color: LEAF, down: [[0, 7], [9, 7]], up: [[0, 5], [9, 5]] },
  feet: { color: DARK, at: [3, 6] },
  captions: { happy: 'BLOOM', idle: 'ROOTS' },
  critters: {
    // A Venus flytrap.
    Explore: { rows: ['#.#..#.#', '########', '#w#ww#w#', '.######.'], eye: 1, feet: false, colors: { '#': 0x4a9a3a, w: 0xf0e8d0 }, tint: 0x4a9a3a },
    // A seed pod.
    Plan: { rows: ['..####..', '.######.', '.#s##s#.', '..####..'], eye: 1, feet: false, arms: false, colors: { '#': 0xa08850, s: 0x5a4a28 }, tint: 0xa08850 },
    // A little sprout with a face.
    fork: { rows: ['.##..##.', '..####..', '..####..', '..-##-..'], eye: 2, colors: { '#': 0x6ac04a }, tint: 0x6ac04a },
    // A red rose.
    'general-purpose': { rows: ['.#rrrr#.', '#rr##rr#', '.#rrrr#.', '..g##g..'], eye: 1, eyes: [], feet: false, arms: false, colors: { '#': 0xd02840, r: 0xe85a6a, g: 0x4a9a3a }, tint: 0xd02840 },
    // A carnivorous pitcher plant.
    other: { rows: ['#######.', '.#-##-#.', '.#####..', '..g#g...'], eye: 1, feet: false, arms: false, colors: { '#': 0xb04a6a, g: 0x4a9a3a }, tint: 0xb04a6a },
  },
}
