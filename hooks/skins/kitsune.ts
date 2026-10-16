import type { SkinLook } from './types'

const FOX_HI = 0xf7a65a
const FOX = 0xe07a2b
const FOX_SH = 0xb4571f
const CREAM = 0xf7f1e6
const INK = 0x3a2a2a

// A kitsune, the Japanese fox spirit: black-tipped ears, white muzzle and
// chest, a red Inari bib and a big bushy tail with a white tip.
export const look: SkinLook = {
  said: 'Buddy turns into a kitsune.',
  group: 'Cartoons & folklore',
  rows: [
    '..k....k..',
    '..ho..oo..',
    '..hhooos..',
    '..hoooos..',
    '..wwkkww.w',
    '...wwww.ww',
    '...rrrrhoo',
    '...wwwwoos',
    '...oooo.ss',
  ],
  colors: { k: INK, h: FOX_HI, o: FOX, s: FOX_SH, w: CREAM, r: 0xc21f2b },
  eyes: [[3, 3], [6, 3]],
  smile: [[4, 5], [5, 5]],
  tear: [3, 4],
  arms: { color: FOX_SH, down: [[2, 7]], up: [[2, 5]] },
  feet: { color: FOX_SH, at: [3, 6] },
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
