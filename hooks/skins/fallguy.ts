import type { SkinLook } from './types'

const PINK = 0xff8fc8
const HI = 0xffc4e2
const SHADE = 0xd2609a
const FACE = 0xfff0e0

// A Fall Guys bean: a wobbly pink jellybean with a cream face window, two
// tiny black eyes, stubby arms, and the winner's gold crown on top.
export const look: SkinLook = {
  said: 'Buddy wobbles in as a Fall Guy. Qualified!',
  group: 'Games',
  rows: [
    '..y.yy.y..',
    '..yyyyyy..',
    '..hpppps..',
    '.hpppppps.',
    '.ppffffps.',
    '.pffffffs.',
    '.pffffffs.',
    '.ppffffps.',
    '.ppppppps.',
    '..ppppss..',
    '...ssss...',
  ],
  colors: { p: PINK, h: HI, s: SHADE, f: FACE, y: 0xf2c230 },
  eyes: [[3, 5], [6, 5]],
  eyeColor: 0x1a1a1a,
  smile: [[4, 7], [5, 7]],
  tear: [3, 6],
  arms: { color: PINK, down: [[0, 7], [9, 7]], up: [[0, 4], [9, 4]] },
  feet: { color: SHADE, at: [3, 6] },
  captions: { idle: 'WOBBLE', happy: 'WINNER!' },
  critters: {
    // A Pegwin: navy penguin with a white face and orange beak.
    Explore: { rows: ['..####..', '.#w##w#.', '.#woow#.', '..wwww..'], eye: 1, colors: { '#': 0x3a4a6a, w: 0xf2f2f2, o: 0xf09a30 }, tint: 0x5a7ab0 },
    // A golden egg from Egg Scramble.
    Plan: { rows: ['...##...', '..####..', '.######.', '..----..'], eye: 2, feet: false, arms: false, colors: { '#': 0xf2c230 }, tint: 0xf2c230 },
    // A mini bean, cream face window and all.
    fork: { rows: ['..####..', '.#ffff#.', '.######.', '..####..'], eye: 1, colors: { '#': PINK, f: FACE }, tint: PINK },
    // The Slime Climb slime, rising and grinning.
    'general-purpose': { rows: ['........', '..#..#..', '.######.', '########'], eye: 2, feet: false, arms: false, colors: { '#': 0xe040a0 }, tint: 0xe040a0 },
    // Big Yeetus: the giant hammer with a face.
    other: { rows: ['.######.', '.######.', '...hh...', '...hh...'], eye: 1, feet: false, arms: false, colors: { '#': 0xf06a3a, h: 0xc8b090 }, tint: 0xf06a3a },
  },
}
