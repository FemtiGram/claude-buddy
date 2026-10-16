import type { SkinLook } from './types'

const HI = 0xb4c0cc
const GREY = 0x7a8794
const SHADE = 0x4d5a66
const VISOR = 0x232a31
const RUST = 0xb04a2e

// The Iron Giant: a tall boxy metal robot in a 3-tone ramp, domed head with a
// dark visor and glowing yellow eyes, heavy jaw, wide shoulders and rivets.
export const look: SkinLook = {
  said: 'Buddy turns into the Iron Giant. Superb.',
  group: 'Film & TV',
  rows: [
    '..........',
    '..........',
    '...hhhh...',
    '..hggggg..',
    '..gvvvvd..',
    '..hgggdd..',
    'hhggggggdd',
    '.ggrggrgd.',
    '.gggggdgd.',
    '..gg..gd..',
  ],
  colors: { h: HI, g: GREY, d: SHADE, v: VISOR, r: RUST },
  eyes: [[3, 4], [6, 4]],
  eyeColor: 0xffe066,
  smile: [[3, 5], [6, 5]],
  tear: [3, 4],
  arms: {
    color: GREY,
    down: [[0, 7], [9, 7], [0, 8], [9, 8]],
    up: [[0, 5], [9, 5], [0, 4], [9, 4]],
  },
  feet: { color: SHADE, at: [2, 7] },
  captions: { happy: 'SUPERB', idle: 'HMM' },
  critters: {
    // A little robot with a scope.
    Explore: { rows: ['......ss', '.######s', '.######.', '..#..#..'], eye: 1, colors: { '#': GREY, s: RUST }, tint: GREY },
    // A clipboard.
    Plan: { rows: ['..cccc..', '.######.', '.######.', '.cccccc.'], eye: 1, feet: false, colors: { '#': 0xe9e4d0, c: 0x9a6b3a }, tint: 0x9a6b3a },
    // A bolt-sized copy: hex head, threaded shank.
    fork: { rows: ['.######.', '.######.', '..-##-..', '...--...'], eye: 1, feet: false, colors: { '#': 0xb0763a }, tint: 0xb0763a },
    // Hogarth in his green cap.
    'general-purpose': { rows: ['..cccc..', '.ccccccc', '.######.', '..####..'], eye: 2, colors: { '#': 0xf0c09a, c: 0x4a8f5a }, tint: 0x4a8f5a },
    // A squirrel with a big tail.
    other: { rows: ['tt.#..#.', 'tt#####.', 'tt#####.', '.t.#.#..'], eye: 1, colors: { '#': 0xc07a3a, t: 0xe0a060 }, tint: 0xc07a3a },
  },
}
