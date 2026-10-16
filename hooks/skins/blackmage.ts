import type { SkinLook } from './types'

const HAT = 0xc8a84a
const BAND = 0xe8c33a
const SHADOW = 0x24243a
const ROBE = 0x2e4fa8

// The Black Mage of Final Fantasy: a straw hat pulled low over a shadow face
// with two glowing eyes, a blue robe and a staff.
export const look: SkinLook = {
  said: 'Buddy turns into a Black Mage.',
  group: 'Games',
  rows: [
    '....hh....',
    '...hhhh...',
    '.hhhhhhhh.',
    'hbbbbbbbbh',
    '..dddddd.o',
    '..dddddd.s',
    '..uuuuuu.s',
    '..uuuuuu.s',
    '.uuuuuuuus',
    '.uuuuuuuus',
  ],
  colors: { h: HAT, b: BAND, d: SHADOW, u: ROBE, o: 0x7ad0f0, s: 0x8a5a2e },
  eyes: [[3, 5], [6, 5]],
  eyeColor: 0xffd84a,
  tear: [4, 5],
  arms: { color: 0xe0b890, down: [[1, 7], [8, 6]], up: [[1, 5], [8, 5]] },
  feet: { color: 0x1c2c64, at: [3, 6] },
  captions: { happy: 'BOOM', idle: 'HM' },
  critters: {
    // Thief: green hood and a tan face.
    Explore: { rows: ['..gggg..', '.gg##gg.', '..####..', '.gg..gg.'], eye: 2, colors: { '#': 0xe0b890, g: 0x3a9a50 }, tint: 0x3a9a50 },
    // White Mage: white robe, red trim.
    Plan: { rows: ['..####..', '.#rrrr#.', '.######.', '.##rr##.'], eye: 2, colors: { '#': 0xe4e4ec, r: 0xe0342b }, tint: 0xe4e4ec },
    // Red Mage: red hat with a feather.
    fork: { rows: ['..####fw', '.######f', '.ssssss.', '..s..s..'], eye: 2, colors: { '#': 0xd0342c, s: 0xe0b890, f: 0xe8e0c0, w: 0xffffff }, tint: 0xd0342c },
    // Warrior: plumed helm, dark visor with glowing eyes.
    'general-purpose': { rows: ['..rrrr..', '.######.', '.#kkkk#.', '..####..'], eye: 2, eyeColor: 0xffe08a, colors: { '#': 0x9aa8b8, r: 0xd0342c, k: 0x30303c }, tint: 0x9aa8b8 },
    // Monk: bald head, orange gi, dark belt.
    other: { rows: ['..ssss..', '..ssss..', '.######.', '.##bb##.'], eye: 1, colors: { '#': 0xe8782c, s: 0xe0b890, b: 0x4a2a14 }, tint: 0xe8782c },
  },
}
