import type { SkinLook } from './types'

const HAIR = 0xd83a3a
const HAIR_LIT = 0xff7a6a
const HAIR_DARK = 0x9a2028
const SKIN = 0xf6d2b4
const COAT = 0x4a6ad0
const COAT_DARK = 0x34489a
const BOOT = 0x6a4430

// Madeline from Celeste: the big flowing red hair trailing down her back,
// a pale face under the bangs, the blue climbing jacket, brown boots.
export const look: SkinLook = {
  said: 'Buddy ties back the red hair: Madeline starts the climb!',
  group: 'Games',
  rows: [
    '...rrrr...',
    '..rllrrrr.',
    '.rlrrrrrrr',
    'rrrrsssssr',
    'rrrssssssr',
    'rd.ssssss.',
    'dd.jjjjjj.',
    'd..jjjjjj.',
    '...ccjjcc.',
  ],
  colors: { r: HAIR, l: HAIR_LIT, d: HAIR_DARK, s: SKIN, j: COAT, c: COAT_DARK },
  eyes: [[4, 4], [7, 4]],
  eyeColor: 0x2a2a48,
  smile: [[5, 5], [6, 5]],
  tear: [4, 5],
  arms: { color: SKIN, down: [[2, 7], [9, 7]], up: [[2, 5], [9, 5]] },
  feet: { color: BOOT, at: [4, 7] },
  captions: { idle: 'CLIMB', happy: 'SUMMIT!' },
  critters: {
    // A winged strawberry, flapping off when you dash near it.
    Explore: { rows: ['...gg...', 'w######w', 'ww#y#y#w', '..####..'], eye: 1, feet: false, arms: false, colors: { '#': 0xe03a4a, g: 0x4ab84a, y: 0xffe080, w: 0xf0f0f8 }, tint: 0xe03a4a },
    // Granny, white hair in a bun over her purple shawl.
    Plan: { rows: ['...##...', '.######.', '.#ssss#.', '..pppp..'], eye: 2, colors: { '#': 0xdcdce4, s: SKIN, p: 0x8a5aa8 }, tint: 0xdcdce4 },
    // Badeline, her purple-haired reflection with red eyes.
    fork: { rows: ['..####..', '#######.', '##ssss#.', '.#jjjj..'], eye: 2, eyeColor: 0xe02040, colors: { '#': 0x9a4ad0, s: 0xe8d8e8, j: 0x3a3060 }, tint: 0x9a4ad0 },
    // Mr. Oshiro, the ghostly hotel keeper with his mustache.
    'general-purpose': { rows: ['..####..', '.######.', '.######.', '.#mmmm#.'], eye: 1, feet: false, colors: { '#': 0x6a9ae8, m: 0x2a3a6a }, tint: 0x6a9ae8 },
    // A Seeker: a spiky dark lump with one glaring eye.
    other: { rows: ['#..##..#', '.######.', '##wwww##', '.#-##-#.'], eye: 2, eyes: [3, 4], eyeColor: 0xe02040, feet: false, arms: false, colors: { '#': 0x6a6a90, w: 0xf0f0f0 }, tint: 0x8a8ab0 },
  },
}
