import type { SkinLook } from './types'

const GREY = 0x9a9aac
const LIGHT = 0xc4c4d2
const DARK = 0x6a6a80
const MUZZLE = 0xf0ece4
const GLOVE = 0xfafafa

// Bugs Bunny: grey fur with a pale highlight, two tall ears lined pink,
// big white eye patches, a pink nose over the cream muzzle and the famous
// buck teeth, a white belly, white gloves and a carrot in hand.
export const look: SkinLook = {
  said: "Buddy chomps a carrot: eh, what's up, doc?",
  group: 'TV cartoons',
  rows: [
    '..Lp..pg..',
    '..gp..pD..',
    '..gp..pD..',
    '..LggggD..',
    '.LwwggwwD.',
    '.gwwgggwD.',
    '.gmmnnmmD.',
    '..mkttkm..',
    '..gmmmmD.v',
    '..gmmmmD.o',
    '..gmmmmD.o',
  ],
  colors: { g: GREY, L: LIGHT, D: DARK, p: 0xf0a0b8, w: MUZZLE, m: MUZZLE, n: 0xe87898, k: 0x4a3038, t: 0xffffff, o: 0xf08a1e, v: 0x4aa83a },
  eyes: [[3, 4], [6, 4]],
  eyeColor: 0x2a2a34,
  smile: [[2, 7], [7, 7]],
  tear: [2, 5],
  arms: { color: GLOVE, down: [[1, 9], [8, 9]], up: [[1, 7], [8, 7]] },
  feet: { color: LIGHT, at: [1, 2, 3, 6, 7, 8] },
  captions: { idle: 'WHATS UP', happy: 'STINKER' },
  critters: {
    // Elmer Fudd: a brown hunting cap with ear flaps over a pink face.
    Explore: { rows: ['..hhhh..', '.hhhhhh.', '.h####h.', '..jjjj..'], eye: 2, colors: { '#': 0xf2c8a8, h: 0x8a6a40, j: 0x6a7a4a }, tint: 0x8a6a40 },
    // Marvin the Martian: a green helmet with its yellow brush, a black face
    // with white eyes, a red skirt.
    Plan: { rows: ['..yyyy..', '.gggggg.', '.g####g.', '..rrrr..'], eye: 2, eyeColor: 0xf4f4ec, colors: { '#': 0x262630, g: 0x3fa04a, y: 0xf0c830, r: 0xd0303a }, tint: 0x3fa04a },
    // A little Bugs: two ears, a grey head, a white muzzle.
    fork: { rows: ['.p#..#p.', '.######.', '.#wwww#.', '..wwww..'], eye: 1, colors: { '#': GREY, p: 0xf0a0b8, w: MUZZLE }, tint: GREY },
    // Yosemite Sam: a huge brown hat and a huge red mustache.
    'general-purpose': { rows: ['..hhhh..', 'hhhhhhhh', '.######.', 'rrrrrrrr'], eye: 2, colors: { '#': 0xf0c098, h: 0x7a5030, r: 0xd84a1c }, tint: 0xd84a1c },
    // Gossamer: a big red hairy monster.
    other: { rows: ['.#.##.#.', '.######.', '########', '.######.'], eye: 2, eyeColor: 0xf4f0e0, colors: { '#': 0xe03a40 }, tint: 0xe03a40 },
  },
}
