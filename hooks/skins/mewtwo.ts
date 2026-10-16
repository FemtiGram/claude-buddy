import type { SkinLook } from './types'

const PALE = 0xe2d8ee
const EDGE = 0x9a88b8
const LIGHT = 0xf8f4fc
const PURPLE = 0x8e5cc4

// Mewtwo, the genetic Pokémon: a pale lavender cat-like head with two blunt
// horns, a purple belly and the long purple tail curling behind him.
export const look: SkinLook = {
  said: 'Buddy wakes in the lab as Mewtwo.',
  group: 'Pokémon',
  rows: [
    '..o....o..',
    '..lo..lo..',
    '..hlllllo.',
    '..llllllo.',
    '...olllo..',
    '..hllllo..',
    '..lppppo..',
    '..lppppo.p',
    '...pppp..p',
    '..ll..lopp',
  ],
  colors: { l: PALE, o: EDGE, h: LIGHT, p: PURPLE },
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
    // Porygon: a pink block with a blue beak and tail.
    'general-purpose': { rows: ['...##...', '.b####b.', '..####bb', '..b..b..'], eye: 1, colors: { '#': 0xf08aa0, b: 0x3ac0d0 }, tint: 0x3ac0d0 },
    // Psyduck: a yellow duck with three hairs and a cream bill.
    other: { rows: ['...kk...', '.######.', '.#cccc#.', '..####..'], eye: 1, colors: { '#': 0xf2d040, k: 0x3a3a3a, c: 0xf6e8b8 }, tint: 0xf2d040 },
  },
}
