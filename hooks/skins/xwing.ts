import type { SkinLook } from './types'

const RED = 0xc8302c
const HULL = 0xd8dce0
const SHADE = 0xa8aeb6

// An X-wing head on: four S-foils in an X with red stripes, a dark canopy
// with the R2 dome behind it, engine intakes on each wing, blue-white exhaust.
export const look: SkinLook = {
  said: 'Buddy jumps in an X-wing. Red Five standing by.',
  group: 'Sci-fi ships',
  rows: [
    'r........r',
    'rw......wr',
    '.we.bb.ew.',
    '..wwkkww..',
    '...wkkw...',
    '..wwssww..',
    '.we.ss.ew.',
    'rw..ss..wr',
    'r........r',
  ],
  colors: { r: RED, w: HULL, s: SHADE, k: 0x2a3a5c, b: 0x9ccaf0, e: 0x5a6068 },
  eyes: [[4, 3], [5, 3]],
  eyeColor: 0x9ad0ff,
  smile: [[4, 5], [5, 5]],
  tear: [4, 7],
  feet: { color: 0x5ab4ff, at: [1, 3, 6, 8] },
  captions: { happy: 'WHOO!', idle: 'ROGER' },
  critters: {
    // A Y-wing: long hull and two engine pods.
    Explore: { rows: ['#.#..#.#', '#.####.#', '#.####.#', '..#..#..'], eye: 1, feet: false, colors: { '#': 0xc8b478 }, tint: 0xc8b478 },
    // A Rebel pilot helmet.
    Plan: { rows: ['..####..', '.######.', '.#kkkk#.', '.######.'], eye: 2, eyeColor: 0xc8e4ff, colors: { '#': 0xe06a1c, k: 0x2a3550 }, tint: 0xe06a1c },
    // A little X-wing.
    fork: { rows: ['#......#', '.#.kk.#.', '..####..', '.#....#.'], eye: 1, eyes: [3, 4], eyeColor: 0x9ad0ff, feet: false, colors: { '#': HULL, k: 0x2a3a5c }, tint: HULL },
    // An A-wing, red arrowhead.
    'general-purpose': { rows: ['...##...', '..####..', '.##kk##.', '##....##'], eye: 2, eyes: [3, 4], eyeColor: 0x9ad0ff, feet: false, colors: { '#': RED, k: 0x2a3a5c }, tint: RED },
    // A trench gun tower.
    other: { rows: ['...gg...', '..####..', '.######.', '########'], eye: 2, feet: false, colors: { '#': 0x7a8290, g: 0x5ad05a }, tint: 0x7a8290 },
  },
}
