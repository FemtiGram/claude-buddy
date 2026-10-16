import type { SkinLook } from './types'

const LIGHT = 0xa9cc86
const GREEN = 0x8db36b
const DARK = 0x6b8f4e
const ROBE = 0xb58b5a
const SHADE = 0x8a6238
const SAND = 0xd8c29a
const HAIR = 0xe8e4d8
const CANE = 0x9a6a3a

// Master Yoda: long ears out to the sides, wispy white hair, wrinkled brow,
// brown robe with a sand-coloured tunic, a wooden cane for one arm.
export const look: SkinLook = {
  said: 'Buddy turns into Yoda. Wise, he is.',
  group: 'Star Wars',
  rows: [
    '...w.ww.w.',
    'g..gwwwg.g',
    'ggLgdgdggg',
    '.gWkggkWg.',
    '...Lgggd..',
    '...gddgd..',
    '..bbttbB..',
    '.bbbttbbB.',
    '.bbbbbbBB.',
  ],
  colors: { L: LIGHT, g: GREEN, d: DARK, w: HAIR, W: 0xf0f0e0, k: 0x2a3a22, b: ROBE, B: SHADE, t: SAND },
  eyes: [[3, 3], [6, 3]],
  smile: [[4, 5], [5, 5]],
  tear: [3, 4],
  arms: { color: CANE, down: [[0, 6], [0, 7], [9, 8]], up: [[0, 4], [0, 5], [9, 6]] },
  feet: { color: CANE, at: [3, 6] },
  captions: { happy: 'HMMM!', idle: 'HMM' },
  critters: {
    // A swamp light, a firefly of Dagobah.
    Explore: { rows: ['.ww..ww.', '..####..', '.#k##k#.', '..yyyy..'], eye: 2, feet: false, arms: false, colors: { '#': 0x6fbf5a, w: 0xcfe8c0, k: 0x2a3a22, y: 0xe8e070 }, tint: 0x6fbf5a },
    // The Jedi Council chair: tall back, cushion.
    Plan: { rows: ['.######.', '.#cccc#.', '.######.', '.#....#.'], eye: 1, eyes: [3, 4], colors: { '#': 0xa0764a, c: 0xb8584a }, tint: 0xa0764a },
    // A tiny robed youngling with a braid.
    fork: { rows: ['..####..', '.r####..', '.rcccc..', '..cccc..'], eye: 1, eyes: [3, 4], colors: { '#': 0xe0b890, r: 0x7a4a2a, c: 0xc9b48a }, tint: 0xc9b48a },
    // A frog from the swamp.
    'general-purpose': { rows: ['.##..##.', '.######.', '.######.', '#.#..#.#'], eye: 0, eyes: [1, 6], feet: false, arms: false, colors: { '#': 0x5fa860 }, tint: 0x5fa860 },
    // Yoda's mud hut.
    other: { rows: ['..####..', '.#w##w#.', '########', '###dd###'], eye: 1, feet: false, arms: false, colors: { '#': 0x9a8a68, w: 0xe0d090, d: 0x4a3a28 }, tint: 0x9a8a68 },
  },
}
