import type { SkinLook } from './types'

const GOLD = 0xf2cc52
const OCHRE = 0xb07a22
const SKIN = 0xf6d6bc
const PINK = 0xd8507a
const WHITE = 0xf4eef0

// Howl of Howl's Moving Castle: a fall of blond hair parted over a pale
// face, a teal drop earring, the pink-and-white harlequin jacket with his
// green pendant at the collar.
export const look: SkinLook = {
  said: 'Buddy flicks back his blond hair: Howl has come to the castle!',
  group: 'Ghibli',
  rows: [
    '...hhyy...',
    '..hyyyyY..',
    '.hyyyyyyY.',
    '.yysyysyY.',
    '.yssssssY.',
    '.yssssssY.',
    '.eYwsswY..',
    '..jwjgjw..',
    '..wjwjwj..',
    '..jwjwjw..',
  ],
  colors: { h: 0xfff0a8, y: GOLD, Y: OCHRE, s: SKIN, e: 0x3ac8e8, w: WHITE, j: PINK, g: 0x3cb878 },
  eyes: [[3, 4], [6, 4]],
  eyeColor: 0x2a5ab0,
  smile: [[4, 5], [5, 5]],
  tear: [2, 5],
  arms: { color: SKIN, down: [[1, 8], [8, 8]], up: [[0, 6], [9, 6]] },
  feet: { color: 0x3a3040, at: [3, 6] },
  captions: { idle: 'HELLO', happy: 'MAGIC!' },
  critters: {
    // Howl's bird form: black feathered wings spread, gold eyes.
    Explore: { rows: ['#......#', '##.##.##', '.######.', '..-##-..'], eye: 2, eyeColor: 0xffd84a, feet: false, arms: false, colors: { '#': 0x4a4a5e }, tint: 0x7a7a98 },
    // Old Sophie: a silver bun, a plum dress.
    Plan: { rows: ['...ss...', '.ssssss.', '..####..', '.pppppp.'], eye: 2, colors: { '#': 0xf0d0b8, s: 0xc8c8d4, p: 0x7a5a9a }, tint: 0xc8c8d4 },
    // A mini Howl, blond fringe and pink jacket.
    fork: { rows: ['..yyyy..', '.yyyyyy.', '.y####y.', '..jwjw..'], eye: 2, colors: { '#': SKIN, y: GOLD, j: PINK, w: WHITE }, tint: GOLD },
    // Markl in his disguise: blue hooded cloak and a white beard.
    'general-purpose': { rows: ['..bbbb..', '.b####b.', '.bwwwwb.', '..bbbb..'], eye: 1, colors: { '#': 0xf0c8a0, b: 0x4060a8, w: 0xf0f0f0 }, tint: 0x5a7ac8 },
    // One of the Witch's blob men, in a straw boater.
    other: { rows: ['.hhhhhh.', '..####..', '.######.', '.##..##.'], eye: 2, eyeColor: 0xf0f0f0, colors: { '#': 0x5a4438, h: 0xe0c070 }, tint: 0xe0c070 },
  },
}
