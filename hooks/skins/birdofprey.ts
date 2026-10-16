import type { SkinLook } from './types'

const HULL = 0x7a8a62
const NECK = 0x4e5840
const EDGE = 0xb4c09a
const LINE = 0x3e4630
const GLOW = 0xe0602a

// A Klingon Bird-of-Prey in attack position: a head on a long neck, two big
// feathered wings swept down, disruptor cannons glowing at the wingtips.
export const look: SkinLook = {
  said: "Buddy flies a Klingon Bird-of-Prey. Qapla'!",
  group: 'Sci-fi ships',
  rows: [
    '....hh....',
    '...hwwh...',
    '....nn....',
    '....nn....',
    '..eennee..',
    '.ehhnnhhe.',
    'ehhfnnfhhe',
    'hhfhnnhfhh',
    'hfh.nn.hfh',
    'w........w',
  ],
  colors: { h: HULL, n: NECK, e: EDGE, f: LINE, w: GLOW },
  eyes: [[4, 1], [5, 1]],
  eyeColor: 0x2a1a10,
  smile: [[0, 9], [9, 9]],
  smileColor: 0xffc060,
  tear: [4, 3],
  feet: { color: GLOW, at: [4, 5] },
  captions: { happy: 'GLORY!', idle: 'HONOR' },
  critters: {
    // A scout probe.
    Explore: { rows: ['...##...', '..####..', '.#o##o#.', '..-..-..'], eye: 2, eyeColor: 0xe0602a, feet: false, arms: false, colors: { '#': HULL, o: GLOW }, tint: HULL },
    // A warrior: ridged forehead, long hair.
    Plan: { rows: ['.kkkkkk.', 'k#-##-#k', 'k######k', 'k.#--#.k'], eye: 2, feet: false, arms: false, colors: { '#': 0xc89a7a, k: 0x3a3a48 }, tint: 0xc89a7a },
    // A small fighter.
    fork: { rows: ['...##...', '.#.##.#.', '########', '#..##..#'], eye: 0, eyes: [3, 4], eyeColor: 0xe0602a, feet: false, arms: false, colors: { '#': HULL }, tint: HULL },
    // A bat'leth.
    'general-purpose': { rows: ['.##..##.', '#.#..#.#', '#..##..#', '.#.##.#.'], eye: 2, eyes: [3, 4], feet: false, arms: false, colors: { '#': 0xb8bcc4 }, tint: 0xb8bcc4 },
    // A mug of bloodwine.
    other: { rows: ['.rrrrr..', '#rrrrr#.', '#.###.##', '..###.#.'], eye: 1, eyes: [2, 4], feet: false, arms: false, colors: { '#': 0x8a2a2a, r: 0xb02030 }, tint: 0xb02030 },
  },
}
