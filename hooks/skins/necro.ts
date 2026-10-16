import type { SkinLook } from './types'

const HOOD = 0x2e2a36
const RIM = 0x7a7088
const PALE = 0xd8d4cc
const ARMOUR = 0x3e3c48
const BONE = 0xe8e0c8
const GLOW = 0x6ae05a

// The Necromancer of Diablo: a priest of Rathma in a dark hood, his eyes
// glowing green in its shadow over a pale chin, dark armour with bone spikes
// jutting from the shoulders and a green rune on the chest.
export const look: SkinLook = {
  said: 'Buddy raises the dead: the Necromancer walks.',
  group: 'Diablo',
  rows: [
    '....rr....',
    '...rhhr...',
    '..rhhhhr..',
    '.rhhhhhhr.',
    '.rkkkkkkr.',
    'b.hssssh.b',
    'bbaaggaabb',
    '.rAaggaAr.',
    '..aaaaaa..',
    '..aa..aa..',
  ],
  colors: { r: RIM, h: HOOD, k: 0x16141c, s: PALE, a: ARMOUR, A: 0x6e6c7a, b: BONE, g: GLOW },
  eyes: [[3, 4], [6, 4]],
  eyeColor: 0x8aff6a,
  smile: [[4, 5], [5, 5]],
  tear: [3, 5],
  arms: { color: PALE, down: [[0, 7], [9, 7]], up: [[0, 4], [9, 4]] },
  feet: { color: 0x24222c, at: [3, 6] },
  captions: { idle: 'RATHMA', happy: 'RISE!' },
  critters: {
    // A raven of Rathma, black-winged with red eyes.
    Explore: { rows: ['...##...', '..####o.', '-######.', '.-#..#-.'], eye: 1, eyes: [3, 4], eyeColor: 0xff4a4a, feet: false, arms: false, colors: { '#': 0x5a5470, o: 0xd0a040 }, tint: 0x5a5470 },
    // A skeletal mage: a bone skull, a green robe and a glowing staff.
    Plan: { rows: ['..####.g', '..####.l', '...#k#.l', '..pppp.l'], eye: 1, eyes: [2, 5], eyeColor: GLOW, colors: { '#': BONE, k: 0x3a3a30, p: 0x3a6a3a, l: 0x8a6a40, g: GLOW }, tint: 0x3a6a3a },
    // An apprentice necromancer in a little hood.
    fork: { rows: ['..####..', '.#kkkk#.', '..ssss..', 'b-aaaa-b'], eye: 1, eyes: [2, 5], eyeColor: 0x8aff6a, colors: { '#': RIM, k: 0x16141c, s: PALE, a: ARMOUR, b: BONE }, tint: GLOW },
    // A blood golem: a hulk of clotted red.
    'general-purpose': { rows: ['.##..##.', '########', '#-####-#', '.##..##.'], eye: 1, eyes: [2, 5], eyeColor: 0xffd84a, colors: { '#': 0xb02030 }, tint: 0xb02030 },
    // A bone golem: ribs and spikes, green-eyed.
    other: { rows: ['b.####.b', '.######.', '.#-#-#-.', '.##..##.'], eye: 1, eyes: [2, 5], eyeColor: 0x4ac03a, colors: { '#': BONE, b: 0xa89c80 }, tint: BONE },
  },
}
