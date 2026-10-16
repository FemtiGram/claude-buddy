import type { SkinLook } from './types'

const BODY = 0x4a4a58
const LEG = 0x8a8a9c
const GOLD = 0xf4b41a
const RED = 0xc8102e
const GREEN = 0x1e8449

// Anansi, the Akan trickster spider: a round dark body with a kente-cloth
// band of gold, red and green, eight legs, hanging on a silk thread.
export const look: SkinLook = {
  said: 'Buddy turns into Anansi!',
  group: 'Cartoons & folklore',
  rows: [
    '....t.....',
    '....t.....',
    '..llllll..',
    '..wwbbww..',
    'llbbbbbbll',
    '.lygrrgyl.',
    'llbbbbbbll',
    '.lbbbbbbl.',
    'l.bbbbbb.l',
  ],
  colors: { b: BODY, w: 0xe8e8ee, l: LEG, t: 0xb8b8c8, y: GOLD, r: RED, g: GREEN },
  eyes: [[3, 3], [6, 3]],
  eyeColor: 0x22222c,
  smile: [[4, 4], [5, 4]],
  tear: [2, 4],
  arms: { color: LEG, down: [[0, 3], [9, 3]], up: [[0, 2], [9, 2]] },
  feet: { color: LEG, at: [2, 3, 6, 7] },
  captions: { happy: 'STORY', idle: 'WEB' },
  critters: {
    // A tortoise.
    Explore: { rows: ['..gggg..', '.gggggg.', '########', '.#.##.#.'], eye: 2, colors: { '#': 0x9a8a5a, g: 0x4f7a4a }, tint: 0x4f7a4a },
    // A spider web.
    Plan: { rows: ['#..##..#', '.#.##.#.', '###..###', '.#.##.#.'], eye: 2, feet: false, arms: false, colors: { '#': 0xb8bcc8 }, tint: 0xb8bcc8 },
    // A baby spider.
    fork: { rows: ['#......#', '.#.##.#.', '..####..', '#.#..#.#'], eye: 2, feet: false, arms: false, colors: { '#': BODY }, eyeColor: 0xf0f0f0, tint: LEG },
    // A gourd of wisdom.
    'general-purpose': { rows: ['...ss...', '...##...', '.######.', '.######.'], eye: 2, feet: false, arms: false, colors: { '#': 0xc9a24a, s: 0x7a5a2a }, tint: 0xc9a24a },
    // A python.
    other: { rows: ['.######.', '.#......', '.#######', '.......#'], eye: 0, feet: false, arms: false, colors: { '#': 0x6b8a3a }, tint: 0x6b8a3a },
  },
}
