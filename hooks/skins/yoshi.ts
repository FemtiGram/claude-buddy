import type { SkinLook } from './types'

const GREEN = 0x4cba3a
const LIGHT = 0x9ae070
const DARK = 0x2a8028
const WHITE = 0xf4f4ec
const RED = 0xe0342b
const ORANGE = 0xe8761c
const EDGE = 0xc8d0c8

// Yoshi, side on and facing right: two tall eyes on top of his head, the big
// round green nose, white cheeks and belly, red spikes down his back and the
// red saddle, orange boots.
export const look: SkinLook = {
  said: 'Buddy hatches into Yoshi!',
  group: 'Nintendo',
  rows: [
    '....eeee..',
    '...hwwwwe.',
    '..rhhggggg',
    '.rgggggggg',
    '..ggwwwed.',
    '.rggwe....',
    'rrrrwwe...',
    '.ddgwwe...',
    '..dggwe...',
    '..dd.gg...',
  ],
  colors: { g: GREEN, h: LIGHT, d: DARK, w: WHITE, e: EDGE, r: RED },
  eyes: [[5, 1], [7, 1]],
  smile: [[5, 4], [6, 4], [7, 4]],
  tear: [5, 2],
  arms: { color: GREEN, down: [[7, 6]], up: [[9, 4]] },
  feet: { color: ORANGE, at: [3, 6] },
  captions: { idle: 'YOSHI', happy: 'YOSHI!' },
  critters: {
    // Shy Guy: red robe, white mask.
    Explore: { rows: ['..####..', '.#wwww#.', '.#wwww#.', '.##bb##.'], eye: 1, colors: { '#': 0xd8282a, w: WHITE, b: 0x3a3a50 }, tint: 0xd8282a },
    // A Yoshi egg, green-spotted, peeking out.
    Plan: { rows: ['...ee...', '..#g##e.', '.e#g#g#e', '..eeee..'], eye: 2, feet: false, arms: false, colors: { '#': WHITE, g: GREEN, e: EDGE }, tint: 0x8ad070 },
    // Baby Yoshi.
    fork: { rows: ['..ww....', '.#ww###.', 'r######.', '.r#ww#..'], eye: 0, eyes: [2, 3], colors: { '#': GREEN, w: WHITE, r: RED }, tint: GREEN },
    // Piranha Plant: white-spotted red head, gaping mouth, green leaves.
    'general-purpose': { rows: ['.#w##w#.', '########', '.wkkkkw.', '.ll..ll.'], eye: 1, feet: false, arms: false, colors: { '#': 0xc81e28, w: WHITE, k: 0x3a1018, l: 0x2fa040 }, tint: 0xf05a50 },
    // Pokey: a stack of yellow cactus balls with a flower on top.
    other: { rows: ['..rwwr..', '.######.', '..oooo..', '.######.'], eye: 1, feet: false, arms: false, colors: { '#': 0xe8c040, o: 0xb88a20, r: 0xf04a6a, w: 0xfff4a0 }, tint: 0xe8c040 },
  },
}
