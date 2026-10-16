import type { SkinLook } from './types'

const HOOD = 0xb4bac6
const SHINE = 0xe4e8f0
const VOID = 0x12121c
const WING = 0xfff0c0
const GOLD = 0xd8a840
const GLOW = 0x9fe0ff

// Tyrael, Archangel of Justice: a silver hood over no face at all, only
// darkness and two glowing eyes, golden-white tendril wings streaming out
// either side, silver armour with a gold sash.
export const look: SkinLook = {
  said: 'Buddy unfurls his wings: Tyrael, Archangel of Justice.',
  group: 'Diablo',
  rows: [
    'o...hh...o',
    'yo.hHhh.oy',
    '.yhHhhhhy.',
    'oyhkkkkhyo',
    '.yhkkkkhy.',
    'yohhkkhhoy',
    '.y.sggs.y.',
    'oy.sSgs.yo',
    '.o.sgss.o.',
    'y..ssss..y',
  ],
  colors: { h: HOOD, H: SHINE, k: VOID, y: WING, o: GOLD, s: 0x9aa2b0, S: SHINE, g: GOLD },
  eyes: [[3, 3], [6, 3]],
  eyeColor: GLOW,
  smile: [[4, 4], [5, 4]],
  smileColor: GLOW,
  tear: [4, 3],
  arms: { color: SHINE, down: [[2, 8], [7, 8]], up: [[2, 6], [7, 6]] },
  feet: { color: 0x8a92a0, at: [3, 6] },
  captions: { idle: 'WISDOM', happy: 'JUSTICE!' },
  critters: {
    // Imperius, Archangel of Valor: a faceless gold helm, wings of fire.
    Explore: { rows: ['r.####.r', 'rr####rr', '.r#--#r.', '..####..'], eye: 1, eyeColor: 0xff7a2a, colors: { '#': GOLD, r: 0xd8461e }, tint: 0xd8a840 },
    // Auriel, Archangel of Hope: pale hood, violet wings, the white sash.
    Plan: { rows: ['v..##..v', 'vv####vv', '.v#ww#v.', '..#ww#..'], eye: 1, colors: { '#': 0xd8d0f0, v: 0x8a74e8, w: 0xffffff }, tint: 0x8a74e8 },
    // A little Tyrael: silver hood, dark void, glowing eyes.
    fork: { rows: ['.y.##.y.', 'yy#kk#yy', '.y#kk#y.', '..-gg-..'], eye: 1, eyes: [3, 4], eyeColor: GLOW, colors: { '#': HOOD, k: VOID, y: WING, g: GOLD }, tint: HOOD },
    // El'druin, the Sword of Justice, its blade glowing blue-white.
    'general-purpose': { rows: ['.g.....w', 'bgw#####', 'bgw#####', '.g.....w'], eye: 1, eyes: [4, 6], eyeColor: 0x2a4a7a, feet: false, arms: false, colors: { '#': 0xb8e0f8, g: GOLD, b: 0x6a4424, w: 0xe8f8ff }, tint: 0x9fd0f0 },
    // A shard of the Worldstone, a lilac crystal.
    other: { rows: ['...w#...', '..####..', '.##--##.', '..####..'], eye: 2, feet: false, arms: false, colors: { '#': 0xa888e8, w: 0xf0e8ff }, tint: 0xa888e8 },
  },
}
