import type { SkinLook } from './types'

const FUR = 0x7a5fb0
const BELLY = 0xa890d0
const BOW = 0xc83a3a

// Bonnie: the purple animatronic rabbit with tall ears, big white eyes, a
// lighter muzzle with buck teeth, a red bow tie and stubby arms.
export const look: SkinLook = {
  said: 'Buddy turns into Bonnie.',
  group: 'Horror',
  rows: [
    '..PP..PP..',
    '..PP..PP..',
    '.PPPPPPPP.',
    '.PwwPPwwP.',
    '.PwwPPwwP.',
    '.PMMnnMMP.',
    '.PMMttMMP.',
    '..RRddRR..',
    '.PPBBBBPP.',
    '..PBBBBP..',
    '..PPPPPP..',
  ],
  colors: { P: FUR, w: 0xece8f0, M: 0xc4b4e0, n: 0x4a3a6a, t: 0xece8f0, R: BOW, d: 0x8a2a2a, B: BELLY },
  eyes: [[3, 4], [6, 4]],
  eyeColor: 0x2a1f40,
  smile: [[3, 5], [6, 5]],
  tear: [2, 5],
  arms: {
    color: FUR,
    down: [[0, 8], [9, 8]],
    up: [[0, 6], [9, 6]],
  },
  feet: { color: 0x5a4590, at: [3, 6] },
  captions: { idle: 'BEEP', happy: 'NICE' },
  critters: {
    // A security camera.
    Explore: { rows: ['.mmmm...', 'm#####mm', 'm#####m.', '.mmmm...'], eye: 1, eyes: [3], eyeColor: 0xc83a3a, arms: false, feet: false, colors: { '#': 0x8a8f9a, m: 0x4a4e5a }, tint: 0x8a8f9a },
    // The show stage.
    Plan: { rows: ['rrrrrrrr', 'rr.yy.rr', 'r..yy..r', '########'], eye: 1, eyes: [3, 4], colors: { '#': 0xa0764a, r: 0xa83a3a, y: 0xe3d08a }, tint: 0xa0764a },
    // A mini bunny head.
    fork: { rows: ['.#....#.', '.#....#.', '.######.', '..####..'], eye: 2, colors: { '#': BELLY }, tint: BELLY },
    // A pizza slice, point down.
    'general-purpose': { rows: ['cccccccc', '.#r##r#.', '..#oo#..', '...##...'], eye: 1, colors: { '#': 0xe3b23c, c: 0xb8742c, r: 0xb04a3a, o: 0x4a6a3a }, tint: 0xe3b23c },
    // A battery.
    other: { rows: ['..ll.ll.', '.######.', '.######.', '.######.'], eye: 2, arms: false, feet: false, colors: { '#': 0x5aae6a, l: 0xd8d0a0 }, tint: 0x5aae6a },
  },
}
