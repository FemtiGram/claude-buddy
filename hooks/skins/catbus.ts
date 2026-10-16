import type { SkinLook } from './types'

const FUR = 0xe0a040
const FUR_LIT = 0xffd080
const STRIPE = 0x8a5428
const GLOW = 0xfff070
const TEETH = 0xf8f4e8
const MOUTH = 0x4a2418

// The Catbus from My Neighbor Totoro: a golden tabby with stripes on its brow,
// headlight eyes glowing yellow and the enormous, toothy grin. Many legs.
export const look: SkinLook = {
  said: 'Buddy grins from ear to ear: the Catbus pulls up!',
  group: 'Ghibli',
  rows: [
    '.o......o.',
    '.hoo..ooo.',
    'hododdodoo',
    'oyyooooyyo',
    'oyyoppoyyo',
    'kwwwwwwwwk',
    'okwwwwwwko',
    'ookkkkkkoo',
    '.dooooood.',
  ],
  colors: { o: FUR, h: FUR_LIT, d: STRIPE, y: GLOW, w: TEETH, k: MOUTH, p: 0xd06a6a },
  eyes: [[2, 3], [7, 3]],
  eyeColor: 0x3a2a10,
  smile: [[0, 4], [9, 4]],
  tear: [2, 4],
  feet: { color: STRIPE, at: [1, 3, 6, 8] },
  captions: { idle: 'PURR', happy: 'MEOW!' },
  critters: {
    // Big Totoro: grey, pointed ears, the pale chevron belly.
    Explore: { rows: ['.#....#.', '.######.', '#w-ww-w#', '#ww--ww#'], eye: 1, colors: { '#': 0x7a8296, w: 0xe8e0c8 }, tint: 0x9aa2b6 },
    // Chu Totoro, the middle-sized blue one.
    Plan: { rows: ['..#..#..', '..####..', '.######.', '.##ww##.'], eye: 2, colors: { '#': 0x5a8ad8, w: 0xd8e4f4 }, tint: 0x5a8ad8 },
    // A kitten catbus: grin, stripes, legs.
    fork: { rows: ['#......#', '########', '#kwwwwk#', '.-.-.-.-'], eye: 1, eyeColor: 0xfff070, feet: false, colors: { '#': FUR, k: MOUTH, w: TEETH }, tint: FUR },
    // Chibi Totoro, the little white one, with a sack of acorns.
    'general-purpose': { rows: ['..#..#..', '..####..', '..####.b', '..####bb'], eye: 2, colors: { '#': 0xe8e8f0, b: 0x9a6a3a }, tint: 0xe8e8f0 },
    // Mei, pigtails up, in her pink dress.
    other: { rows: ['h.####.h', 'h#ssss#h', '..ssss..', '.pppppp.'], eye: 2, colors: { '#': 0x6a4428, h: 0xe0607a, s: 0xf2c49a, p: 0xf090b0 }, tint: 0xf090b0 },
  },
}
