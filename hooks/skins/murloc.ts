import type { SkinLook } from './types'

const GREEN = 0x4caf6e
const SHADE = 0x2f7f50
const FIN = 0xe8643a
const TOOTH = 0xf2eedc

// A Murloc of Azeroth's shores: a green fish-man with an orange crest fin,
// side fins, bulging yellow eyes and a huge mouth full of little teeth.
export const look: SkinLook = {
  said: 'Buddy gurgles and turns into a murloc. Mrglglgl!',
  group: 'Warcraft',
  rows: [
    '....rr....',
    '...rrrr...',
    '..gLLggg..',
    'rgyyggyygr',
    'rggggggggr',
    '.gwwwwwwg.',
    '..kkttkk..',
    '..GwwwwG..',
    '..gppppg..',
    '..GppppG..',
  ],
  colors: { r: FIN, g: GREEN, G: SHADE, L: 0x9ce6a8, y: 0xf2e070, w: TOOTH, k: 0x3a1420, t: 0xd0506a, p: 0xc8e0a0 },
  eyes: [[3, 3], [6, 3]],
  eyeColor: 0x1a1a1a,
  smile: [[4, 6], [5, 6]],
  tear: [2, 4],
  arms: { color: GREEN, down: [[1, 8], [8, 8]], up: [[0, 5], [9, 5]] },
  feet: { color: SHADE, at: [3, 6] },
  captions: { happy: 'MRGLE!', idle: 'MRGLGL' },
  critters: {
    // A shore crab, claws up.
    Explore: { rows: ['#.#..#.#', '.######.', '########', '.#.##.#.'], eye: 1, feet: false, colors: { '#': 0xd8603a }, tint: 0xd8603a },
    // A kobold with a candle on its head: you no take candle!
    Plan: { rows: ['...y....', '#..w...#', '.######.', '.#oooo#.'], eye: 2, colors: { '#': 0x9a7050, y: 0xffd040, w: 0xf0e8d0, o: 0xc8a080 }, tint: 0xffd040 },
    // Murky, a baby murloc.
    fork: { rows: ['...rr...', '.######.', '.######.', '.-kwwk-.'], eye: 1, colors: { '#': GREEN, r: FIN, k: 0x3a1420, w: TOOTH }, tint: GREEN },
    // Hogger, the gnoll of Elwynn Forest.
    'general-purpose': { rows: ['##....##', '.######.', '.#nwwn#.', '.######.'], eye: 1, colors: { '#': 0xa8683a, n: 0xd8b088, w: TOOTH }, tint: 0xa8683a },
    // A sea turtle, head poking out under its shell.
    other: { rows: ['..####..', '.#-##-#.', '########', '..ssss..'], eye: 3, eyes: [3, 4], colors: { '#': 0x5a8a4a, s: 0x9ac070 }, tint: 0x5a8a4a },
  },
}
