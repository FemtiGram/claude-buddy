import type { SkinLook } from './types'

const HAIR = 0x4b3220
const HAIR_HI = 0x7a5434
const SKIN = 0xb88560
const MOUTH = 0x6a3e2c
const SHIRT = 0x1fb0b0
const PANTS = 0x4848b0
const EYE = 0x4a3a8c

// Minecraft Steve: a blocky head with brown hair, white-and-blue eyes and a
// brown stubble mouth, the cyan T-shirt over blue jeans.
export const look: SkinLook = {
  said: 'Buddy spawns in as Steve. Time to mine.',
  group: 'Games',
  rows: [
    '..........',
    '.hHHhhhhh.',
    '.hhhhhhhh.',
    '.hssssssh.',
    '.swssssws.',
    '.sssnnsss.',
    '.ssmmmmss.',
    '..cccccc..',
    '..cccccc..',
    '..pppppp..',
    '..pp..pp..',
  ],
  colors: { h: HAIR, H: HAIR_HI, s: SKIN, w: 0xffffff, n: 0x9a6a4a, m: MOUTH, c: SHIRT, p: PANTS },
  eyes: [[3, 4], [6, 4]],
  eyeColor: EYE,
  smile: [[2, 6], [7, 6]],
  tear: [2, 5],
  arms: { color: SKIN, down: [[1, 8], [8, 8]], up: [[0, 6], [9, 6]] },
  feet: { color: 0x707070, at: [2, 3, 6, 7] },
  captions: { happy: 'DIAMONDS', idle: 'MINE' },
  critters: {
    // An Allay: a little blue spirit with pale wings.
    Explore: { rows: ['..####..', '.######.', 'w#-##-#w', '..####..'], eye: 1, feet: false, arms: false, colors: { '#': 0x6ad4f0, w: 0xd8f4ff }, tint: 0x6ad4f0 },
    // A tamed wolf with its red collar.
    Plan: { rows: ['.#....#.', '.######.', '.##kk##.', '.rrrrrr.'], eye: 1, colors: { '#': 0xd8d8d8, k: 0x2a2a2a, r: 0xd03030 }, tint: 0xd03030 },
    // A mini Steve.
    fork: { rows: ['.hhhhhh.', '.h####h.', '.w####w.', '.cccccc.'], eye: 2, eyeColor: EYE, colors: { '#': SKIN, h: HAIR, w: 0xffffff, c: SHIRT }, tint: SHIRT },
    // A sheep: white wool around a beige face.
    'general-purpose': { rows: ['.######.', '##gggg##', '.#gggg#.', '.######.'], eye: 1, colors: { '#': 0xeaeaea, g: 0xd9c4a8 }, tint: 0xb8b8b8 },
    // A zombie: green skin, dark hair, Steve's cyan shirt.
    other: { rows: ['.dddddd.', '.######.', '.######.', '.cccccc.'], eye: 1, eyeColor: 0x1a1a1a, colors: { '#': 0x5a8a3a, d: 0x2f4a20, c: SHIRT }, tint: 0x5a8a3a },
  },
}
