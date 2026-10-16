import type { SkinLook } from './types'

const RED = 0xd01c1c
const RED_HI = 0xf05a5a
const RED_DARK = 0x8a0e2a
const VISOR = 0x9fdcef
const VISOR_DARK = 0x4a8eb4

// An Among Us crewmate: a red bean in a spacesuit, the wide pale-blue visor
// up front, a backpack behind and two stubby legs.
export const look: SkinLook = {
  said: 'Buddy suits up as a crewmate. Kinda sus.',
  group: 'Games',
  rows: [
    '..........',
    '...rrrr...',
    '..rRRrrr..',
    '.brRvvvvv.',
    'bbrrVVVVV.',
    'bbrrrrrrr.',
    'bbrrrrrrr.',
    '.brrrrrrr.',
    '..rrrrrrr.',
    '..rrr.rrr.',
  ],
  colors: { r: RED, R: RED_HI, b: RED_DARK, v: VISOR, V: VISOR_DARK },
  eyes: [[5, 3], [7, 3]],
  eyeColor: 0xffffff,
  tear: [6, 4],
  feet: { color: RED_DARK, at: [3, 7] },
  captions: { happy: 'VICTORY', idle: 'SUS' },
  critters: {
    // The UFO pet: a little grey saucer.
    Explore: { rows: ['...##...', '..####..', '########', '..-..-..'], eye: 1, feet: false, arms: false, colors: { '#': 0xa0a8b8 }, tint: 0xa0a8b8 },
    // The Doggy pet: brown, floppy ears, black nose.
    Plan: { rows: ['.-....-.', '-######-', '.######.', '..#kk#..'], eye: 1, colors: { '#': 0xc89a5a, k: 0x2a2020 }, tint: 0xc89a5a },
    // The Mini Crewmate pet, in red with its backpack.
    fork: { rows: ['..####..', 'b#vvvv#.', 'b######.', '.######.'], eye: 1, eyes: [3, 5], eyeColor: 0xffffff, arms: false, colors: { '#': RED, b: RED_DARK, v: VISOR }, tint: RED },
    // The Bedcrab pet: an orange crab, claws up.
    'general-purpose': { rows: ['#-....-#', '.######.', '########', '.#.#.#.#'], eye: 1, feet: false, arms: false, colors: { '#': 0xe8703a }, tint: 0xe8703a },
    // An impostor: a purple crewmate peeking out of a vent.
    other: { rows: ['..####..', '.#vvvv#.', 'gkgkgkgk', 'gggggggg'], eye: 1, eyes: [3, 4], eyeColor: 0xffffff, feet: false, arms: false, colors: { '#': 0x7b3fd0, v: VISOR, g: 0x9a9aa0, k: 0x3a3a40 }, tint: 0x7b3fd0 },
  },
}
