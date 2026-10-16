import type { SkinLook } from './types'

const FUR = 0xf4cc4a
const LIGHT = 0xffe68a
const EAR = 0xc8902a
const CREAM = 0xfff2d0
const GREEN = 0x3a9a4a

// Isabelle of Animal Crossing: a yellow shih tzu with a topknot tied up by
// her red jingle bell, long floppy darker ears, a cream muzzle with a little
// black nose, and her green vest over a white shirt.
export const look: SkinLook = {
  said: 'Buddy grabs the clipboard: Isabelle at your service!',
  group: 'Nintendo',
  rows: [
    '....yy....',
    '....RR....',
    '..yLLyyy..',
    '.eyLyyyye.',
    'eeyyyyyyee',
    'eeyccccyee',
    'eeccnnccee',
    '.e.cccc.e.',
    '..gwwwwg..',
    '..gwRRwg..',
    '..gwwwwg..',
  ],
  colors: { y: FUR, L: LIGHT, e: EAR, c: CREAM, n: 0x3a2418, R: 0xe0303a, g: GREEN, w: 0xf6f6f2 },
  eyes: [[3, 4], [6, 4]],
  eyeColor: 0x2a1a10,
  smile: [[4, 7], [5, 7]],
  tear: [3, 5],
  arms: { color: FUR, down: [[1, 9], [8, 9]], up: [[0, 7], [9, 7]] },
  feet: { color: EAR, at: [3, 6] },
  captions: { idle: 'HELLO', happy: 'YAY!' },
  critters: {
    // Blathers, the brown owl curator, half asleep.
    Explore: { rows: ['.#....#.', '.######.', '.#ww#ww.', '..#oo#..'], eye: 2, eyes: [2, 5], colors: { '#': 0x9a6a3a, w: 0xf2ead8, o: 0xf2a02a }, tint: 0x9a6a3a },
    // Tom Nook, the raccoon with his business plans.
    Plan: { rows: ['#......#', '.######.', '.kk##kk.', '..wwww..'], eye: 2, eyes: [1, 6], eyeColor: 0x1a1a1a, colors: { '#': 0x8a6a4a, k: 0x4a3a2a, w: 0xf0e4c8 }, tint: 0x8a6a4a },
    // A little Isabelle: yellow, red bell, floppy ears.
    fork: { rows: ['...R....', '.######.', 'e##cc##e', '..gwwg..'], eye: 1, colors: { '#': FUR, R: 0xe0303a, e: EAR, c: CREAM, g: GREEN, w: 0xf6f6f2 }, tint: FUR },
    // K.K. Slider: the white dog with his guitar.
    'general-purpose': { rows: ['k######k', 'k######k', '..####b.', '..#--bb.'], eye: 1, colors: { '#': 0xf2f2ec, k: 0x6a6a6a, b: 0xb07a3a }, tint: 0xb07a3a },
    // A Gyroid: a clay bobbing figure with round eyes.
    other: { rows: ['...##...', '..####..', '.#-##-#.', '########'], eye: 2, arms: false, feet: false, colors: { '#': 0xc08a5a }, tint: 0xc08a5a },
  },
}
