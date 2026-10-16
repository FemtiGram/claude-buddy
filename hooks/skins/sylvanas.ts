import type { SkinLook } from './types'

const HOOD = 0x4a3a6e
const RIM = 0x7a6ab0
const SKIN = 0xb8c4d6
const ARMOR = 0x6a4a8a
const WISP = 0x8ab0d8

// Sylvanas Windrunner, the Banshee Queen: a deep purple hood with her long
// elf ears poking through, a pale blue-grey face, burning red eyes, purple
// armour and a ghostly banshee tail where her feet should be.
export const look: SkinLook = {
  said: 'Buddy pulls up the hood: the Dark Lady watches.',
  group: 'Warcraft',
  rows: [
    '....cc....',
    '...cRcc...',
    '..cRcccc..',
    'e.cssssc.e',
    '.ecssssce.',
    '..cssssc..',
    '.ccaRRacc.',
    'ccaaaaaacc',
    '.caaRaaac.',
    '.cwwwwwwc.',
    '..w.ww.w..',
  ],
  colors: { c: HOOD, R: RIM, s: SKIN, e: SKIN, a: ARMOR, w: WISP },
  eyes: [[3, 4], [6, 4]],
  eyeColor: 0xff2a2a,
  smile: [[4, 5], [5, 5]],
  tear: [3, 5],
  arms: { color: SKIN, down: [[0, 8], [9, 8]], up: [[0, 5], [9, 5]] },
  captions: { idle: 'FORSAKEN', happy: 'VICTORY!' },
  critters: {
    // An Undercity bat, wings spread.
    Explore: { rows: ['#..##..#', '##-##-##', '.######.', '..#..#..'], eye: 1, feet: false, eyeColor: 0xff4a3a, colors: { '#': 0x7a5a4a }, tint: 0x7a5a4a },
    // A val'kyr: a pale armoured maiden on golden wings.
    Plan: { rows: ['y.####.y', 'yy####yy', '.y#ss#y.', '..####..'], eye: 2, eyes: [3, 4], feet: false, eyeColor: 0xbfe8ff, colors: { '#': 0xc8d0e0, y: 0xe0b040, s: 0x9aa8c0 }, tint: 0xe0b040 },
    // A little banshee queen: hood, pale face, red eyes.
    fork: { rows: ['..hhhh..', '.hhhhhh.', 'eh####he', '.hh##hh.'], eye: 2, eyes: [3, 4], eyeColor: 0xff2a2a, colors: { '#': SKIN, h: RIM, e: SKIN }, tint: RIM },
    // A Forsaken: grey-green skin, glowing eyes, a bare jaw.
    'general-purpose': { rows: ['..####..', '.######.', '.##--##.', '.#wkwk#.'], eye: 1, eyeColor: 0xf0e060, colors: { '#': 0x8a9a7a, w: 0xe8e0c8, k: 0x3a2a2a }, tint: 0x8a9a7a },
    // A bubbling cauldron of the Forsaken plague.
    other: { rows: ['.#.#..#.', '.######.', 'kk#--#kk', '.kkkkkk.'], eye: 2, feet: false, arms: false, colors: { '#': 0x8ad040, k: 0x5a5a64 }, tint: 0x8ad040 },
  },
}
