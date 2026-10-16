import type { SkinLook } from './types'

const TAN = 0xd9a441
const EAR = 0x7a4a21

// Gromit of Wallace & Gromit: tan beagle, long brown ears, dark nose, big
// white eyes under a heavy brow, and not a word to say (no mouth).
export const look: SkinLook = {
  said: 'Buddy turns into Gromit.',
  group: 'Cartoons & folklore',
  rows: [
    '....tt....',
    '..tttttt..',
    '.etttttte.',
    'ebbbttbbbe',
    'etwwttwwte',
    'etttnnttte',
    '.etttttte.',
    '..gggggg..',
    '..gggggg..',
    '..tt..tt..',
  ],
  colors: { t: TAN, e: EAR, b: 0x4a2c12, w: 0xe8e4dc, n: 0x2e2a30, g: 0x4a8f5a },
  eyes: [[3, 4], [6, 4]],
  eyeColor: 0x2e2a30,
  tear: [2, 5],
  arms: { color: TAN, down: [[1, 8], [8, 8]], up: [[0, 6], [9, 6]] },
  feet: { color: EAR, at: [3, 6] },
  captions: { happy: 'CHEESE', idle: 'TEE' },
  critters: {
    // Feathers McGraw, the penguin with a red glove on his head.
    Explore: { rows: ['.r.rr.r.', '.######.', '.#wwww#.', '..#oo#..'], eye: 2, colors: { '#': 0x3a3f52, r: 0xc83a32, w: 0xe0dcd2, o: 0xe0882a }, tint: 0xc83a32 },
    // Wallace: green pullover, red tie.
    Plan: { rows: ['.hhhhh..', '.######.', '.######.', '.gggrgg.'], eye: 2, colors: { '#': 0xf0c8a0, h: 0xb08a50, g: 0x4a8f5a, r: 0xc83a32 }, tint: 0x4a8f5a },
    // Shaun the sheep: woolly top, pale face, floppy ears.
    fork: { rows: ['.######.', '.######.', 'e#ffff#e', '..ffff..'], eye: 2, colors: { '#': 0xe2ddd0, f: 0xd8c3a5, e: 0x8a7a68 }, tint: 0xd8c3a5 },
    // A wedge of cheese.
    'general-purpose': { rows: ['...##...', '..#h##..', '.#####h.', '#h####-#'], eye: 2, colors: { '#': 0xe5b83a, h: 0xb88a22 }, tint: 0xe5b83a },
    // Preston the robot dog.
    other: { rows: ['.k.kk.k.', '########', '.######.', '..#kk#..'], eye: 2, eyeColor: 0xe0463a, colors: { '#': 0x8a96a8, k: 0x3e4452 }, tint: 0x8a96a8 },
  },
}
