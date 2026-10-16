import type { SkinLook } from './types'

const HAIR = 0x2e221c
const SKIN = 0xf2c4a0
const RED = 0xb3202a
const GOLD = 0xe8b830
const ROBE = 0x2a2a34

// Harry Potter: messy black hair, the lightning scar on his forehead, round
// glasses over green eyes, a red-and-gold Gryffindor scarf over his black
// Hogwarts robe.
export const look: SkinLook = {
  said: 'Buddy puts on the glasses: the boy who lived!',
  group: 'Fantasy',
  rows: [
    '..k.kk.k..',
    '.kkhkkkkk.',
    '.kkszsskk.',
    '.kgsggsgk.',
    '.kssssssk.',
    '..ssssss..',
    '.yrryyrry.',
    '.edrdwdde.',
    '.edydwdde.',
    '.edrdddde.',
  ],
  colors: { k: HAIR, h: 0x5a4436, s: SKIN, z: 0xff3048, g: 0x8a8a98, y: GOLD, r: RED, d: ROBE, e: 0x60606e, w: 0xe6e6ea },
  eyes: [[3, 3], [6, 3]],
  eyeColor: 0x2a9a40,
  smile: [[3, 4], [4, 5], [5, 5], [6, 4]],
  tear: [2, 4],
  arms: { color: SKIN, down: [[0, 8], [9, 8]], up: [[0, 6], [9, 6]] },
  feet: { color: 0x4a3226, at: [3, 6] },
  captions: { idle: 'LUMOS', happy: 'EXPECTO!' },
  critters: {
    // The Golden Snitch: a gold ball on silver wings.
    Explore: { rows: ['ww.##.ww', '.w####w.', '..####..', '...--...'], eye: 1, feet: false, arms: false, colors: { '#': 0xe8c040, w: 0xd8dce8 }, tint: 0xe8c040 },
    // The Sorting Hat: a patched, pointy brown hat with a frowning brim.
    Plan: { rows: ['...#....', '..##-...', '.######.', '########'], eye: 2, feet: false, arms: false, colors: { '#': 0x9a7650 }, tint: 0x9a7650 },
    // A mini Harry: messy hair, glasses, scarf.
    fork: { rows: ['.kkkkkk.', '.g#gg#g.', '.######.', '.rryyrr.'], eye: 1, eyeColor: 0x2a9a40, colors: { '#': SKIN, k: HAIR, g: 0x8a8a98, r: RED, y: GOLD }, tint: RED },
    // A Niffler: a dark velvety mole with a duck snout, clutching gold coins.
    'general-purpose': { rows: ['.######.', '#######-', '.##nn##.', '.g####g.'], eye: 1, colors: { '#': 0x6a5a70, n: 0xc89a9a, g: GOLD }, tint: 0x9a8aa8 },
    // Fawkes the phoenix: crimson with golden wings and crest.
    other: { rows: ['...yy...', '.######.', 'yy####yy', '..yyyy..'], eye: 1, feet: false, colors: { '#': 0xd8382a, y: 0xf0a830 }, tint: 0xd8382a },
  },
}
