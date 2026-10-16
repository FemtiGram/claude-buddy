import type { SkinLook } from './types'

const DARK = 0x4b4e63
const SHEEN = 0x7c82a0
const TEETH = 0xe9e6d8

// The Xenomorph from Alien: a long smooth dome swept back and up, no eyes to
// speak of, pale teeth in the jaw, a ribbed thin body and a tail curling beside.
export const look: SkinLook = {
  said: 'Buddy turns into a xenomorph. Hiss!',
  group: 'Horror',
  rows: [
    '.SS.......',
    'SSSD......',
    'SSDDD.....',
    'SDDDDDD...',
    '.DDDDDDDD.',
    '..DDDDDDD.',
    '..TDTDTDT.',
    '...DSDD...',
    '...DDSD..D',
    '...SDDD.DD',
  ],
  colors: { D: DARK, S: SHEEN, T: TEETH },
  eyes: [[4, 4], [7, 4]],
  eyeColor: 0x2c2e3e,
  smile: [[3, 6], [5, 6], [7, 6]],
  tear: [4, 5],
  arms: {
    color: SHEEN,
    down: [[2, 7], [2, 8]],
    up: [[0, 4], [0, 5]],
  },
  feet: { color: DARK, at: [3, 6] },
  captions: { idle: 'HISS', happy: 'NICE' },
  critters: {
    // A facehugger: pale, finger legs spread wide.
    Explore: { rows: ['#.#..#.#', '########', '.######.', '#.-..-.#'], eye: 1, feet: false, arms: false, colors: { '#': 0xd9c9a8 }, tint: 0xd9c9a8 },
    // An egg: leathery, the petals open at the top.
    Plan: { rows: ['.#.##.#.', '.######.', '.#-##-#.', '.######.'], eye: 2, eyeColor: 0x7a8a4a, colors: { '#': 0x8a7a5a }, tint: 0x8a7a5a },
    // The copy: an egg cracked open, a hugger peeking out.
    fork: { rows: ['..p..p..', '.#pppp#.', '.######.', '..####..'], eye: 1, eyes: [3, 4], eyeColor: 0x5a3a3a, colors: { '#': 0x9a8a68, p: 0xe0b8a8 }, tint: 0xe0b8a8 },
    // A chestburster: a small worm with teeth.
    'general-purpose': { rows: ['........', '..tt....', '.######.', '#######.'], eye: 2, eyes: [2], arms: false, feet: false, colors: { '#': 0xd89a8a, t: 0xe9e6d8 }, tint: 0xd89a8a },
    // Jones the cat: orange tabby, pointed ears.
    other: { rows: ['#.#..#.#', '########', '########', '.-####-.'], eye: 1, colors: { '#': 0xe0903a }, tint: 0xe0903a },
  },
}
