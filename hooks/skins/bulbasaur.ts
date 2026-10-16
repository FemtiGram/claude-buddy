import type { SkinLook } from './types'

const TEAL = 0x6cc4a4
const LIGHT = 0xaee8cc
const DARK = 0x2f7f6a
const BULB = 0x4fb848
const BULB_DARK = 0x237a34
const BULB_LIGHT = 0x9ee27a

// Bulbasaur, the seed Pokémon: a blue-green toad with darker spots, pointed
// ears, red eyes and the big green bulb sprouting from his back.
export const look: SkinLook = {
  said: 'Buddy grows a bulb: Bulbasaur, I choose you!',
  group: 'Pokémon',
  rows: [
    '...lggG...',
    '..lgGgGG..',
    '..lgGgGG..',
    '.hhtttttd.',
    '.httttttd.',
    '.twrttwrd.',
    '.ttttttdd.',
    '..sttstd..',
    '..tdttdd..',
  ],
  colors: { t: TEAL, h: LIGHT, d: DARK, s: DARK, g: BULB, G: BULB_DARK, l: BULB_LIGHT, w: 0xffffff, r: 0xd8323e },
  eyes: [[3, 5], [7, 5]],
  eyeColor: 0x5a0e16,
  smile: [[3, 6], [4, 6], [5, 6], [6, 6]],
  tear: [2, 6],
  arms: { color: DARK, down: [[1, 7], [8, 7]], up: [[0, 5], [9, 5]] },
  feet: { color: DARK, at: [2, 3, 6, 7] },
  captions: { idle: 'BULBA', happy: 'SAUR!' },
  critters: {
    // Caterpie: a green caterpillar with a red antenna and yellow belly.
    Explore: { rows: ['.r......', '.##.....', '.#y####.', '..y-#-#-'], eye: 1, eyes: [1], feet: false, arms: false, colors: { '#': 0x7cc84a, y: 0xf0d860, r: 0xe0402a }, tint: 0x7cc84a },
    // Oddish: a navy blue bulb under a tuft of green leaves.
    Plan: { rows: ['.gg..gg.', '...gg...', '.######.', '..####..'], eye: 2, arms: false, colors: { '#': 0x4a5ab8, g: 0x4fb848 }, tint: 0x6a7ad8 },
    // A little Bulbasaur, bulb and all.
    fork: { rows: ['..gGg...', '#.gGgg.#', '.######.', '.#-##-#.'], eye: 2, colors: { '#': TEAL, g: BULB, G: BULB_DARK }, tint: TEAL },
    // Bellsprout: a yellow bell head on a thin green stalk.
    'general-purpose': { rows: ['..####..', '.####pp.', '...gg...', '..g..g..'], eye: 1, eyes: [3], arms: false, colors: { '#': 0xf0d850, p: 0xe88a9a, g: 0x5aa83e }, tint: 0xf0d850 },
    // Venonat: a fuzzy purple ball with big red eyes.
    other: { rows: ['.w....w.', '.######.', '.#r##r#.', '.######.'], eye: 2, eyes: [2, 5], eyeColor: 0xe03a4a, colors: { '#': 0x8a5ab8, w: 0xd8d8e8, r: 0xe03a4a }, tint: 0x9a6ac8 },
  },
}
