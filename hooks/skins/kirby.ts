import type { SkinLook } from './types'

const PINK = 0xf4a3c4
const SHADE = 0xdc86ab
const FEET = 0xd23a5c

// Kirby: a round pink ball with stubby arms, tall eyes, blush and red feet.
export const look: SkinLook = {
  said: 'Buddy turns into Kirby!',
  rows: [
    '..........',
    '..........',
    '..pppppp..',
    '.pppppppp.',
    '.pppppppp.',
    '.ppbppbpp.',
    '.prppppsp.',
    '.pppppppp.',
    '..ssssss..',
    '.rrr..rrr.',
  ],
  colors: { p: PINK, s: SHADE, b: 0x4a78d8, r: FEET },
  eyes: [[3, 4], [6, 4]],
  smile: [[4, 6], [5, 6]],
  tear: [3, 6],
  arms: { color: PINK, down: [[0, 6], [9, 6]], up: [[0, 4], [9, 4]] },
  feet: { color: FEET, at: [2, 7] },
  captions: { happy: 'POYO', idle: 'HI' },
  critters: {
    // Bronto Burt: a pink-orange flyer with little wings.
    Explore: { rows: ['w......w', 'w######w', '.######.', '..-##-..'], eye: 1, colors: { '#': 0xf0867a, w: 0xf6dce4 }, tint: 0xf0867a },
    // Waddle Doo: orange, with one big eye.
    Plan: { rows: ['..####..', '.##ww##.', '.######.', '..-##-..'], eye: 1, eyes: [3], colors: { '#': 0xe8863a, w: 0xfff0d8 }, tint: 0xe8863a },
    // A violet mirror Kirby.
    fork: { rows: ['..####..', '.######.', '.#r##r#.', '.-####-.'], eye: 1, colors: { '#': 0xa98ad8, r: 0xe07aa8 }, tint: 0xa98ad8 },
    // Waddle Dee: orange-tan with a peach face.
    'general-purpose': { rows: ['..####..', '.######.', '.#pppp#.', '..-pp-..'], eye: 2, colors: { '#': 0xd9894a, p: 0xf7cfa8 }, tint: 0xd9894a },
    // Gordo: an invincible spiky ball.
    other: { rows: ['s.s..s.s', '.######.', 's######s', '.s-##-s.'], eye: 1, eyeColor: 0xf2f2a0, feet: false, arms: false, colors: { '#': 0x6a7399, s: 0xc9ccdc }, tint: 0x8a93b8 },
  },
}
