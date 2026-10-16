import type { SkinLook } from './types'

const FUR = 0xa8683a
const LIGHT = 0xc88a5a

// Tony Tony Chopper: small brown reindeer, big pink hat with its white mark,
// little antlers poking out at the sides, blue nose, pink-orange shorts.
export const look: SkinLook = {
  said: 'Buddy turns into Chopper!',
  group: 'Anime',
  rows: [
    'a..pppp..a',
    '.aapwwpaa.',
    '.pppppppp.',
    '.bbbbbbbb.',
    '.bllllllb.',
    '.bllnnllb.',
    '.bllllllb.',
    '..oooooo..',
  ],
  colors: { a: 0xd8c090, p: 0xe890a8, w: 0xf8f0f0, b: FUR, l: LIGHT, n: 0x3a6ac8, o: 0xf08a6a },
  eyes: [[3, 4], [6, 4]],
  smile: [[4, 6], [5, 6]],
  tear: [3, 5],
  arms: { color: FUR, down: [[0, 6], [9, 6]], up: [[0, 4], [9, 4]] },
  feet: { color: 0x7a4a24, at: [3, 6] },
  captions: { happy: 'DOCTOR!', idle: 'HI' },
  critters: {
    // Cotton candy on a stick.
    Explore: { rows: ['..####..', '.######.', '.######.', '...ss...'], eye: 1, colors: { '#': 0xf08cb8, s: 0xe8dcc0 }, tint: 0xf08cb8 },
    // A doctor's bag with a white cross.
    Plan: { rows: ['..hhhh..', '########', '##-ww-##', '########'], eye: 1, colors: { '#': 0x7a5a48, h: 0xc8b090, w: 0xf0e8e8 }, tint: 0x7a5a48 },
    // A mini Chopper hat with antlers.
    fork: { rows: ['a.####.a', '.##ww##.', '########', '.bbbbbb.'], eye: 3, colors: { '#': 0xe890a8, a: 0xd8c090, w: 0xf8f0f0, b: 0xa8683a }, tint: 0xe890a8 },
    // A rumble ball.
    'general-purpose': { rows: ['..####..', '.#o####.', '.######.', '..####..'], eye: 1, feet: false, arms: false, colors: { '#': 0xe8c040, o: 0xb88a20 }, tint: 0xe8c040 },
    // Usopp: curly hair, very long nose.
    other: { rows: ['.kkkkk..', '.######.', '.#####nn', '..yyyy..'], eye: 1, colors: { '#': 0xd09a60, k: 0x4a4a5a, n: 0xd09a60, y: 0xe8c040 }, tint: 0xd09a60 },
  },
}
