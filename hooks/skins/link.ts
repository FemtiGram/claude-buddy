import type { SkinLook } from './types'

const CAP = 0x3a9a3a
const SHIELD = 0x2850a0
const BOOT = 0x6b3e1e

// Link of Hyrule: long green cap with its tip falling to one side, blond
// hair, pointy ears, green tunic and belt, the blue shield on his arm.
export const look: SkinLook = {
  said: 'Buddy turns into Link. Hyah!',
  group: 'Nintendo',
  rows: [
    '.gg.......',
    '.ggggg....',
    '..gggggg..',
    '.yyyyyyyy.',
    'syssssssys',
    '.yssssssy.',
    '..tttttt..',
    '..tbbbbt..',
    '..tttttt..',
  ],
  colors: { g: CAP, t: 0x2e8b3a, y: 0xffd070, s: 0xf8c8a0, b: 0x7a4a24 },
  eyes: [[3, 4], [6, 4]],
  smile: [[4, 5], [5, 5]],
  tear: [3, 5],
  arms: {
    color: SHIELD,
    down: [[0, 6], [1, 6], [0, 7], [1, 7]],
    up: [[0, 5], [0, 6], [1, 6], [0, 7]],
  },
  feet: { color: BOOT, at: [3, 6] },
  captions: { happy: 'ITEM', idle: 'HEY' },
  critters: {
    // Navi: a glowing blue fairy.
    Explore: { rows: ['.ww..ww.', 'w.####.w', '..####..', '...##...'], eye: 2, feet: false, arms: false, colors: { '#': 0x58b8f0, w: 0xcfeaf8 }, tint: 0x58b8f0 },
    // Kaepora Gaebora: the wise grey owl.
    Plan: { rows: ['.##..##.', '########', '#wwwwww#', '.#-yy-#.'], eye: 2, colors: { '#': 0x8a8f9a, w: 0xe0dccc, y: 0xe8b030 }, tint: 0x8a8f9a },
    // Dark Link: the shadow copy, black-red, lifted off the ground.
    fork: { rows: ['.####.##', '########', '.#rrrr#.', '..#..#..'], eye: 1, eyeColor: 0xe03030, feet: false, colors: { '#': 0x4a3a5a, r: 0xb02828 }, tint: 0xb02828 },
    // Octorok: a red rock-spitter with a snout and tentacles.
    'general-purpose': { rows: ['..####..', '.######.', 'oo#####.', '.#.##.#.'], eye: 1, colors: { '#': 0xc03838, o: 0x8a2020 }, tint: 0xc03838 },
    // Cucco: a white chicken with a red comb.
    other: { rows: ['..rrr...', '.####yy.', '#######.', '..y..y..'], eye: 1, eyes: [3], feet: false, arms: false, colors: { '#': 0xe8e8e0, r: 0xe03838, y: 0xe8b030 }, tint: 0xe8e8e0 },
  },
}
