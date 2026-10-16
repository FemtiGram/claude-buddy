import type { SkinLook } from './types'

const BLACK = 0x2c2c36
const RIM = 0x6a6a7e
const BILL = 0xf2a020
const BILL_DARK = 0xc87014
const RING = 0xeeeeea

// Daffy Duck: a black duck with a grey rim so he shows on a dark terminal,
// a little tuft on top, big white eyes, the wide orange bill, the white ring
// round his neck, orange feet.
export const look: SkinLook = {
  said: "Buddy turns into Daffy Duck. You're desssspicable!",
  group: 'TV cartoons',
  rows: [
    '....R.....',
    '...RkR....',
    '..RkkkkR..',
    '.RkwwkwwR.',
    '.RkwwkwwR.',
    '.oooooooo.',
    '..ObbbbO..',
    '..RkkkkR..',
    '..wwwwww..',
    '.RkkkkkkR.',
    '.RkkkkkkR.',
  ],
  colors: { k: BLACK, R: RIM, w: RING, o: BILL, O: BILL_DARK, b: BILL_DARK },
  eyes: [[4, 3], [6, 3]],
  eyeColor: 0x1a1a20,
  smile: [[3, 6], [4, 6], [5, 6], [6, 6]],
  tear: [3, 4],
  arms: { color: RIM, down: [[0, 9], [9, 9]], up: [[1, 7], [8, 7]] },
  feet: { color: BILL, at: [1, 2, 3, 6, 7, 8] },
  captions: { idle: 'MINE!', happy: 'WOOHOO!' },
  critters: {
    // The Road Runner: blue-purple with a crest, an orange beak. Beep beep.
    Explore: { rows: ['.#.#....', '..####..', '..###oo.', '.-####..'], eye: 2, eyes: [3, 4], colors: { '#': 0x5a6ad8, o: 0xf0a020 }, tint: 0x5a6ad8 },
    // Porky Pig: pink, a snout, a blue jacket and a red bow tie.
    Plan: { rows: ['.#....#.', '.######.', '.##nn##.', '.bbrrbb.'], eye: 1, colors: { '#': 0xf4b0c0, n: 0xe0809a, b: 0x3050b0, r: 0xd03030 }, tint: 0xf4b0c0 },
    // A little Daffy: black, white eyes, an orange bill.
    fork: { rows: ['...#....', '.ww##ww.', '.oooooo.', '..####..'], eye: 1, colors: { '#': 0x3e3e4c, w: RING, o: BILL }, tint: BILL },
    // Speedy Gonzales: a brown mouse under a big yellow sombrero.
    'general-purpose': { rows: ['..yyyy..', 'yyyyyyyy', '#.####.#', '..wrrw..'], eye: 2, colors: { '#': 0x9a6a3a, y: 0xf0d040, w: 0xf0f0e8, r: 0xd03030 }, tint: 0xf0d040 },
    // Tweety: a big yellow head with blue eyes and an orange beak.
    other: { rows: ['..####..', '.######.', '.##oo##.', '..####..'], eye: 1, eyeColor: 0x3a7ad0, colors: { '#': 0xf8d820, o: 0xf09020 }, tint: 0xf8d820 },
  },
}
