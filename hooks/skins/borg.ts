import type { SkinLook } from './types'

const GREEN = 0x5ae07a
const PALE = 0xc0c8bc

// A Borg cube: grey-green hull in a grid of dark seams, lit green panels.
export const look: SkinLook = {
  said: 'Buddy is assimilated. Resistance is futile.',
  group: 'Sci-fi ships',
  rows: [
    'dddddddddd',
    'dlkkdkklkd',
    'dkgkdkgkkd',
    'dkkkdkkkkd',
    'dddddddddd',
    'dlkkdkkgkd',
    'dkkgdkkkld',
    'dkkkdlkkkd',
    'dddddddddd',
  ],
  colors: { d: 0x2e3a32, k: 0x4a5a4e, l: 0x6a7a6c, g: GREEN },
  eyes: [[2, 3], [7, 3]],
  eyeColor: GREEN,
  smile: [[2, 2], [6, 2]],
  tear: [7, 6],
  feet: { color: GREEN, at: [2, 7] },
  captions: { happy: 'BORG', idle: 'RESIST' },
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
