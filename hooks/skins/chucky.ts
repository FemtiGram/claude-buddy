import type { SkinLook } from './types'

const HAIR = 0xd4572a
const SKIN = 0xe8b896
const DENIM = 0x3f6fb0
const SHOE = 0xc83030

// Chucky, the Good Guy doll: a messy orange-red tuft over a pale face with a
// smirk, a red-white striped shirt under blue denim overalls, red sneakers.
export const look: SkinLook = {
  said: 'Buddy turns into a Good Guy doll. Wanna play?',
  rows: [
    '..h.hh.h..',
    '.hhhhhhhh.',
    '.hhFFFFhh.',
    '..FfFFfF..',
    '..FFFFFF..',
    '...FFFF...',
    '..rwrwrw..',
    '.bbbbbbbb.',
    '.bbbbbbbb.',
    '..bb..bb..',
  ],
  colors: { h: HAIR, F: SKIN, f: 0xc98a68, r: SHOE, w: 0xe4dccf, b: DENIM },
  eyes: [[3, 3], [6, 3]],
  eyeColor: 0x3a5fa0,
  smile: [[4, 5], [5, 5]],
  tear: [3, 4],
  arms: {
    color: 0xc83030,
    down: [[0, 7], [0, 8], [9, 7], [9, 8]],
    up: [[0, 3], [0, 4], [9, 3], [9, 4]],
  },
  feet: { color: SHOE, at: [2, 7] },
  captions: { idle: 'TOYS', happy: 'NICE' },
  critters: {
    // A doll with a magnifier: orange hair, pale face, glass to the right.
    Explore: { rows: ['.hhhh...', '.h##h.oo', '.###.o.o', '..bb..oo'], eye: 1, eyes: [2, 3], eyeColor: 0x3a5fa0, colors: { '#': SKIN, h: HAIR, b: DENIM, o: 0x8a6a40 }, tint: HAIR },
    // A toy box: wooden crate with a blue lid and a red stripe.
    Plan: { rows: ['.bbbbbb.', '.######.', '.#rrrr#.', '.######.'], eye: 2, eyes: [3, 4], colors: { '#': 0xc89a5a, b: DENIM, r: SHOE }, tint: 0xc89a5a },
    // A tiny second doll: the copy, small hair tuft and overalls.
    fork: { rows: ['..h.h...', '.hhhhh..', '.#####..', '..bbbb..'], eye: 2, eyes: [2, 4], eyeColor: 0x3a5fa0, colors: { '#': SKIN, h: HAIR, b: DENIM }, tint: SKIN },
    // A teddy bear: brown with round ears and a pale muzzle.
    'general-purpose': { rows: ['.##..##.', '.######.', '.##mm##.', '..####..'], eye: 1, colors: { '#': 0xa8743c, m: 0xe0c8a0 }, tint: 0xa8743c },
    // A Good Guys cap: red crown over a blue brim.
    other: { rows: ['..####..', '.######.', '.######.', 'bbbbbbbb'], eye: 1, feet: false, arms: false, colors: { '#': SHOE, b: DENIM }, tint: SHOE },
  },
}
