import type { SkinLook } from './types'

const INK = 0xf5841f
const INK_HI = 0xffc070
const INK_DARK = 0xc8560c
const SKIN = 0xf2c49a
const MASK = 0x26222e
const TEE = 0x2fc0a8
const SHORTS = 0x3a3f8a

// An Inkling from Splatoon: bright orange tentacle hair hanging down both
// sides, the black eye mask across the face, a teal tee and dark shorts.
export const look: SkinLook = {
  said: 'Buddy grabs a Splattershot: booyah!',
  group: 'Nintendo',
  rows: [
    '...oooo...',
    '..oOoooo..',
    '.oOoooooo.',
    'ooossssooo',
    'okwwkkwwko',
    'oossssssoo',
    'o.ssssss.o',
    'd.tttttt.d',
    '..tttttt..',
    '..bbbbbb..',
  ],
  colors: { o: INK, O: INK_HI, d: INK_DARK, s: SKIN, k: MASK, w: 0xffffff, t: TEE, b: SHORTS },
  eyes: [[3, 4], [6, 4]],
  eyeColor: MASK,
  smile: [[4, 6], [5, 6]],
  tear: [2, 5],
  arms: { color: SKIN, down: [[1, 8], [8, 8]], up: [[1, 6], [8, 6]] },
  feet: { color: 0xe8e8ee, at: [3, 6] },
  captions: { happy: 'BOOYAH!', idle: 'FRESH' },
  critters: {
    // An Octotrooper: a purple octarian on its hover saucer.
    Explore: { rows: ['..####..', '.######.', '.#.##.#.', '.ssssss.'], eye: 1, feet: false, colors: { '#': 0x9a4ad0, s: 0x8a8a9a }, tint: 0x9a4ad0 },
    // Judd, the orange cat who judges every match.
    Plan: { rows: ['.#....#.', '.######.', '.#wwww#.', '.######.'], eye: 1, colors: { '#': 0xf0a040, w: 0xf4ecdc }, tint: 0xf0a040 },
    // An Inkling in squid form: orange, with the black eye mask.
    fork: { rows: ['...##...', '..####..', '.kk##kk.', '.#.##.#.'], eye: 2, eyeColor: 0xffffff, feet: false, arms: false, colors: { '#': INK, k: MASK }, tint: INK },
    // A jellyfish townsfolk in a pink hoodie.
    'general-purpose': { rows: ['..####..', '.######.', '.cccccc.', '.#.#.#.#'], eye: 1, feet: false, colors: { '#': 0x9ad8f0, c: 0xe05a9a }, tint: 0x9ad8f0 },
    // A Chum salmonid: a green-grey fish with red lips and a top fin.
    other: { rows: ['....#...', '.######.', '.##rr##.', '.------.'], eye: 1, colors: { '#': 0x7a9a6a, r: 0xd05050 }, tint: 0x7a9a6a },
  },
}
