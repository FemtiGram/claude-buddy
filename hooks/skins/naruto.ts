import type { SkinLook } from './types'

const HAIR = 0xf8d84a
const BAND = 0x2a4ab0
const SKIN = 0xf5cfa0
const ORANGE = 0xff8a1e
const NAVY = 0x2a3a78
const WHISKER = 0xa8683c

// Naruto Uzumaki: spiky yellow hair, blue forehead protector with its silver
// plate, whisker marks, orange jumpsuit with navy shoulders.
export const look: SkinLook = {
  said: 'Buddy turns into Naruto. Believe it!',
  group: 'Anime',
  rows: [
    '..y.yy.y..',
    '.yyyyyyyy.',
    '.ybbppbby.',
    '.wssssssw.',
    '.wssssssw.',
    '.wssssssw.',
    '.nnoooonn.',
    '.noooooon.',
    '..oooooo..',
  ],
  colors: { y: HAIR, b: BAND, p: 0xc8d0dc, s: SKIN, w: WHISKER, n: NAVY, o: ORANGE },
  eyes: [[3, 3], [6, 3]],
  eyeColor: 0x2a6ad0,
  smile: [[4, 5], [5, 5]],
  tear: [3, 4],
  arms: { color: SKIN, down: [[0, 7], [9, 7]], up: [[0, 5], [9, 5]] },
  feet: { color: BAND, at: [3, 6] },
  captions: { happy: 'YOSH!', idle: 'GO ON' },
  critters: {
    // Akamaru: white puppy with red fang marks.
    Explore: { rows: ['.#....#.', '########', '.r####r.', '..#--#..'], eye: 1, colors: { '#': 0xe8e4da, r: 0xd8484a }, tint: 0xe8e4da },
    // Shikamaru's deer: tan antlers on a brown head.
    Plan: { rows: ['a.a..a.a', '.aa..aa.', '.######.', '..#--#..'], eye: 2, colors: { '#': 0xa8703c, a: 0xd8c090 }, tint: 0xa8703c },
    // Shadow clone: a smoky grey copy of Naruto.
    fork: { rows: ['.#.##.#.', '.######.', '.w####w.', '..####..'], eye: 1, colors: { '#': 0x8a8f9c, w: 0x5e6370 }, tint: 0x8a8f9c },
    // Gamakichi: orange toad in a blue jacket, eyes bulging.
    'general-purpose': { rows: ['.##..##.', '.######.', '########', '.bbbbbb.'], eye: 0, colors: { '#': 0xc8642a, b: 0x3a6ad0 }, tint: 0xc8642a },
    // Kurama: the orange nine-tailed fox, red eyes.
    other: { rows: ['t#.##.#t', 'tt####tt', '.#kkkk#.', '..####..'], eye: 1, eyeColor: 0xd02020, colors: { '#': 0xf0701e, t: 0xf0a040, k: 0xf0e0c0 }, tint: 0xf0701e },
  },
}
