import type { SkinLook } from './types'

const HAT = 0x858d98
const HAT_LIT = 0xb4bcc6
const ROBE = 0x6c737c
const BEARD = 0xe6e6e2
const SKIN = 0xe8bc98
const STAFF = 0x8a5a2e

// Gandalf the Grey: a tall pointed hat with its tip bent over, a wide brim,
// bushy white brows over a long white beard, a grey robe and his gnarled
// wooden staff.
export const look: SkinLook = {
  said: 'Buddy grows a beard and picks up a staff: a wizard is never late.',
  group: 'Fantasy',
  rows: [
    '......hh..',
    '.....hg...',
    '....hgg...',
    '...hgggg.k',
    'gggggggggk',
    '.wswssww.k',
    '.wsssssw.k',
    '.wwwwwww.k',
    '.dwwwwwd.k',
    '.ddwwwdd.k',
    '.dddwddd.k',
  ],
  colors: { g: HAT, h: HAT_LIT, d: ROBE, w: BEARD, s: SKIN, k: STAFF },
  eyes: [[3, 6], [6, 6]],
  eyeColor: 0x2a3440,
  smile: [[3, 7], [4, 7], [5, 7], [6, 7]],
  tear: [2, 6],
  arms: { color: ROBE, down: [[0, 9], [8, 8]], up: [[0, 6], [8, 5]] },
  feet: { color: 0x4a4e56, at: [3, 6] },
  captions: { idle: 'HMM', happy: 'ON TIME' },
  critters: {
    // Gwaihir, the Windlord: a great brown eagle with a golden beak.
    Explore: { rows: ['..####..', 'ww####ww', 'w-#yy#-w', '..----..'], eye: 1, colors: { '#': 0x9a6a34, w: 0x5e3c1c, y: 0xf0b830 }, tint: 0xc89a50 },
    // Shadowfax, lord of horses: white, with a silver mane.
    Plan: { rows: ['..#.....', '.m####..', 'm#######', 'm##..--k'], eye: 1, eyes: [3], colors: { '#': 0xe8eaf0, m: 0x9aa2b0, k: 0x5a6070 }, tint: 0xd8dce6 },
    // A pocket Gandalf: grey hat, white beard.
    fork: { rows: ['...##...', '.######.', '.wssssw.', '.-wwww-.'], eye: 2, colors: { '#': HAT, s: SKIN, w: BEARD }, tint: HAT_LIT },
    // One of his firework dragons, sparks flying.
    'general-purpose': { rows: ['y.####.y', '.######.', '###yy###', '.y-..-y.'], eye: 1, feet: false, colors: { '#': 0xe0502a, y: 0xffd84a }, tint: 0xf07a3a },
    // The Balrog of Morgoth: shadow and flame, wings spread.
    other: { rows: ['f-....-f', 'f######f', 'ww#ff#ww', '..#..#..'], eye: 1, eyeColor: 0xffd84a, colors: { '#': 0x6a2418, f: 0xff7a1a, w: 0x3c1a14 }, tint: 0xff7a1a },
  },
}
