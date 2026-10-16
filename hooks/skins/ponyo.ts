import type { SkinLook } from './types'

const RED = 0xe8382c
const SHADE = 0xb01e22
const GLOW = 0xff8a66
const FACE = 0xf8d2b4

// Ponyo, the goldfish who wants to be human: a round red head hooding a
// peach face with big dark eyes, a little red fish body and a split tail.
export const look: SkinLook = {
  said: 'Buddy blows a bubble: Ponyo loves Sosuke!',
  group: 'Ghibli',
  rows: [
    '........b.',
    '...rrrr..b',
    '..rggrrr..',
    '.rgffffrr.',
    '.rffffffr.',
    '.rpffffpr.',
    '..rffffr..',
    '..rrrrrd..',
    '...rrdd...',
    '....dd....',
    '...dd.dd..',
  ],
  colors: { r: RED, d: SHADE, g: GLOW, f: FACE, p: 0xf49a90, b: 0xbfe6f8 },
  eyes: [[3, 4], [6, 4]],
  eyeColor: 0x1a1a2a,
  smile: [[4, 6], [5, 6]],
  smileColor: 0xc02a3a,
  tear: [3, 5],
  arms: { color: GLOW, down: [[1, 7], [8, 7]], up: [[1, 6], [8, 6]] },
  captions: { idle: 'PONYO', happy: 'HAM!' },
  critters: {
    // Sosuke: brown mop of hair, round face, blue shirt.
    Explore: { rows: ['.hhhhhh.', '.h####h.', '..####..', '..bbbb..'], eye: 1, colors: { '#': 0xf2c8a0, h: 0x6a4228, b: 0x5a8ad8 }, tint: 0x5a8ad8 },
    // Fujimoto: wild red hair, pale face, striped suit.
    Plan: { rows: ['.rrrrrr.', 'rr####rr', '..####..', '..svsv..'], eye: 1, colors: { '#': 0xeedcd0, r: 0xb83a3a, s: 0x6a6aa0, v: 0xe8e0f0 }, tint: 0xb83a3a },
    // A little Ponyo sister, red hood around a peach face, tail below.
    fork: { rows: ['..####..', '.#ffff#.', '.#ffff#.', '..#--#..'], eye: 1, feet: false, colors: { '#': RED, f: FACE }, tint: RED },
    // A giant fish-wave of the storm, foam on its crest.
    'general-purpose': { rows: ['..####w.', '.######w', '########', '.------.'], eye: 1, feet: false, arms: false, colors: { '#': 0x2a62b8, w: 0xdaf0ff }, tint: 0x2a62b8 },
    // Granmamare, the sea goddess: copper hair, glowing face, sea-green gown.
    other: { rows: ['.hhhhhh.', 'hh####hh', 'h.####.h', '..gggg..'], eye: 1, colors: { '#': 0xf6e4d4, h: 0xe07a3a, g: 0x3aa898 }, tint: 0x3aa898 },
  },
}
