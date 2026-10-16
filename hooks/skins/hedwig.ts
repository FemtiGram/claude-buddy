import type { SkinLook } from './types'

const WHITE = 0xf2f4f8
const EDGE = 0x8e96a6
const SPOT = 0x3a3a44

// Hedwig, Harry's snowy owl: a round white head with no ear tufts, amber
// eyes, black-flecked wings and a Hogwarts letter with a red wax seal in
// her beak.
export const look: SkinLook = {
  said: 'Buddy takes wing: Hedwig brings the post!',
  group: 'Fantasy',
  rows: [
    '..eeeeee..',
    '.ewwwwwwe.',
    '.ewywwywe.',
    '.ewwbbwwe.',
    'ewwprrpwwe',
    'ewkwwwwkwe',
    'ewwkwwkwwe',
    '.ekwwwwke.',
    '..eeeeee..',
  ],
  colors: { w: WHITE, e: EDGE, y: 0xf0b020, b: 0x4a4a52, p: 0xe2c890, r: 0xc02828, k: SPOT },
  eyes: [[3, 2], [6, 2]],
  eyeColor: 0x1a1a1a,
  tear: [2, 3],
  arms: { color: 0xc8ccd6, down: [[0, 7], [9, 7]], up: [[0, 3], [9, 3]] },
  feet: { color: 0x7a7a80, at: [3, 6] },
  captions: { idle: 'HOOT', happy: 'POST!' },
  critters: {
    // A Howler: a red envelope screaming.
    Explore: { rows: ['########', '#-####-#', '##-##-##', '###kk###'], eye: 1, feet: false, arms: false, colors: { '#': 0xd03030, k: 0x3a1010 }, tint: 0xd03030 },
    // A Chocolate Frog, mid-leap.
    Plan: { rows: ['.h#..#h.', '########', '#h######', '.#.--.#.'], eye: 0, colors: { '#': 0x8a5230, h: 0xb8804a }, tint: 0xb8804a },
    // A mini Hedwig, speckled.
    fork: { rows: ['.######.', '.#y##y#.', '.##kk##.', '.#k##k#.'], eye: 1, colors: { '#': WHITE, y: 0xf0b020, k: SPOT }, tint: 0xd8dce8 },
    // Buckbeak the hippogriff: a grey eagle head with spread wings.
    'general-purpose': { rows: ['--.##.--', '.######.', '.##yy##.', '.######.'], eye: 1, colors: { '#': 0x9a9eaa, y: 0xe0a040 }, tint: 0x9a9eaa },
    // Crookshanks: a squashed-faced ginger cat.
    other: { rows: ['.#....#.', '.######.', '.-#nn#-.', '.######.'], eye: 1, colors: { '#': 0xe08a3a, n: 0xb05a2a }, tint: 0xe08a3a },
  },
}
