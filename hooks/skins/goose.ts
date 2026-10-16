import type { SkinLook } from './types'

const WHITE = 0xf2f0e8
const SHADE = 0xd6d2c4
const ORANGE = 0xff8a1f

// The Untitled Goose Game goose: white, a long neck, orange bill and feet,
// wings for arms.
export const look: SkinLook = {
  said: 'Buddy turns into a goose. Honk!',
  group: 'Games',
  rows: [
    '...eee....',
    '..ewwwoo..',
    '..ewwwoO..',
    '...ewwe...',
    '...ewse...',
    '.ewwwwwwse',
    '.ewwwwsse.',
    '..eesssee.',
  ],
  colors: { w: WHITE, s: SHADE, e: 0x9c9a8c, o: ORANGE, O: 0xd9620f },
  eyes: [[4, 1]],
  smile: [[5, 2]],
  tear: [4, 2],
  arms: {
    color: 0x9c9a8c,
    down: [[0, 6], [9, 6]],
    up: [[0, 4], [9, 4]],
  },
  feet: { color: ORANGE, at: [3, 6] },
  captions: { happy: 'HONK!', idle: 'HONK' },
  critters: {
    // A little brass bell.
    Explore: { rows: ['...yy...', '..####..', '.######.', '.##yy##.'], eye: 2, feet: false, colors: { '#': 0xe0b23a, y: 0x8a5a2a }, tint: 0xe0b23a },
    // A garden rake: handle, bar and tines.
    Plan: { rows: ['....h...', '....h...', '.######.', '.t.t.t.t'], eye: 2, colors: { '#': 0x9a6a3a, h: 0x7a5a30, t: 0x8a8a90 }, tint: 0x9a6a3a },
    // A gosling: yellow fluff, orange bill.
    fork: { rows: ['..####..', '.######.', '.##oo##.', '..-##-..'], eye: 1, colors: { '#': 0xebc030, o: ORANGE }, tint: 0xebc030 },
    // A villager's straw sun hat with a red band.
    'general-purpose': { rows: ['..####..', '.######.', '.rrrrrr.', '--------'], eye: 1, colors: { '#': 0xe2c27a, r: 0xc84a3a }, tint: 0xe2c27a },
    // A radio with an aerial and a speaker grille.
    other: { rows: ['......a.', '########', '########', '##dddd##'], eye: 2, colors: { '#': 0x3e9aa8, a: 0x8a8a90, d: 0x2a6a76 }, tint: 0x3e9aa8 },
  },
}
