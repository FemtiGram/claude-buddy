import type { SkinLook } from './types'

// The Minecraft Creeper: a mottled green block with the iconic frown, no arms.
export const look: SkinLook = {
  said: 'Buddy turns into a creeper. Sss...',
  group: 'Games',
  rows: [
    '..........',
    '.gLggLgLg.',
    '.gddggddg.',
    '.gdeggedg.',
    '.gLgddgLg.',
    '.ggddddgg.',
    '.gLdggdgg.',
    '..gLggGg..',
    '..ggGgLg..',
    '..gLggGg..',
  ],
  colors: { g: 0x5ab04a, G: 0x3e8e3a, L: 0x8bd06a, d: 0x1f2a22, e: 0x5ab04a },
  eyes: [[3, 3], [6, 3]],
  eyeColor: 0x1f2a22,
  tear: [3, 4],
  feet: { color: 0x3e8e3a, at: [2, 3, 6, 7] },
  captions: { happy: 'BOOM', idle: 'SSS' },
  critters: {
    // A bat, dark brown-grey, wings spread.
    Explore: { rows: ['#......#', '##.##.##', '.######.', '..#..#..'], eye: 1, eyes: [3, 4], eyeColor: 0xd9c29a, feet: false, arms: false, colors: { '#': 0x6a5a55 }, tint: 0x8a7a74 },
    // A villager: big nose, brown robe.
    Plan: { rows: ['.cccccc.', '.######.', '.##nn##.', '.bbbbbb.'], eye: 1, colors: { '#': 0xd2a98a, c: 0x6b4a32, n: 0xb8866a, b: 0x8b5e3c }, tint: 0xa9794f },
    // A slime cube that splits in two.
    fork: { rows: ['........', '.######.', '.######.', '.######.'], eye: 2, eyes: [2, 5], arms: false, colors: { '#': 0x7fd45f }, tint: 0x7fd45f },
    // A pig.
    'general-purpose': { rows: ['.#....#.', '.######.', '.#oooo#.', '.######.'], eye: 1, colors: { '#': 0xf0a0b0, o: 0xd9788a }, tint: 0xf0a0b0 },
    // A bee: a fuzzy yellow block with dark stripes and pale wings.
    other: { rows: ['.ww..ww.', '.######.', '.kkkkkk.', '.######.'], eye: 1, eyeColor: 0x1a1410, feet: false, colors: { '#': 0xf2c23a, k: 0x3a2a1a, w: 0xcfe6f2 }, tint: 0xf2c23a },
  },
}
