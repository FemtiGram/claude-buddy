import type { SkinLook } from './types'

const SKIN = 0xb4b89c
const LIT = 0xd4d8c0
const EDGE = 0x6a7058
const EYE = 0xc8eef8

// Gollum, once Sméagol: a bald, sickly grey-green head with a few lank
// strands of hair, pointed ears, huge pale-blue eyes, a gap-toothed grin, a
// starved ribby body on a thin neck and a ragged loincloth.
export const look: SkinLook = {
  said: 'Buddy creeps out of the dark: gollum, gollum, my precious.',
  group: 'Fantasy',
  rows: [
    '...k.k.k..',
    '..hhsssd..',
    '.hhsssssd.',
    'dseesseesd',
    '.seesseesd',
    '..ssssssd.',
    '..dwswsd..',
    '....sd....',
    '..srsrsd..',
    '...bbbb...',
    '...b.bb...',
  ],
  colors: { s: SKIN, h: LIT, d: EDGE, e: EYE, k: 0x4a4c3c, r: 0x868a70, b: 0x6e5a3a, w: 0xd8d4b0 },
  eyes: [[3, 4], [6, 4]],
  eyeColor: 0x101818,
  smile: [[3, 6], [5, 6]],
  tear: [2, 5],
  arms: { color: SKIN, down: [[1, 9], [8, 9]], up: [[1, 7], [8, 7]] },
  feet: { color: EDGE, at: [3, 6] },
  captions: { idle: 'GOLLUM', happy: 'PRECIOUS' },
  critters: {
    // A raw wriggling fish, fresh from the pool.
    Explore: { rows: ['..###..t', '.#####tt', '.#####tt', '..-##..t'], eye: 1, feet: false, arms: false, colors: { '#': 0x6fa8c8, t: 0x3e7a9a }, tint: 0x6fa8c8 },
    // The One Ring: his precious.
    Plan: { rows: ['..####..', '.#-..-#.', '.#....#.', '..####..'], eye: 2, eyes: [1, 6], feet: false, arms: false, colors: { '#': 0xe8b830 }, tint: 0xe8b830 },
    // A little Sméagol: pointed ears, huge pale eyes, bony.
    fork: { rows: ['..#..#..', 'dee##eed', '.######.', '..-##-..'], eye: 1, eyes: [2, 5], colors: { '#': SKIN, e: EYE, d: EDGE }, tint: SKIN },
    // A Moria goblin: grey-green, red eyes, dark armour.
    'general-purpose': { rows: ['..####..', '-######-', '.#kwwk#.', '..k..k..'], eye: 1, eyeColor: 0xe03020, colors: { '#': 0x6a7a4a, k: 0x3a3028, w: 0xe8e0c0 }, tint: 0x8a9a5a },
    // Shelob, the great spider of Cirith Ungol.
    other: { rows: ['l.####.l', 'l######l', '.######.', 'l.-..-.l'], eye: 1, eyeColor: 0xd8ff6a, feet: false, arms: false, colors: { '#': 0x4a4054, l: 0x8a7a9a }, tint: 0x8a7a9a },
  },
}
