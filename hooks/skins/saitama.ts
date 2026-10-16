import type { SkinLook } from './types'

const SKIN = 0xf6d7b0
const SHINE = 0xfff0d8
const YELLOW = 0xf2d040
const RED = 0xd02a30
const CAPE = 0xf0eee6
const SHADE = 0xb8b8c0

// Saitama: perfectly round bald head, blank face, yellow suit, red gloves
// and boots, white cape.
export const look: SkinLook = {
  said: 'Buddy turns into Saitama. OK.',
  group: 'Anime',
  rows: [
    '..........',
    '...ssss...',
    '..slssss..',
    '.ssssssss.',
    '.ssssssss.',
    '..ssssss..',
    '.cyyyyyyc.',
    '.dyyyyyyd.',
    '.dyy..yyd.',
  ],
  colors: { s: SKIN, l: SHINE, y: YELLOW, c: CAPE, d: SHADE },
  eyes: [[3, 4], [6, 4]],
  smile: [[4, 5], [5, 5]],
  tear: [3, 5],
  arms: { color: RED, down: [[0, 7], [9, 7]], up: [[0, 5], [9, 5]] },
  feet: { color: RED, at: [3, 6] },
  captions: { happy: 'PUNCH!', idle: 'OK.' },
  critters: {
    // Genos: blond cyborg with a dark metal body.
    Explore: { rows: ['.######.', '.#ssss#.', '.kkkkkk.', '..kkkk..'], eye: 1, colors: { '#': 0xe8d060, s: 0xf2c8a0, k: 0x5a5a6a }, tint: 0xe8d060 },
    // A supermarket sale flyer.
    Plan: { rows: ['.######.', '.#rrrr#.', '.######.', '.#rr#r#.'], eye: 2, feet: false, arms: false, colors: { '#': 0xe8e4da, r: 0xd02a30 }, tint: 0xd02a30 },
    // A mini bald head with a little cape.
    fork: { rows: ['..#l##..', '.######.', '.######.', 'cyyyyyyc'], eye: 1, colors: { '#': 0xf6d7b0, l: 0xfff0d8, y: 0xf2d040, c: 0xf0eee6 }, tint: 0xf2d040 },
    // A bag of sale groceries.
    'general-purpose': { rows: ['.g.rr.g.', '.######.', '.######.', '.######.'], eye: 2, feet: false, arms: false, colors: { '#': 0xc89a5a, g: 0x4aa84a, r: 0xe05a4a }, tint: 0xc89a5a },
    // A crab monster.
    other: { rows: ['##....##', '#.####.#', '.######.', '.#.##.#.'], eye: 1, colors: { '#': 0xd04a3a }, tint: 0xd04a3a },
  },
}
