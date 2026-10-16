import type { SkinLook } from './types'

const PURPLE = 0x7a4cc8
const LILAC = 0xa98ae6
const SKIN = 0xf2c49a
const WHITE = 0xd4d8e0
const GREEN = 0x5cc85a
const RED = 0xe0342b

// Buzz Lightyear, Space Ranger: a purple cowl around his face, thick brown
// brows, a green collar ring, white suit with the red/green/blue chest
// buttons, and his purple wings popped out with red tips.
export const look: SkinLook = {
  said: 'Buddy pops his wings: Buzz Lightyear, to the rescue!',
  group: 'Pixar & Disney',
  rows: [
    '...Lppp...',
    '..Lppppp..',
    '.ppbssbpp.',
    '.pssssssp.',
    '.pssssssp.',
    '..pssssp..',
    'rpggggggpr',
    '.wwwrgbww.',
    '.wwwwwwww.',
    '..pggggp..',
    '..ww..ww..',
  ],
  colors: { p: PURPLE, L: LILAC, b: 0x5a3418, s: SKIN, g: GREEN, w: WHITE, r: RED, G: 0x2f9a3a, B: 0x3a6fd8 },
  eyes: [[3, 3], [6, 3]],
  eyeColor: 0x3a2a6a,
  smile: [[3, 4], [4, 5], [5, 5], [6, 4]],
  tear: [2, 4],
  arms: { color: WHITE, down: [[0, 8], [9, 8]], up: [[0, 5], [9, 5]] },
  feet: { color: PURPLE, at: [3, 6] },
  captions: { idle: 'INFINITY', happy: 'BEYOND!' },
  critters: {
    // A Little Green Man from Pizza Planet: three eyes and an antenna.
    Explore: { rows: ['....#...', '.#######', '.#######', '..bbbbb.'], eye: 1, eyes: [2, 4, 6], colors: { '#': 0x9be05a, b: 0x4a7ad8 }, tint: 0x9be05a },
    // Emperor Zurg: horned purple helmet, red eyes, grey grille.
    Plan: { rows: ['#......#', '##.##.##', '.######.', '.kkkkkk.'], eye: 2, eyeColor: 0xff3a3a, colors: { '#': 0x6a48b8, k: 0x9a9aa8 }, tint: 0x8a5ad8 },
    // A mini Buzz: purple hood, white suit, chest buttons.
    fork: { rows: ['..####..', '.#ssss#.', '.wwrgbw.', '..gwwg..'], eye: 1, colors: { '#': PURPLE, s: SKIN, w: WHITE, r: RED, g: GREEN, b: 0x3a6fd8 }, tint: PURPLE },
    // Rex: a green dino with purple back spikes and a toothy grin.
    'general-purpose': { rows: ['..p####.', '..######', '.####www', '.##..##.'], eye: 1, eyes: [3, 6], colors: { '#': 0x58a84e, p: 0x8a5ad8, w: 0xf0f0e0 }, tint: 0x58a84e },
    // Hamm: the pink piggy bank, coin slot on top.
    other: { rows: ['.#.kk.#.', '.######.', '.##nn##.', '.-####-.'], eye: 1, colors: { '#': 0xf0a0b0, k: 0x3a2a2a, n: 0xd06a80 }, tint: 0xf0a0b0 },
  },
}
