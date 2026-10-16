import type { SkinLook } from './types'

const HORN = 0xd8c8b8
const HORN_TIP = 0x3a2a2a
const HAIR = 0x2a1a26
const SKIN = 0xf0d4cc
const GOWN_LIGHT = 0xd85a78
const GOWN = 0xa02848
const GOWN_DARK = 0x6a1830
const WING = 0x6a1838
const RIM = 0xc8446a

// Lilith, Daughter of Hatred (Diablo IV): bone horns curling up out of long
// dark hair, a pale face with glowing amber eyes and red lips, a blood-red
// gown and great crimson bat wings at her back.
export const look: SkinLook = {
  said: 'Buddy rises from the blood petals: Lilith has returned.',
  group: 'Diablo',
  rows: [
    'T........T',
    '.hh....hh.',
    '..hdHddh..',
    '.edssssde.',
    'ewdssssdwe',
    'ewdsllsdwe',
    'ewddssddwe',
    'ewdRrrrdwe',
    '.e.Rrrf.e.',
    '..Rrrrff..',
    '.Rrrrrfff.',
  ],
  colors: {
    T: HORN_TIP, h: HORN, d: HAIR, H: 0x6a4a5e, s: SKIN, l: 0xc8102e,
    R: GOWN_LIGHT, r: GOWN, f: GOWN_DARK, w: WING, e: RIM,
  },
  eyes: [[3, 4], [6, 4]],
  eyeColor: 0xffb030,
  smile: [[3, 5], [6, 5]],
  smileColor: 0x7a0a1a,
  tear: [3, 5],
  arms: { color: SKIN, down: [[2, 8], [7, 8]], up: [[0, 2], [9, 2]] },
  feet: { color: HAIR, at: [3, 6] },
  captions: { idle: 'HATRED', happy: 'KNEEL!' },
  critters: {
    // A hooded cultist of Lilith, eyes glowing in the shadow of the cowl.
    Explore: { rows: ['...##...', '..####..', '.#kkkk#.', '.##--##.'], eye: 2, eyeColor: 0xffb030, colors: { '#': 0x8a2a2a, k: 0x1a0a0e }, tint: 0x8a2a2a },
    // Inarius: a silver helm with a glowing slit, wings of blue light.
    Plan: { rows: ['..####..', 'c######c', 'cc#kk#cc', '..g##g..'], eye: 2, eyes: [3, 4], eyeColor: 0xbfefff, colors: { '#': 0xc0c8d4, c: 0x6ac0f0, k: 0x283040, g: 0xd8a840 }, tint: 0x6ac0f0 },
    // A little Lilith: bone horns, dark hair, pale face, amber eyes.
    fork: { rows: ['h.dddd.h', '.d####d.', '.d#ll#d.', '..rrrr..'], eye: 1, eyeColor: 0xffb030, colors: { '#': SKIN, h: HORN, d: HAIR, l: 0xc8102e, r: GOWN }, tint: GOWN },
    // A Knight of Hatred: horned black steel, a red glow behind the visor.
    'general-purpose': { rows: ['k..kk..k', '.k####k.', '.#r##r#.', '.######.'], eye: 2, eyeColor: 0xff3020, colors: { '#': 0x5e5060, k: 0x9a8a90, r: 0x3a0a10 }, tint: 0xc02030 },
    // A blood petal, deep red with a dark stem.
    other: { rows: ['.#....#.', '.##..##.', '..####..', '...gg...'], eye: 2, feet: false, arms: false, colors: { '#': 0xd0203a, g: 0x4a1a20 }, tint: 0xd0203a },
  },
}
