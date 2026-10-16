import type { SkinLook } from './types'

const PURPLE = 0x6c4c9e
const LIGHT = 0x9a7acc
const DARK = 0x4a3270
const GRIN = 0xf2f0f6

// Gengar, the Shadow Pokémon: a round purple body, pointed ears and a spiky
// back, sly brows over red eyes and the huge white grin.
export const look: SkinLook = {
  said: 'Buddy melts into the shadows: Gengar! Hehehe...',
  group: 'Pokémon',
  rows: [
    'l..l..p..p',
    'll.lppp.pp',
    'pllppppppp',
    '.lkppppkp.',
    '.lpppppppd',
    'plwwwwwwpd',
    '.ppwwwwpd.',
    '.pppppppd.',
    '..pdpdpd..',
  ],
  colors: { p: PURPLE, l: LIGHT, d: DARK, k: 0x2a1a40, w: GRIN },
  eyes: [[3, 4], [6, 4]],
  eyeColor: 0xe0303a,
  smile: [[1, 4], [8, 4]],
  smileColor: GRIN,
  tear: [2, 4],
  arms: { color: PURPLE, down: [[0, 6], [9, 6]], up: [[0, 3], [9, 3]] },
  feet: { color: DARK, at: [3, 6] },
  captions: { idle: 'GENGAR', happy: 'HEHEHE!' },
  critters: {
    // Gastly: a dark ball wrapped in purple gas.
    Explore: { rows: ['p.pppp.p', 'p######p', 'p######p', '.p####p.'], eye: 1, eyeColor: GRIN, feet: false, arms: false, colors: { '#': 0x2e2a3a, p: 0xa078c8 }, tint: 0xa078c8 },
    // Haunter: spiky head, a grin and two floating hands.
    Plan: { rows: ['.#.##.#.', '.######.', 'h#wwww#h', '..-##-..'], eye: 1, eyeColor: 0xe0303a, feet: false, arms: false, colors: { '#': 0x8a62b8, h: 0xa888d0, w: GRIN }, tint: 0x8a62b8 },
    // A little Gengar, grinning.
    fork: { rows: ['#.#..#.#', '########', '##wwww##', '.######.'], eye: 1, eyeColor: 0xe0303a, colors: { '#': PURPLE, w: GRIN }, tint: LIGHT },
    // Misdreavus: a teal wisp with a red bead necklace.
    'general-purpose': { rows: ['..####..', '.######.', '.#rrrr#.', '.#.##.#.'], eye: 1, feet: false, colors: { '#': 0x4a8a8a, r: 0xd03a6a }, tint: 0x4a8a8a },
    // Duskull: a grey wraith behind a white skull mask with one red eye.
    other: { rows: ['..####..', '.#wwww#.', '..####..', '.#.##.#.'], eye: 1, eyes: [3], eyeColor: 0xe0303a, feet: false, colors: { '#': 0x4a4a56, w: 0xe8e0d0 }, tint: 0x8a8a96 },
  },
}
