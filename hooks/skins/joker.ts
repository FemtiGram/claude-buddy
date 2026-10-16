import type { SkinLook } from './types'

const GREEN = 0x4aa84a
const WHITE = 0xeeeae4
const SHADE = 0xc8c2ba
const RED = 0xc8283a
const PURPLE = 0x6a3a9a
const GOLD = 0xe8a83a
const DARK = 0x2c2c38

// The Joker: slicked green hair, chalk face, dark-rimmed eyes, a huge red grin,
// purple suit, orange waistcoat, green bow tie.
export const look: SkinLook = {
  said: 'Buddy turns into the Joker. Why so serious?',
  group: 'DC',
  rows: [
    '..gggggg..',
    '.gggggggg.',
    '.wkkwwkkw.',
    '.swwwwwws.',
    '.wrwwwwrw.',
    '.wrrrrrrw.',
    '.pppggppp.',
    '.ppyyyypp.',
    '.ppyyyypp.',
    '.pppppppp.',
  ],
  colors: { g: GREEN, w: WHITE, s: SHADE, k: DARK, r: RED, p: PURPLE, y: GOLD },
  eyes: [[3, 3], [6, 3]],
  eyeColor: 0x2c2c38,
  smile: [[3, 5], [4, 5], [5, 5], [6, 5]],
  smileColor: WHITE,
  tear: [3, 4],
  arms: { color: WHITE, down: [[0, 7], [9, 7]], up: [[0, 5], [9, 5]] },
  feet: { color: 0x7a4aaa, at: [3, 6] },
  captions: { happy: 'HEE HEE', idle: 'SMILE' },
  critters: {
    // A joy buzzer.
    Explore: { rows: ['..####..', '.#wwww#.', '.#wrrw#.', '..####..'], eye: 1, feet: false, arms: false, colors: { '#': 0xa0a8b0, w: 0xd8dce0, r: RED }, tint: 0xa0a8b0 },
    // A joker card.
    Plan: { rows: ['.######.', '.#v##v#.', '.#.vv.#.', '.######.'], eye: 1, feet: false, arms: false, colors: { '#': 0xe6e2da, v: 0x8a4ab0 }, tint: 0x8a4ab0 },
    // A jack-in-the-box.
    fork: { rows: ['..wwww..', '..wwww..', '.######.', '.#y##y#.'], eye: 1, colors: { '#': 0xd8404a, w: WHITE, y: GOLD }, tint: 0xd8404a },
    // A squirting lapel flower.
    'general-purpose': { rows: ['.######.', '##yyyy##', '.##yy##.', '..gggg..'], eye: 1, feet: false, arms: false, colors: { '#': 0xe04a6a, y: 0xf0d040, g: GREEN }, tint: 0xe04a6a },
    // A laughing-gas canister.
    other: { rows: ['..kkkk..', '.######.', '.#gggg#.', '.######.'], eye: 2, feet: false, colors: { '#': 0x8a5ac0, g: 0x6cc060, k: 0xa8a8b4 }, tint: 0x8a5ac0 },
  },
}
