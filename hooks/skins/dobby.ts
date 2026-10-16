import type { SkinLook } from './types'

const SKIN = 0xbcab92
const RAG = 0xa89878

// Dobby the house-elf: huge bat ears with pink insides, giant green eyes,
// a pointy nose, a pillowcase for clothes and the sock that set him free.
export const look: SkinLook = {
  said: 'Buddy gets a sock: Dobby is free!',
  group: 'Fantasy',
  rows: [
    's........s',
    'sp.ssss.ps',
    '.ppsssspp.',
    '..ggssgg..',
    '..ssnnss..',
    '...ssss...',
    '..tttttt.w',
    '..tuttut.k',
    '..ttttut.k',
  ],
  colors: { s: SKIN, p: 0xd88a8a, g: 0x6ad048, n: 0x9a8670, t: RAG, u: 0x7a6a4e, w: 0xf0f0f0, k: 0x4a4a5a },
  eyes: [[3, 3], [6, 3]],
  eyeColor: 0x1a2a10,
  smile: [[3, 4], [4, 5], [5, 5], [6, 4]],
  tear: [2, 4],
  arms: { color: SKIN, down: [[1, 7], [9, 5]], up: [[1, 5], [8, 4]] },
  feet: { color: SKIN, at: [3, 6] },
  captions: { idle: 'DOBBY', happy: 'FREE!' },
  critters: {
    // A Pygmy Puff: a pink fluffball.
    Explore: { rows: ['.#.##.#.', '########', '########', '.######.'], eye: 1, arms: false, colors: { '#': 0xf080b8 }, tint: 0xf080b8 },
    // A Mandrake: leafy top over a screaming root baby.
    Plan: { rows: ['.g.gg.g.', '..gggg..', '.######.', '.##kk##.'], eye: 2, colors: { '#': 0xc8a070, g: 0x4a9a3a, k: 0x3a2a1a }, tint: 0x4a9a3a },
    // A mini Dobby: ears out wide, green eyes, pillowcase.
    fork: { rows: ['#......#', '-######-', '.#g##g#.', '.tttttt.'], eye: 2, colors: { '#': SKIN, g: 0x6ad048, t: RAG }, tint: SKIN },
    // A Dementor: a ragged hooded cloak with a cold glow inside.
    'general-purpose': { rows: ['..####..', '.#kkkk#.', '.######.', '#.#.#.#.'], eye: 1, eyeColor: 0xc8d0e0, feet: false, colors: { '#': 0x5a5a6a, k: 0x1a1a22 }, tint: 0x8a8aa0 },
    // A Cornish pixie: electric blue, pointy ears, buzzing wings.
    other: { rows: ['#..##..#', '.######.', 'w######w', '..#..#..'], eye: 1, feet: false, colors: { '#': 0x3a7af0, w: 0xc8e0f8 }, tint: 0x3a7af0 },
  },
}
