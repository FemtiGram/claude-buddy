import type { SkinLook } from './types'

const HAIR = 0x5a3418
const HAIR_LIT = 0x8e5c30
const SKIN = 0xf0c8a0
const CLOAK = 0x6a7a5a
const CLOAK_LIT = 0x8c9c76
const SHIRT = 0xe8e2d0

// Frodo Baggins of the Shire: a mop of dark curly hair, fair face and blue
// eyes, a white shirt, and the grey-green elven cloak of Lórien pinned with
// its green-and-silver leaf brooch.
export const look: SkinLook = {
  said: 'Buddy pulls on an elven cloak: Frodo of the Shire.',
  group: 'Fantasy',
  rows: [
    '..c.c.cc..',
    '.chcchccc.',
    'cchcccchcc',
    'ccsscsssc.',
    'pcssssssc.',
    '..ssssss..',
    '.lvlwwlll.',
    '.lggwwggl.',
    '.lgwwwwgg.',
    '.lggwwggg.',
    '.lgggggggg',
  ],
  colors: { c: HAIR, h: HAIR_LIT, s: SKIN, p: 0xe0a880, w: SHIRT, g: CLOAK, l: CLOAK_LIT, v: 0x5aa848 },
  eyes: [[3, 4], [6, 4]],
  eyeColor: 0x2a6ad0,
  smile: [[4, 5], [5, 5]],
  tear: [2, 5],
  arms: { color: SKIN, down: [[0, 9], [9, 8]], up: [[0, 6], [9, 6]] },
  feet: { color: 0xd8a070, at: [3, 6] },
  captions: { idle: 'SAM', happy: 'SHIRE!' },
  critters: {
    // Samwise Gamgee: sandy hair, brown waistcoat.
    Explore: { rows: ['.yyyyyy.', '.y####y.', '..####..', '.bbwwbb.'], eye: 1, colors: { '#': SKIN, y: 0xc89a50, b: 0x7a4a24, w: SHIRT }, tint: 0xc89a50 },
    // The Eye of Sauron, wreathed in flame.
    Plan: { rows: ['..ffff..', '.f#kk#f.', 'f##kk##f', '.f-ff-f.'], eye: 2, eyes: [3, 4], eyeColor: 0x1a0a04, feet: false, arms: false, colors: { '#': 0xffb020, f: 0xe04010, k: 0x1a0a04 }, tint: 0xff8a20 },
    // A tiny Frodo: curls, cloak, brooch.
    fork: { rows: ['.chcchc.', 'c######c', '.gg##gg.', '.gggvgg.'], eye: 1, colors: { '#': SKIN, c: HAIR, h: HAIR_LIT, g: CLOAK, v: 0x5aa848 }, tint: CLOAK_LIT },
    // Treebeard the Ent: bark and leaves.
    'general-purpose': { rows: ['.llllll.', 'l-l##l-l', '.######.', '.#.##.#.'], eye: 2, eyeColor: 0xd8c870, colors: { '#': 0x7a5a38, l: 0x4a9a3a }, tint: 0x4a9a3a },
    // A Nazgûl: a black hood, no face, two cold points of light.
    other: { rows: ['...##...', '..####..', '.#kkkk#.', '.######.'], eye: 2, eyeColor: 0xc8e0ff, colors: { '#': 0x50505e, k: 0x0a0a10 }, tint: 0x9a9ab0 },
  },
}
