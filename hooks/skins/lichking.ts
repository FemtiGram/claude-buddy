import type { SkinLook } from './types'

const HELM = 0x6a7a90
const GLOW = 0x8ff0ff
const ICE = 0x9fe0ff

// The Lich King, Arthas under the Helm of Domination: a crown of spikes, a
// shadowed face with glowing blue eyes, frost-rimmed plate, and Frostmourne.
export const look: SkinLook = {
  said: 'Buddy puts on the Helm of Domination. Frostmourne hungers.',
  group: 'Warcraft',
  rows: [
    '.s..s..s..',
    '.sshshss.q',
    '.HHHHHHH.f',
    '.HkkkkkH.f',
    '.HHkkkHHGG',
    '..HHHHH..b',
    'PPPaaaPPPb',
    '.cAaaaAc.b',
    '.caaaaac.b',
    '.cc...cc..',
  ],
  colors: { s: 0x9aaac0, h: 0xd0e0f0, H: HELM, k: 0x101418, P: 0x8a9ab0, a: 0x4a5870, A: ICE, c: 0x3a4660, q: GLOW, f: 0x4a3a5a, G: HELM, b: ICE },
  eyes: [[3, 3], [5, 3]],
  eyeColor: GLOW,
  smile: [[3, 4], [4, 4], [5, 4]],
  smileColor: GLOW,
  tear: [2, 3],
  arms: { color: HELM, down: [[0, 7], [8, 7]], up: [[0, 5], [8, 5]] },
  feet: { color: 0x3a4660, at: [2, 6] },
  captions: { happy: 'ARISE!', idle: 'KNEEL' },
  critters: {
    // A ghoul: lean and grey-green, hunched, claws out, bare bony legs.
    Explore: { rows: ['..####..', '.######.', '#.#kk#.#', '..#..#..'], eye: 1, eyeColor: 0xb0f0ff, colors: { '#': 0x7a8a68, k: 0x2a1a1a }, tint: 0x8a9a7a },
    // Lil' K.T., Kel'Thuzad in a blue robe, floating.
    Plan: { rows: ['.#ssss#.', '.#ssss#.', '########', '.#-##-#.'], eye: 1, eyes: [3, 4], eyeColor: GLOW, feet: false, colors: { '#': 0x4a5aa0, s: 0xe8e4d8 }, tint: 0x6a7ad0 },
    // A little Lich King, spiked helm and glowing eyes.
    fork: { rows: ['#.#..#.#', '.######.', '.#kkkk#.', '..####..'], eye: 2, eyeColor: GLOW, colors: { '#': 0x7a8aa0, k: 0x101418 }, tint: GLOW },
    // An abomination: bloated pale pink-grey flesh, dark stitches across the
    // belly, a meat hook on a chain.
    'general-purpose': { rows: ['.######.', '#######h', '#s#s#s#h', '.##..#hh'], eye: 1, arms: false, colors: { '#': 0xd8b4b0, s: 0x6a2a3a, h: 0xa8b0bc }, tint: 0xd8b4b0 },
    // Sindragosa, the frost wyrm, wings spread.
    other: { rows: ['#-....-#', '##-##-##', '.######.', '...--...'], eye: 1, eyes: [3, 4], eyeColor: 0x3060c0, feet: false, colors: { '#': 0xb8e8f8 }, tint: 0x8fd8f0 },
  },
}
