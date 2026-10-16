import type { SkinLook } from './types'

const GOLD = 0xf8e050
const SKIN = 0xf5cfa0
const BLUE = 0x2a4ab0
const PINK = 0xe03060

// Sailor Moon (Usagi): golden odango buns with long twin tails, red tiara
// gem, white sailor top, blue collar and skirt, red-pink bow, red boots.
export const look: SkinLook = {
  said: 'Buddy turns into Sailor Moon!',
  group: 'Anime',
  rows: [
    '.yy....yy.',
    'yyyyyyyyyy',
    'yyyyrryyyy',
    'yyssssssyy',
    'yyssssssyy',
    'y.ssssss.y',
    'yybbbbbbyy',
    'yywwppwwyy',
    'y.wwwwww.y',
    'y.uuuuuu.y',
  ],
  colors: { y: GOLD, r: 0xe03030, s: SKIN, b: BLUE, w: 0xeceaf0, p: PINK, u: 0x3a5ac8 },
  eyes: [[3, 4], [6, 4]],
  eyeColor: 0x2a6ad0,
  smile: [[4, 5], [5, 5]],
  tear: [3, 5],
  arms: { color: SKIN, down: [[1, 8], [8, 8]], up: [[1, 5], [8, 5]] },
  feet: { color: PINK, at: [3, 6] },
  captions: { happy: 'MOON', idle: 'SHINE' },
  critters: {
    // Artemis: white cat.
    Explore: { rows: ['#.#..#.#', '.######.', '.######.', '..#--#..'], eye: 1, colors: { '#': 0xe8e4da }, tint: 0xe8e4da },
    // Luna: black-purple cat with a yellow crescent.
    Plan: { rows: ['##....##', '.##yy##.', '.######.', '..#--#..'], eye: 2, colors: { '#': 0x4a3a6a, y: 0xf0d040 }, tint: 0x7a6aa8 },
    // Chibiusa: pink buns.
    fork: { rows: ['pp.pp.pp', 'pppppppp', '.######.', '..#rr#..'], eye: 2, eyeColor: 0xc02050, colors: { '#': 0xf5cfa0, p: 0xf06aa0, r: 0xe03060 }, tint: 0xf06aa0 },
    // The moon wand: a pink heart on a gold stem.
    'general-purpose': { rows: ['.##.##..', '.#####..', '..###...', '...gg...'], eye: 1, feet: false, arms: false, colors: { '#': 0xe03060, g: 0xf0c030 }, tint: 0xe03060 },
    // A rabbit: tall ears with pink insides.
    other: { rows: ['.#p..p#.', '.#p..p#.', '.######.', '..#pp#..'], eye: 2, colors: { '#': 0xd8c8e0, p: 0xf0a0c0 }, tint: 0xd8c8e0 },
  },
}
