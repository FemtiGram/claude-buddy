import type { SkinLook } from './types'

const PALE = 0xe2d8ee
const EDGE = 0x7a6898
const LIGHT = 0xf8f4fc
const PURPLE = 0x8e5cc4
const PURPLE_DARK = 0x6a3ea0
const TUBE = 0xa494c6

// Mewtwo, the genetic Pokémon: a pale lavender cat-like head with two blunt
// horns, the tube running from the back of his skull to his shoulders, a
// purple belly and the long purple tail curling behind him.
export const look: SkinLook = {
  said: 'Buddy wakes in the lab as Mewtwo.',
  group: 'Pokémon',
  rows: [
    '..o....o..',
    '..ho..ho..',
    '.ohlllllou',
    '.ollllllou',
    '..ollllo.u',
    '..ohllllu.',
    '..lpPPpo..',
    '..opPPpo.p',
    '..ollllo.p',
    '..lo..lopp',
  ],
  colors: { l: PALE, o: EDGE, h: LIGHT, p: PURPLE, P: PURPLE_DARK, u: TUBE },
  eyes: [[3, 3], [6, 3]],
  eyeColor: 0x5a1a90,
  smile: [[4, 4], [5, 4]],
  tear: [2, 3],
  arms: { color: PALE, down: [[1, 6], [8, 6]], up: [[1, 4], [8, 4]] },
  feet: { color: EDGE, at: [2, 7] },
  captions: { idle: 'MEWTWO', happy: 'PSYCHIC' },
  critters: {
    // Mew: a little pink cat floating, its long tail curled.
    Explore: { rows: ['.#...#..', '.#####..', '.#####.#', '..#.#.##'], eye: 1, eyes: [2, 4], feet: false, eyeColor: 0x2a6ad0, colors: { '#': 0xf8b0d0 }, tint: 0xf8b0d0 },
    // Alakazam: gold, a long white mustache, a spoon in each hand.
    Plan: { rows: ['s.#..#.s', 's.####.s', 's#mmmm#s', '..#--#..'], eye: 1, arms: false, colors: { '#': 0xe0b040, m: 0xf6f0e0, s: 0xc8c8d0 }, tint: 0xe0b040 },
    // A mini Mewtwo clone with its purple tail.
    fork: { rows: ['.#....#.', '..####..', '..#pp#.p', '..pp.pp.'], eye: 1, eyeColor: 0x5a1a90, colors: { '#': PALE, p: PURPLE }, tint: 0xb090e0 },
    // Jynx: a purple face under long blonde hair, big pink lips, a red gown.
    'general-purpose': { rows: ['.yyyyyy.', 'y######y', 'y##pp##y', 'rrrrrrrr'], eye: 1, eyeColor: 0x1a1a1a, colors: { '#': 0x8a5cc8, y: 0xf2d050, p: 0xf07aa8, r: 0xd03838 }, tint: 0xd03838 },
    // Drowzee: yellow on top, brown below, the long trunk-like nose.
    other: { rows: ['.######.', '.######.', '.bb##bb.', '.bbb#bb.'], eye: 1, eyeColor: 0x2a1a10, colors: { '#': 0xf0c838, b: 0x8a5a2a }, tint: 0xf0c838 },
  },
}
