import type { SkinLook } from './types'

const CAP = 0x6e4226
const PINK = 0xf0a2a0
const SNOUT = 0xd8747a
const COAT = 0xc89a5a

// Porco Rosso, the pig who flies: leather aviator cap with ear flaps, round
// dark sunglasses, a pink snout over a brown mustache, trench coat, red tie.
export const look: SkinLook = {
  said: 'Buddy pulls on the flying cap: a pig that doesn\'t fly is just a pig.',
  group: 'Ghibli',
  rows: [
    '...cccc...',
    '..chhccc..',
    'pccccccccp',
    '.cppppppc.',
    '.ckkppkkc.',
    '.cpsnnspc.',
    '..pmmmmp..',
    '..pppppp..',
    '.oowttwoo.',
    '.ooottooo.',
    '.oooooooo.',
  ],
  colors: { c: CAP, h: 0xa8724a, p: PINK, k: 0x22222c, s: SNOUT, n: 0x8a3a44, m: 0x5a3420, o: COAT, w: 0xf0ece0, t: 0xd02a2a },
  eyes: [[2, 4], [6, 4]],
  eyeColor: 0xb8d8f0,
  smile: [[4, 7], [5, 7]],
  tear: [2, 5],
  arms: { color: COAT, down: [[0, 9], [9, 9]], up: [[0, 7], [9, 7]] },
  feet: { color: 0x4a2a18, at: [3, 6] },
  captions: { idle: 'JUST PIG', happy: 'FLY!' },
  critters: {
    // His red Savoia seaplane: top wing, cockpit, fuselage, floats.
    Explore: { rows: ['########', '...kk...', '.######.', '.-.--.-.'], eye: 2, arms: false, feet: false, colors: { '#': 0xd8302a, k: 0x3a3a48 }, tint: 0xd8302a },
    // Fio Piccolo: dark hair with a ponytail, young mechanic in blue overalls.
    Plan: { rows: ['.hhhhh..', 'h#####hh', '.######h', '..oooo..'], eye: 1, colors: { '#': 0xf2c8a0, h: 0x4a2a1a, o: 0x5a6a9a }, tint: 0x5a6a9a },
    // A mini Porco: cap, sunglasses with a glint, mustache.
    fork: { rows: ['..cccc..', '.c####c.', '.kk##kk.', '..#mm#..'], eye: 2, eyeColor: 0xb8d8f0, colors: { '#': PINK, c: CAP, k: 0x22222c, m: 0x5a3420 }, tint: PINK },
    // The Mamma Aiuto boss: goggles up, a huge brown beard.
    'general-purpose': { rows: ['.gg..gg.', '.######.', 'bb####bb', 'bbbbbbbb'], eye: 1, colors: { '#': 0xe8b890, g: 0x8a9aa8, b: 0x7a4a28 }, tint: 0x7a4a28 },
    // Donald Curtis: cowboy hat, blond hair, red neckerchief.
    other: { rows: ['..tttt..', 'tttttttt', '.y####y.', '..#rr#..'], eye: 2, colors: { '#': 0xf0c8a0, t: 0xc8a868, y: 0xf0d860, r: 0xd03a3a }, tint: 0xc8a868 },
  },
}
