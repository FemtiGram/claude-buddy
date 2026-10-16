import type { SkinLook } from './types'

const FUR = 0xf2b33a
const LIGHT = 0xf8d478
const DARK = 0xc07818
const JOWL = 0xe09a28

// Jake the Dog: golden-orange fur with a darker rim, little floppy ears,
// big round eyes, a black nose over the droopy jowls that make his face.
export const look: SkinLook = {
  said: 'Buddy stretches into Jake the Dog. Dude!',
  group: 'TV cartoons',
  rows: [
    '.dd....dd.',
    '.dlllyyyd.',
    'dlyyyyyyyd',
    'dyeeyyeeyd',
    'dyyykkyyyd',
    'djjyyyyjjd',
    '.djjjjjjd.',
    '..dyyyyd..',
    '..yyyyyy..',
    '..dyyyyd..',
  ],
  colors: { y: FUR, l: LIGHT, d: DARK, j: JOWL, e: 0xfff4dc, k: 0x2a1a10 },
  eyes: [[3, 3], [6, 3]],
  eyeColor: 0x2a1a10,
  smile: [[3, 5], [4, 6], [5, 6], [6, 5]],
  tear: [2, 4],
  arms: { color: FUR, down: [[1, 8], [8, 8]], up: [[0, 6], [9, 6]] },
  feet: { color: DARK, at: [3, 6] },
  captions: { happy: 'BUMP IT!', idle: 'DUDE' },
  critters: {
    // Choose Goose: a white goose with a yellow beak.
    Explore: { rows: ['..##....', '.###yy..', '.####...', '..######'], eye: 1, eyes: [2], colors: { '#': 0xe8e8e0, y: 0xf2b030 }, tint: 0xe8c040 },
    // Peppermint Butler: a red and white swirl in a black suit.
    Plan: { rows: ['.##ww##.', '#ww##ww#', '.##ww##.', '..kkkk..'], eye: 1, colors: { '#': 0xe03838, w: 0xf4f4f4, k: 0x50505e }, tint: 0xe03838 },
    // A mini Jake with his jowls and nose.
    fork: { rows: ['.-....-.', '.######.', '##-kk-##', '..####..'], eye: 1, colors: { '#': FUR, k: 0x2a1a10 }, tint: FUR },
    // Tree Trunks: a small green elephant with a hanging trunk.
    'general-purpose': { rows: ['.-####-.', '.######.', '.######.', '.####.#.'], eye: 1, colors: { '#': 0x9ad860 }, tint: 0x9ad860 },
    // Lumpy Space Princess: a lumpy purple cloud with a yellow star.
    other: { rows: ['..y##...', '.######.', '########', '.#.##.#.'], eye: 2, feet: false, colors: { '#': 0xb070d8, y: 0xf2d040 }, tint: 0xb070d8 },
  },
}
