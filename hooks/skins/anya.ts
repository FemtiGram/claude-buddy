import type { SkinLook } from './types'

const HAIR = 0xf0a0b8
const HAIR_D = 0xd07890
const HORN = 0x3a3a48
const SKIN = 0xffd8b8
const COLLAR = 0xe6e6ee
const GOLD = 0xd8b040
const DRESS = 0x3a3a4c
const SHOE = 0x6a4a40

// Anya Forger: pink hair with two black horn ornaments, big green eyes, a
// smug smile, Eden Academy dress with white collar and gold trim.
export const look: SkinLook = {
  said: 'Buddy turns into Anya. Waku waku!',
  group: 'Anime',
  rows: [
    '..k....k..',
    '..k....k..',
    '..hhhhhh..',
    '.hhhhhhhh.',
    '.hhsssshh.',
    '.hssssssh.',
    '.hssssssh.',
    '..wwggww..',
    '..dddddd..',
    '.gggggggg.',
  ],
  colors: { h: HAIR, k: HORN, s: SKIN, w: COLLAR, g: GOLD, d: DRESS },
  eyes: [[3, 5], [6, 5]],
  eyeColor: 0x2cb050,
  smile: [[4, 6], [5, 6]],
  tear: [3, 6],
  arms: { color: SKIN, down: [[0, 8], [9, 8]], up: [[0, 6], [9, 6]] },
  feet: { color: SHOE, at: [3, 6] },
  captions: { happy: 'HEH!', idle: 'HMM' },
  critters: {
    // Bond: big white fluffy dog.
    Explore: { rows: ['#.#..#.#', '########', '########', '.##--##.'], eye: 1, colors: { '#': 0xe6e2da }, tint: 0xe6e2da },
    // Loid's spy file.
    Plan: { rows: ['.####...', '########', '#wwwwww#', '########'], eye: 2, feet: false, arms: false, colors: { '#': 0xd8b068, w: 0xe6e6ee }, tint: 0xd8b068 },
    // A mini Anya.
    fork: { rows: ['k.####.k', '.######.', '.#ssss#.', '..-##-..'], eye: 2, eyeColor: 0x2cb050, colors: { '#': 0xf0a0b8, k: 0x3a3a48, s: 0xffd8b8 }, tint: 0xf0a0b8 },
    // A peanut.
    'general-purpose': { rows: ['..####..', '.######.', '..####..', '.######.'], eye: 1, feet: false, arms: false, colors: { '#': 0xd8b078 }, tint: 0xd8b078 },
    // A red rose.
    other: { rows: ['..####..', '.##--##.', '..####..', '...gg...'], eye: 1, feet: false, arms: false, colors: { '#': 0xe04858, g: 0x3a9a50 }, tint: 0xe04858 },
  },
}
