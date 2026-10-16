import type { SkinLook } from './types'

const HAIR = 0xd2482a
const HAIRL = 0xf07a40
const FACE = 0xec8a8a
const DARK = 0x3a1a14

// Animal, the Electric Mayhem's drummer: a wild mop of red-orange hair spiking
// up, one bushy black unibrow over white eyes, a pink face and nose, a huge
// toothy grin, and the studded collar on its chain.
export const look: SkinLook = {
  said: 'Buddy turns into Animal. DRUMS! DRUMS!',
  group: 'Muppets',
  rows: [
    'h.h.hh.h.h',
    'hHHhhhhhhh',
    'hHbbbbbbhh',
    'hfwwffwwfh',
    'hfffnnfffh',
    'hmttttttmh',
    '.hmmmmmmh.',
    '..cSccSc..',
    '..hhhhhh..',
    '..hHhhhh..',
  ],
  colors: { h: HAIR, H: HAIRL, f: FACE, b: DARK, w: 0xf6f2ea, n: 0xc8506a, m: 0x5a1020, t: 0xf4f0e0, c: 0x3a3a44, S: 0xd0d0d8 },
  eyes: [[3, 3], [6, 3]],
  eyeColor: 0x1a1a1a,
  smile: [[2, 4], [7, 4]],
  tear: [2, 4],
  arms: { color: FACE, down: [[1, 8], [8, 8]], up: [[0, 6], [9, 6]] },
  feet: { color: DARK, at: [3, 6] },
  captions: { idle: 'DRUM', happy: 'ANIMAL!' },
  critters: {
    // The Swedish Chef: a tall white toque over bushy brows and mustache.
    Explore: { rows: ['..wwww..', '.wwwwww.', '.######.', '.#mmmm#.'], eye: 2, eyeColor: 0x6a4428, colors: { '#': 0xe8b48a, w: 0xf2f2f2, m: 0x8a5a30 }, tint: 0xe8b48a },
    // Dr. Bunsen Honeydew: a bald round head, glasses with no eyes behind.
    Plan: { rows: ['..####..', '.######.', '.k#kk#k.', '..#--#..'], eye: 2, eyeColor: 0xe8f4ff, colors: { '#': 0xd8d880, k: 0x2a2a2a }, tint: 0xd8d880 },
    // A mini Animal: hair, unibrow, pink face, open mouth.
    fork: { rows: ['h.hhhh.h', 'hbbbbbbh', 'h######h', '.hmmmmh.'], eye: 2, colors: { '#': FACE, h: HAIR, b: DARK, m: 0x5a1020 }, tint: HAIR },
    // Beaker: flame of orange hair over a tall peach face, big red nose.
    'general-purpose': { rows: ['.o.oo.o.', '.oooooo.', '.######.', '..#rr#..'], eye: 2, colors: { '#': 0xf0d0a0, o: 0xe8701a, r: 0xe05a3a }, tint: 0xe8701a },
    // Janice: long blonde hair, pale face, big pink lips.
    other: { rows: ['.yyyyyy.', 'yy####yy', 'yy#pp#yy', 'y.####.y'], eye: 1, colors: { '#': 0xf0c8b0, y: 0xf0d860, p: 0xe0507a }, tint: 0xf0d860 },
  },
}
