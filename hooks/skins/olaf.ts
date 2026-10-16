import type { SkinLook } from './types'

const SNOW = 0xf4f8fc
const SHADE = 0xc2d4e6
const EDGE = 0x86a0bc
const TWIG = 0x6e4a2a
const CARROT = 0xf28a1e
const COAL = 0x2e2e36

// Olaf of Arendelle: a wide snowball head with a twig tuft on top, a carrot
// nose, a big grin with his one buck tooth, coal buttons on a small body and
// twig arms. Ice-blue shading down his right side keeps him off a white page.
export const look: SkinLook = {
  said: 'Buddy builds a snowman: hi, I\'m Olaf, and I like warm hugs!',
  group: 'Pixar & Disney',
  rows: [
    '...t.t.t..',
    '....ttt...',
    '..gwwwwgg.',
    '.gwwwwwwcg',
    '.gwwwwwwcg',
    '.gwwoowwcg',
    '.gwkwwkccg',
    '..gckkccg.',
    '...gwkcg..',
    '..gwwwccg.',
    '..gwwkccg.',
  ],
  colors: { w: SNOW, c: SHADE, g: EDGE, t: TWIG, o: CARROT, k: COAL },
  eyes: [[3, 4], [6, 4]],
  smile: [[4, 6], [5, 6]],
  tear: [3, 5],
  arms: { color: TWIG, down: [[1, 9], [8, 8]], up: [[0, 6], [9, 7]] },
  feet: { color: EDGE, at: [3, 6] },
  captions: { idle: 'HI', happy: 'HUGS!' },
  critters: {
    // Sven the reindeer: tan antlers, brown coat, cream muzzle.
    Explore: { rows: ['a.a..a.a', '.a####a.', '.######.', '..#mm#..'], eye: 1, colors: { '#': 0x9a6a40, a: 0xd8b888, m: 0xeedcc0 }, tint: 0x9a6a40 },
    // Grand Pabbie, the old rock troll with moss on his head and a big nose.
    Plan: { rows: ['.gg.ggg.', '.######.', '.##nn##.', '.-####-.'], eye: 1, colors: { '#': 0x8c8478, g: 0x6aa04a, n: 0x6e665c }, tint: 0x6aa04a },
    // A mini Olaf: twig hair, carrot nose.
    fork: { rows: ['..t..t..', '.######.', '.##oo##.', '..-##-..'], eye: 1, colors: { '#': 0xeef4fa, t: TWIG, o: CARROT }, tint: 0xc2d4e6 },
    // Bruni, the little fire salamander, with a flicker on his back.
    'general-purpose': { rows: ['...f.f..', '.######.', '########', '.-.--.-.'], eye: 1, colors: { '#': 0x7a8ae0, f: 0xe86ad0 }, tint: 0x7a8ae0 },
    // Marshmallow, the snow giant, icicles on his crown.
    other: { rows: ['i.i..i.i', '.######.', '.#kkkk#.', '.######.'], eye: 1, colors: { '#': 0xd2e8f6, i: 0x7ec0ee, k: 0x2a3a5a }, tint: 0x7ec0ee },
  },
}
