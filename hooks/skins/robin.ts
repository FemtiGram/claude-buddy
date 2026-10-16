import type { SkinLook } from './types'

const BLACK = 0x2a2a3a
const RED = 0xc8282e
const GREEN = 0x2e8a4a
const YELLOW = 0xe8c83a
const SKIN = 0xe8b890
const WHITE = 0xf0eeea

// Robin (classic): spiky black hair, domino mask with white eyes, a grin, a red
// tunic with the R emblem, green sleeves and pants, a yellow cape, green boots.
export const look: SkinLook = {
  said: 'Buddy turns into Robin!',
  group: 'DC',
  rows: [
    '..k.hk.k..',
    '.kkhhkkkk.',
    '.kksssskk.',
    '.kkkkkkkk.',
    '.ssssssss.',
    '..ssssSS..',
    'ygrrEErRgy',
    '.grEkkERg.',
    'yygrEERgyy',
    '..gg..gg..',
  ],
  colors: { k: BLACK, h: 0x7a7ab4, s: SKIN, S: 0xc89470, r: RED, R: 0x8e1c22, E: YELLOW, g: GREEN, y: 0xc8a020 },
  eyes: [[3, 3], [6, 3]],
  eyeColor: WHITE,
  smile: [[3, 5], [4, 5], [5, 5], [6, 5]],
  tear: [2, 4],
  arms: { color: GREEN, down: [[0, 7], [9, 7]], up: [[0, 5], [9, 5]] },
  feet: { color: GREEN, at: [3, 6] },
  captions: { happy: 'HOLY!', idle: 'ROBIN' },
  critters: {
    // A little robin, red breast.
    Explore: { rows: ['..####..', '.######.', '.#rrrr#.', '..#..#..'], eye: 1, colors: { '#': 0x7a6a5a, r: 0xd8402a }, tint: 0xd8402a },
    // The R badge.
    Plan: { rows: ['.######.', '#kkkk###', '#k##k###', '.#kk#k#.'], eye: 1, feet: false, arms: false, colors: { '#': YELLOW, k: BLACK }, tint: YELLOW },
    // A mini domino mask.
    fork: { rows: ['..####..', '########', '#ww##ww#', '.##..##.'], eye: 2, eyeColor: BLACK, feet: false, arms: false, colors: { '#': 0x3a3a4a, w: WHITE }, tint: 0x6a6a88 },
    // A bo staff.
    'general-purpose': { rows: ['......##', '....##..', '..##....', '##......'], eye: 1, eyes: [4], feet: false, arms: false, colors: { '#': 0x9a6a3a }, tint: 0x9a6a3a },
    // A grappling hook.
    other: { rows: ['..###...', '..#..#..', '..#.....', '###.....'], eye: 0, eyes: [2], feet: false, arms: false, colors: { '#': 0x9aa8b0 }, tint: 0x9aa8b0 },
  },
}
