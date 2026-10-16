import type { SkinLook } from './types'

const OUTER = 0x6a4bd6
const MID = 0xff8a2a
const CORE = 0xffd84a

// Calcifer: a teardrop flame, purple-blue edge, orange middle, yellow core,
// white eyes. No limbs; the tuft flickers in the headroom.
export const look: SkinLook = {
  said: 'Buddy turns into Calcifer!',
  group: 'Ghibli',
  rows: [
    '....o.....',
    '...oo.o...',
    '....oo....',
    '..poooop..',
    '.pooyyoop.',
    '.pwyyyywp.',
    '.poyyyyop.',
    '.pooyyoop.',
    '..poooop..',
    '...pppp...',
  ],
  colors: { p: OUTER, o: MID, y: CORE, w: 0xfff3d0 },
  eyes: [[3, 5], [6, 5]],
  eyeColor: 0x3a2a4a,
  smile: [[4, 6], [5, 6]],
  tear: [4, 7],
  captions: { idle: 'FIRE', happy: 'EGGS' },
  critters: {
    // Turnip-head scarecrow.
    Explore: { rows: ['.g.gg.g.', '..####..', '.######.', '...bb...'], eye: 2, colors: { '#': 0xd8c4e8, g: 0x5e9a4a, b: 0x8a6a48 }, tint: 0xd8c4e8 },
    // Heen the dog: cream with brown ears and a tongue.
    Plan: { rows: ['.b....b.', '.######.', '.######.', '..#tt#..'], eye: 1, colors: { '#': 0xe8d8c0, b: 0x8a6a48, t: 0xe07a8a }, tint: 0xe8d8c0 },
    // A spark blob.
    fork: { rows: ['...y.y..', '..####..', '.######.', '..####..'], eye: 2, colors: { '#': 0xff9a3a, y: 0xffd84a }, tint: 0xff9a3a },
    // The moving castle on chicken legs.
    'general-purpose': { rows: ['..#..#..', '.######.', '.#y##y#.', '.l.ll.l.'], eye: 2, arms: false, feet: false, colors: { '#': 0x9a8a78, y: 0xe8c860, l: 0x6e6a60 }, tint: 0x9a8a78 },
    // The Witch of the Waste: a big hat over a pale face.
    other: { rows: ['...h....', '..hhh...', '.hhhhhh.', '..####..'], eye: 3, colors: { '#': 0xe0c8b0, h: 0x7a5a8a }, tint: 0x7a5a8a },
  },
}
