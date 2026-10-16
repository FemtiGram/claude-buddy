import type { SkinLook } from './types'

const BLUE = 0x7cc6ea
const LIGHT = 0xc4ecff
const DARK = 0x3a86b8
const SHELL = 0xa8602a
const RIM = 0xf4e8c4
const BELLY = 0xf2d478
const PLATE = 0xc8a048

// Squirtle, the tiny turtle Pokémon: a round light-blue head with maroon
// eyes, a brown shell with its cream rim around a yellow belly, and a curly
// tail.
export const look: SkinLook = {
  said: 'Buddy pulls on a shell: Squirtle, I choose you!',
  group: 'Pokémon',
  rows: [
    '..........',
    '..........',
    '...hhbb...',
    '..hbbbbd..',
    '..bbbbbd..',
    '..bbbbdd..',
    '.scyyyycs.',
    '.scppppcs.',
    '.scyyyycst',
    '..cppppc.t',
  ],
  colors: { b: BLUE, h: LIGHT, d: DARK, s: SHELL, c: RIM, y: BELLY, p: PLATE, t: DARK },
  eyes: [[3, 4], [6, 4]],
  eyeColor: 0x6a1420,
  smile: [[4, 5], [5, 5]],
  tear: [3, 5],
  arms: { color: BLUE, down: [[0, 6], [9, 6]], up: [[1, 4], [8, 4]] },
  feet: { color: BLUE, at: [2, 3, 6, 7] },
  captions: { idle: 'SQUIRT', happy: 'SQUIRT!' },
  critters: {
    // Psyduck: a yellow duck clutching its aching head.
    Explore: { rows: ['..k..k..', '.######.', '.##oo##.', '..####..'], eye: 1, eyes: [2, 5], colors: { '#': 0xf4d040, k: 0x2a2a2a, o: 0xf4e4b0 }, tint: 0xf4d040 },
    // Slowpoke: pink, dozy, mouth hanging open.
    Plan: { rows: ['.######.', '.######.', '.#cccc#.', '.-#..#-.'], eye: 1, eyeColor: 0x8a4a5a, colors: { '#': 0xf0a0b4, c: 0xf8e4c8 }, tint: 0xf0a0b4 },
    // A little Squirtle in his shell.
    fork: { rows: ['..####..', '.######.', 'sccyycc.', '.cyyyyct'], eye: 1, eyes: [2, 5], colors: { '#': BLUE, s: SHELL, c: RIM, y: BELLY, t: DARK }, tint: BLUE },
    // Poliwag: a round blue tadpole with the swirl on its belly.
    'general-purpose': { rows: ['..####..', '.######.', '#wkkww#.', '.#wwkw#.'], eye: 1, eyes: [2, 5], arms: false, colors: { '#': 0x3a6ad0, w: 0xf0f0f8, k: 0x1a1a3a }, tint: 0x5a8ae0 },
    // Krabby: an orange crab with one big claw up.
    other: { rows: ['oo....oo', 'o.####.o', '.######.', '.cccccc.'], eye: 1, eyes: [2, 5], colors: { '#': 0xe0602a, o: 0xe0602a, c: 0xf4d8b0 }, tint: 0xe0602a },
  },
}
