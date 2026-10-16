import type { SkinLook } from './types'

const HAIR = 0x3f6a54
const SKIN = 0xf0c8a0
const SUIT = 0x2f5aa0

// Spike Spiegel: big fluffy dark-green mop, slim face, blue suit over a
// yellow shirt with a thin tie, long legs, dark shoes.
export const look: SkinLook = {
  said: 'Buddy turns into Spike. See you, space cowboy.',
  group: 'Anime',
  rows: [
    '..HHhhh...',
    '.HHhhhhhd.',
    'hHhhhhhhdd',
    '.hhssssdd.',
    '..hssssd..',
    '.bbyttyBB.',
    '.bbbtyBBB.',
    '.bbbbbBBB.',
    '..bb..BB..',
    '..bb..BB..',
  ],
  colors: { h: HAIR, H: 0x7fb092, d: 0x274636, s: SKIN, b: SUIT, B: 0x1f3d70, y: 0xe8c860, t: 0x1e2a4a },
  eyes: [[3, 3], [6, 3]],
  smile: [[4, 4], [5, 4]],
  tear: [3, 4],
  arms: { color: SKIN, down: [[0, 7], [9, 7]], up: [[0, 5], [9, 5]] },
  feet: { color: 0x3a3a48, at: [3, 6] },
  captions: { happy: 'BOP!', idle: 'SEE YOU' },
  critters: {
    // Swordfish II: sleek red ship.
    Explore: { rows: ['...ww...', '########', '.######.', '..-##-..'], eye: 1, feet: false, colors: { '#': 0xd84a3a, w: 0xcfd8e0 }, tint: 0xd84a3a },
    // Jet: bald, beard, metal arm.
    Plan: { rows: ['..####..', '.######.', '.gggggg.', 'mmgggg..'], eye: 1, colors: { '#': 0xd09a70, g: 0x8a8a96, m: 0xc0c8d4 }, tint: 0xd09a70 },
    // Ein the corgi.
    fork: { rows: ['##....##', '########', '.#wwww#.', '.######.'], eye: 1, colors: { '#': 0xd89a50, w: 0xf0e8d8 }, tint: 0xd89a50 },
    // Faye: purple hair, yellow top.
    'general-purpose': { rows: ['.######.', '#ssssss#', '##.ss.##', '..yyyy..'], eye: 1, colors: { '#': 0x9a6ac8, s: 0xf0c8a0, y: 0xe8c860 }, tint: 0x9a6ac8 },
    // Ed: red hair, orange goggles.
    other: { rows: ['.######.', '.gg##gg.', '.ssssss.', '..cccc..'], eye: 2, colors: { '#': 0xd05a3a, g: 0xe8a030, s: 0xf0c8a0, c: 0xc8c050 }, tint: 0xd05a3a },
  },
}
