import type { SkinLook } from './types'

const LIGHT = 0x9a78d8
const PURPLE = 0x6a4aa8
const DARK = 0x3c2870
const LIME = 0x7ae04a
const ORANGE = 0xe8702a

// Eva Unit-01: purple mecha in three tones, one tall horn, green jaw plate,
// glowing eyes, wide armoured shoulders with pylons.
export const look: SkinLook = {
  said: 'Buddy boards Eva Unit-01.',
  group: 'Anime',
  rows: [
    '....o.....',
    '...lpp....',
    '..lpppps..',
    '..lppppd..',
    '..lppppd..',
    '..pggggd..',
    '.olppppdo.',
    '..lppppd..',
    '..lp..pd..',
  ],
  colors: { l: LIGHT, p: PURPLE, d: DARK, g: LIME, o: ORANGE, s: 0x523a8c },
  eyes: [[3, 4], [6, 4]],
  eyeColor: 0xd8f03a,
  smile: [[4, 5], [5, 5]],
  tear: [3, 5],
  arms: { color: LIGHT, down: [[1, 7], [8, 7]], up: [[1, 5], [8, 5]] },
  feet: { color: DARK, at: [3, 7] },
  captions: { happy: 'SYNC!', idle: 'GET IN' },
  critters: {
    // Ramiel: the blue octahedron.
    Explore: { rows: ['...##...', '..####..', '.######.', '...##...'], eye: 2, eyeColor: 0xe03838, feet: false, arms: false, colors: { '#': 0x3a9af0 }, tint: 0x3a9af0 },
    // The NERV logo: a red fig leaf.
    Plan: { rows: ['.....##.', '..#####.', '.#####..', '##.#....'], eye: 1, feet: false, arms: false, colors: { '#': 0xe03838 }, tint: 0xe03838 },
    // Unit-00: blue with a yellow visor.
    fork: { rows: ['..####..', '.######.', '.yyyyyy.', '..####..'], eye: 2, colors: { '#': 0x3a6ad0, y: 0xe8c840 }, tint: 0x3a6ad0 },
    // Unit-02: red with yellow tusks.
    'general-purpose': { rows: ['y.#..#.y', '.######.', '.######.', '..-##-..'], eye: 1, eyeColor: 0xe8c840, colors: { '#': 0xe04a3a, y: 0xe8c840 }, tint: 0xe04a3a },
    // Pen Pen: the NERV penguin.
    other: { rows: ['..####..', '.######.', '.#wwww#.', '..oooo..'], eye: 1, feet: false, colors: { '#': 0x4a6a9a, w: 0xe0e8f0, o: 0xe8902a }, tint: 0x4a6a9a },
  },
}
