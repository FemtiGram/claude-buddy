import type { SkinLook } from './types'

const SUIT = 0x46465a // lifted off black, so she shows on a dark terminal
const SHEEN = 0x8a8aac
const SILVER = 0xc4c8d4
const SKIN = 0xe8b898
const LIPS = 0xd8283a
const WHIP = 0xc8944a

// Catwoman: a sleek catsuit and cowl with cat ears, silver goggles, red lips,
// a whip for an arm and a sheen rim on her ears, head and shoulders.
export const look: SkinLook = {
  said: 'Buddy turns into Catwoman. Meow.',
  group: 'DC',
  rows: [
    '.ss....ss.',
    '.skk..kks.',
    '.skgkkgks.',
    '.kgkkkkgk.',
    '.kkgSSgkk.',
    '..kSllSk..',
    '.sskkkkss.',
    '.skksskkk.',
    '.skkkkkkk.',
    '..sk..sk..',
  ],
  colors: { k: SUIT, s: SHEEN, g: SILVER, S: SKIN, l: LIPS },
  eyes: [[3, 3], [6, 3]],
  eyeColor: 0x6ae07a,
  smile: [[4, 5], [5, 5]],
  tear: [3, 3],
  arms: { color: WHIP, down: [[0, 7], [9, 7]], up: [[0, 5], [9, 5]] },
  feet: { color: SUIT, at: [2, 7] },
  captions: { happy: 'PURR!', idle: 'MEOW' },
  critters: {
    // A black cat, lifted so it shows.
    Explore: { rows: ['#.#..#.#', '########', '#.####.#', '.######.'], eye: 2, eyeColor: 0x6ae07a, colors: { '#': 0x3c3c50 }, tint: 0x6a6a88 },
    // A diamond.
    Plan: { rows: ['.######.', '########', '.######.', '..####..'], eye: 1, feet: false, arms: false, colors: { '#': 0xa8d8f0 }, tint: 0xa8d8f0 },
    // A kitten.
    fork: { rows: ['#.#..#.#', '########', '#.####.#', '.#.##.#.'], eye: 1, colors: { '#': 0xc8a888 }, tint: 0xc8a888 },
    // A whip coil.
    'general-purpose': { rows: ['.######.', '#......#', '#.####.#', '.######.'], eye: 0, eyes: [], feet: false, arms: false, colors: { '#': 0x8a5a3a }, tint: 0x8a5a3a },
    // A yellow crescent moon.
    other: { rows: ['..####..', '.###....', '.###....', '..####..'], eye: 1, eyes: [2], feet: false, arms: false, colors: { '#': 0xf0d040 }, tint: 0xf0d040 },
  },
}
