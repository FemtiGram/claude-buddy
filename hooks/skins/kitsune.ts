import type { SkinLook } from './types'

const FOX = 0xe07a2b
const CREAM = 0xf7f1e6

// A kitsune, the Japanese fox spirit: black-tipped ears, white muzzle and
// chest, a bushy tail, a red Inari bib and a small blue foxfire.
export const look: SkinLook = {
  said: 'Buddy turns into a kitsune.',
  group: 'Cartoons & folklore',
  rows: [
    '.k......k.',
    '.oo..b.oo.',
    '.oooooooo.',
    '.oooooooo.',
    '.owwnnwwow',
    '..wwwwww.o',
    '.orrrrrroo',
    '.oowwwwooo',
    '..oooooo.o',
  ],
  colors: { k: 0x3a2a2a, o: FOX, b: 0x4ab0f0, w: CREAM, n: 0x3a2a2a, r: 0xc21f2b },
  eyes: [[3, 3], [6, 3]],
  smile: [[4, 5], [5, 5]],
  tear: [3, 4],
  arms: { color: 0x3a2a2a, down: [[1, 8], [8, 8]], up: [[1, 5], [8, 5]] },
  feet: { color: 0x3a2a2a, at: [3, 6] },
  captions: { happy: 'KON!', idle: 'KON' },
  critters: {
    // A foxfire wisp.
    Explore: { rows: ['...bb...', '..b##b..', '.b####b.', '..####..'], eye: 2, feet: false, arms: false, colors: { '#': 0x5ac8f0, b: 0x3a7ae0 }, tint: 0x5ac8f0 },
    // A tanuki with a leaf on its head.
    Plan: { rows: ['#..gg..#', '.######.', '.kk##kk.', '..####..'], eye: 2, eyeColor: 0xf0e8d8, colors: { '#': 0x9a7a5a, k: 0x4a3a30, g: 0x48a850 }, tint: 0x9a7a5a },
    // A fox pup with a split tail.
    fork: { rows: ['#.#..#.#', '.######.', '.#wwww#.', 't.####.t'], eye: 1, colors: { '#': 0xe8a050, w: 0xf7f1e6, t: 0xf0c880 }, tint: 0xe8a050 },
    // A red torii gate.
    'general-purpose': { rows: ['kkkkkkkk', '.######.', '..#..#..', '..#..#..'], eye: 1, feet: false, arms: false, colors: { '#': 0xd02a2a, k: 0x4a3a40 }, tint: 0xd02a2a },
    // An inari sushi pouch with rice on top.
    other: { rows: ['..wwww..', '.######.', '.######.', '.-####-.'], eye: 2, feet: false, arms: false, colors: { '#': 0xc88a38, w: 0xf7f1e6 }, tint: 0xc88a38 },
  },
}
