import type { SkinLook } from './types'

const SKIN = 0xbcb88e
const LIT = 0xdedab8
const EDGE = 0x7a7656
const EYE = 0xb8e2f0

// Gollum, once Sméagol: a bald pale head with a few lank strands of hair,
// pointed ears, huge pale-blue eyes, a gap-toothed grin, a bony body and a
// ragged loincloth.
export const look: SkinLook = {
  said: 'Buddy creeps out of the dark: gollum, gollum, my precious.',
  group: 'Fantasy',
  rows: [
    '...k..k...',
    '..hhsssd..',
    'dhhsssssdd',
    '.seessees.',
    '.seessees.',
    '..ssddss..',
    '..swswsd..',
    '...dssd...',
    '..dssssd..',
    '..dbbbbd..',
    '...bdbb...',
  ],
  colors: { s: SKIN, h: LIT, d: EDGE, e: EYE, k: 0x3a3a30, b: 0x5a4a32, w: 0xe8e4c8 },
  eyes: [[3, 4], [6, 4]],
  eyeColor: 0x1a2a30,
  smile: [[3, 6], [5, 6]],
  tear: [2, 5],
  arms: { color: SKIN, down: [[1, 9], [8, 8]], up: [[1, 6], [8, 6]] },
  feet: { color: EDGE, at: [3, 6] },
  captions: { idle: 'GOLLUM', happy: 'PRECIOUS' },
  critters: {
    // A raw wriggling fish, fresh from the pool.
    Explore: { rows: ['..###..t', '.#####tt', '.#####tt', '..-##..t'], eye: 1, feet: false, arms: false, colors: { '#': 0x6fa8c8, t: 0x3e7a9a }, tint: 0x6fa8c8 },
    // The One Ring: his precious.
    Plan: { rows: ['..####..', '.#-..-#.', '.#....#.', '..####..'], eye: 2, eyes: [1, 6], feet: false, arms: false, colors: { '#': 0xe8b830 }, tint: 0xe8b830 },
    // A little Sméagol: big eyes, bony.
    fork: { rows: ['..####..', '-ee##ee-', '.######.', '..-##-..'], eye: 1, colors: { '#': SKIN, e: EYE }, tint: SKIN },
    // A Moria goblin: grey-green, red eyes, dark armour.
    'general-purpose': { rows: ['..####..', '-######-', '.#kwwk#.', '..k..k..'], eye: 1, eyeColor: 0xe03020, colors: { '#': 0x6a7a4a, k: 0x3a3028, w: 0xe8e0c0 }, tint: 0x8a9a5a },
    // Shelob, the great spider of Cirith Ungol.
    other: { rows: ['l.####.l', 'l######l', '.######.', 'l.-..-.l'], eye: 1, eyeColor: 0xd8ff6a, feet: false, arms: false, colors: { '#': 0x4a4054, l: 0x8a7a9a }, tint: 0x8a7a9a },
  },
}
