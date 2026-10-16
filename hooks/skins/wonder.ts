import type { SkinLook } from './types'

const HAIR = 0x2e2a3a
const GOLD = 0xe8c03a
const RED = 0xc02a34
const BLUE = 0x2a4ab0
const SKIN = 0xe0b090
const SILVER = 0xc8ced8

// Wonder Woman: long black hair, a gold tiara with a red star, a red top with a
// gold eagle, a starry blue skirt, silver bracelets, the golden lasso, red boots.
export const look: SkinLook = {
  said: 'Buddy suits up as Wonder Woman!',
  group: 'DC',
  rows: [
    '....RR....',
    '..hggggh..',
    '.hhsssshh.',
    '.hssssssh.',
    '.hssssssh.',
    '.hhrrrrhh.',
    '.hrrGGrrh.',
    'GhrGGGGrh.',
    'G.hrrrrh..',
    'G.bwbbwb..',
    '..ss..ss..',
  ],
  colors: { R: RED, h: HAIR, g: GOLD, G: GOLD, s: SKIN, r: RED, b: BLUE, w: 0xe8ecf4 },
  eyes: [[3, 3], [6, 3]],
  smile: [[4, 4], [5, 4]],
  tear: [3, 4],
  arms: { color: SILVER, down: [[9, 7]], up: [[9, 5]] },
  feet: { color: RED, at: [3, 6] },
  captions: { happy: 'TRUTH', idle: 'HERO' },
  critters: {
    // The invisible jet, a pale blue outline.
    Explore: { rows: ['...##...', '.######.', '##....##', '#.#..#.#'], eye: 0, eyes: [], feet: false, arms: false, colors: { '#': 0x9ad0ec }, tint: 0x9ad0ec },
    // The Lasso of Truth, a gold loop.
    Plan: { rows: ['..####..', '.#....#.', '.#....#.', '..####.#'], eye: 0, eyes: [], feet: false, arms: false, colors: { '#': 0xe8c03a }, tint: 0xe8c03a },
    // A little Amazon warrior.
    fork: { rows: ['..gggg..', '.h####h.', '.h####h.', '..r..r..'], eye: 1, colors: { '#': 0xe0b090, g: 0xe8c03a, h: 0x2e2a3a, r: 0xc02a34 }, tint: 0xc02a34 },
    // A silver bracelet.
    'general-purpose': { rows: ['.######.', '#......#', '#......#', '.######.'], eye: 0, eyes: [], feet: false, arms: false, colors: { '#': 0xc8ced8 }, tint: 0xc8ced8 },
    // A Themysciran shield.
    other: { rows: ['.gggggg.', 'g######g', '.g####g.', '..gggg..'], eye: 0, eyes: [], feet: false, arms: false, colors: { '#': 0xc02a34, g: 0xe8c03a }, tint: 0xe8c03a },
  },
}
