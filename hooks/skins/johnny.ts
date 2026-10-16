import type { SkinLook } from './types'

const STEEL = 0xb8bcc4
const SHADE = 0x7a808a
const LENS = 0x1e2a3a
const TREAD = 0x3a3a40

// Johnny 5 of Short Circuit: a wide head of two big binocular lenses under
// eyebrow flaps, on a thin neck, a steel chest with a blue panel and tank treads.
export const look: SkinLook = {
  said: 'Buddy is Johnny 5. Number 5 is ALIVE!',
  group: 'Robots',
  rows: [
    '.ff....ff.',
    '.hssssssd.',
    '.sLLssLLd.',
    '.sLLssLLd.',
    '..dsssdd..',
    '....nn....',
    '.ssssssdd.',
    '..sbbbbd..',
    '.tttttttt.',
    '.tTtTtTtt.',
  ],
  colors: { f: SHADE, h: 0xe8ecf0, s: STEEL, d: SHADE, L: LENS, n: 0x5a6068, b: 0x4a7ad0, t: TREAD, T: 0x8a8a90 },
  eyes: [[3, 2], [6, 2]],
  eyeColor: 0x9ad8ff,
  smile: [[3, 4], [6, 4]],
  tear: [2, 4],
  arms: { color: SHADE, down: [[0, 7], [9, 7]], up: [[0, 5], [9, 5]] },
  feet: { color: TREAD, at: [1, 2, 7, 8] },
  captions: { idle: 'INPUT!', happy: 'ALIVE!' },
  critters: {
    // The grasshopper he squished: "disassemble? dead!"
    Explore: { rows: ['.k...k..', '..#####.', '-######-', '.-.-.-..'], eye: 1, eyes: [3, 5], feet: false, colors: { '#': 0x7ac043, k: 0x4a7a2a }, tint: 0x7ac043 },
    // A wood-cased TV, his favourite input.
    Plan: { rows: ['..k..k..', '.######.', '.#cccc#.', '.######.'], eye: 2, colors: { '#': 0x8a5a30, c: 0x8ad0e8, k: 0x9aa0a8 }, tint: 0xb07a40 },
    // A mini Johnny 5: lenses on a neck, treads.
    fork: { rows: ['.######.', '.#L##L#.', '...##...', '.------.'], eye: 1, eyeColor: 0x9ad8ff, feet: false, colors: { '#': STEEL, L: LENS }, tint: STEEL },
    // Stephanie's food truck, cream with big windows.
    'general-purpose': { rows: ['..#####.', '.#ww#ww#', '########', '.k....k.'], eye: 1, feet: false, colors: { '#': 0xe8dcc0, w: 0x8ac8e8, k: 0x2a2a2a }, tint: 0xe8dcc0 },
    // A Rubik's cube, the 1980s in a box.
    other: { rows: ['rr##bbyy', 'rr##bbyy', 'gg##rr##', 'gg##rr##'], eye: 1, feet: false, arms: false, colors: { '#': 0xeeeeee, r: 0xd8302a, b: 0x2a5ad8, y: 0xf0d020, g: 0x2aa040 }, tint: 0xf0d020 },
  },
}
