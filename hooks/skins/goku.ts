import type { SkinLook } from './types'

const HAIR = 0x2a2a34
const EDGE = 0x4a4a5a
const SKIN = 0xf2c8a0
const ORANGE = 0xf07a20
const BLUE = 0x2a4aa8

// Goku: big spiky black hair, orange gi over a blue undershirt, blue belt,
// wristbands and boots.
export const look: SkinLook = {
  said: 'Buddy turns into Goku. Kamehameha!',
  group: 'Anime',
  rows: [
    '.e..ee..e.',
    'ehhehhehhe',
    '.hhhhhhhh.',
    '.hssssssh.',
    '.hssssssh.',
    '..ssssss..',
    '.oobbbboo.',
    '.bbbbbbbb.',
    '..oo..oo..',
  ],
  colors: { h: HAIR, e: EDGE, s: SKIN, o: ORANGE, b: BLUE },
  eyes: [[3, 4], [6, 4]],
  smile: [[4, 5], [5, 5]],
  tear: [3, 5],
  arms: { color: SKIN, down: [[0, 7], [9, 7]], up: [[0, 5], [9, 5]] },
  feet: { color: BLUE, at: [3, 6] },
  captions: { happy: 'OSSU!', idle: 'HUNGRY' },
  critters: {
    // The Flying Nimbus: a yellow cloud.
    Explore: { rows: ['..####..', '.######.', '########', '.-####-.'], eye: 1, feet: false, arms: false, colors: { '#': 0xf2d040 }, tint: 0xf2d040 },
    // Master Roshi: bald, sunglasses, long white beard.
    Plan: { rows: ['.######.', '.kkkkkk.', 'wwwwwwww', '.wwwwww.'], eye: 1, eyeColor: 0x2a2a34, colors: { '#': 0xf2c8a0, k: 0x2a2a34, w: 0xe8e4da }, tint: 0xf2c8a0 },
    // Goten: mini Goku.
    fork: { rows: ['.h.hh.h.', '.hhhhhh.', '.h####h.', '..oooo..'], eye: 2, colors: { '#': 0xf2c8a0, h: 0x4a4a5a, o: 0xf07a20 }, tint: 0xf07a20 },
    // A Dragon Ball: orange with red stars.
    'general-purpose': { rows: ['..####..', '.#####r.', '.#r##r#.', '..####..'], eye: 1, feet: false, arms: false, colors: { '#': 0xf09a20, r: 0xc82030 }, tint: 0xf09a20 },
    // Shenron: the green dragon.
    other: { rows: ['h.#..#.h', '.h####h.', '.######.', '..tttt..'], eye: 0, eyeColor: 0xd02020, colors: { '#': 0x2faa4a, h: 0xd8c090, t: 0xb8e0a0 }, tint: 0x2faa4a },
  },
}
