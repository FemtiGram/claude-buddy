import type { SkinLook } from './types'

const YELLOW = 0xf8e43a
const EDGE = 0xb8a820
const PORE = 0x9aa82a
const WHITE = 0xf4f4f0
const BROWN = 0x8a5a2a

// SpongeBob SquarePants: a square yellow sponge with green-gold pores and a
// darker edge, huge round eyes, buck teeth in a wide grin, a white shirt with
// a red tie over square brown pants.
export const look: SkinLook = {
  said: "Buddy turns into SpongeBob. I'm ready!",
  group: 'TV cartoons',
  rows: [
    '..........',
    '.yy.yy.yy.',
    '.hyyyyyye.',
    '.wwwywwwe.',
    '.wwwywwwe.',
    '.pyyyyype.',
    '.ymmmmmye.',
    '.yyttyype.',
    '.wwwrwwwe.',
    '.sssrssss.',
    '.ssssssss.',
  ],
  colors: { y: YELLOW, h: 0xfff6a0, e: EDGE, p: PORE, w: WHITE, m: 0x8a2a2a, t: WHITE, r: 0xd8302a, s: BROWN },
  eyes: [[2, 4], [6, 4]],
  eyeColor: 0x2a6ad8,
  smile: [[1, 5], [8, 5]],
  tear: [2, 5],
  arms: { color: YELLOW, down: [[0, 9], [9, 9]], up: [[0, 6], [9, 6]] },
  feet: { color: 0x2a2a2a, at: [2, 6] },
  captions: { idle: 'IM READY', happy: 'HAHAHA!' },
  critters: {
    // Sandy Cheeks: a brown squirrel in her glass diving helmet.
    Explore: { rows: ['.gggggg.', 'gg####gg', '.gg##gg.', '..wwww..'], eye: 1, colors: { '#': 0xa86a3a, g: 0xc8e8f4, w: WHITE }, tint: 0xa86a3a },
    // Squidward: pale teal head, the long drooping nose.
    Plan: { rows: ['.######.', '.######.', '...--...', '.bb--bb.'], eye: 1, colors: { '#': 0x9cc8bc, b: 0x8a6a4a }, tint: 0x9cc8bc },
    // A mini SpongeBob: square, big eyes, buck teeth, brown pants.
    fork: { rows: ['.######.', '.ww##ww.', '.##tt##.', '.ssssss.'], eye: 1, colors: { '#': YELLOW, w: WHITE, t: WHITE, s: BROWN }, tint: YELLOW },
    // Mr. Krabs: red crab on eye stalks, big claws.
    'general-purpose': { rows: ['.#....#.', '.#....#.', 'c######c', '..####..'], eye: 0, eyes: [1, 6], eyeColor: 0x1a1a1a, arms: false, colors: { '#': 0xd8402a, c: 0xa02a1a }, tint: 0xd8402a },
    // Gary the snail: blue body, eye stalks, pink spiral shell.
    other: { rows: ['.#.#....', '.#.#ppp.', '.##pqpp.', '########'], eye: 0, eyes: [1, 3], arms: false, feet: false, colors: { '#': 0x7ac8e0, p: 0xe07a9a, q: 0x8a3a5a }, tint: 0xe07a9a },
  },
}
