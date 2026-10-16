import type { SkinLook } from './types'

const GOLD = 0xd9a93b
const LIGHT = 0xf0c860
const SHADE = 0xa87c24
const WIRE = 0x7d838c
const SILVER = 0xb8c0c8
const PALE = 0xfff1a8

// C-3PO: a golden droid with a rounded head, round glowing eyes and a slot
// mouth, grey cables at the neck and midriff, one silver lower leg.
export const look: SkinLook = {
  said: 'Buddy turns into C-3PO. Oh my!',
  group: 'Star Wars',
  rows: [
    '..........',
    '..........',
    '...LGGL...',
    '..GGGGGG..',
    '..GGGGGG..',
    '..GGGGGG..',
    '...GDDG...',
    '....ww....',
    '..LGGGGD..',
    '..GwwwwG..',
    '...GG.SS..',
  ],
  colors: { G: GOLD, L: LIGHT, D: SHADE, w: WIRE, S: SILVER },
  eyes: [[3, 4], [6, 4]],
  eyeColor: PALE,
  smile: [[4, 6], [5, 6]],
  tear: [3, 5],
  arms: {
    color: GOLD,
    down: [[1, 8], [1, 9], [8, 8], [8, 9]],
    up: [[1, 4], [1, 5], [8, 4], [8, 5]],
  },
  feet: { color: GOLD, at: [3, 7] },
  captions: { idle: 'SIR', happy: 'OH MY!' },
  critters: {
    // A Jawa sandcrawler: a rusty hulk on dark treads, lit windows.
    Explore: { rows: ['..####..', '.######.', '.#y##y#.', 'kkkkkkkk'], eye: 2, eyes: [2, 5], eyeColor: 0xf0c860, arms: false, feet: false, colors: { '#': 0xa0724a, y: 0xf0c860, k: 0x5a5048 }, tint: 0xa0724a },
    // A holoprojector: a blue hologram over a grey base.
    Plan: { rows: ['...bb...', '..bbbb..', '.#oooo#.', '.######.'], eye: 2, eyes: [3, 4], eyeColor: 0x5fc0e8, arms: false, feet: false, colors: { '#': 0x7d8a96, b: 0x5fc0e8, o: 0x3a4a5a }, tint: 0x5fc0e8 },
    // A mini 3PO head on silver legs.
    fork: { rows: ['..####..', '.######.', '.######.', '..s..s..'], eye: 1, eyes: [2, 5], eyeColor: 0xfff1a8, colors: { '#': GOLD, s: SILVER }, tint: SILVER },
    // An oil bath tub with bubbles.
    'general-purpose': { rows: ['..b..b..', '#oooooo#', '#oooooo#', '.######.'], eye: 1, eyes: [2, 5], eyeColor: 0xf0c860, arms: false, feet: false, colors: { '#': 0x7d8a96, o: 0x7a5a20, b: 0xd9c070 }, tint: 0x7a5a20 },
    // A red R5 unit: red dome, white band, one dark eye lens.
    other: { rows: ['..####..', '.##kk##.', '.#w##w#.', '.######.'], eye: 2, eyes: [2, 5], colors: { '#': 0xc8483c, k: 0x3a3f48, w: 0xe6e2da }, tint: 0xc8483c },
  },
}
