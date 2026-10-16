import type { SkinLook } from './types'

const INK = 0xf5841f
const INK_HI = 0xffc070
const INK_DARK = 0xb04a08
const SKIN = 0xf2c49a
const EAR = 0xd8986a
const MASK = 0x1e1a26
const TEE = 0x2fc0a8
const SHORTS = 0x3a3f8a

// An Inkling from Splatoon: an orange squid cap peaking on top, tentacle hair
// hanging down both sides with pale suction dots and dark tips, pointed ears
// and the wide black eye mask, a teal tee and dark shorts.
export const look: SkinLook = {
  said: 'Buddy grabs a Splattershot: booyah!',
  group: 'Nintendo',
  rows: [
    '....oo....',
    '..oOoooo..',
    '.oOoooooo.',
    'oooooooooo',
    'okkkkkkkko',
    'Oessssssei',
    'o.ssssss.o',
    'O..tttt..i',
    'd.tttttt.d',
    '..bbbbbb..',
  ],
  colors: { o: INK, O: INK_HI, i: INK_HI, d: INK_DARK, s: SKIN, e: EAR, k: MASK, t: TEE, b: SHORTS },
  eyes: [[3, 4], [6, 4]],
  eyeColor: 0xf4f4f4,
  smile: [[4, 6], [5, 6]],
  tear: [2, 5],
  arms: { color: SKIN, down: [[1, 7], [8, 7]], up: [[1, 6], [8, 6]] },
  feet: { color: 0xe8e8ee, at: [3, 6] },
  captions: { happy: 'BOOYAH!', idle: 'FRESH' },
  critters: {
    // An Octotrooper: a purple octarian, tentacles over its hover saucer.
    Explore: { rows: ['..####..', '.######.', '#-#--#-#', '.ssssss.'], eye: 1, feet: false, colors: { '#': 0x9a4ad0, s: 0x8a8a9a }, tint: 0x9a4ad0 },
    // Judd, the orange cat who judges every match.
    Plan: { rows: ['.#....#.', '.######.', '.#wwww#.', '.######.'], eye: 1, colors: { '#': 0xf0a040, w: 0xf4ecdc }, tint: 0xf0a040 },
    // An Inkling in squid form: orange, with the black eye mask.
    fork: { rows: ['...##...', '..####..', '.kk##kk.', '.#.##.#.'], eye: 2, eyeColor: 0xffffff, feet: false, arms: false, colors: { '#': INK, k: MASK }, tint: INK },
    // A jellyfish townsfolk: a light cyan bell, a darker rim, a pink hoodie.
    'general-purpose': { rows: ['..####..', '.######.', '.------.', '..cccc..'], eye: 1, colors: { '#': 0xa8e8f8, c: 0xe05a9a }, tint: 0x9ad8f0 },
    // A Chum salmonid: a green-grey fish with red lips and a top fin.
    other: { rows: ['....#...', '.######.', '.##rr##.', '.------.'], eye: 1, colors: { '#': 0x7a9a6a, r: 0xd05050 }, tint: 0x7a9a6a },
  },
}
