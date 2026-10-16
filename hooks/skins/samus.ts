import type { SkinLook } from './types'

const RED = 0xc8302a
const ORANGE = 0xf28a1e
const LIGHT = 0xffc25a
const VISOR = 0x3ad64a
const GREY = 0x9aa4ae

// Samus Aran in the Varia suit: a round red helmet with the green visor, the
// two huge orange shoulder domes, a red torso with a yellow belt, and the grey
// arm cannon on her right arm.
export const look: SkinLook = {
  said: 'Buddy suits up in the Varia suit: Samus Aran!',
  group: 'Nintendo',
  rows: [
    '...rrrr...',
    '..rLooor..',
    '..rgGggr..',
    '.LrggggrL.',
    'LOOrrrrOOo',
    'OOOrrrrOOo',
    '.oorrrroo.',
    '...yyyy.cc',
    '...rrrr.cc',
    '...or.ro..',
    '...rr.rr..',
  ],
  colors: { r: RED, o: ORANGE, O: 0xd86a14, L: LIGHT, g: VISOR, G: 0xb8ffb0, y: 0xf6d030, c: GREY },
  eyes: [[3, 2], [6, 2]],
  eyeColor: 0x0e4a18,
  smile: [[4, 3], [5, 3]],
  tear: [3, 3],
  arms: { color: ORANGE, down: [[2, 7], [2, 8]], up: [[0, 3], [0, 2]] },
  feet: { color: RED, at: [3, 6] },
  captions: { idle: 'SCAN', happy: 'MISSION!' },
  critters: {
    // A Zoomer: a spiky crawler hugging the cave walls.
    Explore: { rows: ['.y.yy.y.', '.######.', '########', '.-.--.-.'], eye: 2, arms: false, feet: false, colors: { '#': 0xe0702a, y: 0xf6e04a }, tint: 0xe0702a },
    // Mother Brain: a pink brain in her glass tank.
    Plan: { rows: ['.cccccc.', 'c######c', 'c#-##-#c', '.cccccc.'], eye: 2, arms: false, feet: false, colors: { '#': 0xe07aa8, c: 0x8adce8 }, tint: 0xe07aa8 },
    // A mini Samus: orange helmet, green visor, red suit.
    fork: { rows: ['..####..', '.#gggg#.', 'oo#rr#oo', '..r..r..'], eye: 1, eyeColor: 0x0e4a18, colors: { '#': RED, g: VISOR, o: ORANGE }, tint: ORANGE },
    // A Metroid: a green jelly dome over red nuclei and fangs.
    'general-purpose': { rows: ['.######.', '########', '.rr##rr.', '.w.ww.w.'], eye: 1, eyeColor: 0x2a4a2a, arms: false, feet: false, colors: { '#': 0x9ae86a, r: 0xd83a4a, w: 0xe8e0d0 }, tint: 0x9ae86a },
    // Ridley: the purple space dragon with a yellow eye.
    other: { rows: ['p.p.....', 'p######.', '.##ww##p', '.p####.p'], eye: 1, eyes: [2, 5], eyeColor: 0xf6d030, colors: { '#': 0x7a4ab8, p: 0x4a2a7a, w: 0xe8e0d0 }, tint: 0x7a4ab8 },
  },
}
