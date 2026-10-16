import type { SkinLook } from './types'

const WHITE = 0xeef1f4
const SHADE = 0xa4adba
const SHINE = 0xffffff
const VISOR = 0x14181f
const LED = 0x4ab8ff

// EVE from WALL-E: a glossy white egg of a head floating over a white body
// that tapers to a point, a black visor with glowing blue LED eyes, fins for
// arms. No feet: she hovers.
export const look: SkinLook = {
  said: 'Buddy powers up as EVE. Directive?',
  group: 'Pixar & Disney',
  rows: [
    '...wwww...',
    '..hwwwwg..',
    '.hwkkkkwg.',
    '.wkkkkkkg.',
    '.hwkkkkwg.',
    '..wwwwgg..',
    '...gggg...',
    '.hwwwwwwg.',
    '.wwwwwwgg.',
    '..wwwwgg..',
    '...wwgg...',
  ],
  colors: { w: WHITE, g: SHADE, h: SHINE, k: VISOR },
  eyes: [[3, 3], [6, 3]],
  eyeColor: LED,
  smile: [[4, 4], [5, 4]],
  smileColor: LED,
  tear: [3, 4],
  arms: { color: 0xd4dae2, down: [[0, 8], [9, 8]], up: [[0, 6], [9, 6]] },
  captions: { idle: 'EVE', happy: 'WALL E!' },
  critters: {
    // WALL-E: binocular eyes on a neck over his box and treads.
    Explore: { rows: ['.kkgkk..', '...g....', '.######.', 'tttttttt'], eye: 0, eyes: [2, 4], eyeColor: 0xbfe0ff, feet: false, colors: { '#': 0xd9a93b, k: 0x4a5a7a, g: 0x7a7a7a, t: 0x4a4a4a }, tint: 0xd9a93b },
    // AUTO, the ship's-wheel autopilot: a grey rim and spoke handles round
    // a dark hub with its single glaring red eye.
    Plan: { rows: ['#.####.#', '.#-kk-#.', '.#-rr-#.', '#.####.#'], eye: 1, eyes: [3, 4], eyeColor: 0xff3a2a, feet: false, arms: false, colors: { '#': 0x9aa0a8, k: 0x1a1a1e, r: 0xc02018 }, tint: 0xff3a2a },
    // A mini EVE, the plant glowing green in her chest.
    fork: { rows: ['..####..', '.#kkkk#.', '.##gg##.', '...--...'], eye: 1, eyeColor: LED, feet: false, colors: { '#': WHITE, k: VISOR, g: 0x5ad06a }, tint: LED },
    // BURN-E the welder bot, an orange warning light on top.
    'general-purpose': { rows: ['...oo...', '.######.', '.#kkkk#.', '..#..#..'], eye: 2, eyeColor: 0xffb030, feet: false, colors: { '#': 0xa8b0b8, k: 0x2a2e34, o: 0xff8a2a }, tint: 0xff8a2a },
    // An Axiom passenger in red, lounging in a hover chair.
    other: { rows: ['..ssss..', '.######.', 'cc####cc', '..cccc..'], eye: 0, feet: false, colors: { '#': 0xd8403a, s: 0xf2c8a0, c: 0xe0e6ee }, tint: 0xd8403a },
  },
}
