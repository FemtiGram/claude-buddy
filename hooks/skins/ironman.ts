import type { SkinLook } from './types'

const RED = 0xb8222a
const GOLD = 0xe2b33c
const GLOW = 0x9af0ff
const CORE = 0xe8ffff

// Iron Man: red-and-gold armour, gold faceplate with glowing eye slits, a round
// arc reactor on the chest, repulsor glow on the palms and boots.
export const look: SkinLook = {
  said: 'Buddy suits up as Iron Man.',
  group: 'Marvel',
  rows: [
    '..rrrrrr..',
    '.rrrrrrrr.',
    '.rggggggr.',
    '.rggggggr.',
    '.rggggggr.',
    '..rggggr..',
    '.grrqqrrg.',
    '.grqwwqrg.',
    '.grrqqrrg.',
    '..gg..gg..',
  ],
  colors: { r: RED, g: GOLD, q: GLOW, w: CORE },
  eyes: [[3, 3], [6, 3]],
  eyeColor: GLOW,
  smile: [[4, 5], [5, 5]],
  tear: [2, 4],
  arms: { color: GLOW, down: [[0, 7], [9, 7]], up: [[0, 5], [9, 5]] },
  feet: { color: GLOW, at: [3, 6] },
  captions: { happy: 'GENIUS', idle: 'SUIT UP' },
  critters: {
    // J.A.R.V.I.S., a blue holo orb.
    Explore: { rows: ['..####..', '.######.', 'wwwwwwww', '..-##-..'], eye: 1, feet: false, arms: false, colors: { '#': 0x3a9ae0, w: GLOW }, tint: 0x3a9ae0 },
    // A repulsor gauntlet.
    Plan: { rows: ['#.#..#.#', '########', '.#rccr#.', '..####..'], eye: 1, feet: false, colors: { '#': GOLD, r: RED, c: GLOW }, tint: GOLD },
    // The Mark I helmet, grey and riveted.
    fork: { rows: ['.######.', '.#r##r#.', '.######.', '.#-##-#.'], eye: 2, eyeColor: 0x2a2a30, colors: { '#': 0x8a8f96, r: 0x5a5a62 }, tint: 0x8a8f96 },
    // War Machine, grey-silver with a shoulder gun.
    'general-purpose': { rows: ['..####kk', '.#kkkk#k', '########', '.#.##.#.'], eye: 1, eyeColor: GLOW, colors: { '#': 0xb8bcc4, k: 0x3a3e48 }, tint: 0xb8bcc4 },
    // A shawarma wrap.
    other: { rows: ['..####..', '.#gg#r#.', '.######.', '..-##-..'], eye: 2, feet: false, colors: { '#': 0xd9a860, g: 0x5aa84a, r: 0xc8402c }, tint: 0xd9a860 },
  },
}
