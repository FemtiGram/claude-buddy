import type { SkinLook } from './types'

const RED = 0xe0342b
const SKIN = 0xf2b98a
const BROWN = 0x7a4a24
const BLUE = 0x3a6fd8
const YELLOW = 0xf2c230
const CLOUD = 0xe6ecf2

// Mario of the Mushroom Kingdom, NES style: red cap, big nose, mustache,
// blue overalls with two yellow buttons.
export const look: SkinLook = {
  said: "Buddy puts on the cap: it's-a Mario!",
  group: 'Games',
  rows: [
    '..rrrrr...',
    '.rrrrrrrrr',
    '.hhssssss.',
    '.hsssssnn.',
    '.hsmmmmms.',
    '..rbrrbr..',
    '..bybbyb..',
    '..bbbbbb..',
  ],
  colors: { r: RED, h: BROWN, s: SKIN, n: 0xe29a6c, m: 0x4a2a14, b: BLUE, y: YELLOW },
  eyes: [[3, 3], [6, 3]],
  smile: [[2, 4], [8, 4]],
  tear: [2, 3],
  arms: { color: SKIN, down: [[1, 6], [8, 6]], up: [[0, 5], [9, 5]] },
  feet: { color: 0x6b3e1e, at: [3, 6] },
  captions: { happy: 'WAHOO!', idle: 'HMM' },
  critters: {
    // Lakitu: a green-shelled koopa on his cloud.
    Explore: { rows: ['..gggg..', '.######.', 'wwwwwwww', '.wwwwww.'], eye: 1, feet: false, colors: { '#': 0xd9c25a, g: 0x2fa660, w: CLOUD }, tint: 0x2fa660 },
    // Toad: white-spotted red head, blue vest.
    Plan: { rows: ['..rwwr..', '.wwrrww.', '.######.', '..bbbb..'], eye: 2, colors: { '#': 0xf2cfa8, r: RED, w: CLOUD, b: BLUE }, tint: 0xe0342b },
    // 1-Up mushroom: green cap, white spots, cream stem.
    fork: { rows: ['..gggg..', 'gwwggwwg', '..####..', '..-##-..'], eye: 2, colors: { '#': 0xf0e2b8, g: 0x35b36b, w: CLOUD }, tint: 0x35b36b },
    // Goomba: brown dome, angry brows, cream face.
    'general-purpose': { rows: ['.######.', '.#k##k#.', '.#cccc#.', '..cccc..'], eye: 2, colors: { '#': 0x9a5a2a, k: 0x3a2010, c: 0xf0d8a8 }, tint: 0x9a5a2a },
    // Boo: a white ghost, tongue out.
    other: { rows: ['..####..', '.######.', '.##kk##.', '..#rr#..'], eye: 1, feet: false, colors: { '#': 0xe9e9f0, k: 0x3a3a50, r: 0xe0527a }, tint: 0xb9b9d8 },
  },
}
