import type { SkinLook } from './types'

const RED = 0xc8202c
const DARK_RED = 0x8e1620
const BLUE = 0x2a4aa0
const WHITE = 0xf0eeea
const BLACK = 0x2c2c38

// Spider-Man: full red mask with big white teardrop eyes and web lines, a black
// spider on the chest, blue sides and legs, red boots.
export const look: SkinLook = {
  said: 'Buddy suits up as Spider-Man!',
  group: 'Marvel',
  rows: [
    '..rrRRrr..',
    '.rrrRRrrr.',
    '.rwwRRwwr.',
    '.rrwrrwrr.',
    '.rrrRRrrr.',
    '..rrrrrr..',
    '.brrkkrrb.',
    '.brkkkkrb.',
    '.bbrkkrbb.',
    '..bbbbbb..',
  ],
  colors: { r: RED, R: DARK_RED, w: WHITE, b: BLUE, k: BLACK },
  eyes: [[3, 2], [6, 2]],
  eyeColor: 0x2c2c38,
  smile: [[4, 5], [5, 5]],
  tear: [3, 3],
  arms: { color: RED, down: [[0, 7], [9, 7]], up: [[0, 5], [9, 5]] },
  feet: { color: RED, at: [3, 6] },
  captions: { happy: 'THWIP!', idle: 'HEY' },
  critters: {
    // A small spider.
    Explore: { rows: ['#..##..#', '.######.', '#.####.#', '..#rr#..'], eye: 1, feet: false, colors: { '#': 0x7a5a4a, r: RED }, tint: 0xc8202c },
    // The web shooter on a wrist band.
    Plan: { rows: ['.wwwwww.', '.######.', '.#rrrr#.', '.wwwwww.'], eye: 1, feet: false, arms: false, colors: { '#': 0x3a5ab0, r: RED, w: 0xc8ccd4 }, tint: 0x3a5ab0 },
    // Miles Morales: black suit, red web.
    fork: { rows: ['..#rr#..', '.######.', '.#r##r#.', '..####..'], eye: 1, eyeColor: WHITE, colors: { '#': 0x3a3a4a, r: RED }, tint: 0xc8202c },
    // The Daily Bugle.
    'general-purpose': { rows: ['########', '#kkkk#k#', '#-####-#', '#-#--#-#'], eye: 2, feet: false, colors: { '#': 0xdcd6c0, k: 0x3a3a3a }, tint: 0xdcd6c0 },
    // A black symbiote blob.
    other: { rows: ['.######.', '########', '#w#ww#w#', '.#.##.#.'], eye: 1, eyeColor: WHITE, feet: false, colors: { '#': 0x3c3458, w: WHITE }, tint: 0x6a5a98 },
  },
}
