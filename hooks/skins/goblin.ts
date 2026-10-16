import type { SkinLook } from './types'

const SKIN = 0x86a35a
const SACK = 0xa87038
const GOLD = 0xf2c230

// The Treasure Goblin of Diablo III: a hunched little green goblin with a
// floppy ear and a toothy grin, dragging a sack of loot bigger than he is,
// gold heaped on top and spilling out the bottom.
export const look: SkinLook = {
  said: 'Buddy grabs a sack of gold and runs: a Treasure Goblin!',
  group: 'Diablo',
  rows: [
    '.......o..',
    '......yoy.',
    '..hgg.yyyy',
    'ehhgggsyss',
    '.gggggssss',
    '.gkwkgssst',
    '..gggsssst',
    '..bbb.yoyy',
  ],
  colors: { g: SKIN, h: 0xb8d48a, e: 0x5e7a3c, s: SACK, t: 0x6a4220, y: GOLD, o: 0xfff0a0, k: 0x2a1810, w: 0xf0e8d0, b: 0x5a3a2a },
  eyes: [[2, 4], [4, 4]],
  smile: [[1, 5], [5, 5]],
  tear: [1, 5],
  arms: { color: SKIN, down: [[1, 6], [5, 7]], up: [[0, 4], [5, 2]] },
  feet: { color: 0x5e7a3c, at: [2, 4] },
  captions: { idle: 'LOOT!', happy: 'JACKPOT!' },
  critters: {
    // The goblin's portal: a blue-violet swirl he dives into.
    Explore: { rows: ['..####..', '.#pccp#.', '.#cppc#.', '..####..'], eye: 1, feet: false, arms: false, colors: { '#': 0x4a7ae8, p: 0x9a5ae0, c: 0xc8e8ff }, tint: 0x4a7ae8 },
    // A legendary drop: an orange amulet in its pillar of light.
    Plan: { rows: ['...oo...', '...##...', '.o####o.', '...##...'], eye: 2, feet: false, arms: false, colors: { '#': 0xff8a1e, o: 0xffd090 }, tint: 0xff8a1e },
    // A goblin pup with a sack of his own.
    fork: { rows: ['....yyy.', 'e###ssss', '.#k#ssss', '.##..ss.'], eye: 1, eyes: [1, 3], colors: { '#': SKIN, e: 0x5e7a3c, s: SACK, y: GOLD, k: 0x2a1810 }, tint: SKIN },
    // A flawless ruby, cut and glinting.
    'general-purpose': { rows: ['.#w####.', '########', '.-####-.', '...--...'], eye: 1, feet: false, arms: false, colors: { '#': 0xe03a6a, w: 0xffc8d8 }, tint: 0xe03a6a },
    // A heap of gold coins.
    other: { rows: ['...##...', '..#o##..', '.##-###.', '##-##-##'], eye: 2, eyes: [2, 5], feet: false, arms: false, colors: { '#': GOLD, o: 0xfff0a0 }, tint: GOLD },
  },
}
