import type { SkinLook } from './types'

const SHELL = 0x7a8ca0
const GROOVE = 0x3e4e68
const GLOW = 0x40d0ff

// An Ohmu of the Sea of Corruption, head on: a broad arch of grey-blue
// armour plates stepping down like an armadillo's shell, a band of many
// small glowing blue eyes, and under them the golden tendrils that light
// up when it's pleased.
export const look: SkinLook = {
  said: 'Buddy curls up in grey-blue armour: an Ohmu, eyes glowing calm and blue.',
  group: 'Ghibli',
  rows: [
    '..........',
    '..hhhhgg..',
    '.hlhglglg.',
    'hhlgglgggd',
    'dbbbbbbbbd',
    'glglglglgd',
    'bbbbbbbbbb',
    'kekekkekek',
    'dkkkkkkkkd',
    '.t.t..t.t.',
  ],
  colors: { h: 0xc8d6e4, l: 0xa4b4c8, g: SHELL, d: 0x5a6a80, b: GROOVE, k: 0x1c2230, e: GLOW, t: 0x8a6a28 },
  eyes: [[3, 7], [6, 7]],
  eyeColor: GLOW,
  smile: [[1, 9], [3, 9], [6, 9], [8, 9]],
  smileColor: 0xffc840,
  tear: [4, 8],
  feet: { color: GROOVE, at: [2, 4, 5, 7] },
  captions: { idle: 'CALM', happy: 'GLOW!' },
  critters: {
    // An Ushiabu, a winged insect of the toxic jungle.
    Explore: { rows: ['ww....ww', '.w####w.', '.######.', '.-.--.-.'], eye: 2, feet: false, colors: { '#': 0x8a9a5a, w: 0xd8e8e0 }, tint: 0x8a9a5a },
    // Teto the fox-squirrel: cream, big ears, a dark nose.
    Plan: { rows: ['#......#', '##....##', '.######.', '..#kk#..'], eye: 2, colors: { '#': 0xe8c888, k: 0x3a2a20 }, tint: 0xe8c888 },
    // The baby Ohmu, its many eyes angry red.
    fork: { rows: ['........', '..####..', '.######.', '-r-rr-r-'], eye: 3, eyeColor: 0xff3a30, colors: { '#': 0x8a9cb0, r: 0xff3a30 }, tint: 0xff5a48 },
    // Nausicaä: auburn hair, in blue.
    'general-purpose': { rows: ['.hhhhhh.', '.h####h.', '..####..', '.bbbbbb.'], eye: 1, colors: { '#': 0xf2cca8, h: 0xa0522d, b: 0x3a7ad8 }, tint: 0x3a7ad8 },
    // A God Warrior: a hulking giant with glowing eyes and a burning mouth.
    other: { rows: ['..####..', '.######.', '.##oo##.', '.#.##.#.'], eye: 1, eyeColor: 0xfff080, colors: { '#': 0x6a5a4a, o: 0xff8a2a }, tint: 0xff8a2a },
  },
}
