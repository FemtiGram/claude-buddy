import type { SkinLook } from './types'

const HAIR = 0x3a3a46
const TIP = 0xe8703a
const SKIN = 0xf5d0b0
const PINK = 0xe890b0
const HAORI = 0x5a4658
const BAMBOO = 0xa8b060

// Nezuko Kamado: black hair with orange tips, a pink ribbon, pink eyes, the
// bamboo muzzle, a pink kimono under a dark haori.
export const look: SkinLook = {
  said: 'Buddy turns into Nezuko. Mmm!',
  group: 'Anime',
  rows: [
    '...kkkk...',
    '..kkkkpk..',
    '.kkkkkkkk.',
    '.kssssssk.',
    '.ksmmmmsk.',
    '.kddppddk.',
    '.oddppddo.',
    '.odppppdo.',
    '..dppppd..',
  ],
  colors: { k: HAIR, o: TIP, s: SKIN, p: PINK, d: HAORI, m: BAMBOO },
  eyes: [[3, 3], [6, 3]],
  eyeColor: 0xe0508a,
  smile: [[4, 4], [5, 4]],
  tear: [2, 3],
  arms: { color: SKIN, down: [[0, 7], [9, 7]], up: [[0, 5], [9, 5]] },
  feet: { color: SKIN, at: [3, 6] },
  captions: { happy: 'MMM!', idle: 'MMM' },
  critters: {
    // Shinobu's butterfly.
    Explore: { rows: ['##....##', '###bb###', '.##bb##.', '..#..#..'], eye: 1, eyes: [3, 4], feet: false, arms: false, colors: { '#': 0xb070d0, b: 0x3a3a46 }, tint: 0xb070d0 },
    // A hanging wisteria flower.
    Plan: { rows: ['..gggg..', '########', '.#-##-#.', '..#..#..'], eye: 1, colors: { '#': 0xa080d8, g: 0x4a9a5a }, tint: 0xa080d8 },
    // Mini Nezuko, box-size.
    fork: { rows: ['.kkkkkk.', 'kksssskk', '.k####k.', '..####..'], eye: 1, eyeColor: 0xe0508a, colors: { '#': PINK, k: HAIR, s: SKIN }, tint: PINK },
    // A sleepy cloud.
    'general-purpose': { rows: ['..##.##.', '.#######', '########', '.-####-.'], eye: 2, feet: false, arms: false, colors: { '#': 0xb8c4e0 }, tint: 0xb8c4e0 },
    // Blood demon art: pink flame.
    other: { rows: ['...#....', '..##.#..', '.######.', '.#-##-#.'], eye: 2, feet: false, arms: false, colors: { '#': 0xf070a0 }, tint: 0xf070a0 },
  },
}
