import type { SkinLook } from './types'

const GREEN = 0x2eaa4a
const BRIGHT = 0x7af08a
const BLACK = 0x2e3a32
const SKIN = 0xe8b890
const BROWN = 0x7a4a2a
const WHITE = 0xe8f4e8

// Green Lantern (Hal Jordan): brown hair, green domino mask with glowing white
// eyes, green-and-black suit with the lantern emblem, glowing green hands.
export const look: SkinLook = {
  said: 'Buddy takes the Green Lantern oath!',
  group: 'DC',
  rows: [
    '..........',
    '..hHhhhh..',
    '.hHhhhhhh.',
    '.sbggggGs.',
    '.sssssssS.',
    '..sssssS..',
    '.kkgwwgGk.',
    '.Kkwbbwgk.',
    '..kgwwGk..',
    '..Kk..kk..',
  ],
  colors: { h: BROWN, H: 0xa86a3a, s: SKIN, S: 0xc89470, g: GREEN, G: 0x1a7a34, b: BRIGHT, w: WHITE, k: 0x2c5a40, K: 0x7ab890 },
  eyes: [[3, 3], [6, 3]],
  eyeColor: WHITE,
  smile: [[4, 5], [5, 5]],
  tear: [2, 4],
  arms: { color: BRIGHT, down: [[0, 7], [9, 7]], up: [[0, 5], [9, 5]] },
  feet: { color: GREEN, at: [3, 6] },
  captions: { happy: 'BRIGHT', idle: 'WILL' },
  critters: {
    // A green ring construct, a small fist.
    Explore: { rows: ['.######.', '########', '#-####-#', '.######.'], eye: 1, feet: false, colors: { '#': BRIGHT }, tint: BRIGHT },
    // The power battery.
    Plan: { rows: ['..####..', '.#wwww#.', '.#wwww#.', '########'], eye: 1, feet: false, arms: false, colors: { '#': GREEN, w: BRIGHT }, tint: GREEN },
    // A mini lantern ring.
    fork: { rows: ['...ww...', '..####..', '.##..##.', '..####..'], eye: 2, eyes: [1, 6], feet: false, arms: false, colors: { '#': GREEN, w: BRIGHT }, tint: GREEN },
    // Kilowog.
    'general-purpose': { rows: ['.######.', '########', '#w####w#', '.##..##.'], eye: 1, colors: { '#': 0xe88aa8, w: 0xf0eeea }, tint: 0xe88aa8 },
    // A yellow Sinestro ring.
    other: { rows: ['.######.', '##....##', '##....##', '.######.'], eye: 0, feet: false, arms: false, colors: { '#': 0xe8c83a }, tint: 0xe8c83a },
  },
}
