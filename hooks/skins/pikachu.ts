import type { SkinLook } from './types'

// Pikachu: tall black-tipped ears, red cheeks, a zigzag tail.
export const look: SkinLook = {
  said: 'Buddy turns into Pikachu!',
  group: 'Games',
  rows: [
    '.k......k.',
    '.k......k.',
    '.yy....yy.',
    '..yyyyyy..',
    '.yyyyyyyy.',
    '.ryyyyyyr.',
    '..yyyyyy.y',
    '..yyyyyyyy',
    '..yyyyyyb.',
  ],
  colors: { y: 0xf6c932, k: 0x4a3a2a, r: 0xe0453a, b: 0x9a6a2e },
  eyes: [[2, 4], [7, 4]],
  smile: [[4, 5], [5, 5]],
  tear: [3, 5],
  arms: { color: 0xf6c932, down: [[1, 6], [8, 6]], up: [[0, 5], [9, 5]] },
  feet: { color: 0xd9a92a, at: [3, 6] },
  captions: { idle: 'PIKA', happy: 'PIKACHU!' },
  critters: {
    // Pidgey: a small brown bird with a cream front.
    Explore: { rows: ['..a##a..', '.######.', '.#cccc#.', '..-cc-..'], eye: 1, colors: { '#': 0x9a7048, a: 0xd9b36a, c: 0xe8d8b0 }, tint: 0xb08454 },
    // Abra: tan, eyes shut, deep in thought.
    Plan: { rows: ['.#....#.', '.######.', '.######.', '..#--#..'], eye: 1, eyeColor: 0x6a4a2a, colors: { '#': 0xd6a95e }, tint: 0xd6a95e },
    // Ditto: a pink blob, the copy Pokemon.
    fork: { rows: ['........', '..####..', '.######.', '########'], eye: 1, eyes: [3, 5], feet: false, arms: false, colors: { '#': 0xc79ad8 }, tint: 0xc79ad8 },
    // Eevee: brown, with a cream collar.
    'general-purpose': { rows: ['##....##', '.######.', 'cccccccc', '..-##-..'], eye: 1, colors: { '#': 0xa8743c, c: 0xf0dcb0 }, tint: 0xa8743c },
    // Magikarp: an orange fish.
    other: { rows: ['.r.###..', 'rr#####.', '.r#####.', '..r..r..'], eye: 1, eyes: [6], feet: false, arms: false, colors: { '#': 0xe8742a, r: 0xf0a040 }, tint: 0xe8742a },
  },
}
