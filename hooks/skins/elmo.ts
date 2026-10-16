import type { SkinLook } from './types'

const RED = 0xe0302a
const LIGHT = 0xf47060
const DEEP = 0xa01818
const WHITE = 0xf2f2f2
const ORANGE = 0xf89a20

// Elmo: furry red all over with a few tufts on top, two white eyes close
// together, the big orange nose between them and a wide open mouth.
export const look: SkinLook = {
  said: 'Buddy turns into Elmo. Elmo loves you!',
  group: 'Muppets',
  rows: [
    '..r.rr.r..',
    '.rLLrrrrd.',
    'rLwwrrwwrd',
    'rLwwrrwwrd',
    'rrrrOOrrrd',
    'rrrrOOrrrd',
    'rrkkkkkkrd',
    '.rrkkkkrd.',
    '..rrrrrd..',
    '.rLrrrrrd.',
    '.rrrrrrrd.',
  ],
  colors: { r: RED, L: LIGHT, d: DEEP, w: WHITE, O: ORANGE, k: 0x3a0e14 },
  eyes: [[3, 3], [6, 3]],
  eyeColor: 0x141414,
  smile: [[1, 5], [8, 5]],
  tear: [2, 4],
  arms: { color: RED, down: [[0, 9], [9, 9]], up: [[0, 7], [9, 7]] },
  feet: { color: ORANGE, at: [3, 6] },
  captions: { idle: 'LA LA LA', happy: 'HAHAHA!' },
  critters: {
    // Big Bird: tall yellow feathers on top and an orange beak.
    Explore: { rows: ['.f.ff.f.', '.######.', '.##oo##.', '.######.'], eye: 1, eyes: [2, 5], colors: { '#': 0xf2d42a, f: 0xd8a818, o: 0xf08a2a }, tint: 0xf2d42a },
    // Abby Cadabby: pink fairy with purple pigtails and wings.
    Plan: { rows: ['p.pppp.p', 'w######w', '.######.', '..-##-..'], eye: 1, eyes: [2, 5], arms: false, colors: { '#': 0xf2a0c8, p: 0x9a5ac0, w: 0xc8e8f8 }, tint: 0xf2a0c8 },
    // A little Elmo: white eyes, orange nose, open mouth.
    fork: { rows: ['.#.##.#.', '#ww##ww#', '###oo###', '.#kkkk#.'], eye: 1, eyes: [2, 5], eyeColor: 0x141414, colors: { '#': RED, w: WHITE, o: ORANGE, k: 0x3a0e14 }, tint: RED },
    // Ernie: orange, spiky black hair, red nose, striped shirt.
    'general-purpose': { rows: ['.k.kk.k.', '.######.', '.##rr##.', '.bbrrbb.'], eye: 1, eyes: [2, 5], colors: { '#': 0xf08a3a, k: 0x2a2020, r: 0xd8303a, b: 0x3a6ad8 }, tint: 0xf08a3a },
    // Dorothy, Elmo's goldfish, swimming with her tail fanned out.
    other: { rows: ['..####.-', '.######-', '.#####--', '..####.-'], eye: 1, eyes: [2], arms: false, feet: false, colors: { '#': 0xf28a2a }, tint: 0xf28a2a },
  },
}
