import type { SkinLook } from './types'

const HAIR = 0xf07a2a
const SKIN = 0xf2c8a0
const BROW = 0x5a3220
const ROBE = 0x2e2e3a
const LIGHT = 0x4a4a5a
const COLLAR = 0xe8e8ee
const BLADE = 0xc0c6d0
const HILT = 0x6a5440

// Ichigo Kurosaki: spiky orange hair, a scowl, black shihakusho over a white
// collar, and Zangetsu, the huge cleaver, at his side.
export const look: SkinLook = {
  said: 'Buddy turns into Ichigo.',
  group: 'Anime',
  rows: [
    '..o.oo.o..',
    '.oooooooo.',
    'bosksskso.',
    'bosssssso.',
    'bosssssso.',
    'b.wwkkww..',
    'bkkkkkkkk.',
    'hkklkklkk.',
    '.kkkkkkk..',
  ],
  colors: { o: HAIR, s: SKIN, k: ROBE, l: LIGHT, w: COLLAR, b: BLADE, h: HILT, d: BROW },
  eyes: [[3, 3], [6, 3]],
  smile: [[4, 4], [5, 4]],
  tear: [3, 4],
  arms: { color: SKIN, down: [[9, 7]], up: [[9, 5]] },
  feet: { color: ROBE, at: [3, 6] },
  captions: { happy: 'TENSHO', idle: 'TCH' },
  critters: {
    // Kon: the lion plush, tan with a brown mane.
    Explore: { rows: ['.mm##mm.', 'm######m', 'm######m', '..#--#..'], eye: 1, colors: { '#': 0xe0a848, m: 0xb86a2a }, tint: 0xe0a848 },
    // Rukia: small, black hair, white kimono.
    Plan: { rows: ['..####..', '.#ssss#.', '.#ssss#.', '..wwww..'], eye: 1, colors: { '#': 0x4a4a5e, s: 0xf2d8c0, w: 0xe8e8ee }, tint: 0x6a6a82 },
    // A Hollow mask: white, red stripes.
    fork: { rows: ['.######.', '#r#rr#r#', '#r####r#', '.##..##.'], eye: 1, colors: { '#': 0xe8e8ee, r: 0xd04848 }, tint: 0xe8e8ee },
    // Urahara's striped green-white hat.
    'general-purpose': { rows: ['..#w#w..', '.#w#w#w.', '#w#w#w#w', '..ssss..'], eye: 3, colors: { '#': 0x5fa860, w: 0xe8e8ee, s: 0xf2c8a0 }, tint: 0x5fa860 },
    // The soul candy dispenser: a yellow duck.
    other: { rows: ['..###...', '.#####oo', '.#######', '..#--#..'], eye: 1, eyes: [3], colors: { '#': 0xf0d030, o: 0xe88830 }, tint: 0xf0d030 },
  },
}
