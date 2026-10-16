import type { SkinLook } from './types'

const HULL = 0xb8bec9
const SHADE = 0x8890a0
const BUSSARD = 0xe0502a
const GLOW = 0x5ab0ff

// The USS Enterprise NCC-1701: round saucer, thin neck to the engineering
// hull, two nacelles with red bussard collectors and blue strips.
export const look: SkinLook = {
  said: 'Buddy takes the Enterprise. Engage!',
  group: 'Sci-fi ships',
  rows: [
    '....gg....',
    '..gggggg..',
    'gggggggggg',
    '.ssssssss.',
    '.r.gddg.r.',
    '.b.gggg.b.',
    '.bsggggsb.',
    '.b..ss..b.',
    '.b......b.',
  ],
  colors: { g: HULL, s: SHADE, r: BUSSARD, b: GLOW, d: 0x3f86d8 },
  eyes: [[3, 2], [6, 2]],
  smile: [[3, 3], [4, 3], [5, 3], [6, 3]],
  tear: [4, 3],
  arms: { color: BUSSARD, down: [[0, 6], [9, 6]], up: [[0, 5], [9, 5]] },
  feet: { color: GLOW, at: [1, 8] },
  captions: { happy: 'BOLDLY', idle: 'HMM' },
  critters: {
    // A shuttlecraft.
    Explore: { rows: ['..####..', '.#w##w#.', '########', '.b....b.'], eye: 1, feet: false, arms: false, colors: { '#': HULL, w: SHADE, b: GLOW }, tint: HULL },
    // Spock: bowl cut, pointed ears, blue shirt.
    Plan: { rows: ['ehhhhhhe', 'e######e', '.######.', '.bbbbbb.'], eye: 1, feet: false, arms: false, colors: { '#': 0xe8c09a, e: 0xe8c09a, h: 0x3a3a48, b: 0x3f86d8 }, tint: 0x3f86d8 },
    // A tribble, and it has company soon.
    fork: { rows: ['.#.##.#.', '########', '########', '.##..##.'], eye: 1, feet: false, arms: false, colors: { '#': 0x9a6a40 }, tint: 0x9a6a40 },
    // A red-shirt crewman.
    'general-purpose': { rows: ['.hhhhhh.', '.ffffff.', '.######.', '.##..##.'], eye: 1, feet: false, arms: false, colors: { '#': 0xd04a38, h: 0x8a5a30, f: 0xe8c09a }, tint: 0xd04a38 },
    // A communicator badge.
    other: { rows: ['...##...', '..####..', '.##ss##.', '###ss###'], eye: 2, feet: false, arms: false, colors: { '#': 0xe0b03a, s: 0xc8ccd4 }, tint: 0xe0b03a },
  },
}
