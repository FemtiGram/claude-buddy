import type { SkinLook } from './types'

const SKIN = 0xc4ac98
const LIT = 0xdcc8b6
const EDGE = 0x8e7a68
const RAG = 0xd8d0b8

// Dobby the house-elf: a small bald head between huge drooping bat ears with
// pink insides, giant green eyes, a long pointy nose, a dingy stained
// pillowcase for clothes and the sock that set him free.
export const look: SkinLook = {
  said: 'Buddy gets a sock: Dobby is free!',
  group: 'Fantasy',
  rows: [
    '...hssd...',
    '.ddhsssdd.',
    'dpppsssppd',
    'd.ggssgg.d',
    '..dsnnsd..',
    '...dssd...',
    '..tttttt.w',
    '..tttutt.k',
    '..tuttut.w',
    '..t.tt.tww',
  ],
  colors: { s: SKIN, h: LIT, d: EDGE, p: 0xe890a0, g: 0x5ad040, n: 0xa89078, t: RAG, u: 0xa09478, w: 0xe4e4ec, k: 0x6a6a7c },
  eyes: [[3, 3], [6, 3]],
  eyeColor: 0x1a2a10,
  smile: [[3, 4], [4, 5], [5, 5], [6, 4]],
  tear: [2, 4],
  arms: { color: SKIN, down: [[1, 7], [8, 6]], up: [[1, 5], [8, 5]] },
  feet: { color: SKIN, at: [3, 6] },
  captions: { idle: 'DOBBY', happy: 'FREE!' },
  critters: {
    // A Pygmy Puff: a pink fluffball.
    Explore: { rows: ['.#.##.#.', '########', '########', '.######.'], eye: 1, arms: false, colors: { '#': 0xf080b8 }, tint: 0xf080b8 },
    // A Mandrake: leafy top over a screaming root baby.
    Plan: { rows: ['.g.gg.g.', '..gggg..', '.######.', '.##kk##.'], eye: 2, colors: { '#': 0xc8a070, g: 0x4a9a3a, k: 0x3a2a1a }, tint: 0x4a9a3a },
    // A mini Dobby: bat ears out wide, green eyes, pillowcase.
    fork: { rows: ['pp.##.pp', 'd.g##g.d', '..####..', '..tttt..'], eye: 1, colors: { '#': SKIN, p: 0xe890a0, d: EDGE, g: 0x5ad040, t: RAG }, tint: SKIN },
    // A Dementor: a ragged hooded cloak with a cold glow inside.
    'general-purpose': { rows: ['..####..', '.#kkkk#.', '.######.', '#.#.#.#.'], eye: 1, eyeColor: 0xc8d0e0, feet: false, colors: { '#': 0x5a5a6a, k: 0x1a1a22 }, tint: 0x8a8aa0 },
    // A Cornish pixie: electric blue, pointy ears, buzzing wings.
    other: { rows: ['#..##..#', '.######.', 'w######w', '..#..#..'], eye: 1, feet: false, colors: { '#': 0x3a7af0, w: 0xc8e0f8 }, tint: 0x3a7af0 },
  },
}
