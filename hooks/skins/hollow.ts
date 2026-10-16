import type { SkinLook } from './types'

const MASK = 0xe9ecef
const SHADE = 0xc2c6cc
const DARK = 0x14141f

// The Knight from Hollow Knight: a pale horned mask with a grey shade and black
// eye holes, a small lifted body with a light rim, a navy cape and the nail.
export const look: SkinLook = {
  said: 'Buddy turns into the Knight from Hollow Knight.',
  group: 'Games',
  rows: [
    '...s..s...',
    '..sH..#s..',
    '.sHHH###s.',
    '.sHH####s.',
    '.skk##kks.',
    '.skk##kks.',
    '..ssssss..',
    '.NrbbbbrnP',
    '.Nnrbbrnnp',
  ],
  colors: { H: 0xf0f2f5, '#': 0xdadee4, s: 0xa2a8b2, k: DARK, b: 0x5a5a8a, r: 0x9090c8, N: 0x6a82c8, n: 0x3e5290, P: 0xdde0e6, p: 0xb8bcc4 },
  eyes: [[3, 4], [6, 4], [3, 5], [6, 5]],
  eyeColor: DARK,
  smile: [[4, 6], [5, 6]],
  tear: [3, 5],
  arms: { color: 0xa2a8b2, down: [[0, 7]], up: [[0, 6]] },
  feet: { color: 0x9090c8, at: [3, 6] },
  captions: { happy: 'REST', idle: '...' },
  critters: {
    // Vengefly: a winged bug.
    Explore: { rows: ['w.####.w', 'ww####ww', '.#.##.#.', '...--...'], eye: 1, feet: false, arms: false, colors: { '#': 0x5a6a8a, w: SHADE }, tint: 0x5a6a8a },
    // Hornet: red cloak, white mask, needle.
    Plan: { rows: ['..####.n', '.#wwww#n', '.######.', '.#.##.#.'], eye: 1, colors: { '#': 0xc93a45, w: MASK, n: 0xd8dce4 }, tint: 0xc93a45 },
    // A pale green grub.
    fork: { rows: ['..####..', '.######.', '########', '.-.-.-.-'], eye: 1, feet: false, arms: false, colors: { '#': 0xa8d8a0 }, tint: 0xa8d8a0 },
    // Crawlid: a shelled bug.
    'general-purpose': { rows: ['........', '.cccccc.', '########', '.#.##.#.'], eye: 2, colors: { '#': 0xb0803c, c: 0x7a7a8a }, tint: 0xb0803c },
    // Tiktik: a spiky round bug.
    other: { rows: ['.s.ss.s.', '.######.', '########', '.#.##.#.'], eye: 2, colors: { '#': 0xc08a4a, s: 0x6a4a2a }, tint: 0xc08a4a },
  },
}
