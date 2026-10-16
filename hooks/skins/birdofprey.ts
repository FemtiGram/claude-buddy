import type { SkinLook } from './types'

const HULL = 0x6e7a5a
const SHADE = 0x4e5840
const GLOW = 0xe0602a

// A Klingon Bird-of-Prey in attack position: a head on a long neck, two big
// feathered wings swept down, disruptor cannons glowing at the wingtips.
export const look: SkinLook = {
  said: "Buddy flies a Klingon Bird-of-Prey. Qapla'!",
  group: 'Sci-fi ships',
  rows: [
    '....hh....',
    '...hwwh...',
    '....hh....',
    '..hhhhhh..',
    '.hhshhshh.',
    'hhhhhhhhhh',
    'hshshhshsh',
    'hh.shhs.hh',
    'h...hh...h',
    'r........r',
  ],
  colors: { h: HULL, s: SHADE, w: GLOW, r: GLOW },
  eyes: [[4, 1], [5, 1]],
  eyeColor: 0x2a1a10,
  smile: [[0, 9], [9, 9]],
  tear: [4, 3],
  feet: { color: GLOW, at: [4, 5] },
  captions: { happy: 'GLORY!', idle: 'HONOR' },
  critters: {
    // A scout probe.
    Explore: { rows: ['...##...', '..####..', '.#o##o#.', '..-..-..'], eye: 2, eyeColor: 0xe0602a, feet: false, arms: false, colors: { '#': HULL, o: 0xe0602a }, tint: HULL },
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
