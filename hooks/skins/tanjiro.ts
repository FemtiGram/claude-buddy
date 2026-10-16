import type { SkinLook } from './types'

const HAIR = 0x6a3434
const SKIN = 0xf5cfa0
const SCAR = 0xd03030
const GREEN = 0x2e8a5a
const BLACK = 0x34343c
const EAR = 0xe4e4ec

// Tanjiro Kamado: dark red-black hair, the scar on his forehead, hanafuda
// earrings, a kind face, the green-and-black checkered haori over his uniform.
export const look: SkinLook = {
  said: 'Buddy turns into Tanjiro.',
  group: 'Anime',
  rows: [
    '...hhhh...',
    '..hhhhhh..',
    '.hhhhhhhh.',
    '.hhsrsshh.',
    '.hssssssh.',
    'esssssssse',
    '..ssssss..',
    '.gkgkgkgk.',
    '.kgkgkgkg.',
    '.gkgkgkgk.',
    '..uuuuuu..',
  ],
  colors: { h: HAIR, s: SKIN, r: SCAR, g: GREEN, k: BLACK, u: BLACK, e: EAR },
  eyes: [[3, 4], [6, 4]],
  eyeColor: 0x7a2a2a,
  smile: [[4, 6], [5, 6]],
  tear: [3, 5],
  arms: { color: SKIN, down: [[0, 8], [9, 8]], up: [[0, 6], [9, 6]] },
  feet: { color: BLACK, at: [3, 6] },
  captions: { happy: 'SLICE!', idle: 'HMM' },
  critters: {
    // Kasugai crow, his messenger.
    Explore: { rows: ['..####..', '.######.', '#.#yy#.#', '..y..y..'], eye: 1, colors: { '#': 0x4a5070, y: 0xe0a030 }, tint: 0x4a5070 },
    // Urokodaki's red tengu mask with its long nose and white hair.
    Plan: { rows: ['w.####.w', 'w######w', '.##rr##.', '...rr...'], eye: 1, colors: { '#': 0xc8403c, r: 0x982828, w: 0xe4e4ec }, tint: 0xc8403c },
    // Nezuko's wooden bamboo box.
    fork: { rows: ['.bbbbbb.', '########', '#b####b#', '########'], eye: 1, colors: { '#': 0xa8743c, b: 0x6a4a28 }, tint: 0xa8743c },
    // Zenitsu: yellow hair, orange haori.
    'general-purpose': { rows: ['..####..', '.######.', '.ssssss.', '..oooo..'], eye: 2, colors: { '#': 0xf0c830, s: SKIN, o: 0xe09030 }, tint: 0xf0c830 },
    // Inosuke's boar mask with its tusks.
    other: { rows: ['.##..##.', '.######.', '########', '..w..w..'], eye: 1, colors: { '#': 0x7080a0, w: 0xe4e4ec }, tint: 0x7080a0 },
  },
}
