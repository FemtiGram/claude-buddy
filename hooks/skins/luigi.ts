import type { SkinLook } from './types'

const GREEN = 0x2fa040
const DARK = 0x1d7a2c
const SKIN = 0xf2b98a
const BROWN = 0x5a3418
const BLUE = 0x2a4fb8
const YELLOW = 0xf2c230

// Luigi, Mario's taller brother: green cap with the white L, a longer face,
// mustache, green shirt under blue overalls with yellow buttons.
export const look: SkinLook = {
  said: "Buddy puts on the green cap: it's Luigi time!",
  group: 'Nintendo',
  rows: [
    '..ggwggg..',
    '.gggwwgggd',
    '.hhsssss..',
    '.hssssssn.',
    '.hsssssnn.',
    '..smmmmms.',
    '..gbggbg..',
    '..gbybyb..',
    '..bbbbbb..',
    '..bbbbbb..',
    '..bb..bb..',
  ],
  colors: { g: GREEN, d: DARK, w: 0xffffff, h: BROWN, s: SKIN, n: 0xe29a6c, m: 0x3a2010, b: BLUE, y: YELLOW },
  eyes: [[3, 3], [6, 3]],
  eyeColor: 0x1a2a6a,
  smile: [[2, 5], [8, 5]],
  tear: [2, 4],
  arms: { color: 0xdcdce4, down: [[1, 8], [8, 8]], up: [[0, 6], [9, 6]] },
  feet: { color: 0x6b3e1e, at: [2, 7] },
  captions: { idle: 'MARIO!', happy: 'LUIGI!' },
  critters: {
    // Polterpup: a floppy-eared blue ghost dog, tongue out.
    Explore: { rows: ['##....##', '.######.', '.##tt##.', '..-..-..'], eye: 1, feet: false, colors: { '#': 0x6ac8f0, t: 0xf07090 }, tint: 0x6ac8f0 },
    // Professor E. Gadd: white hair, round glasses, lab coat.
    Plan: { rows: ['..wwww..', '.w####w.', '.oo##oo.', '..wwww..'], eye: 2, colors: { '#': 0xf2c8a0, w: 0xf0f0f0, o: 0xbfe0ee }, tint: 0xbfe0ee },
    // Gooigi: a mini Luigi made of green goo.
    fork: { rows: ['..gggg..', '.gggggg.', '.######.', '..mmmm..'], eye: 2, colors: { '#': 0x6ae07a, g: 0x2a9a3a, m: 0x1d6a2a }, tint: 0x6ae07a },
    // Gold Ghost: a grinning yellow ghost with red eyes.
    'general-purpose': { rows: ['..####..', '.######.', '.#kkkk#.', '#.#..#.#'], eye: 1, feet: false, eyeColor: 0xd02020, colors: { '#': 0xe8c040, k: 0x3a2a10 }, tint: 0xe8c040 },
    // King Boo: a crowned white ghost with a purple tongue.
    other: { rows: ['..y..y..', '.yryyry.', '.######.', '.##pp##.'], eye: 2, feet: false, colors: { '#': 0xf0f0f6, y: 0xe8c030, r: 0xd02040, p: 0xb050d0 }, tint: 0xd8d8e8 },
  },
}
