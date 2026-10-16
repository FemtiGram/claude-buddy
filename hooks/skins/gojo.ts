import type { SkinLook } from './types'

const HAIR = 0xe8ecf2
const SHADE = 0xb8c2d2
const SKIN = 0xf5cfa0
const NAVY = 0x3a4062
const GLOW = 0x4ab0ff

// Gojo Satoru: spiky white hair, black blindfold with his blue eyes peeking,
// tall navy high-collared uniform, blue cursed energy.
export const look: SkinLook = {
  said: 'Buddy turns into Gojo.',
  group: 'Anime',
  rows: [
    '..w.ww.w..',
    '.wwwwwwww.',
    '.wvwwwwvw.',
    '.nnnnnnnn.',
    '.ssssssss.',
    '..ssssss..',
    '.nnnnnnnn.',
    '.nnnnnnnn.',
    '.nnnccnnn.',
    '..nn..nn..',
  ],
  colors: { w: HAIR, v: SHADE, n: NAVY, s: SKIN, c: GLOW },
  eyes: [[3, 3], [6, 3]],
  eyeColor: GLOW,
  smile: [[4, 5], [5, 5]],
  tear: [3, 4],
  arms: { color: SKIN, down: [[0, 7], [9, 7]], up: [[0, 5], [9, 5]] },
  feet: { color: 0x5a6290, at: [3, 6] },
  captions: { happy: 'STRONG', idle: 'YO' },
  critters: {
    // Itadori: pink hair, red hoodie.
    Explore: { rows: ['.######.', '########', '.ssssss.', '..rrrr..'], eye: 2, colors: { '#': 0xf0a0b8, s: 0xf5cfa0, r: 0xc8302c }, tint: 0xf0a0b8 },
    // Megumi's divine dog: black and white.
    Plan: { rows: ['k.#..#.k', '.######.', '.#kkkk#.', '..#--#..'], eye: 1, colors: { '#': 0xe8ecf2, k: 0x3a3e50 }, tint: 0x3a3e50 },
    // Nobara's nail doll.
    fork: { rows: ['...nn...', '.######.', '..####..', '..#..#..'], eye: 1, colors: { '#': 0xc8a070, n: 0x8a8f9c }, tint: 0xc8a070 },
    // Infinity: a blue orb.
    'general-purpose': { rows: ['..####..', '.#wwww#.', '.#wwww#.', '..####..'], eye: 1, feet: false, arms: false, colors: { '#': 0x4ab0ff, w: 0xa8dcff }, tint: 0x4ab0ff },
    // Kikufuku mochi.
    other: { rows: ['...g....', '.######.', '########', '.######.'], eye: 2, feet: false, arms: false, colors: { '#': 0xf0c8d0, g: 0x5aa860 }, tint: 0xf0c8d0 },
  },
}
