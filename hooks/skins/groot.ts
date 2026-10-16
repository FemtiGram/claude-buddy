import type { SkinLook } from './types'

const BARK = 0x8a6440
const GROOVE = 0x5e4228
const LIGHT = 0xa88458
const LEAF = 0x5ab04a

// Groot: a tall bark-brown tree being with a round wooden head, deep-set eyes,
// leaf sprouts, long branchy arms and root-like feet.
export const look: SkinLook = {
  said: 'Buddy turns into Groot. I am Groot.',
  group: 'Marvel',
  rows: [
    '..g....g..',
    '..gBBBBg..',
    '..BLBBBB..',
    '..DBBBBD..',
    '..BBBBBB..',
    '.gBBLBBBg.',
    '.BBDBBLBB.',
    '..BBBDBB..',
    '..BLBBDB..',
    '..BB..BB..',
  ],
  colors: { B: BARK, D: GROOVE, L: LIGHT, g: LEAF },
  eyes: [[3, 3], [6, 3]],
  eyeColor: 0x20140a,
  smile: [[4, 4], [5, 4]],
  tear: [3, 4],
  arms: {
    color: LIGHT,
    down: [[0, 7], [0, 8], [9, 7], [9, 8]],
    up: [[0, 4], [0, 5], [9, 4], [9, 5]],
  },
  feet: { color: GROOVE, at: [3, 6] },
  captions: { idle: 'GROOT', happy: 'IM GROOT' },
  critters: {
    // Rocket, a raccoon in an orange suit.
    Explore: { rows: ['.d....d.', '.dddddd.', '.dmddmd.', '.######.'], eye: 2, colors: { '#': 0xe8803a, d: 0x8a8a92, m: 0x3a3a44 }, tint: 0xe8803a },
    // A cassette mixtape.
    Plan: { rows: ['########', '#ww##ww#', '#wwwwww#', '.#....#.'], eye: 1, arms: false, feet: false, colors: { '#': 0xc8a050, w: 0xe8e0c8 }, tint: 0xc8a050 },
    // Baby Groot in a pot.
    fork: { rows: ['.g.##.g.', '..####..', '..####..', '.pppppp.'], eye: 1, eyes: [3, 4], arms: false, feet: false, colors: { '#': LIGHT, g: LEAF, p: 0xb8603a }, tint: LIGHT },
    // Drax, grey with red markings.
    'general-purpose': { rows: ['..####..', '.######.', '#r####r#', '.##..##.'], eye: 1, colors: { '#': 0x8890a0, r: 0xc84a4a }, tint: 0x8890a0 },
    // A little sprout in a pot.
    other: { rows: ['.gg..gg.', '..gggg..', '..####..', '..####..'], eye: 2, arms: false, feet: false, colors: { '#': 0xb8603a, g: LEAF }, tint: LEAF },
  },
}
