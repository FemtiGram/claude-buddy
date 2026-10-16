import type { SkinLook } from './types'

const CUP = 0xf6f2e8
const GREY = 0xa8a4b0
const RED = 0xe0302a
const INK = 0x141414

// Cuphead, 1930s rubber-hose style: a white teacup head with a red-and-white
// striped straw, pie-cut black eyes, a red nose, a handle on the side, red
// shorts and black hose legs.
export const look: SkinLook = {
  said: "Buddy tips his cup: it's Cuphead! Don't deal with the Devil.",
  group: 'Games',
  rows: [
    '.......r..',
    '......w...',
    '.gwwwrwwg.',
    '.wbbbbbbg.',
    '.wwkwwkwgg',
    '.wwkwwkwgh',
    '.wcwnnwcgg',
    '..wwwwwg..',
    '....kk....',
    '...rrrr...',
    '...k..k...',
  ],
  colors: { w: CUP, g: GREY, h: GREY, r: RED, b: 0x8a5a3a, k: INK, n: RED, c: 0xf2a0a0 },
  eyes: [[3, 5], [6, 5]],
  eyeColor: INK,
  smile: [[4, 7], [5, 7]],
  tear: [3, 6],
  arms: { color: 0xffffff, down: [[2, 9], [7, 9]], up: [[1, 7], [8, 7]] },
  feet: { color: 0x7a4a24, at: [3, 6] },
  captions: { idle: 'HMM', happy: 'KNOCKOUT' },
  critters: {
    // Ollie Bulb: a weeping lilac onion with a green sprout.
    Explore: { rows: ['...g....', '..####..', '.######.', '.#t##t#.'], eye: 2, feet: false, arms: false, colors: { '#': 0xd8b8e0, g: 0x5aa04a, t: 0x5ab0f0 }, tint: 0xd8b8e0 },
    // King Dice: a white die for a head over a purple suit.
    Plan: { rows: ['.######.', '.######.', '.#k##k#.', '..pppp..'], eye: 1, colors: { '#': 0xf0ecdc, k: INK, p: 0x8a4ac0 }, tint: 0x8a4ac0 },
    // A mini Cuphead with his straw.
    fork: { rows: ['....rw..', '.######.', '.######.', '..rrrr..'], eye: 2, colors: { '#': CUP, r: RED, w: 0xffffff }, tint: RED },
    // Goopy Le Grande: a blue slime with a red boxing glove.
    'general-purpose': { rows: ['..####..', '.######r', '########', '.------.'], eye: 1, eyes: [3, 5], feet: false, arms: false, colors: { '#': 0x4a9ae0, r: RED }, tint: 0x4a9ae0 },
    // Cagney Carnation: a yellow face in pink petals on a green stem.
    other: { rows: ['.p.pp.p.', 'pp####pp', '.p####p.', '...gg...'], eye: 1, eyes: [3, 4], feet: false, arms: false, colors: { '#': 0xf2c840, p: 0xf06aa0, g: 0x4a9a3a }, tint: 0xf06aa0 },
  },
}
