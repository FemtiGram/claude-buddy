import type { SkinLook } from './types'

const STRAW = 0xe8c860
const RED = 0xd8302c
const HAIR = 0x2a2a34
const SKIN = 0xf0c090

// Monkey D. Luffy: straw hat with its red band over messy black hair, a scar
// under the left eye, a huge grin, open red vest, blue shorts, sandals.
export const look: SkinLook = {
  said: "Buddy turns into Luffy. I'm gonna be king of the pirates!",
  group: 'Anime',
  rows: [
    '...hhhh...',
    '..hhhhhh..',
    'hhbbbbbbhh',
    '.kkkkkkkk.',
    '.kssssssk.',
    '.kscssssk.',
    '.ksttttsk.',
    '.rrrssrrr.',
    '.rrrssrrr.',
    '..vvvvvv..',
  ],
  colors: { h: STRAW, b: 0xd02a2c, k: HAIR, s: SKIN, c: 0xa05a40, t: 0xf0e8d8, r: RED, v: 0x2a5aa8 },
  eyes: [[3, 4], [6, 4]],
  smile: [[4, 6], [5, 6]],
  tear: [3, 4],
  arms: { color: SKIN, down: [[0, 8], [9, 8]], up: [[0, 5], [9, 5]] },
  feet: { color: 0xa8683c, at: [3, 6] },
  captions: { happy: 'SHISHI!', idle: 'HUNGRY' },
  critters: {
    // The Going Merry: white sail, sheep figurehead.
    Explore: { rows: ['...ww...', '..wwww..', 'ss####..', '.######.'], eye: 2, feet: false, colors: { '#': 0xc8803a, w: 0xe8e0d0, s: 0xf0f0e8 }, tint: 0xc8803a },
    // Nami's map: orange scroll with a red X.
    Plan: { rows: ['.######.', '########', '#-x##x-#', '.-####-.'], eye: 1, colors: { '#': 0xf09a30, x: 0xd02a2c }, tint: 0xf09a30 },
    // A mini straw hat.
    fork: { rows: ['..####..', '.######.', 'rrrrrrrr', '########'], eye: 1, colors: { '#': 0xe8c860, r: 0xd02a2c }, tint: 0xe8c860 },
    // Zoro: green hair, three swords.
    'general-purpose': { rows: ['.######.', '.ssssss.', 'w-kkkk-w', 'y.kkkk.y'], eye: 1, colors: { '#': 0x5aa848, s: 0xf0c090, w: 0xc0c8d4, y: 0xe8c860, k: 0x3a3a48 }, tint: 0x5aa848 },
    // Meat on the bone.
    other: { rows: ['b..##..b', 'bb####bb', '.######.', '..-##-..'], eye: 1, colors: { '#': 0xc8503a, b: 0xe8dcc0 }, tint: 0xc8503a },
  },
}
