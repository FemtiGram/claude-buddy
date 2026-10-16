import type { SkinLook } from './types'

const FUR = 0x7a8aa4
const LIGHT = 0xaab8cc
const DARK = 0x4e5a70
const PINK = 0xf0a0b0
const NOSE = 0xe86a88

// Remy the rat chef: blue-grey fur with a paler belly, two big round pink
// ears, a pink nose with whiskers, and his long pink tail curling up behind.
export const look: SkinLook = {
  said: 'Buddy grabs a wooden spoon: anyone can cook, says Remy!',
  group: 'Pixar & Disney',
  rows: [
    '.dd....dd.',
    'dppd..dppd',
    'dppfffppd.',
    '.dhfffffd.',
    '.dhffffffd',
    '..fffffnn.',
    '..dffffd..',
    '..dlllfd..',
    '..dllllfd.',
    '..dfffffdp',
    '...dddddp.',
  ],
  colors: { f: FUR, h: LIGHT, l: 0xd4dce8, d: DARK, p: PINK, n: NOSE },
  eyes: [[4, 4], [6, 4]],
  eyeColor: 0x1a1a22,
  smile: [[3, 6], [6, 6]],
  tear: [4, 5],
  arms: { color: PINK, down: [[1, 8], [9, 8]], up: [[1, 6], [9, 6]] },
  feet: { color: PINK, at: [3, 6] },
  captions: { idle: 'SNIFF', happy: 'BON!' },
  critters: {
    // Emile, his round, always-hungry brother.
    Explore: { rows: ['.p....p.', '.######.', '########', '########'], eye: 1, colors: { '#': 0x8a7a6a, p: PINK }, tint: 0x8a7a6a },
    // Git, the white lab rat with the red tag in his ear.
    Plan: { rows: ['.p....r.', '.######.', '.######.', '..-##-..'], eye: 1, colors: { '#': 0xeeeef2, p: PINK, r: 0xd83030 }, tint: 0xd83030 },
    // A mini Remy: pink ears, pink nose.
    fork: { rows: ['pp....pp', 'p######p', '.##pp##.', '..-##-..'], eye: 1, colors: { '#': FUR, p: PINK }, tint: FUR },
    // Django, his big dark-grey father.
    'general-purpose': { rows: ['.##..##.', '########', '#-####-#', '.######.'], eye: 1, colors: { '#': 0x5e5e6a }, tint: 0x5e5e6a },
    // The mushroom he roasts in the lightning storm.
    other: { rows: ['..####..', '.######.', '..cccc..', '..cccc..'], eye: 2, arms: false, feet: false, colors: { '#': 0x9a6a3a, c: 0xe8d8b8 }, tint: 0x9a6a3a },
  },
}
