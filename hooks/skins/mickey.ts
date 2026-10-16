import type { SkinLook } from './types'

const BLACK = 0x26262e
const RIM = 0x5a5a6e
const FACE = 0xf4c8a0
const RED = 0xe0242c
const WHITE = 0xf6f2ea
const YELLOW = 0xf2c230

// Mickey Mouse, the classic: two round black ears, a peach face with a
// black nose, red shorts with two white buttons, white gloves and big
// yellow shoes. A grey rim on the ears keeps him off a dark terminal.
export const look: SkinLook = {
  said: 'Buddy puts on the ears: hiya, pal!',
  group: 'Pixar & Disney',
  rows: [
    '.rk....rk.',
    'rkkk..rkkk',
    'kkkkkkkkkk',
    '.kkfkkfkk.',
    '.kffffffk.',
    '.kffffffk.',
    '..ffnnff..',
    '...ffff...',
    '..kkkkkk..',
    '..eweewe..',
    '...k..k...',
  ],
  colors: { k: BLACK, r: RIM, f: FACE, n: 0x16161c, e: RED, w: WHITE },
  eyes: [[3, 4], [6, 4]],
  smile: [[3, 6], [6, 6], [4, 7], [5, 7]],
  tear: [3, 5],
  arms: { color: WHITE, down: [[1, 9], [8, 9]], up: [[0, 7], [9, 7]] },
  feet: { color: YELLOW, at: [3, 6] },
  captions: { idle: 'HIYA', happy: 'OH BOY!' },
  critters: {
    // Pluto: orange-yellow pup with long black ears.
    Explore: { rows: ['.k....k.', 'k######k', 'k##nn##k', '..####..'], eye: 1, colors: { '#': 0xe8a838, k: 0x2a2a30, n: 0x1a1a1e }, tint: 0xe8a838 },
    // Donald Duck: blue sailor cap, white head, orange bill.
    Plan: { rows: ['.bbbbbb.', '..####..', '.######.', '..oooo..'], eye: 2, colors: { '#': 0xf6f2ea, b: 0x2a5ad0, o: 0xf09a20 }, tint: 0x2a5ad0 },
    // A mini Mickey: ears, face and red shorts.
    fork: { rows: ['##....##', '.######.', '.#ffff#.', '..rrrr..'], eye: 2, colors: { '#': BLACK, f: FACE, r: RED }, tint: RED },
    // Goofy: tall green hat over a black head, tan snout.
    'general-purpose': { rows: ['..gggg..', '.gggggg.', '.######.', '..ssss..'], eye: 2, eyeColor: 0xf6f2ea, colors: { '#': 0x34343c, g: 0x3a9a4a, s: 0xe8c098 }, tint: 0x3a9a4a },
    // Chip the chipmunk: brown with a cream face.
    other: { rows: ['.#....#.', '.######.', '.#cccc#.', '..#cc#..'], eye: 1, colors: { '#': 0xa8683a, c: 0xf0d0a0 }, tint: 0xa8683a },
  },
}
