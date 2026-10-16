import type { SkinLook } from './types'

const PURPLE = 0x8a5cc0
const DEEP = 0x5e3a8c
const LIGHT = 0xb48ee2
const SKIN = 0xf6caa8
const HAIR = 0x2a1a14

// Boo of Monsters, Inc.: the little girl in her purple monster costume, the
// hood with two little horns framing her round face, black bangs and pink
// cheeks, a lighter belly on the suit.
export const look: SkinLook = {
  said: 'Buddy zips up the purple suit: Boo!',
  group: 'Pixar & Disney',
  rows: [
    '..p....p..',
    '.qp....pd.',
    '.qppppppd.',
    'qpkkkkkkpd',
    'pksssssskd',
    'pssssssssd',
    'psnssssnsd',
    '.ppsssspd.',
    '.pppppppd.',
    '.ppllllpd.',
  ],
  colors: { p: PURPLE, d: DEEP, q: LIGHT, k: HAIR, s: SKIN, n: 0xf08a9a, l: 0xa98ad0 },
  eyes: [[3, 5], [6, 5]],
  eyeColor: HAIR,
  smile: [[4, 6], [5, 6]],
  tear: [2, 5],
  arms: { color: PURPLE, down: [[0, 9], [9, 9]], up: [[0, 7], [9, 7]] },
  feet: { color: DEEP, at: [3, 6] },
  captions: { idle: 'BOO', happy: 'KITTY!' },
  critters: {
    // Randall: a lavender chameleon on too many legs, green slit eyes.
    Explore: { rows: ['..####..', '-######-', '.#-##-#.', '-.-..-.-'], eye: 1, eyeColor: 0x6ad04a, feet: false, colors: { '#': 0x9a7ad0 }, tint: 0x9a7ad0 },
    // Mr. Waternoose: a grey-green crab boss with a white mustache and many eyes.
    Plan: { rows: ['..####..', '.######.', '.wwwwww.', 'l.l..l.l'], eye: 1, eyes: [1, 3, 4, 6], feet: false, colors: { '#': 0x6a7a5a, w: 0xe8e8e0, l: 0x4a5a3a }, tint: 0x6a7a5a },
    // A mini Boo in her hood.
    fork: { rows: ['#......#', '##kkkk##', '.#ssss#.', '.######.'], eye: 2, colors: { '#': PURPLE, k: HAIR, s: SKIN }, tint: PURPLE },
    // A CDA agent in a yellow hazmat suit and visor.
    'general-purpose': { rows: ['..####..', '.#vvvv#.', '.######.', '.#.##.#.'], eye: 1, eyeColor: 0x2a3a4a, colors: { '#': 0xf2d230, v: 0x8ac8e0 }, tint: 0xf2d230 },
    // The Abominable Snowman: white fur, pale blue face.
    other: { rows: ['#.####.#', '########', '.#cccc#.', '..-cc-..'], eye: 2, colors: { '#': 0xeef0f4, c: 0xa8c8e0 }, tint: 0xa8c8e0 },
  },
}
