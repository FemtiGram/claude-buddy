import type { SkinLook } from './types'

const COWL = 0x3a3e4e
const EDGE = 0x5a6074
const SKIN = 0xd8a888
const SUIT = 0x7a8090
const YELLOW = 0xe8c83a
const BLACK = 0x2c2c38
const CAPE = 0x2e3242

// Batman: grey-blue cowl with pointed ears and pale eye slits, a frowning jaw,
// a grey suit with the bat on a yellow oval, a long dark cape, a yellow belt.
export const look: SkinLook = {
  said: "Buddy turns into Batman. I'm Batman.",
  group: 'DC',
  rows: [
    '.E......E.',
    '.cc....cc.',
    '.EccccccE.',
    '.EccccccE.',
    '.cssmmssc.',
    '.pgggggp..',
    '.pgyyyygp.',
    '.pgykkygp.',
    '.pggyyggp.',
    '.pyyyyyyp.',
    '..gg..gg..',
  ],
  colors: { E: EDGE, c: COWL, s: SKIN, m: 0x9a6a50, g: SUIT, y: YELLOW, k: BLACK, p: CAPE },
  eyes: [[3, 3], [6, 3]],
  eyeColor: 0xf0eeea,
  smile: [[3, 4], [6, 4]],
  tear: [2, 4],
  arms: { color: COWL, down: [[0, 7], [9, 7]], up: [[0, 5], [9, 5]] },
  feet: { color: COWL, at: [3, 6] },
  captions: { happy: 'NIGHT', idle: 'BROOD' },
  critters: {
    // A Batarang.
    Explore: { rows: ['........', '#..##..#', '.######.', '..#..#..'], eye: 2, feet: false, arms: false, colors: { '#': 0x4a4e60 }, tint: 0x5a6074 },
    // Alfred: bald, bow tie.
    Plan: { rows: ['..wwww..', '.######.', '.######.', '..r##r..'], eye: 1, colors: { '#': 0xd8a888, w: 0xe0e0e8, r: 0xc8282e }, tint: 0xd8a888 },
    // A tiny bat.
    fork: { rows: ['#......#', '########', '########', '.#.##.#.'], eye: 1, eyeColor: 0xe8c83a, feet: false, colors: { '#': 0x3e4258 }, tint: 0x5a6074 },
    // The Batmobile.
    'general-purpose': { rows: ['.#####..', '########', '########', '.yo..oy.'], eye: 0, eyes: [], feet: false, arms: false, colors: { '#': 0x3a3e4e, y: 0xe8c83a, o: 0x7a8090 }, tint: 0x5a6074 },
    // The Bat-Signal.
    other: { rows: ['..y##y..', '.y####y.', '.######.', '..####..'], eye: 1, eyeColor: 0x2c2c38, feet: false, arms: false, colors: { '#': 0xe8c83a, y: 0xf0e090 }, tint: 0xe8c83a },
  },
}
