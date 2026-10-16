import type { SkinLook } from './types'

const HAIR = 0x5a3a2a
const SKIN = 0xf2c09a
const BOW = 0xd62839
const DRESS = 0x4a4470
const STICK = 0xa0703a
const STRAW = 0xe0b850

// Kiki of Kiki's Delivery Service: dark bob, big red bow, navy dress, and
// her broom held at her side.
export const look: SkinLook = {
  said: 'Buddy turns into Kiki, ready for deliveries!',
  group: 'Ghibli',
  rows: [
    '..rr..rr..',
    '...rrrr...',
    '.hhhhhhhh.',
    '.hssssssh.',
    'khssssssh.',
    'k.h.ss.h..',
    'k.dddddd..',
    'kdddddddd.',
    'ydddddddd.',
    'y.dddddd..',
  ],
  colors: { r: BOW, h: HAIR, s: SKIN, d: DRESS, k: STICK, y: STRAW },
  eyes: [[3, 3], [6, 3]],
  smile: [[4, 4], [5, 4]],
  tear: [3, 4],
  arms: { color: SKIN, down: [[9, 7]], up: [[9, 5]] },
  feet: { color: HAIR, at: [3, 6] },
  captions: { happy: 'NICE', idle: 'HELLO' },
  critters: {
    // A crow perched, seen from the side.
    Explore: { rows: ['..###...', '.####yy.', '..#####.', '...##.#.'], eye: 1, eyes: [3], eyeColor: 0xe8e8f0, colors: { '#': 0x4a5a7a, y: 0xe8b030 }, tint: 0x6a7a9a },
    // A black cat sitting, tail up.
    Plan: { rows: ['.#.#...#', '.####..#', '.####.##', '.#####..'], eye: 1, eyes: [2], eyeColor: 0xe8d040, colors: { '#': 0x4a4858 }, tint: 0x6a6878 },
    // A little witch under her hat.
    fork: { rows: ['...##...', '..####..', '########', '..ssss..'], eye: 3, colors: { '#': 0x5a4a8c, s: 0xf2c09a }, tint: 0x5a4a8c },
    // The broom.
    'general-purpose': { rows: ['.....###', 'kkkk####', 'kkkk####', '.....###'], eye: 1, eyes: [5, 6], feet: false, colors: { '#': 0xe0b850, k: 0xa0703a }, tint: 0xa0703a },
    // A round loaf.
    other: { rows: ['..####..', '.#w##w#.', '.######.', '..####..'], eye: 2, colors: { '#': 0xc8863a, w: 0xe8c890 }, tint: 0xc8863a },
  },
}
