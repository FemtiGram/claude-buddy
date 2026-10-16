import type { SkinLook } from './types'

const CLOAK = 0xd0343a
const SPELL = 0xffa030

// Doctor Strange: swept dark hair with grey temples, a goatee, a blue tunic,
// the high-collared red Cloak of Levitation flaring behind him, the green Eye
// of Agamotto on his chest, orange spell circles for hands.
export const look: SkinLook = {
  said: 'Buddy turns into Doctor Strange.',
  group: 'Marvel',
  rows: [
    '..........',
    'C..HHHH..C',
    'C.HHHHHH.C',
    'C.GFFFFG.C',
    'C.FFFFFF.C',
    'C.FFFFFF.C',
    'C..FHHF..C',
    'CBBBAABBBC',
    'C.BBAABB.C',
    '..BDBBDB..',
    '..BB..BB..',
  ],
  colors: { C: CLOAK, H: 0x5e5878, G: 0xb4b4c4, F: 0xe8b890, B: 0x4a6ac0, D: 0x34509a, A: 0x5ae07a },
  eyes: [[3, 4], [6, 4]],
  smile: [[4, 5], [5, 5]],
  tear: [3, 4],
  arms: {
    color: SPELL,
    down: [[1, 8], [8, 8]],
    up: [[1, 3], [8, 3]],
  },
  feet: { color: 0x7a4a2e, at: [3, 6] },
  captions: { idle: 'HMM', happy: 'MYSTIC' },
  critters: {
    // Wong: bald, in blue-green robes.
    Explore: { rows: ['..####..', '.######.', '.######.', 'rbbbbbbr'], eye: 1, colors: { '#': 0xd8a070, r: 0x3a5a7a, b: 0x2e4a6a }, tint: 0xd8a070 },
    // The Book of Vishanti, with a gold clasp.
    Plan: { rows: ['.######.', '########', '##gggg##', '.######.'], eye: 1, arms: false, feet: false, colors: { '#': 0x8a4a3a, g: 0xe0b040 }, tint: 0xe0b040 },
    // The Cloak of Levitation, flying.
    fork: { rows: ['.#....#.', '.######.', '..####..', '...##...'], eye: 1, arms: false, feet: false, colors: { '#': CLOAK }, tint: CLOAK },
    // A sling ring portal.
    'general-purpose': { rows: ['..####..', '.#ssss#.', '.#ssss#.', '..####..'], eye: 1, arms: false, feet: false, colors: { '#': SPELL, s: 0xffd070 }, tint: SPELL },
    // A sandwich for Wong.
    other: { rows: ['.######.', 'llllllll', 'mmmmmmmm', '########'], eye: 0, arms: false, feet: false, colors: { '#': 0xd8a860, l: 0x5aaa4a, m: 0xb04a3a }, tint: 0xd8a860 },
  },
}
