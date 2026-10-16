import type { SkinLook } from './types'

const HULL = 0xc8ced6
const SHADE = 0x838a94
const TRENCH = 0x5e646c
const GLOW = 0x4aa8ff

// An Imperial Star Destroyer: a grey arrowhead tapering to a point, the
// command tower with its two shield domes, blue engines at the base.
export const look: SkinLook = {
  said: 'Buddy commands a Star Destroyer.',
  group: 'Sci-fi ships',
  rows: [
    '...o..o...',
    '..LLLRRR..',
    '....LR....',
    '...LkkR...',
    '..LLkkRR..',
    '..LLkkRR..',
    '.LLLkkRRR.',
    '.LLLkkRRR.',
    'LLLLkkRRRR',
    'LdLLkkRRdR',
  ],
  colors: { L: HULL, R: SHADE, k: TRENCH, d: 0x4a5058, o: 0x9fb4cc },
  eyes: [[2, 6], [7, 6]],
  eyeColor: 0x2a3a60,
  smile: [[1, 8], [8, 8]],
  smileColor: 0x8ac8ff,
  tear: [2, 4],
  feet: { color: GLOW, at: [1, 2, 3, 6, 7, 8] },
  captions: { happy: 'ORDER', idle: 'HUM' },
  critters: {
    // A probe droid pod.
    Explore: { rows: ['.k.##.k.', '..####..', '.######.', 'k.k..k.k'], eye: 2, feet: false, colors: { '#': 0x7a8088, k: 0x3a3f46 }, tint: 0x7a8088 },
    // An officer's rank badge.
    Plan: { rows: ['########', '#rrbbyy#', '#rrbbyy#', '########'], eye: 1, feet: false, arms: false, colors: { '#': 0x8890a0, r: 0xc85050, b: 0x4a7ac8, y: 0xd9c050 }, tint: 0xc85050 },
    // A Lambda shuttle.
    fork: { rows: ['...##...', '...##...', '.######.', '#..##..#'], eye: 2, feet: false, colors: { '#': 0xa8aeb8 }, tint: 0xa8aeb8 },
    // A pair of stormtrooper helmets.
    'general-purpose': { rows: ['.##..##.', '########', '#kk##kk#', '.##..##.'], eye: 1, eyeColor: 0x20242c, feet: false, colors: { '#': 0xe0e4e8, k: 0x20242c }, tint: 0xe0e4e8 },
    // A tractor beam.
    other: { rows: ['.######.', '..#--#..', '...##...', '..-##-..'], eye: 1, feet: false, arms: false, colors: { '#': 0x4acf8a }, tint: 0x4acf8a },
  },
}
