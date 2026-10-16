import type { SkinLook } from './types'

const HAIR = 0x2a2a3e
const SKIN = 0xe0b090
const BLUE = 0x2a4ab0
const RED = 0xc8282e
const YELLOW = 0xe8c83a

// Superman: black hair with the spit curl, a blue suit with the red-and-yellow
// shield, a red cape flowing up behind, a yellow belt and red boots.
export const look: SkinLook = {
  said: 'Buddy suits up as Superman!',
  group: 'DC',
  rows: [
    '.r......r.',
    '.rrhhhhrr.',
    '.rhhhhhhr.',
    '.rsshsssr.',
    '.rssssssr.',
    '.rbbbbbbr.',
    '.rbyyyybr.',
    '.rbyrrybr.',
    '.rbbyybbr.',
    '.ryyyyyyr.',
    '..bb..bb..',
  ],
  colors: { r: RED, h: HAIR, s: SKIN, b: BLUE, y: YELLOW },
  eyes: [[3, 3], [6, 3]],
  smile: [[4, 4], [5, 4]],
  tear: [3, 4],
  arms: { color: SKIN, down: [[0, 7], [9, 7]], up: [[0, 5], [9, 5]] },
  feet: { color: RED, at: [3, 6] },
  captions: { happy: 'UP UP', idle: 'KENT' },
  critters: {
    // Krypto: white dog, red cape.
    Explore: { rows: ['.#....#.', '.######.', '#rrrrrr#', '.#.##.#.'], eye: 1, colors: { '#': 0xe6e4de, r: 0xc8282e }, tint: 0xe6e4de },
    // The Daily Planet globe.
    Plan: { rows: ['..####..', '.#bb#b#.', '.#b#bb#.', '..####..'], eye: 0, eyes: [], feet: false, arms: false, colors: { '#': 0x4a8ad0, g: 0x4a8ad0, b: 0x58a868 }, tint: 0x4a8ad0 },
    // Supergirl: blonde, blue and red.
    fork: { rows: ['.yyyyyy.', 'y######y', '.rbbbbr.', '..b..b..'], eye: 1, colors: { '#': 0xe0b090, y: 0xe8c860, r: 0xc8282e, b: 0x2a4ab0 }, tint: 0xe8c860 },
    // A kryptonite crystal.
    'general-purpose': { rows: ['...##...', '..####..', '.######.', '..####..'], eye: 0, eyes: [], feet: false, arms: false, colors: { '#': 0x40c060 }, tint: 0x40c060 },
    // A Fortress of Solitude crystal.
    other: { rows: ['#..##..#', '#.####.#', '########', '.######.'], eye: 0, eyes: [], feet: false, arms: false, colors: { '#': 0x9ad0ec }, tint: 0x9ad0ec },
  },
}
