import type { SkinLook } from './types'

const SAND = 0xd8c08a
const BLUE = 0x1e56a0
const GOLD = 0xe3b23c

// A sphinx-cat: sand-gold cat in a striped blue and gold nemes headdress, kohl
// eyes, a pink nose, a gold collar and a tail.
export const look: SkinLook = {
  said: 'Buddy turns into a sphinx-cat.',
  group: 'Cartoons & folklore',
  rows: [
    '..bgbgbg..',
    '.bgbgbgbg.',
    'bgSSSSSSgb',
    'bgkSSSSkgb',
    'bgSSppSSgb',
    'bgSSSSSSgb',
    '.bgSSSSgb.',
    'bgCCCCCCgb',
    '..SSSSSS..',
    '..SSSSSS.t',
    '..SSSSSSt.',
  ],
  colors: { S: SAND, b: BLUE, g: GOLD, k: 0x2a2a30, p: 0xe58aa0, C: 0xc8922a, t: 0xb89a62 },
  eyes: [[3, 3], [6, 3]],
  eyeColor: 0x1b1b1b,
  smile: [[4, 5], [5, 5]],
  tear: [2, 4],
  arms: {
    color: SAND,
    down: [[1, 8], [8, 8]],
    up: [[0, 6], [9, 6]],
  },
  feet: { color: 0xb89a62, at: [3, 6] },
  captions: { idle: 'NILE', happy: 'MEOW' },
  critters: {
    // A scarab beetle.
    Explore: { rows: ['.l.##.l.', '.######.', 'l.####.l', '.l.##.l.'], eye: 1, colors: { '#': BLUE, l: GOLD }, tint: BLUE },
    // A papyrus scroll.
    Plan: { rows: ['.o####o.', 'o.####.o', 'o.####.o', '.o####o.'], eye: 2, colors: { '#': 0xe6d6a4, o: 0xb8924a }, tint: 0xb8924a },
    // A kitten.
    fork: { rows: ['##....##', '.######.', '.######.', '..#pp#..'], eye: 1, colors: { '#': SAND, p: 0xe58aa0 }, tint: SAND },
    // A pyramid.
    'general-purpose': { rows: ['...##...', '..####..', '.######.', '########'], eye: 2, eyes: [3, 4], arms: false, feet: false, colors: { '#': GOLD }, tint: GOLD },
    // An eye of Horus amulet.
    other: { rows: ['..gggg..', '.g####g.', 'g######g', '.g.##.g.'], eye: 2, eyes: [3, 4], eyeColor: GOLD, arms: false, feet: false, colors: { '#': BLUE, g: GOLD }, tint: BLUE },
  },
}
