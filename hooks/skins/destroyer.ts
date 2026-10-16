import type { SkinLook } from './types'

const HULL = 0xb8bec6
const SHADE = 0x7e858e
const GLOW = 0x4aa8ff

// An Imperial Star Destroyer: a grey arrowhead tapering to a point, the
// command tower with its two shield domes, blue engines at the base.
export const look: SkinLook = {
  said: 'Buddy commands a Star Destroyer.',
  group: 'Sci-fi ships',
  rows: [
    '....gg....',
    '...gggg...',
    '...gddg...',
    '..gggggg..',
    '..gdggdg..',
    '.gggttggg.',
    '.ggDttDgg.',
    'gggggggggg',
    'gdgdggdgdg',
  ],
  colors: { g: HULL, d: SHADE, t: 0x9aa4b0, D: 0xd0d8e0 },
  eyes: [[3, 6], [6, 6]],
  eyeColor: 0x4a6a9a,
  smile: [[4, 8], [5, 8]],
  tear: [2, 7],
  feet: { color: GLOW, at: [2, 4, 5, 7] },
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
