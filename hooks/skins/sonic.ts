import type { SkinLook } from './types'

const BLUE = 0x1860d8
const TAN = 0xf0c090
const RED = 0xe02020

// Sonic the Hedgehog: three backswept blue spikes, tan muzzle and belly,
// green eyes, white gloves, red shoes.
export const look: SkinLook = {
  said: 'Buddy turns into Sonic. Gotta go fast!',
  group: 'Games',
  rows: [
    'b.b.......',
    'bbbbbb....',
    '.bbbbbbbb.',
    '.bwgbwgbb.',
    '.bbtttttb.',
    '..bttttb..',
    '..bttttb..',
    '..bb..bb..',
  ],
  colors: { b: BLUE, t: TAN, w: 0xe6e6e6, g: 0x30b048 },
  eyes: [[3, 3], [6, 3]],
  smile: [[5, 4], [6, 4]],
  tear: [4, 4],
  arms: { color: 0xe6e6e6, down: [[1, 5], [8, 5]], up: [[0, 4], [9, 4]] },
  feet: { color: RED, at: [3, 6] },
  captions: { happy: 'RINGS', idle: 'GO GO' },
  critters: {
    // Tails: an orange fox with two tails.
    Explore: { rows: ['.#....#.', '.######.', '.#wwww#.', '##.##.##'], eye: 1, feet: false, colors: { '#': 0xe89a30, w: 0xf0e4c8 }, tint: 0xe89a30 },
    // Dr. Eggman: bald dome, big mustache, red suit.
    Plan: { rows: ['..ssss..', '.ssssss.', 'mmmssmmm', '.######.'], eye: 1, colors: { '#': 0xd04040, s: 0xf0c8a0, m: 0x6a4020 }, tint: 0xd04040 },
    // Metal Sonic: the grey-blue robot copy with red eyes.
    fork: { rows: ['#.#.#...', '.######.', '.#-##-#.', '..#..#..'], eye: 1, eyeColor: 0xe03030, colors: { '#': 0x7090b8 }, tint: 0x7090b8 },
    // Motobug: a red ladybug robot on wheels.
    'general-purpose': { rows: ['..####..', '.#k##k#.', '.#wwww#.', '.kk..kk.'], eye: 2, colors: { '#': 0xe04848, k: 0x3a3a4a, w: 0xe6e6e6 }, tint: 0xe04848 },
    // A spinning gold ring.
    other: { rows: ['..####..', '.##..##.', '.##..##.', '..####..'], eye: 1, eyes: [1, 6], feet: false, arms: false, colors: { '#': 0xf0b820 }, tint: 0xf0b820 },
  },
}
