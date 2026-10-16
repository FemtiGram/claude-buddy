import type { SkinLook } from './types'

const GREEN = 0x5ae07a
const PALE = 0xc0c8bc

// A Borg cube: a pale rim catching the light, grey-green panels in a grid of
// dark seams, green lights.
export const look: SkinLook = {
  said: 'Buddy is assimilated. Resistance is futile.',
  group: 'Sci-fi ships',
  rows: [
    'rrrrrrrrrr',
    'rhhkdhhhkm',
    'rhdhdhhdhm',
    'rkkkdkkkkm',
    'rddddddddm',
    'rhhkdhhhkm',
    'rhkgdhkkkm',
    'rkkkdkgkkm',
    'rmmmmmmmmm',
  ],
  colors: { r: 0xb4c4b8, h: 0x8ba090, k: 0x5a6c5e, m: 0x84948a, d: 0x232c26, g: GREEN },
  eyes: [[2, 2], [7, 2]],
  eyeColor: GREEN,
  smile: [[2, 3], [7, 3]],
  tear: [7, 6],
  feet: { color: GREEN, at: [2, 7] },
  captions: { happy: 'FUTILE', idle: 'RESIST' },
  critters: {
    // A Borg sphere.
    Explore: { rows: ['..####..', '.#d##d#.', '########', '.######.'], eye: 2, eyeColor: GREEN, feet: false, arms: false, colors: { '#': 0x6a7a6c, d: 0x2e3a32 }, tint: 0x6a7a6c },
    // A drone: pale face, red eyepiece.
    Plan: { rows: ['.dddddd.', '.######.', '.#####r.', '.dd##dd.'], eye: 1, feet: false, arms: false, colors: { '#': PALE, d: 0x4a5a4e, r: 0xe04a4a }, tint: PALE },
    // A nanoprobe cluster.
    fork: { rows: ['.#..#..#', '#.##.##.', '.#.##.#.', '#..#..#.'], eye: 1, feet: false, arms: false, colors: { '#': GREEN }, tint: GREEN },
    // An assimilation tubule arm.
    'general-purpose': { rows: ['.#...s.s', '########', '########', '.#...s.s'], eye: 1, feet: false, arms: false, colors: { '#': 0x6a7a6c, s: GREEN }, tint: 0x6a7a6c },
    // The Borg Queen's head.
    other: { rows: ['.d.dd.d.', '.d####d.', '.######.', '..#rr#..'], eye: 2, feet: false, arms: false, colors: { '#': PALE, d: 0x4a5a4e, r: 0xc04a5a }, tint: PALE },
  },
}
