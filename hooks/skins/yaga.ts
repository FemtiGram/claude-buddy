import type { SkinLook } from './types'

const LOG = 0x8a5a32
const LINE = 0x5a3820
const THATCH = 0xb89b5e
const LEG = 0xc99a30

// Baba Yaga's hut: a log cabin with a thatched roof and a lit window for
// eyes, standing on two scrawny chicken legs.
export const look: SkinLook = {
  said: "Buddy turns into Baba Yaga's hut!",
  group: 'Cartoons & folklore',
  rows: [
    '....rr....',
    '...rrrr...',
    '..rrrrrr..',
    '.rrrrrrrr.',
    '..wwllww..',
    '..kkkkkk..',
    '..llddll..',
    '..kkddkk..',
    '...y..y...',
    '..yy..yy..',
  ],
  colors: { r: THATCH, l: LOG, k: LINE, w: 0x2e1c10, d: 0x3a2412, y: LEG },
  eyes: [[3, 4], [6, 4]],
  eyeColor: 0xf2c14e,
  tear: [3, 5],
  arms: { color: LINE, down: [[1, 5], [8, 5]], up: [[1, 4], [8, 4]] },
  feet: { color: LEG, at: [3, 6] },
  captions: { happy: 'HOME', idle: 'CLUCK' },
  critters: {
    // A black raven, wings lifted.
    Explore: { rows: ['.##.....', '########', '.#####.#', '..#..#..'], eye: 1, feet: false, arms: false, colors: { '#': 0x5a5e78 }, tint: 0x5a5e78 },
    // A mortar and pestle.
    Plan: { rows: ['.....p..', '....p...', '.######.', '..####..'], eye: 2, colors: { '#': 0x9a9488, p: 0xb89b5e }, tint: 0x9a9488 },
    // A baby hut on chicken legs.
    fork: { rows: ['..rrrr..', '.rrrrrr.', '.#w##w#.', '..#dd#..'], eye: 2, colors: { '#': LOG, r: THATCH, w: 0xf2c14e, d: LINE }, tint: LOG },
    // A matryoshka doll.
    'general-purpose': { rows: ['..####..', '.#wwww#.', '.######.', '..####..'], eye: 1, feet: false, arms: false, colors: { '#': 0xb5453c, w: 0xe8d0a8 }, tint: 0xb5453c },
    // A firebird feather.
    other: { rows: ['..o##o..', '.o####o.', '..o##o..', '...##...'], eye: 1, feet: false, arms: false, colors: { '#': 0xe8a030, o: 0xd9573a }, tint: 0xe8a030 },
  },
}
