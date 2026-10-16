import type { SkinLook } from './types'

const GREEN = 0x5fae34
const LIGHT = 0x94d65a
const DARK = 0x3c7a22
const WHITE = 0xf4f4ec

// Kermit the Frog: a bright green felt frog, two white ping-pong-ball eyes with
// slit pupils on top of a wide head, a long thin mouth, and the famous pointed
// collar fanning out under his chin.
export const look: SkinLook = {
  said: "Buddy turns into Kermit the Frog. Hi-ho!",
  group: 'Muppets',
  rows: [
    '..........',
    '.www..www.',
    'LwwwggwwwD',
    'LggggggggD',
    'gmmmmmmmmD',
    '.gggggggD.',
    'cCcCcCcCcC',
    'C.CggggC.C',
    '...gggg...',
    '...gDDg...',
  ],
  colors: { g: GREEN, L: LIGHT, D: DARK, w: WHITE, m: 0x2a3a1a, c: 0x7cc84a, C: 0x4a9228 },
  eyes: [[2, 2], [7, 2]],
  eyeColor: 0x1a1a1a,
  smile: [[3, 5], [4, 5], [5, 5], [6, 5]],
  smileColor: 0x8a2a3a,
  tear: [2, 3],
  arms: { color: GREEN, down: [[2, 8], [7, 8]], up: [[0, 5], [9, 5]] },
  feet: { color: DARK, at: [3, 6] },
  captions: { idle: 'HI HO', happy: 'YAAAY!' },
  critters: {
    // Gonzo: blue fur, droopy eyes over the great hooked nose.
    Explore: { rows: ['..####..', '.ll##ll.', '.##nn##.', '..#.n#..'], eye: 1, colors: { '#': 0x5a8ae8, l: 0x3a62b8, n: 0xc87ab0 }, tint: 0x5a8ae8 },
    // Sam Eagle: dark blue, stern brows, a big yellow beak.
    Plan: { rows: ['.######.', '.kk##kk.', '.######.', '..yyyy..'], eye: 2, colors: { '#': 0x2e4aa0, k: 0x141a30, y: 0xf0b030 }, tint: 0x4a6ad0 },
    // A mini Kermit, eyes on top, collar points.
    fork: { rows: ['.ww..ww.', '########', '#kkkkkk#', '.c#cc#c.'], eye: 0, eyeColor: 0x1a1a1a, colors: { '#': GREEN, w: WHITE, k: 0x2a3a1a, c: 0x7cc84a }, tint: GREEN },
    // Fozzie Bear: orange-brown, little brown hat, pink polka-dot tie.
    'general-purpose': { rows: ['..hhhh..', '.hhhhhhh', '.######.', '..#pp#..'], eye: 2, colors: { '#': 0xd8954a, h: 0x7a5030, p: 0xe06a9a }, tint: 0xd8954a },
    // Rowlf: a shaggy brown dog with floppy ears and a black nose.
    other: { rows: ['.######.', 'd######d', 'd##kk##d', '..####..'], eye: 1, colors: { '#': 0x9a7650, d: 0x5e4028, k: 0x1e1e1e }, tint: 0x9a7650 },
  },
}
