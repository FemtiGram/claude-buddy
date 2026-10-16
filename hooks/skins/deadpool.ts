import type { SkinLook } from './types'

const RED = 0xb01e2a
const DARK = 0x7a1420
const PATCH = 0x2a2430
const BLACK = 0x3a3444

// Deadpool: red mask with big black eye patches around white eyes, a red-and-black
// suit, a belt with pouches, two katana hilts sticking up behind his shoulders.
export const look: SkinLook = {
  said: 'Buddy turns into Deadpool. Maximum effort!',
  group: 'Marvel',
  rows: [
    '.g......g.',
    '.k......k.',
    '..RRRRRR..',
    '.RRRRRRRR.',
    '.RKKRRKKR.',
    '.RKWRRWKR.',
    '..RRDDRR..',
    '.RRBRRBRR.',
    '.BBBgBBBB.',
    '.RRpRRpRR.',
  ],
  colors: { R: RED, D: DARK, K: PATCH, W: 0xffffff, B: BLACK, g: 0xb8bcc8, k: 0x5a5466, p: 0x8a5a3a },
  eyes: [[3, 5], [6, 5]],
  eyeColor: 0x2a2430,
  smile: [[4, 6], [5, 6]],
  tear: [3, 5],
  arms: {
    color: BLACK,
    down: [[0, 7], [0, 8], [9, 7], [9, 8]],
    up: [[0, 4], [0, 5], [9, 4], [9, 5]],
  },
  feet: { color: BLACK, at: [3, 6] },
  captions: { idle: 'BORED', happy: 'MAXIMUM' },
  critters: {
    // A chimichanga: golden wrapped burrito with salsa.
    Explore: { rows: ['..rr....', '.######.', '########', '.######.'], eye: 2, arms: false, feet: false, colors: { '#': 0xd8a24a, r: 0xc83a2a }, tint: 0xd8a24a },
    // A unicorn plush with a horn and a purple mane.
    Plan: { rows: ['.....y..', '.m###y#.', 'm#######', '.m#####.'], eye: 2, colors: { '#': 0xe88ab8, y: 0xf0d060, m: 0x9a6ac0 }, tint: 0xe88ab8 },
    // Kidpool: a mini masked head with eye patches and katana hilts.
    fork: { rows: ['.g....g.', '.######.', '.#KWWK#.', '..####..'], eye: 2, eyeColor: 0xffffff, colors: { '#': RED, K: PATCH, W: 0xffffff, g: 0xb8bcc8 }, tint: RED },
    // Dogpool: a tan dog in a red mask.
    'general-purpose': { rows: ['##.RR.##', '##RRRR##', '.######.', '..#kk#..'], eye: 1, colors: { '#': 0xc89a5a, R: RED, k: 0x4a3a30 }, tint: 0xc89a5a },
    // A taco.
    other: { rows: ['..gggg..', '.gGGrGg.', '########', '.######.'], eye: 2, arms: false, feet: false, colors: { '#': 0xe8c050, g: 0x6ab04a, G: 0x8ad05a, r: 0xc83a2a }, tint: 0xe8c050 },
  },
}
