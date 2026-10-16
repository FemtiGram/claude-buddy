import type { SkinLook } from './types'

const ORC = 0x5a9a40
const HAIR = 0x2a2430
const STEEL = 0x8a93a3
const GOLD = 0xd8a838

// Thrall, Warchief of the Horde: green orc skin, long black hair, white tusks,
// blue eyes, black plate with gold trim, and the Doomhammer on his shoulder.
export const look: SkinLook = {
  said: "Buddy takes up the Doomhammer: Lok'tar ogar!",
  group: 'Warcraft',
  rows: [
    '.kkkkkk.HH',
    'kKkkkkkkHH',
    'kLgggggkHH',
    'kggggggkd.',
    'kggnnggkd.',
    'kgwggwgkd.',
    '.kgggggkd.',
    'ssaGGass..',
    '.aaGGaa...',
    '.aa..aa...',
  ],
  colors: { k: HAIR, K: 0x4a4458, g: ORC, L: 0x8cc868, n: 0x3e7a2c, w: 0xf2ecd8, H: STEEL, d: 0x7a4a24, s: STEEL, a: 0x3a3f4a, G: GOLD },
  eyes: [[2, 3], [5, 3]],
  eyeColor: 0x4ab0ff,
  smile: [[3, 6], [6, 6]],
  tear: [2, 4],
  arms: { color: ORC, down: [[0, 8], [8, 7]], up: [[0, 6], [9, 6]] },
  feet: { color: 0x2a2a30, at: [2, 5] },
  captions: { happy: 'LOK TAR!', idle: 'OGAR' },
  critters: {
    // A frost wolf, white mask, ears up.
    Explore: { rows: ['.#....#.', '.######.', '.#w##w#.', '..#kk#..'], eye: 2, colors: { '#': 0x8a8f9a, w: 0xe8e8ee, k: 0x2a2a30 }, tint: 0xa0a8b8 },
    // A peon with tusks and a sack tunic: zug zug.
    Plan: { rows: ['.######.', '.######.', '.#w##w#.', '.bbbbbb.'], eye: 1, colors: { '#': 0x6aa040, w: 0xf0ead0, b: 0x8a6a40 }, tint: 0x6aa040 },
    // Mini Thrall: hair, tusks, plate.
    fork: { rows: ['.kkkkkk.', 'k######k', '.kw##wk.', '.ssssss.'], eye: 1, eyeColor: 0x4ab0ff, colors: { '#': ORC, k: HAIR, w: 0xf2ecd8, s: STEEL }, tint: ORC },
    // A kodo beast, horned and heavy.
    'general-purpose': { rows: ['h.####.h', 'hh####hh', '.#-##-#.', '.######.'], eye: 1, colors: { '#': 0x9a8a78, h: 0xe8dcc0 }, tint: 0x9a8a78 },
    // An earth elemental, rock with glowing eyes.
    other: { rows: ['.#.##.#.', '.######.', '##-##-##', '.##..##.'], eye: 1, eyeColor: 0xffa040, feet: false, colors: { '#': 0x8a6a4a }, tint: 0xb08050 },
  },
}
