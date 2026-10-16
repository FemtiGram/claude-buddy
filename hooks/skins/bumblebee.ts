import type { SkinLook } from './types'

const YELLOW = 0xf2c41a
const AMBER = 0xc8960e
const BLACK = 0x26262a
const FACE = 0xa8b0bc
const GLOW = 0x3ab4ff

// Bumblebee: yellow helmet with the two horn fins, a silver face with blue
// eyes, yellow chest with the black Camaro racing stripes, black belt.
export const look: SkinLook = {
  said: 'Buddy transforms into Bumblebee. *radio static*',
  group: 'Robots',
  rows: [
    '.y......y.',
    '.yhyyyyyy.',
    '.yyyyyyya.',
    '.yssssssa.',
    '.yssssssa.',
    '..ssmmss..',
    '.yykyykya.',
    '.yykyykya.',
    '..kkkkkk..',
    '..ya..ya..',
  ],
  colors: { y: YELLOW, h: 0xfff0a0, a: AMBER, s: FACE, m: 0x6a7280, k: BLACK },
  eyes: [[3, 3], [6, 3]],
  eyeColor: GLOW,
  smile: [[3, 5], [6, 5]],
  tear: [2, 4],
  arms: { color: YELLOW, down: [[0, 7], [9, 7]], up: [[0, 5], [9, 5]] },
  feet: { color: BLACK, at: [2, 3, 6, 7] },
  captions: { idle: 'BEEP', happy: 'BUMBLE!' },
  critters: {
    // Ravage: a black robot panther with a grey rim, one red eye, tail up.
    Explore: { rows: ['##.....#', '#k#####.', '.kkkkkk#', '.#.#.#.#'], eye: 1, eyes: [1], eyeColor: 0xff3030, feet: false, arms: false, colors: { '#': 0x8a8a9c, k: 0x2a2a32 }, tint: 0x8a8a9a },
    // The Allspark: a grey cube etched with glowing blue glyphs.
    Plan: { rows: ['########', '#c#cc#c#', '#cc##cc#', '########'], eye: 1, eyeColor: 0x9af0ff, feet: false, arms: false, colors: { '#': 0x8a8a7a, c: 0x3ab4e8 }, tint: 0x3ab4e8 },
    // A mini Bumblebee in car mode: yellow Camaro, black stripes on the hood.
    fork: { rows: ['..####..', '.#wwww#.', '###kk###', '.k....k.'], eye: 1, eyeColor: 0x1a2a5a, feet: false, colors: { '#': YELLOW, w: 0x8ac8ff, k: BLACK }, tint: YELLOW },
    // Starscream: silver jet, red and blue wings, red eyes.
    'general-purpose': { rows: ['b.####.b', 'bb#rr#bb', '..####..', '..r..r..'], eye: 1, eyeColor: 0xff3030, feet: false, colors: { '#': 0xc8ccd4, r: 0xd03030, b: 0x3a6ad0 }, tint: 0xc8ccd4 },
    // The Decepticon insignia, a purple pointed mask.
    other: { rows: ['#..##..#', '##.##.##', '#k####k#', '.##..##.'], eye: 2, eyes: [1, 6], eyeColor: 0xff3030, feet: false, arms: false, colors: { '#': 0x8a3ac8, k: 0x3a1a5a }, tint: 0x8a3ac8 },
  },
}
