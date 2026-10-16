import type { SkinLook } from './types'

const HAIR = 0x2a2a34
const EDGE = 0x4a4a5a
const SKIN = 0xf2c8a0
const BLUE = 0x2a4aa8
const WHITE = 0xe8e4da
const GOLD = 0xe0b040

// Vegeta: tall upswept flame hair with a widow's peak, a stern frown, blue
// bodysuit with white-gold Saiyan armour, white gloves and boots.
export const look: SkinLook = {
  said: 'Buddy turns into Vegeta, prince of all Saiyans.',
  group: 'Anime',
  rows: [
    '..e.ee.e..',
    '..hehheh..',
    '.hhhhhhhh.',
    '.hsshhssh.',
    '.hssssssh.',
    '..ssssss..',
    '.ggwwwwgg.',
    '.bbwwwwbb.',
    '..bb..bb..',
  ],
  colors: { h: HAIR, e: EDGE, s: SKIN, b: BLUE, w: WHITE, g: GOLD },
  eyes: [[3, 4], [6, 4]],
  smile: [[4, 5], [5, 5]],
  tear: [3, 5],
  arms: { color: WHITE, down: [[0, 7], [9, 7]], up: [[0, 5], [9, 5]] },
  feet: { color: WHITE, at: [3, 6] },
  captions: { happy: 'PRINCE!', idle: 'HMPH' },
  critters: {
    // A scouter: grey headset with a green lens.
    Explore: { rows: ['......a.', '.######.', '.#gggg#.', '..-##-..'], eye: 2, colors: { '#': 0x7a8aa0, g: 0x40d070, a: 0xd0d4dc }, tint: 0x40d070 },
    // A Saiyan space pod: round, white, with a blue window.
    Plan: { rows: ['..####..', '.######.', '.#bbbb#.', '..####..'], eye: 2, feet: false, arms: false, colors: { '#': 0xe8e4da, b: 0x4a8ad0 }, tint: 0xe8e4da },
    // Trunks: spiky lavender hair.
    fork: { rows: ['.#.##.#.', '.######.', '.#ssss#.', '..bbbb..'], eye: 2, colors: { '#': 0xb8a0e8, l: 0xb8a0e8, s: 0xf2c8a0, b: 0x4a6ad0 }, tint: 0xb8a0e8 },
    // Bulma: teal pigtails, pink dress.
    'general-purpose': { rows: ['..####..', '#.####.#', '#.ssss.#', '..pppp..'], eye: 2, colors: { '#': 0x30b8a8, s: 0xf2c8a0, p: 0xf080a8 }, tint: 0x30b8a8 },
    // A Great Ape: big and brown with red eyes.
    other: { rows: ['.######.', '########', '#.kkkk.#', '##....##'], eye: 1, eyeColor: 0xd02020, colors: { '#': 0x8a5a2e, k: 0xc09060 }, tint: 0x8a5a2e },
  },
}
