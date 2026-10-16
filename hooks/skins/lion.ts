import type { SkinLook } from './types'

const RED = 0xd9261c
const GOLD = 0xf4c430
const WHITE = 0xf2eee6

// A Chinese lion dancer: red-and-gold head with a single horn and pompom,
// huge blinking eyes, a white beard and gold-trimmed trousers.
export const look: SkinLook = {
  said: 'Buddy turns into a lion dancer!',
  group: 'Cartoons & folklore',
  rows: [
    '....ww....',
    '....yy....',
    '.ryyyyyyr.',
    '.rwwrrwwr.',
    '.rwyrrywr.',
    '.rrrrrrrr.',
    '.mmmmmmmm.',
    '.wwwwwwww.',
    '..wwwwww..',
    '..ry..yr..',
  ],
  colors: { r: RED, y: GOLD, w: WHITE, m: 0x8e1b14 },
  eyes: [[3, 4], [6, 4]],
  smile: [[3, 6], [4, 6], [5, 6], [6, 6]],
  tear: [3, 5],
  arms: { color: GOLD, down: [[0, 7], [9, 7]], up: [[0, 5], [9, 5]] },
  feet: { color: 0xb8860b, at: [3, 6] },
  captions: { happy: 'LUCKY', idle: 'DONG' },
  critters: {
    // A firecracker with a lit fuse.
    Explore: { rows: ['....o...', '..####..', '..#yy#..', '..####..'], eye: 1, colors: { '#': RED, o: 0xf28c28, y: GOLD }, tint: RED },
    // A scroll.
    Plan: { rows: ['.bbbbbb.', '.######.', '.######.', '.bbbbbb.'], eye: 1, colors: { '#': 0xf0e2b8, b: 0xa8642a }, tint: 0xa8642a },
    // A little lion.
    fork: { rows: ['...yy...', '.######.', '.wwwwww.', '..wwww..'], eye: 1, colors: { '#': RED, y: GOLD, w: WHITE }, tint: GOLD },
    // A red envelope (hongbao).
    'general-purpose': { rows: ['yyyyyyyy', '########', '###yy###', '########'], eye: 1, colors: { '#': 0xe03a30, y: GOLD }, tint: 0xe03a30 },
    // A red lantern.
    other: { rows: ['..yyyy..', '.######.', '.######.', '...yy...'], eye: 1, feet: false, colors: { '#': 0xc81e2a, y: GOLD }, tint: 0xc81e2a },
  },
}
