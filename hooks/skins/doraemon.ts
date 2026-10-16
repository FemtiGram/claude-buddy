import type { SkinLook } from './types'

const BLUE = 0x1e8fe0
const WHITE = 0xe6edf2
const RED = 0xd62839
const YELLOW = 0xf2c230

// Doraemon: round blue head, white face with a red nose and whiskers, red
// collar with a yellow bell, white belly, hands and feet.
export const look: SkinLook = {
  said: 'Buddy turns into Doraemon!',
  group: 'Anime',
  rows: [
    '...bbbb...',
    '..bbbbbb..',
    '.bbwwwwbb.',
    '.bwwwwwwb.',
    '.kwwrrwwk.',
    '.bwwwwwwb.',
    '..bwwwwb..',
    '..rrrrrr..',
    '.bbwyywbb.',
    '.bbwwwwbb.',
    '..bbbbbb..',
  ],
  colors: { b: BLUE, w: WHITE, r: RED, y: YELLOW, k: 0x2a4a6a },
  eyes: [[4, 2], [5, 2]],
  smile: [[3, 5], [4, 6], [5, 6], [6, 5]],
  tear: [3, 3],
  arms: { color: WHITE, down: [[0, 9], [9, 9]], up: [[0, 6], [9, 6]] },
  feet: { color: WHITE, at: [3, 6] },
  captions: { happy: 'YUM', idle: 'HI' },
  critters: {
    // A bamboo-copter.
    Explore: { rows: ['########', '...gg...', '...gg...', '...gg...'], eye: 0, feet: false, colors: { '#': 0xe8c040, g: 0x4aa860 }, tint: 0x4aa860 },
    // Dorami: yellow robot cat with a red bow.
    Plan: { rows: ['#..rr..#', '########', '########', '.######.'], eye: 2, colors: { '#': 0xf2c230, r: 0xd62839 }, tint: 0xf2c230 },
    // A mini Doraemon.
    fork: { rows: ['.######.', '#wwwwww#', '#wwrrww#', '.######.'], eye: 1, colors: { '#': 0x1e8fe0, w: 0xe6edf2, r: 0xd62839 }, tint: 0x1e8fe0 },
    // A dorayaki pancake.
    'general-purpose': { rows: ['.######.', '########', '.bbbbbb.', '.######.'], eye: 1, colors: { '#': 0xc07a3a, b: 0x8a3a3a }, tint: 0xc07a3a },
    // The pink Anywhere Door.
    other: { rows: ['.######.', '.#-##-#.', '.#-##y#.', '.######.'], eye: 1, feet: false, colors: { '#': 0xe86aa8, y: 0xf2c230 }, tint: 0xe86aa8 },
  },
}
