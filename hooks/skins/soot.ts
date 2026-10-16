import type { SkinLook } from './types'

const BODY = 0x3a3a46
const FUZZ = 0x585870
const WHITE = 0xf2f2ee
const PUPIL = 0x1c1c26
const LIMB = 0x4a4a58
const STAR = 0xe58fb4

// A soot sprite (susuwatari): a fuzzy charcoal ball, big white eyes, stick limbs.
export const look: SkinLook = {
  said: 'Buddy turns into a soot sprite!',
  rows: [
    '..f...f...',
    '.f.ffff.f.',
    'f########f',
    '.#ww##ww#.',
    'f#ww##ww#f',
    '.########.',
    'f########f',
    '.f######f.',
    '..f.ff.f..',
  ],
  colors: { '#': BODY, f: FUZZ, w: WHITE },
  eyes: [[3, 4], [6, 4]],
  eyeColor: PUPIL,
  smile: [[3, 5], [4, 6], [5, 6], [6, 5]],
  tear: [2, 5],
  arms: { color: LIMB, down: [[0, 5], [9, 5]], up: [[0, 3], [9, 3]] },
  feet: { color: LIMB, at: [3, 6] },
  captions: { idle: 'SOOT', happy: 'NICE' },
  critters: {
    // A lantern in hand, glowing.
    Explore: { rows: ['.f####.h', 'f######L', '.######L', '..f..f..'], eye: 1, eyeColor: WHITE, colors: { '#': BODY, f: FUZZ, h: LIMB, L: 0xffb84d }, tint: 0xffb84d },
    // A scroll across the belly.
    Plan: { rows: ['.f####f.', '.######.', 'fsssssss', '.fsssss.'], eye: 1, eyeColor: WHITE, colors: { '#': BODY, f: FUZZ, s: 0xe8d9b0 }, tint: 0xe8d9b0 },
    // A tiny duplicate ball beside it.
    fork: { rows: ['.f####..', '.######.', '.#####mw', '..f..fmm'], eye: 1, eyeColor: WHITE, colors: { '#': BODY, f: FUZZ, m: 0x6a6a84, w: WHITE }, tint: 0x8a8aa8 },
    // Carrying a lump of coal.
    'general-purpose': { rows: ['.f####f.', 'f######.', '.##cc##.', 'f.cgcc.f'], eye: 1, eyeColor: WHITE, colors: { '#': BODY, f: FUZZ, c: 0x22222c, g: 0x8a8aa0 }, tint: 0x7a7a94 },
    // Wearing a little hat, with a star candy.
    other: { rows: ['..tttt..', '.######.', 'f######f', '.f.ff.f.'], eye: 1, eyeColor: WHITE, colors: { '#': BODY, f: FUZZ, t: STAR }, tint: STAR },
  },
}
