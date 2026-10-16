import type { SkinLook } from './types'

const GREEN = 0x8fd14f
const LIGHT = 0xc9f27a
const DEEP = 0x6aa83a
const MOUTH = 0x5a1e2e
const TONGUE = 0xe0507a

// Slimer, the green ghost: a blob with a huge open mouth and a pink tongue,
// stubby arms, a wispy tail.
export const look: SkinLook = {
  said: 'Buddy gets slimed: Slimer!',
  group: 'Film & TV',
  rows: [
    '...hhh....',
    '..gggggg..',
    '.ggggggggg',
    '.ggdgggdg.',
    '.gkkkkkkg.',
    '.gkttttkg.',
    '.gkkttkkg.',
    '..gggggg..',
    '...gggg...',
    '....gg....',
    '.....g....',
  ],
  colors: { g: GREEN, h: LIGHT, d: 0x2b3a1e, k: MOUTH, t: TONGUE },
  eyes: [[3, 3], [7, 3]],
  eyeColor: 0x2b3a1e,
  smile: [[3, 4], [6, 4]],
  tear: [2, 3],
  arms: { color: DEEP, down: [[0, 6], [9, 6]], up: [[0, 4], [9, 4]] },
  captions: { happy: 'YUM!', idle: 'SLIME' },
  critters: {
    // A PKE meter.
    Explore: { rows: ['.y....y.', '.######.', '.#g##g#.', '.######.'], eye: 2, feet: false, arms: false, colors: { '#': 0x7e8aa0, y: 0xe0c030, g: 0x8fd14f }, tint: 0x7e8aa0 },
    // A proton pack.
    Plan: { rows: ['...hh...', '.######.', '.#y##y#.', '.##..##.'], eye: 2, colors: { '#': 0xb06a3a, h: 0x7e8aa0, y: 0xe0c030 }, tint: 0xb06a3a },
    // A slime droplet.
    fork: { rows: ['...##...', '..####..', '.######.', '..####..'], eye: 2, feet: false, arms: false, colors: { '#': GREEN }, tint: GREEN },
    // The no-ghost logo ghost.
    'general-purpose': { rows: ['r.####.r', '.######.', '.######.', 'r#.##.#r'], eye: 1, feet: false, colors: { '#': 0xe8e8ee, r: 0xe0342b }, tint: 0xe0342b },
    // The Stay Puft marshmallow man.
    other: { rows: ['..bbbb..', '.######.', '.######.', '.##..##.'], eye: 1, colors: { '#': 0xefe8e0, b: 0x3a6fd8 }, tint: 0xefe8e0 },
  },
}
