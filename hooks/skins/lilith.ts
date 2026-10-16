import type { SkinLook } from './types'

const HORN = 0x9a8088
const HAIR = 0x2a1a26
const SKIN = 0xf0d4cc
const DRESS = 0xa02848
const WING = 0x8a2448
const RIM = 0xc8446a

// Lilith, Daughter of Hatred (Diablo IV): curling horns, long dark hair
// framing a pale face with red lips, a blood-red gown and great
// crimson bat wings.
export const look: SkinLook = {
  said: 'Buddy rises from the blood petals: Lilith has returned.',
  group: 'Diablo',
  rows: [
    'eh......he',
    'wwh.dd.hww',
    'wwhdHddhww',
    'w.dssssd.w',
    'wwdssssdww',
    'e.dsllsd.e',
    'w.drddrd.w',
    'e..rRrr..e',
    '...rrrr...',
    '..rrrrrr..',
  ],
  colors: { h: HORN, d: HAIR, H: 0x6a4a5e, s: SKIN, l: 0xc8102e, r: DRESS, R: 0xd85a78, w: WING, e: RIM },
  eyes: [[3, 4], [6, 4]],
  eyeColor: 0xd01830,
  smile: [[3, 5], [6, 5]],
  tear: [4, 4],
  arms: { color: SKIN, down: [[2, 8], [7, 8]], up: [[1, 3], [8, 3]] },
  feet: { color: HAIR, at: [3, 6] },
  captions: { idle: 'HATRED', happy: 'KNEEL!' },
  critters: {
    // A vampire bat, red-eyed.
    Explore: { rows: ['#......#', '##.##.##', '.######.', '..-..-..'], eye: 2, eyeColor: 0xff3040, feet: false, colors: { '#': 0x7a4a8a }, tint: 0x7a4a8a },
    // Inarius: a silver helm with a glowing slit, wings of blue light.
    Plan: { rows: ['..####..', 'c######c', 'cc#kk#cc', '..g##g..'], eye: 2, eyes: [3, 4], eyeColor: 0xbfefff, colors: { '#': 0xc0c8d4, c: 0x6ac0f0, k: 0x283040, g: 0xd8a840 }, tint: 0x6ac0f0 },
    // A little Lilith: horns, dark hair, pale face.
    fork: { rows: ['h.dddd.h', '.d####d.', '.d#ll#d.', '..rrrr..'], eye: 1, eyeColor: 0xd01830, colors: { '#': SKIN, h: HORN, d: HAIR, l: 0xc8102e, r: DRESS }, tint: DRESS },
    // A Knight of Hatred: horned black steel, a red glow behind the visor.
    'general-purpose': { rows: ['k..kk..k', '.k####k.', '.#r##r#.', '.######.'], eye: 2, eyeColor: 0xff3020, colors: { '#': 0x5e5060, k: 0x9a8a90, r: 0x3a0a10 }, tint: 0xc02030 },
    // A blood petal, deep red with a dark stem.
    other: { rows: ['.#....#.', '.##..##.', '..####..', '...gg...'], eye: 2, feet: false, arms: false, colors: { '#': 0xd0203a, g: 0x4a1a20 }, tint: 0xd0203a },
  },
}
