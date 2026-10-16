import type { SkinLook } from './types'

const RED = 0xb8281c
const LIGHT = 0xec6a42
const DARK = 0x7a1610
const BONE = 0xe0cca0
const HORN = 0xa88a5a
const GLOW = 0xffe040

// Diablo, Lord of Terror: crimson scales with a bright rim, two great bone
// horns sweeping up and out, a crest of spikes, glowing yellow eyes in dark
// sockets and a fanged maw that fills with fire when he's pleased.
export const look: SkinLook = {
  said: 'Buddy turns into Diablo, Lord of Terror. Not even death can save you.',
  group: 'Diablo',
  rows: [
    'B........B',
    'BH..s.s.HB',
    '.HHlrsrrH.',
    '..lrrrrrd.',
    '.lkkrrkkd.',
    '.lrrrrrrd.',
    '..rwmmwrd.',
    '.slrrrrds.',
    '.lrrrrrrd.',
    '..rd..rd..',
  ],
  colors: { r: RED, l: LIGHT, d: DARK, s: BONE, B: BONE, H: HORN, k: 0x3a0a08, w: 0xf4ecd8, m: 0x3a0a08 },
  eyes: [[3, 4], [6, 4]],
  eyeColor: GLOW,
  smile: [[4, 6], [5, 6]],
  smileColor: 0xff9a30,
  tear: [4, 5],
  arms: { color: RED, down: [[0, 8], [9, 8]], up: [[0, 6], [9, 6]] },
  feet: { color: DARK, at: [2, 7] },
  captions: { idle: 'TERROR', happy: 'BURN!' },
  critters: {
    // A Fallen: a little red imp with big pointed ears.
    Explore: { rows: ['#......#', '.######.', '..#yy#..', '..-..-..'], eye: 1, eyeColor: GLOW, colors: { '#': 0xd8482a, y: 0xe8c890 }, tint: 0xd8482a },
    // A soulstone: a floating red crystal with a pale glint.
    Plan: { rows: ['...##...', '..#ss#..', '.######.', '..-##-..'], eye: 2, eyeColor: 0xffe0e0, feet: false, arms: false, colors: { '#': 0xd0203a, s: 0xff9aa8 }, tint: 0xff5a70 },
    // A mini Diablo: horns, red hide, glowing eyes.
    fork: { rows: ['h......h', '.h####h.', '.######.', '.-####-.'], eye: 2, eyeColor: GLOW, colors: { '#': RED, h: BONE }, tint: LIGHT },
    // A Khazra goatman: brown fur, curled horns, a dark snout.
    'general-purpose': { rows: ['hh....hh', '.h####h.', '.######.', '..#nn#..'], eye: 2, colors: { '#': 0x8a6a48, h: 0xc8b48a, n: 0x4a3424 }, tint: 0xb08a5a },
    // Baal, Lord of Destruction: purple hide over writhing tentacles.
    other: { rows: ['.k....k.', '.######.', '.######.', '#.#..#.#'], eye: 1, eyeColor: 0x9ae0ff, feet: false, colors: { '#': 0x8a5a9a, k: 0xd8c8b0 }, tint: 0xa878c0 },
  },
}
