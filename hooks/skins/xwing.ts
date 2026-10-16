import type { SkinLook } from './types'

const RED = 0xc8302c
const LIGHT = 0xe2e6ea
const HULL = 0xb4bac2
const SHADE = 0x7c848e

// An X-wing head on: four S-foils in an X with red stripes, a dark canopy
// with the R2 dome above it, engine pods at the wing roots, blue exhaust.
export const look: SkinLook = {
  said: 'Buddy jumps in an X-wing. Red Five standing by.',
  group: 'Sci-fi ships',
  rows: [
    'r........r',
    'rl......hr',
    '.rl.dd.hr.',
    '..lekkeh..',
    '...lkkh...',
    '..hehhes..',
    '.rh.ss.sr.',
    'rh..ss..sr',
    'r........r',
  ],
  colors: { r: RED, l: LIGHT, h: HULL, s: SHADE, k: 0x1c2a48, d: 0x4a86d8, e: 0x484e58 },
  eyes: [[4, 4], [5, 4]],
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
