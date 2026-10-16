import type { SkinLook } from './types'

const HAIR = 0x2e5a44
const HAIR_LT = 0x4a7a5e
const SKIN = 0xf5cfa0
const SUIT = 0x2e7a5a
const MASK = 0x5a6070
const RED = 0xd8302c

// Deku (Izuku Midoriya): messy green curls, freckles, green hero costume
// with a grey hood-mask at the neck, white gloves, red sneakers.
export const look: SkinLook = {
  said: 'Buddy turns into Deku. Plus Ultra!',
  group: 'Anime',
  rows: [
    '..h.hh.h..',
    '.hghhghgh.',
    '.ghgggghg.',
    '.gssssssg.',
    '.sfssssfs.',
    '..ssssss..',
    '..mmmmmm..',
    '.cccccccc.',
    '..cmccmc..',
  ],
  colors: { h: HAIR_LT, g: HAIR, s: SKIN, f: 0xd89870, m: MASK, c: SUIT },
  eyes: [[3, 3], [6, 3]],
  eyeColor: 0x1e9a4a,
  smile: [[4, 5], [5, 5]],
  tear: [3, 4],
  arms: { color: 0xe8e8e8, down: [[0, 7], [9, 7]], up: [[0, 5], [9, 5]] },
  feet: { color: RED, at: [3, 6] },
  captions: { happy: 'PLUS!', idle: 'MUMBLE' },
  critters: {
    // Bakugo: spiky blond, explosions at his hands.
    Explore: { rows: ['#.#.#.#.', '.######.', 'o######o', '..#--#..'], eye: 2, eyeColor: 0xd02020, colors: { '#': 0xf2d24a, o: 0xf08a2a }, tint: 0xf2d24a },
    // His hero notebook.
    Plan: { rows: ['.######.', '#wwwwww#', '#wwwwww#', '.######.'], eye: 1, feet: false, arms: false, colors: { '#': 0xd8a040, w: 0xf0e8d0 }, tint: 0xd8a040 },
    // A mini All Might.
    fork: { rows: ['..#..#..', '.######.', '.b####b.', '..bbbb..'], eye: 1, colors: { '#': 0xf2c832, b: 0x2a4aa8 }, tint: 0xf2c832 },
    // Uraraka: brown bob, pink cheeks.
    'general-purpose': { rows: ['.######.', '##ssss##', '#pssssp#', '.##--##.'], eye: 1, colors: { '#': 0x8a5a3a, s: 0xf5cfa0, p: 0xf08aa0 }, tint: 0x8a5a3a },
    // Todoroki: half white, half red hair.
    other: { rows: ['.###rrr.', '####rrrr', '.ssssss.', '..ssss..'], eye: 1, colors: { '#': 0xd8dce6, r: 0xc8302c, s: 0xf5cfa0 }, tint: 0xc8302c },
  },
}
