import type { SkinLook } from './types'

const HAIR = 0xf0609e
const HAIR_LIGHT = 0xffa0c8
const HAIR_DARK = 0xb83a74
const SKIN = 0xf2c4a0
const NOSE = 0xe09a7c
const SUIT = 0x3a9a8c
const STEEL = 0xb8c0c8

// A gnome tinker of Gnomeregan: two huge pink pigtails, brass goggles with
// teal lenses pushed up on the forehead, a big round nose, a teal jumpsuit
// with a tool belt and a steel wrench in hand.
export const look: SkinLook = {
  said: 'Buddy straps on the goggles: a gnome tinker, ready to fix things!',
  group: 'Warcraft',
  rows: [
    '...PPpp...',
    '..Ppppppd.',
    'PPkGkkGkpp',
    'ppssssssdd',
    'pdssnnssdd',
    'd..ssss..W',
    '...tttt..w',
    '..tTbbTt.w',
    '..tttttt.w',
  ],
  colors: { P: HAIR_LIGHT, p: HAIR, d: HAIR_DARK, k: 0xb8862a, G: 0x6ae0e8, s: SKIN, n: NOSE, t: SUIT, T: 0x2a6e66, b: 0x7a4a24, W: 0xe0e6ec, w: STEEL },
  eyes: [[3, 3], [6, 3]],
  eyeColor: 0x2a2030,
  smile: [[4, 5], [5, 5]],
  tear: [3, 4],
  arms: { color: SKIN, down: [[1, 7], [8, 7]], up: [[1, 5], [8, 5]] },
  feet: { color: 0x5a3a24, at: [3, 6] },
  captions: { idle: 'TINKER', happy: 'EUREKA!' },
  critters: {
    // A mechanostrider: a long-legged bird-shaped steel mount.
    Explore: { rows: ['....###.', '.######G', '..####..', '...l.l..'], eye: 0, eyes: [5], eyeColor: 0x6ae0e8, arms: false, colors: { '#': STEEL, G: 0xe0b020, l: 0x6a747e }, tint: STEEL },
    // A mechanical squirrel: brass with a coiled tail and a wind-up key.
    Plan: { rows: ['.#..#.k.', '.####.rr', '.####rr.', '..##.r..'], eye: 1, eyes: [2, 3], colors: { '#': 0xc8963a, r: 0xa8742a, k: STEEL }, tint: 0xc8963a },
    // A little gnome apprentice with pink pigtails.
    fork: { rows: ['..pppp..', 'pp####pp', '..#nn#..', '..tttt..'], eye: 1, colors: { '#': SKIN, p: HAIR, n: NOSE, t: SUIT }, tint: HAIR },
    // A clockwork rocket bot: a red rocket on wheels with a glass dome.
    'general-purpose': { rows: ['...gg...', '..####..', '.######f', '..w..w..'], eye: 2, eyeColor: 0xffe08a, arms: false, feet: false, colors: { '#': 0xd8402c, g: 0x8ad8e8, w: 0x4a4a52, f: 0xffb030 }, tint: 0xd8402c },
    // A leper gnome: grey-green skin, ragged hair, a radiation-green glow.
    other: { rows: ['.h.hh.h.', '.######.', '.#-##-#.', '..vvvv..'], eye: 1, eyeColor: 0x9aff6a, colors: { '#': 0x9aaa84, h: 0x5a5a4a, v: 0x6a5a7a }, tint: 0x9aff6a },
  },
}
