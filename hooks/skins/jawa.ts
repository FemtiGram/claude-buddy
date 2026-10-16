import type { SkinLook } from './types'

const ROBE = 0x8a6a48
const LIGHT = 0xa8865e
const DARK = 0x5e462e
const FACE = 0x2e2620
const GLOW = 0xffc23a
const LEATHER = 0x4a3524

// A Jawa of Tatooine: a brown hooded robe with a pointed hood, a deep shadow
// for a face with two glowing yellow eyes, dark leather bandoliers, small boots.
export const look: SkinLook = {
  said: 'Buddy turns into a Jawa. Utini!',
  group: 'Star Wars',
  rows: [
    '....##....',
    '...l###...',
    '..#l##d#..',
    '.#ffffff#.',
    '.#ffffff#.',
    '.#dffffd#.',
    '.#b#l##b#.',
    '.#lb##b##.',
    '.dp#bb#pd.',
    '.dddddddd.',
  ],
  colors: { '#': ROBE, l: LIGHT, d: DARK, f: FACE, b: LEATHER, p: 0x6a5238 },
  eyes: [[3, 3], [6, 3]],
  eyeColor: GLOW,
  smile: [[4, 5], [5, 5]],
  tear: [3, 4],
  arms: {
    color: 0x3a2e24,
    down: [[0, 6], [0, 7], [9, 6], [9, 7]],
    up: [[0, 3], [0, 4], [9, 3], [9, 4]],
  },
  feet: { color: 0x3a2e24, at: [3, 6] },
  captions: { idle: 'UTINI', happy: 'UTINI!' },
  critters: {
    // A sandcrawler: a rusty fortress on tracks with a glowing window.
    Explore: { rows: ['..####..', '.#WWWW#.', '########', 'TTTTTTTT'], eye: 1, eyes: [3, 4], eyeColor: GLOW, feet: false, arms: false, colors: { '#': 0x9a6a42, W: 0x6a4a30, T: 0x3a2e24 }, tint: 0x9a6a42 },
    // A scrap pile with a gear on top.
    Plan: { rows: ['...GG...', '..GoOG..', '.##G###.', '########'], eye: 1, eyes: [3, 4], eyeColor: 0x4a3524, feet: false, arms: false, colors: { '#': 0x8a7a68, G: 0x6f7c88, O: 0x4a3524, o: 0xb0763c }, tint: 0x6f7c88 },
    // A mini Jawa.
    fork: { rows: ['...##...', '..####..', '..#ff#..', '..####..'], eye: 2, eyes: [3, 4], eyeColor: GLOW, colors: { '#': ROBE, f: FACE }, tint: ROBE },
    // A small ion blaster.
    'general-purpose': { rows: ['........', '.###....', '.##bbbbb', '.#b.....'], eye: 1, eyes: [2, 3], eyeColor: 0x5ab8e8, arms: false, feet: false, colors: { '#': 0x6f7c88, b: 0x4a3524 }, tint: 0x6f7c88 },
    // A dewback: a green lizard beast with a long head.
    other: { rows: ['.....###', '.######.', '########', '.#.#.#.#'], eye: 0, eyes: [5, 6], eyeColor: 0x2e2620, arms: false, feet: false, colors: { '#': 0x6a9060 }, tint: 0x6a9060 },
  },
}
