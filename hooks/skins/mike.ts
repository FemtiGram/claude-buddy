import type { SkinLook } from './types'

const GREEN = 0x7dc242
const DARK = 0x5ba832

// Mike Wazowski of Monsters, Inc.: a green sphere, one huge eye, two tiny
// horns, a wide mouth, thin arms and legs.
export const look: SkinLook = {
  said: 'Buddy turns into Mike Wazowski!',
  group: 'Film & TV',
  rows: [
    '..........',
    '...h..h...',
    '..gggggg..',
    '.gggggggg.',
    '.ggwwwwgg.',
    '.gwwiiwwg.',
    '.gwwiiwwd.',
    '.ggwwwwgd.',
    '..gmmmmg..',
    '...gggd...',
  ],
  colors: { g: GREEN, d: DARK, h: 0xd9c98a, w: 0xf0f0e8, i: 0x3f8f3a, m: 0x8a2f3a },
  eyes: [[4, 5], [5, 5]],
  eyeColor: 0x1e2a1a,
  smile: [[2, 8], [7, 8]],
  tear: [3, 6],
  arms: { color: DARK, down: [[0, 7], [9, 7]], up: [[0, 4], [9, 4]] },
  feet: { color: DARK, at: [3, 6] },
  captions: { happy: 'YES!', idle: 'HI' },
  critters: {
    // Boo in her purple monster costume.
    Explore: { rows: ['#.####.#', '.######.', '.#ssss#.', '..####..'], eye: 2, colors: { '#': 0x9a5fc0, s: 0xf2b98a }, tint: 0x9a5fc0 },
    // Roz, the slug with glasses.
    Plan: { rows: ['..####..', '.######.', '.ll##ll.', '########'], eye: 2, feet: false, arms: false, colors: { '#': 0x7a8f5a, l: 0xdfe9f0 }, tint: 0x7a8f5a },
    // A mini Mike.
    fork: { rows: ['..h..h..', '.######.', '.#wiiw#.', '..####..'], eye: 2, eyes: [3, 4], colors: { '#': GREEN, h: 0xd9c98a, w: 0xf0f0e8, i: 0x3f8f3a }, tint: GREEN },
    // Sulley: blue fur, purple spots, cream horns.
    'general-purpose': { rows: ['h.####.h', '.#p##p#.', '.##nn##.', '..#pp#..'], eye: 2, colors: { '#': 0x6f9fd8, p: 0x9a5fc0, h: 0xe8dcb0, n: 0x9ad0d0 }, tint: 0x6f9fd8 },
    // A closet door.
    other: { rows: ['.######.', '.#dddd#.', '.#dddy#.', '.######.'], eye: 1, feet: false, arms: false, colors: { '#': 0x4a8fb0, d: 0xc9a063, y: 0xf2c230 }, tint: 0x4a8fb0 },
  },
}
