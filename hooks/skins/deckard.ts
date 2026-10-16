import type { SkinLook } from './types'

const HOOD = 0x7a4a2c
const HOOD_LIGHT = 0xb07a48
const HOOD_DARK = 0x4e2e1a
const SKIN = 0xe2b48c
const BEARD = 0xeeeee6
const BEARD_SHADE = 0xb4b4ac

// Deckard Cain, the last of the Horadrim: a brown hood over a wrinkled face,
// bushy white brows and a long white beard, clutching his red, gold-clasped
// tome. Stay awhile and listen.
export const look: SkinLook = {
  said: 'Buddy becomes Deckard Cain. Stay awhile and listen!',
  group: 'Diablo',
  rows: [
    '...LLhh...',
    '..Lhhhhhd.',
    '.Lhwsswhd.',
    '.Lssssssd.',
    '.hsWnnWsd.',
    '.hWWWWWWd.',
    '.hGWWWWGd.',
    '.hhGWWGhd.',
    '.hTTyyTTd.',
    '.hTTTTTTd.',
    '..hh..dd..',
  ],
  colors: { L: HOOD_LIGHT, h: HOOD, d: HOOD_DARK, s: SKIN, n: 0xc48a68, w: BEARD, W: BEARD, G: BEARD_SHADE, T: 0x9a2a22, y: 0xe0b440 },
  eyes: [[3, 3], [6, 3]],
  eyeColor: 0x2e2018,
  smile: [[4, 5], [5, 5]],
  tear: [2, 3],
  arms: { color: SKIN, down: [[0, 8], [9, 8]], up: [[0, 5], [9, 5]] },
  feet: { color: HOOD_DARK, at: [3, 6] },
  captions: { idle: 'AWHILE', happy: 'LISTEN' },
  critters: {
    // A Hell Bovine from the Secret Cow Level: white with black patches.
    Explore: { rows: ['h......h', '.##kk##.', '.#k####.', '..#pp#..'], eye: 1, colors: { '#': 0xe8e0d6, k: 0x3a3030, h: 0xc8b890, p: 0xe8a0a0 }, tint: 0xd8c8b8 },
    // The Horadric Cube: a carved box with gold corners and glowing runes.
    Plan: { rows: ['.g####g.', '.######.', '.######.', '.g----g.'], eye: 1, eyeColor: 0x60c8ff, feet: false, arms: false, colors: { '#': 0x9a8670, g: 0xe0b448 }, tint: 0xe0b448 },
    // A mini Cain: hood, face, white beard.
    fork: { rows: ['..hhhh..', '.h####h.', '.hwwwwh.', '..wwww..'], eye: 1, colors: { '#': SKIN, h: HOOD, w: BEARD }, tint: HOOD_LIGHT },
    // A red health potion with a cork.
    'general-purpose': { rows: ['...cc...', '...gg...', '.######.', '..-##-..'], eye: 2, eyeColor: 0xfff0f0, feet: false, arms: false, colors: { '#': 0xd82020, c: 0x9a6a3a, g: 0xc0d0d8 }, tint: 0xe03030 },
    // A skeleton: bone white, hollow cheeks, rattling ribs.
    other: { rows: ['..####..', '.######.', '..-##-..', '.#.##.#.'], eye: 1, colors: { '#': 0xe0dccc }, tint: 0xd8d4c4 },
  },
}
