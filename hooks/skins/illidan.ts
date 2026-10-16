import type { SkinLook } from './types'

const SKIN = 0x8a5ac8
const LIGHT = 0xb08ae0
const DARK = 0x5e3a94
const HORN = 0x7a6a74
const HAIR = 0x2a2236
const FEL = 0x4ad040

// Illidan Stormrage, the Betrayer: purple night-elf skin, two great curved
// horns, long black hair, broad bare shoulders, a dark green blindfold with
// fel-green eyes glowing through it and green fel tattoos in a V down his
// chest.
export const look: SkinLook = {
  said: 'Buddy ties on the blindfold. You are not prepared!',
  group: 'Warcraft',
  rows: [
    'h........h',
    'hh......hh',
    '.hhKKKKhh.',
    'KkLLpppPkK',
    'KkggggggkK',
    'KkppppppkK',
    '.kpppppPk.',
    'LptpppptpP',
    '.pptpptpp.',
    '.pppttppP.',
    '..bbbbbb..',
  ],
  colors: { h: HORN, k: HAIR, K: 0x4a4060, p: SKIN, L: LIGHT, P: DARK, g: 0x1e5a2a, t: FEL, b: 0x3a3a4a },
  eyes: [[3, 4], [6, 4]],
  eyeColor: 0x9aff6a,
  smile: [[4, 6], [5, 6]],
  tear: [3, 5],
  arms: { color: SKIN, down: [[0, 8], [9, 8]], up: [[0, 6], [9, 6]] },
  feet: { color: HAIR, at: [3, 6] },
  captions: { idle: 'BETRAYED', happy: 'PREPARED' },
  critters: {
    // Felhound: a red-brown hound with fel-green tentacles on its back.
    Explore: { rows: ['.g.g.g..', '.######.', '########', '.##..##.'], eye: 1, eyeColor: FEL, colors: { '#': 0x9a4a34, g: FEL }, tint: 0x9a4a34 },
    // Imp: a small orange demon with stubby horns and a fiery belly.
    Plan: { rows: ['.h....h.', '..####..', '.######.', '..#ff#..'], eye: 2, colors: { '#': 0xe0703a, h: 0x5a3020, f: 0xffd040 }, tint: 0xe0703a },
    // A little demon hunter: horns, purple skin, green blindfold.
    fork: { rows: ['h......h', '.h####h.', '.gggggg.', '.######.'], eye: 2, eyeColor: 0x9aff6a, colors: { '#': SKIN, h: HORN, g: 0x1e5a2a }, tint: SKIN },
    // Maiev Shadowsong: the spiked warden helm over a pale night-elf face.
    'general-purpose': { rows: ['s.s..s.s', '.######.', '.#ffff#.', '..####..'], eye: 2, eyes: [3, 4], eyeColor: 0xe8f0ff, colors: { '#': 0x4a7a6e, s: 0x8ab0a4, f: 0xb0a0e0 }, tint: 0x4a7a6e },
    // Infernal: a rock golem wreathed in fel fire.
    other: { rows: ['.g.gg.g.', '.######.', '.#-##-#.', '.######.'], eye: 2, eyeColor: FEL, colors: { '#': 0x7a6e64, g: FEL }, tint: FEL },
  },
}
