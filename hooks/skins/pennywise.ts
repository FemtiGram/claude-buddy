import type { SkinLook } from './types'

const RED = 0xc2303a
const HAIR = 0xe4572e
const SKIN = 0xf4f1e8
const SUIT = 0xcfd2d8

// Pennywise the clown: a white bald dome with tufts of orange hair, yellow eyes,
// red lines down from them and a red smile, a silver puffy suit with red
// pompoms and a red balloon on a string beside him.
export const look: SkinLook = {
  said: 'Buddy turns into Pennywise. Want a balloon?',
  group: 'Horror',
  rows: [
    '........RR',
    '...###..RR',
    '..####d.RR',
    'HH####dH.R',
    'HH####dH.s',
    '.H#r#rdH.s',
    '..#mmmd..s',
    '.SSSpSSS.s',
    '.SSSSSSS.s',
    '.SSSpSSS.s',
  ],
  colors: { '#': SKIN, d: 0xd8d0bc, H: HAIR, r: RED, m: RED, R: RED, p: RED, S: SUIT, s: 0x8a8a99 },
  eyes: [[3, 4], [5, 4]],
  eyeColor: 0xe8c63a,
  smile: [[3, 6], [4, 6], [5, 6]],
  tear: [3, 5],
  arms: {
    color: SKIN,
    down: [[0, 8], [0, 9], [8, 8], [8, 9]],
    up: [[0, 6], [0, 7], [8, 6], [8, 7]],
  },
  feet: { color: RED, at: [2, 6] },
  captions: { idle: 'BOB', happy: 'NICE' },
  critters: {
    // A paper boat sailing the gutter.
    Explore: { rows: ['...##...', '.######.', '########', '.-####-.'], eye: 1, feet: false, arms: false, colors: { '#': 0xe8e4d4 }, tint: 0x8a9bb0 },
    // A bunch of balloons on their strings.
    Plan: { rows: ['.##.bb.g', '.##.bb.g', '..#.#.g.', '...ss...'], eye: 1, feet: false, arms: false, colors: { '#': RED, b: 0xe8c63a, g: 0x4a9ad0, s: 0x8a8a99 }, tint: RED },
    // A small single balloon, the copy that floats off.
    fork: { rows: ['..####..', '.######.', '..####..', '...ss...'], eye: 1, feet: false, arms: false, colors: { '#': RED, s: 0x8a8a99 }, tint: RED },
    // A sewer drain with eyes in the dark.
    'general-purpose': { rows: ['.######.', '########', '#-#--#-#', '.######.'], eye: 1, eyeColor: 0xe8c63a, feet: false, arms: false, colors: { '#': 0x7d7f8c }, tint: 0x7d7f8c },
    // A big clown shoe with a pompom.
    other: { rows: ['.....p..', '.#####..', '########', '-#######'], eye: 1, feet: false, arms: false, colors: { '#': HAIR, p: 0xe8e4d4 }, tint: HAIR },
  },
}
