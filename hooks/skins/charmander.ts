import type { SkinLook } from './types'

const ORANGE = 0xf28a30
const LIGHT = 0xffbd6a
const DARK = 0xc0561a
const CREAM = 0xf8dc98
const FLAME = 0xe8402a
const CORE = 0xffd040

// Charmander, the lizard Pokémon: orange with a light top, a cream belly and
// the flame burning on the tip of his tail, curling up beside him.
export const look: SkinLook = {
  said: 'Buddy lights his tail: Charmander, I choose you!',
  group: 'Pokémon',
  rows: [
    '........r.',
    '.......ryr',
    '..hhoo.ryr',
    '.hooood.y.',
    '.oooood.o.',
    '.ooooddo..',
    '..occd.o..',
    '..occddo..',
    '..oodd....',
  ],
  colors: { o: ORANGE, h: LIGHT, d: DARK, c: CREAM, r: FLAME, y: CORE },
  eyes: [[2, 4], [5, 4]],
  eyeColor: 0x1c2450,
  smile: [[3, 5], [4, 5]],
  tear: [2, 5],
  arms: { color: ORANGE, down: [[1, 6], [6, 6]], up: [[0, 3], [7, 3]] },
  feet: { color: DARK, at: [2, 5] },
  captions: { idle: 'CHAR', happy: 'CHARRR!' },
  critters: {
    // Vulpix: a red-brown fox with a curl of orange tails.
    Explore: { rows: ['.#....#.', '.######o', '..####oo', '..-##-o.'], eye: 1, eyes: [2, 5], colors: { '#': 0xc8603a, o: 0xf0a040 }, tint: 0xc8603a },
    // Ponyta: a cream pony with a flaming mane.
    Plan: { rows: ['.ry.....', 'ry###...', '.######.', '.-#..#-.'], eye: 1, eyes: [3], feet: false, colors: { '#': 0xf4e4b8, r: FLAME, y: CORE }, tint: 0xff9a40 },
    // A little Charmander with his tail lit.
    fork: { rows: ['......r.', '.####.y.', '.######.', '..c##c..'], eye: 1, eyes: [2, 4], colors: { '#': ORANGE, c: CREAM, r: FLAME, y: CORE }, tint: ORANGE },
    // Growlithe: orange pup with black stripes and a cream ruff.
    'general-purpose': { rows: ['.cc..cc.', '.######.', '.k#cc#k.', '.cccccc.'], eye: 1, colors: { '#': 0xf08a3a, c: 0xf4e0b0, k: 0x2a2020 }, tint: 0xf08a3a },
    // Charizard: wings spread, cream belly, all grown up.
    other: { rows: ['t.####.t', 'tt####tt', '.##cc##.', '..#cc#..'], eye: 0, eyes: [3, 4], colors: { '#': 0xe8782a, t: 0x2a8a8a, c: CREAM }, tint: 0xe8782a },
  },
}
