import type { SkinLook } from './types'

const FLESH = 0xdcbcac
const FLESH_LIGHT = 0xf2dcd0
const FLESH_DARK = 0x9a6e5e
const APRON = 0xe6dac4
const APRON_DARK = 0xb4a488
const BLOOD = 0xb01818
const GORE = 0x6a0a0a
const STEEL = 0xc8ccd2

// The Butcher: a hulking pale brute with a small bald head on huge shoulders,
// a grin of yellowed teeth, a blood-soaked apron and a big steel cleaver
// raised in one fist. Ah, fresh meat!
export const look: SkinLook = {
  said: 'Buddy turns into the Butcher. Ah, fresh meat!',
  group: 'Diablo',
  rows: [
    '.......SCC',
    '...qqq.SCC',
    '..qPPpq.n.',
    '..qpppq.n.',
    '..qwwwq.n.',
    '.qpppppqPq',
    'qpaaabbBpq',
    'qpaaaBbapq',
    'qpaaaabBq.',
    '.qAaabaAq.',
    '..AAAbAA..',
  ],
  colors: {
    P: FLESH_LIGHT, p: FLESH, q: FLESH_DARK, a: APRON, A: APRON_DARK,
    b: BLOOD, B: GORE, w: 0xf2eedc, C: STEEL, S: 0x7a8088, n: 0x5a3a24,
  },
  eyes: [[3, 3], [5, 3]],
  eyeColor: 0x1a0a0a,
  smile: [[3, 4], [5, 4]],
  smileColor: BLOOD,
  tear: [4, 3],
  arms: { color: FLESH, down: [[0, 9], [9, 8]], up: [[1, 4], [7, 4]] },
  feet: { color: 0x4a3024, at: [2, 3, 6, 7] },
  captions: { idle: 'FRESH!', happy: 'MEAT!' },
  critters: {
    // A shambling zombie: green-grey rot and a gaping mouth.
    Explore: { rows: ['..####..', '.######.', '..#mm#..', '.##..##.'], eye: 1, eyeColor: 0xd8d040, colors: { '#': 0x7a9a6a, m: 0x3a2a20 }, tint: 0x8aaa7a },
    // Mephisto, Lord of Hatred: a ghostly skull face over trailing tentacles.
    Plan: { rows: ['..####..', '.######.', '.#tttt#.', 't.t..t.t'], eye: 1, eyeColor: 0xff4040, feet: false, colors: { '#': 0x8a9ab8, t: 0x4a5a7a }, tint: 0x8a9ab8 },
    // A mini Butcher: bald head with a toothy grin, bloody apron, cleaver.
    fork: { rows: ['..q##q.C', '.q####qn', '.qwwwwq.', '.aaabBa.'], eye: 1, eyeColor: 0x1a0a0a, colors: { '#': FLESH, q: FLESH_DARK, w: 0xf2eedc, a: APRON, b: BLOOD, B: GORE, C: STEEL, n: 0x5a3a24 }, tint: FLESH },
    // A succubus: rose skin, small horns, black bat wings.
    'general-purpose': { rows: ['k.h..h.k', 'kk####kk', '.######.', '..#..#..'], eye: 1, eyeColor: 0xffd040, colors: { '#': 0xc86478, h: 0xe8d0b0, k: 0x3a2030 }, tint: 0xc86478 },
    // Andariel, Maiden of Anguish: pale green, red hair, spider legs.
    other: { rows: ['..rrrr..', '.r####r.', 'l.####.l', '.l-..-l.'], eye: 1, eyeColor: 0xffd040, feet: false, colors: { '#': 0x9ab88a, r: 0xc83030, l: 0x5a4a3a }, tint: 0x9ab88a },
  },
}
