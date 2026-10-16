import type { SkinLook } from './types'

const FUR = 0x8a5a34
const LIGHT = 0xb07a4a
const DARK = 0x5e3c22
const HORN = 0xeadcb8
const MUZZLE = 0xd8b894

// A Tauren of Mulgore: a big brown bull with two ivory horns curving up,
// floppy ears, a pale muzzle with a gold ring through the nose, broad dark
// shoulders and a leather kilt with a red bead.
export const look: SkinLook = {
  said: 'Buddy turns into a Tauren. Moo.',
  group: 'Warcraft',
  rows: [
    'H........H',
    'H........H',
    'HHLLffffHH',
    'eeLfffffee',
    '..ffffff..',
    '..fmmmmf..',
    '..mnmmnm..',
    '.DDfggfDD.',
    'DDfffffDDD',
    '.DbbrbbbD.',
    '..bbbbbb..',
  ],
  colors: { H: HORN, L: LIGHT, f: FUR, e: DARK, D: DARK, m: MUZZLE, n: 0x3a2418, g: 0xf2c230, b: 0x6a4a2a, r: 0xd0342c },
  eyes: [[3, 4], [6, 4]],
  eyeColor: 0x1a0e08,
  smile: [[4, 6], [5, 6]],
  tear: [2, 4],
  arms: { color: FUR, down: [[0, 9], [9, 9]], up: [[0, 6], [9, 6]] },
  feet: { color: 0x3a2a1a, at: [3, 6] },
  captions: { idle: 'MOO', happy: 'STOMP!' },
  critters: {
    // Plainstrider: a big tan bird with a yellow beak.
    Explore: { rows: ['..####..', '.######.', '..#yy#..', '.######.'], eye: 1, colors: { '#': 0xb89a6a, y: 0xf0b030 }, tint: 0xb89a6a },
    // Kodo: a grey-brown beast with a plated head and horns.
    Plan: { rows: ['h.pppp.h', '.######.', '########', '##-##-##'], eye: 1, colors: { '#': 0x8a7a6a, p: 0x5e5248, h: HORN }, tint: 0x8a7a6a },
    // A little Tauren: ivory horns, muzzle and nose ring.
    fork: { rows: ['w......w', 'ww####ww', '.##mm##.', '..#gg#..'], eye: 1, colors: { '#': FUR, w: HORN, m: MUZZLE, g: 0xf2c230 }, tint: FUR },
    // A carved wooden totem with painted wings.
    'general-purpose': { rows: ['rr.##.rr', '.r####r.', '..#--#..', '..####..'], eye: 1, feet: false, arms: false, colors: { '#': 0xa0643a, r: 0x3aa0a0 }, tint: 0x3aa0a0 },
    // Quilboar: a pig-man with thorny spines and tusks.
    other: { rows: ['s.s..s.s', '.######.', '.##nn##.', '.w####w.'], eye: 1, colors: { '#': 0xc08068, s: 0x5a3a20, n: 0x8a4a3a, w: 0xf0e8d0 }, tint: 0xc08068 },
  },
}
