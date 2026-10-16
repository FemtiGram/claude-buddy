import type { SkinLook } from './types'

// The Dragon Quest Slime: a blue teardrop with its tip curling up, a pale
// highlight, a darker belly and the famous wide smile.
export const look: SkinLook = {
  said: 'Buddy turns into a slime!',
  rows: [
    '.....bb...',
    '....bbb...',
    '...bbbbb..',
    '..hhbbbbb.',
    '.hhbbbbbbb',
    'hhbbbbbbbb',
    'hbbbbbbbbb',
    'bbmmmmmmbb',
    'dbbmmmmbbd',
    '.ddbbbbdd.',
    '..dddddd..',
  ],
  colors: { b: 0x3f8fe8, h: 0x8cc4f6, d: 0x2559b8, m: 0xd7ecfb },
  eyes: [[3, 5], [7, 5]],
  smile: [[2, 7], [3, 7], [4, 7], [5, 7], [6, 7], [7, 7]],
  tear: [3, 6],
  captions: { happy: 'DONE', idle: 'HI' },
  critters: {
    // Drackee, the purple bat.
    Explore: { rows: ['p..pp..p', 'pp####pp', '.######.', '..-..-..'], eye: 2, colors: { '#': 0x7c52b8, p: 0x5a3a8c }, tint: 0x7c52b8 },
    // Healslime, a green jellyfish with tentacles.
    Plan: { rows: ['..####..', '.######.', '.######.', '.#.##.#.'], eye: 2, feet: false, arms: false, colors: { '#': 0x6fd09a }, tint: 0x6fd09a },
    // A small slime split off.
    fork: { rows: ['........', '..#..#..', '.######.', '.------.'], eye: 2, colors: { '#': 0x5aa6f0 }, tint: 0x5aa6f0 },
    // King Slime, crowned in gold.
    'general-purpose': { rows: ['.g.gg.g.', '.gggggg.', '.######.', '########'], eye: 2, colors: { '#': 0x3f8fe8, g: 0xe0b020 }, tint: 0xe0b020 },
    // Metal Slime.
    other: { rows: ['...##...', '..####..', '.######.', '.------.'], eye: 2, arms: false, colors: { '#': 0xb4bcc6 }, tint: 0xb4bcc6 },
  },
}
