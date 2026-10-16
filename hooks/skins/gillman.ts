import type { SkinLook } from './types'

const SKIN = 0x6e9a72
const DARK = 0x4f7a5e
const BELLY = 0xc9c28a
const FIN = 0x2e5a3a
const TIP = 0xa8d8a0
const CHECK = 0x5f8d69

// The Gill-man: moss-green and scaly with a ridged head fin, big yellow eyes,
// gill frills, a fish snout, a pale belly, webbed claws and feet.
export const look: SkinLook = {
  said: 'Buddy turns into the Gill-man.',
  group: 'Horror',
  rows: [
    '...l..l...',
    '..lnnnnl..',
    '.GGGnnGGG.',
    'lGGGGGGGGl',
    'lGGGGGGGGl',
    '.GGGddGGG.',
    '..cBBBBG..',
    '..GBBBBc..',
    '..cBBBBG..',
    '..GcGGcG..',
    '..GG..GG..',
  ],
  colors: { G: SKIN, c: CHECK, d: DARK, n: FIN, l: TIP, B: BELLY },
  eyes: [[2, 3], [3, 3], [6, 3], [7, 3]],
  eyeColor: 0xe8d84a,
  smile: [[4, 5], [5, 5]],
  tear: [3, 4],
  arms: {
    color: DARK,
    down: [[1, 7], [8, 7]],
    up: [[0, 5], [9, 5]],
  },
  feet: { color: DARK, at: [2, 7] },
  captions: { idle: 'SWIM', happy: 'NICE' },
  critters: {
    // A bubble with an eye in it.
    Explore: { rows: ['..cccc..', '.c####c.', '.c####c.', '..cccc..'], eye: 1, eyes: [3, 4], eyeColor: 0x3a3a2a, arms: false, feet: false, colors: { '#': 0xe8d84a, c: 0x7fc8d8 }, tint: 0x7fc8d8 },
    // A lily pad with a flower.
    Plan: { rows: ['...pp...', '.##.###.', '########', '.######.'], eye: 2, colors: { '#': 0x4f9a5e, p: 0xe58aa0 }, tint: 0x4f9a5e },
    // A tiny hatchling in its shell.
    fork: { rows: ['...yy...', '..####..', '.######.', 'w.w..w.w'], eye: 2, colors: { '#': SKIN, y: FIN, w: 0xe0d8c0 }, tint: SKIN },
    // A fish.
    'general-purpose': { rows: ['..###..#', '.######.', '.######.', '..###..#'], eye: 1, eyes: [2], arms: false, feet: false, colors: { '#': 0xd9a05b }, tint: 0xd9a05b },
    // A diving lantern.
    other: { rows: ['...mm...', '.mmmmmm.', '.m####m.', '.mmmmmm.'], eye: 2, colors: { '#': 0xe8d84a, m: 0x8a7a5a }, tint: 0xe8d84a },
  },
}
