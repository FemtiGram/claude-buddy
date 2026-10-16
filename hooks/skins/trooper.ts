import type { SkinLook } from './types'

const WHITE = 0xe6e8ec
const SHADE = 0xb8bec8
const DARK = 0x2c3038

// An Imperial stormtrooper: white helmet with a grey edge, angled dark lenses,
// frowning vents, white armour, a dark belt and joints, white boots.
export const look: SkinLook = {
  said: 'Buddy suits up as a stormtrooper.',
  group: 'Star Wars',
  rows: [
    '..........',
    '..........',
    '..sHHH##s.',
    '.sHH####s.',
    '.sD####Ds.',
    '.sDD##DDs.',
    '..s#DD#s..',
    '..sD##Ds..',
    '.sH#####s.',
    '.sHbbbbbs.',
    '..H#..#s..',
  ],
  colors: { H: 0xf2f4f7, '#': 0xd6dae0, s: 0x9aa2ae, D: DARK, b: 0x4a505a },
  eyes: [[3, 5], [6, 5]],
  eyeColor: DARK,
  smile: [[4, 6], [5, 6]],
  tear: [2, 6],
  arms: {
    color: 0x9aa2ae,
    down: [[0, 8], [0, 9], [9, 8], [9, 9]],
    up: [[0, 6], [0, 5], [9, 6], [9, 5]],
  },
  feet: { color: 0x9aa2ae, at: [3, 6] },
  captions: { idle: 'HOLD', happy: 'ROGER' },
  critters: {
    // A scout trooper on a speeder bike.
    Explore: { rows: ['..###...', '.#####ss', 'bbbbbbb.', '.s...s..'], eye: 1, eyes: [2, 4], arms: false, feet: false, colors: { '#': WHITE, s: SHADE, b: 0x5a606a }, tint: WHITE },
    // An Imperial officer in a grey cap.
    Plan: { rows: ['.cccccc.', '..ffff..', '.cc##cc.', '..c..c..'], eye: 1, eyes: [2, 5], colors: { '#': 0xb8323a, c: 0x7d8a82, f: 0xe0b898 }, tint: 0x7d8a82 },
    // A clone trooper, orange-white.
    fork: { rows: ['..####..', '.#oooo#.', '.#D##D#.', '..#oo#..'], eye: 2, eyes: [2, 5], colors: { '#': WHITE, o: 0xe0903a, D: DARK }, tint: 0xe0903a },
    // A mini stormtrooper helmet.
    'general-purpose': { rows: ['.######.', '#sD##Ds#', '.######.', '..#dd#..'], eye: 1, eyes: [2, 5], arms: false, feet: false, colors: { '#': WHITE, s: SHADE, D: DARK, d: 0x5a606a }, tint: SHADE },
    // An AT-AT walker.
    other: { rows: ['##......', '.#######', '.#######', '.#.##.#.'], eye: 0, eyes: [1], arms: false, feet: false, colors: { '#': 0xaab0ba }, tint: 0xaab0ba },
  },
}
