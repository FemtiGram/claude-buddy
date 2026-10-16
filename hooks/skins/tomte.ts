import type { SkinLook } from './types'

// A Scandinavian tomte: a tall red cap flopping over, a big beard, a wool jacket.
export const look: SkinLook = {
  said: 'Buddy turns into a tomte!',
  rows: [
    '....rrr...',
    '..rrrrrrrr',
    '.rrrrrrrr.',
    '..ssssss..',
    '..ssnnss..',
    '.wwwwwwww.',
    '.wwwwwwww.',
    '..wwwwww..',
    '.jjjjjjjj.',
    '.jjjjjjjj.',
  ],
  colors: { r: 0xc02b2b, s: 0xe8b79a, n: 0xd98a78, w: 0xf2ede3, j: 0x6b83a0 },
  eyes: [[3, 3], [6, 3]],
  smile: [[4, 6], [5, 6]],
  tear: [3, 4],
  arms: { color: 0xe8b79a, down: [[0, 8], [9, 8]], up: [[0, 6], [9, 6]] },
  feet: { color: 0x5a3a24, at: [3, 6] },
  captions: { happy: 'SKOL', idle: 'GROD' },
  critters: {
    // A barn cat carrying a lantern.
    Explore: { rows: ['.#....#.', '.######.', '.######l', '.-####-l'], eye: 1, colors: { '#': 0xc98a4b, l: 0xf0a830 }, tint: 0xc98a4b },
    // A grey owl.
    Plan: { rows: ['##....##', '#wwwwww#', '.#wwww#.', '..-##-..'], eye: 1, colors: { '#': 0x7f8c9c, w: 0xd8dde3 }, tint: 0x8d9aab },
    // A mini tomte: tiny red cap and beard.
    fork: { rows: ['..rrrr..', '.rrrrrr.', '.ssssss.', '.######.'], eye: 2, colors: { '#': 0xf2ede3, r: 0xc02b2b, s: 0xe8b79a }, tint: 0xc02b2b },
    // A straw Yule goat, the julbock.
    'general-purpose': { rows: ['#.####.#', '.######.', '.######.', '.rrrrrr.'], eye: 1, colors: { '#': 0xd9b24c, r: 0xc02b2b }, tint: 0xd9b24c },
    // A porridge bowl with a butter pat.
    other: { rows: ['..oooo..', '.ooyooo.', '.######.', '..####..'], eye: 1, feet: false, arms: false, colors: { '#': 0x4a78b0, o: 0xe8dcc0, y: 0xf0d060 }, tint: 0x4a78b0 },
  },
}
