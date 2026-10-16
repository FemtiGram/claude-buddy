import type { SkinLook } from './types'

const HAT = 0xf2f2f0
const EDGE = 0xa8b0b8
const SKIN = 0xf6c9a0
const SHIRT = 0x6ab4ec
const SHORTS = 0x2a4aa0
const PACK = 0x3aa850

// Finn the Human: the white bear hat with its two little ears and the round
// face hole, a light blue shirt with green backpack straps, dark blue shorts.
export const look: SkinLook = {
  said: 'Buddy pulls on the bear hat: mathematical!',
  group: 'TV cartoons',
  rows: [
    '.ew....we.',
    '.hwwwwwww.',
    'ehwwwwwwwe',
    'ewsssssswe',
    'ewsssssswe',
    'ewsssssswe',
    '.ewbbbbwe.',
    '..bpbbpb..',
    '..dddddd..',
    '..ss..ss..',
  ],
  colors: { w: HAT, h: 0xffffff, e: EDGE, s: SKIN, b: SHIRT, p: PACK, d: SHORTS },
  eyes: [[3, 4], [6, 4]],
  smile: [[3, 5], [4, 5], [5, 5], [6, 5]],
  tear: [2, 5],
  arms: { color: SKIN, down: [[1, 7], [8, 7]], up: [[0, 6], [9, 6]] },
  feet: { color: 0x2a2a30, at: [3, 6] },
  captions: { happy: 'MATH!', idle: 'HEY JAKE' },
  critters: {
    // Lady Rainicorn: a white horn and a rainbow body, flying.
    Explore: { rows: ['.w......', '.##.....', '.##oygbp', '..#oygbp'], eye: 1, eyes: [2], feet: false, colors: { '#': 0xe85060, w: 0xf4f4f4, o: 0xf09040, y: 0xf2d040, g: 0x50c060, b: 0x4a8ae0, p: 0xa060d0 }, tint: 0xe85060 },
    // Princess Bubblegum: pink hair, a little gold crown, purple dress.
    Plan: { rows: ['...yy...', '.######.', '#ssssss#', '#.pppp.#'], eye: 2, colors: { '#': 0xf07aa8, s: 0xf8d0dc, p: 0xb058c0, y: 0xf2c230 }, tint: 0xf07aa8 },
    // A mini Finn in his bear hat.
    fork: { rows: ['.#....#.', '########', '#ssssss#', '.bbbbbb.'], eye: 2, colors: { '#': HAT, s: SKIN, b: SHIRT }, tint: SHIRT },
    // The Ice King: blue skin, gold crown with red gems, long nose, white beard.
    'general-purpose': { rows: ['.yyryyy.', '.######.', '.##nn##.', '.wwwwww.'], eye: 1, colors: { '#': 0x78aee6, y: 0xf2c230, r: 0xd83040, n: 0x5a88c8, w: 0xf0f0f8 }, tint: 0x78aee6 },
    // Gunter the penguin: black back, white front, yellow beak.
    other: { rows: ['..####..', '.#wwww#.', '.#wyyw#.', '.#wwww#.'], eye: 1, colors: { '#': 0x50505e, w: 0xf0f0f0, y: 0xf2b030 }, tint: 0x8888a0 },
  },
}
