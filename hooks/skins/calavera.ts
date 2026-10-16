import type { SkinLook } from './types'

const BONE = 0xf5f1e8
const SHADE = 0xcfc9d4
const PINK = 0xd6336c
const TEAL = 0x3fa7c9
const MARIGOLD = 0xf28c28
const GOLD = 0xf7b733
const SUIT = 0x3b3548

// A calavera for Dia de Muertos: sugar skull with petalled eyes, a crown of
// marigolds, a stitched smile and a dark suit.
export const look: SkinLook = {
  said: 'Buddy turns into a calavera!',
  group: 'Cartoons & folklore',
  rows: [
    '..o.yy.o..',
    '.ooyooyoo.',
    '.wwwwwwww.',
    '.wppwwppw.',
    '.wptwwtpw.',
    '.wwwggwww.',
    '.wgwggwgw.',
    '..dddddd..',
    '..dddddd..',
  ],
  colors: { o: MARIGOLD, y: GOLD, w: BONE, g: SHADE, p: PINK, t: TEAL, d: SUIT },
  eyes: [[3, 4], [6, 4]],
  eyeColor: 0x2a2634,
  smile: [[2, 6], [4, 6], [5, 6], [7, 6]],
  tear: [3, 5],
  arms: { color: SUIT, down: [[1, 7], [8, 7]], up: [[0, 5], [9, 5]] },
  feet: { color: SUIT, at: [3, 6] },
  captions: { happy: 'BUENO', idle: 'DULCE' },
  critters: {
    // An alebrije jaguar, all bright patterns.
    Explore: { rows: ['.##..##.', '.#p##p#.', '.######.', '.y#tt#y.'], eye: 2, colors: { '#': TEAL, p: PINK, y: GOLD, t: MARIGOLD }, tint: PINK },
    // A Catrina: wide dark hat with a flower over a sugar skull.
    Plan: { rows: ['..poop..', 'bbbbbbbb', '.######.', '.#-##-#.'], eye: 2, colors: { '#': BONE, p: PINK, o: MARIGOLD, b: SUIT }, tint: PINK },
    // A little sugar skull.
    fork: { rows: ['.######.', '.pp##pp.', '.######.', '..#--#..'], eye: 1, colors: { '#': BONE, p: PINK }, tint: BONE },
    // A marigold.
    'general-purpose': { rows: ['.#.##.#.', '########', '.##yy##.', '..gggg..'], eye: 1, feet: false, colors: { '#': MARIGOLD, y: GOLD, g: 0x4c9a5a }, tint: MARIGOLD },
    // Pan de muerto, with its bone strips.
    other: { rows: ['..#ww#..', '.######.', '#w####w#', '.######.'], eye: 2, feet: false, arms: false, colors: { '#': 0xd9a05b, w: BONE }, tint: 0xd9a05b },
  },
}
