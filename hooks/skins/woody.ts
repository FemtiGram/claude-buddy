import type { SkinLook } from './types'

const HAT = 0x9a6a3a
const SKIN = 0xf2c49a
const SHIRT = 0xe0b030
const DENIM = 0x3a6ab8

// Sheriff Woody: the wide brown cowboy hat, brown hair, red bandana, yellow
// shirt under a white cow-print vest with a gold sheriff badge, blue jeans.
export const look: SkinLook = {
  said: "Buddy tips his hat: there's a snake in my boot!",
  group: 'Pixar & Disney',
  rows: [
    '..Hhhhhh..',
    'hhhhhhhhhh',
    '..dssssd..',
    '..ssssss..',
    '..ssssss..',
    '.wkyrrywk.',
    '.kwyyyykw.',
    '.wwGyywkw.',
    '..llGlll..',
    '..bb..bb..',
  ],
  colors: { h: HAT, H: 0xc8945a, d: 0x5a3418, s: SKIN, y: SHIRT, r: 0xd02a2a, w: 0xe8e4d8, k: 0x2a2420, g: 0xf0d040, l: 0x6a4020, G: 0xf0d040, b: DENIM },
  eyes: [[3, 3], [6, 3]],
  smile: [[3, 4], [4, 4], [5, 4], [6, 4]],
  tear: [2, 4],
  arms: { color: SHIRT, down: [[0, 7], [9, 7]], up: [[0, 5], [9, 5]] },
  feet: { color: 0x7a4a24, at: [3, 6] },
  captions: { idle: 'HOWDY', happy: 'YEEHAW!' },
  critters: {
    // Bullseye: the brown horse, pointed ears, dark mane, a white blaze down
    // his long face to a pale muzzle.
    Explore: { rows: ['.#....#.', 'k##ww##k', '.k#ww#k.', '..wwww..'], eye: 1, eyes: [2, 5], arms: false, colors: { '#': 0xa86a3a, k: 0x3a2418, w: 0xf4ece0 }, tint: 0xa86a3a },
    // Mr. Potato Head: bowler hat, pink ears, orange nose, black mustache.
    Plan: { rows: ['..kkkk..', '.######.', 'p##rr##p', '.#mmmm#.'], eye: 1, colors: { '#': 0xc89a5a, k: 0x2a2a2a, p: 0xf08aa0, r: 0xf08a3a, m: 0x2a2018 }, tint: 0xc89a5a },
    // A mini Woody under his big hat.
    fork: { rows: ['..####..', '########', '.ssssss.', '.yyrryy.'], eye: 2, colors: { '#': HAT, s: SKIN, y: SHIRT, r: 0xd02a2a }, tint: HAT },
    // Slinky Dog: a brown dachshund stretched on a silver spring.
    'general-purpose': { rows: ['k.....#k', '##...###', '#zzzz##.', '#....#..'], eye: 1, eyes: [5, 6], colors: { '#': 0xb07840, k: 0x5a3418, z: 0xb8bcc4 }, tint: 0xb07840 },
    // Jessie: red cowgirl hat over a red braid, yellow-sleeved shirt.
    other: { rows: ['..hhhh..', 'hhhhhhhh', '#ssssss#', '#wyyyyw#'], eye: 2, colors: { '#': 0xd8582a, h: 0xc02a2a, s: SKIN, w: 0xf0ece0, y: SHIRT }, tint: 0xd8582a },
  },
}
