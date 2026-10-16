import type { SkinLook } from './types'

const FUR = 0x8a5a34
const LIGHT = 0xb07a4a
const DARK = 0x5e3c22
const FACE = 0xc99a68

// Chewbacca: shaggy brown fur with lighter and darker tufts, a tall furry head,
// a paler face with a dark nose and a roaring mouth, a bandolier of silver
// pouches slung across the chest, big furry feet.
export const look: SkinLook = {
  said: 'Buddy turns into Chewbacca. RWAARGH!',
  group: 'Star Wars',
  rows: [
    '..D.L.D...',
    '.DLDBLDL..',
    '.BLBBBBDB.',
    '.BFFFFFFB.',
    '.BFFFFFFB.',
    '.BFFnnFFB.',
    '.BFmmmmFB.',
    '.DTBLBDBD.',
    '.BBTSBBLB.',
    '.LBBTSBBB.',
    '.BDBBTSBD.',
  ],
  colors: { B: FUR, L: LIGHT, D: DARK, F: FACE, n: 0x3a2a22, m: 0x8a3a34, T: 0x4a3a30, S: 0xb8bec4 },
  eyes: [[3, 4], [6, 4]],
  eyeColor: 0x3a2a22,
  smile: [[4, 6], [5, 6]],
  tear: [3, 5],
  arms: {
    color: FUR,
    down: [[0, 8], [0, 9], [9, 8], [9, 9]],
    up: [[0, 5], [0, 6], [9, 5], [9, 6]],
  },
  feet: { color: DARK, at: [2, 7] },
  captions: { idle: 'GRRR', happy: 'RWRRR!' },
  critters: {
    // The Millennium Falcon: a round grey disc with cockpit and mandibles.
    Explore: { rows: ['..####..', '.######.', '##.##.##', '.#d##d#.'], eye: 1, eyes: [3, 4], eyeColor: 0x3a4650, arms: false, feet: false, colors: { '#': 0xa4acb4, d: 0x6a747e }, tint: 0xa4acb4 },
    // Han Solo: dark hair, white shirt, black vest.
    Plan: { rows: ['..hhhh..', '.hsssh..', '.v###v..', '.v###v..'], eye: 1, eyes: [2, 4], eyeColor: 0x3a2a22, colors: { '#': 0xe2dccd, h: 0x5a3e2a, s: 0xd9a77c, v: 0x4a4e5a }, tint: 0xd9a77c },
    // A little Wookiee pup.
    fork: { rows: ['.L.LL.L.', '.######.', '.#FFFF#.', '..####..'], eye: 2, eyes: [2, 5], colors: { '#': FUR, L: LIGHT, F: FACE }, tint: LIGHT },
    // A porg: white-orange seabird with big dark eyes and a short beak.
    'general-purpose': { rows: ['..####..', '.######.', '.##oo##.', '..####..'], eye: 1, eyes: [2, 5], eyeColor: 0x3a2a22, colors: { '#': 0xe6e0d2, o: 0xe0884a }, tint: 0xe0884a },
    // A bowcaster: a bronze crossbow with a bolt.
    other: { rows: ['#......#', '.#....#.', '#######b', '...##...'], eye: 3, eyes: [3, 4], arms: false, feet: false, colors: { '#': 0xa8844c, b: 0xc8ccd0 }, tint: 0xa8844c },
  },
}
