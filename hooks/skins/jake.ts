import type { SkinLook } from './types'

const FUR = 0xf2b33a
const LIGHT = 0xf8c860
const DARK = 0xc07818
const JOWL = 0xf8d478
const EAR = 0x8a4c0c

// Jake the Dog: golden-orange fur with a darker rim, little floppy ears,
// big round eyes, a black nose over the droopy jowls that make his face.
export const look: SkinLook = {
  said: 'Buddy stretches into Jake the Dog. Dude!',
  group: 'TV cartoons',
  rows: [
    '...dddd...',
    '..dllyyd..',
    '.dlyyyyyd.',
    'EyeeyyeeyE',
    'EyeeyyeeyE',
    'EyyjkkjyyE',
    'dyjjjjjjyd',
    '.djjddjjd.',
    '..dyyyyd..',
    '.dyyyyyyd.',
    '.dyyddyyd.',
  ],
  colors: { y: FUR, l: LIGHT, d: DARK, E: EAR, j: JOWL, e: 0xfff4dc, k: 0x2a1a10 },
  eyes: [[3, 3], [6, 3]],
  eyeColor: 0x2a1a10,
  smile: [[2, 6], [3, 6], [4, 7], [5, 7], [6, 6], [7, 6]],
  tear: [2, 5],
  arms: { color: FUR, down: [[0, 9], [9, 9]], up: [[0, 7], [9, 7]] },
  feet: { color: DARK, at: [2, 7] },
  captions: { happy: 'BUMP IT!', idle: 'DUDE' },
  critters: {
    // Choose Goose: a white goose with a yellow beak.
    Explore: { rows: ['..##....', '.###yy..', '.####...', '..######'], eye: 1, eyes: [2], colors: { '#': 0xe8e8e0, y: 0xf2b030 }, tint: 0xe8c040 },
    // Peppermint Butler: a red and white swirl in a black suit.
    Plan: { rows: ['.##ww##.', '#ww##ww#', '.##ww##.', '..kkkk..'], eye: 1, colors: { '#': 0xe03838, w: 0xf4f4f4, k: 0x50505e }, tint: 0xe03838 },
    // A mini Jake: floppy ears, pale jowls and his nose.
    fork: { rows: ['.######.', 'E######E', 'EjjkkjjE', '.jj##jj.'], eye: 1, colors: { '#': FUR, j: JOWL, E: EAR, k: 0x2a1a10 }, tint: FUR },
    // Tree Trunks: a small green elephant with a hanging trunk.
    'general-purpose': { rows: ['.-####-.', '.######.', '.######.', '.####.#.'], eye: 1, colors: { '#': 0x9ad860 }, tint: 0x9ad860 },
    // Lumpy Space Princess: a lumpy purple cloud with a yellow star.
    other: { rows: ['..y##...', '.######.', '########', '.#.##.#.'], eye: 2, feet: false, colors: { '#': 0xb070d8, y: 0xf2d040 }, tint: 0xb070d8 },
  },
}
