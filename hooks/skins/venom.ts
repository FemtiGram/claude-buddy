import type { SkinLook } from './types'

const BODY = 0x2e2e3e
const SHEEN = 0x5a5e78
const WHITE = 0xf0f0ec
const TONGUE = 0xd0507a

// Venom, cute-creepy: a glossy black symbiote rimmed all round in blue-grey
// light, huge jagged white eyes, a toothy grin that lolls a pink tongue when
// happy, a white spider on the chest and drippy tendrils at the sides.
export const look: SkinLook = {
  said: 'Buddy turns into Venom. We are Venom.',
  group: 'Marvel',
  rows: [
    '..........',
    '...SSSS...',
    '..SSBBBS..',
    '.SWWBBWWS.',
    'SWWWBBWWWS',
    'SBBBBBBBBS',
    'SBWWWWWWBS',
    'SBMMMMMMBS',
    '..SBWWBS..',
    'SBWBWWBWBS',
    'S.BWBBWB.S',
  ],
  colors: { B: BODY, S: SHEEN, W: WHITE, M: 0x4a1a2e },
  eyes: [[3, 4], [6, 4]],
  eyeColor: 0x14141c,
  smile: [[4, 7], [5, 7]],
  smileColor: TONGUE,
  tear: [3, 5],
  arms: {
    color: SHEEN,
    down: [[0, 8], [9, 8]],
    up: [[0, 3], [9, 3]],
  },
  feet: { color: 0x3e3e52, at: [3, 6] },
  captions: { idle: 'HUNGRY', happy: 'TOTS!' },
  critters: {
    // A symbiote drop with white eyes.
    Explore: { rows: ['...##...', '..####..', '.######.', '.######.'], eye: 2, eyeColor: WHITE, arms: false, feet: false, colors: { '#': 0x3e3e58 }, tint: SHEEN },
    // Eddie Brock's motorbike helmet, visor down.
    Plan: { rows: ['..####..', '.######.', '.vvvvvv.', '########'], eye: 2, eyeColor: WHITE, colors: { '#': 0x4a6aa8, v: 0x2a3858 }, tint: 0x4a6aa8 },
    // A tiny symbiote with a toothy grin.
    fork: { rows: ['........', '..####..', '.######.', '.#WWWW#.'], eye: 1, eyeColor: WHITE, colors: { '#': 0x3e3e58, W: WHITE }, tint: SHEEN },
    // Carnage, in red.
    'general-purpose': { rows: ['.#.##.#.', '.######.', '.######.', '..#WW#..'], eye: 1, eyeColor: WHITE, colors: { '#': 0xc8283c, W: WHITE }, tint: 0xc8283c },
    // A basket of tater tots.
    other: { rows: ['.tt.tt..', '.tttttt.', '########', '.######.'], eye: 2, arms: false, feet: false, colors: { '#': 0xa0703a, t: 0xd8a24a }, tint: 0xd8a24a },
  },
}
