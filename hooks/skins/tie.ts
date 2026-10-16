import type { SkinLook } from './types'

const FRAME = 0x6a7280
const PANEL = 0x4a5262

// A TIE fighter head on: a round cockpit ball with a dark octagonal window,
// struts out to two tall hexagonal solar panels, ion glow behind.
export const look: SkinLook = {
  said: 'Buddy flies a TIE fighter. *screech*',
  group: 'Sci-fi ships',
  rows: [
    'ff......ff',
    'fp......pf',
    'fp.cccc.pf',
    'fpcckkccpf',
    'fpcgkkgcpf',
    'fpsggggspf',
    'fpcgkkgcpf',
    'fpcckkccpf',
    'fp.cccc.pf',
    'fp......pf',
    'ff......ff',
  ],
  colors: { f: FRAME, p: PANEL, c: 0x7c8494, s: 0x9aa2b0, g: 0x3a4050, k: 0x20242e },
  eyes: [[4, 4], [5, 4]],
  eyeColor: 0xff6a5a,
  smile: [[4, 2], [5, 2]],
  tear: [2, 3],
  feet: { color: 0x6ab8ff, at: [3, 4, 5, 6] },
  captions: { happy: 'BOOM', idle: 'SCREE' },
  critters: {
    // A TIE Interceptor: spiked panels.
    Explore: { rows: ['##....##', '#.#kk#.#', '#..##..#', '##....##'], eye: 1, eyes: [3, 4], eyeColor: 0xff6a5a, feet: false, colors: { '#': FRAME, k: 0x20242e }, tint: FRAME },
    // An Imperial pilot helmet with breath tubes.
    Plan: { rows: ['..####..', '.######.', '.#kkkk#.', '..g##g..'], eye: 2, eyeColor: 0xc0c8d0, feet: false, colors: { '#': 0x4a4e58, k: 0x20242e, g: 0xb0b8c4 }, tint: 0x8a92a0 },
    // A TIE bomber: twin pods.
    fork: { rows: ['.##..##.', '########', '.##kk##.', '.##..##.'], eye: 2, eyes: [3, 4], eyeColor: 0xff6a5a, feet: false, colors: { '#': 0x707888, k: 0x20242e }, tint: 0x707888 },
    // A TIE Silencer: black and red.
    'general-purpose': { rows: ['.#.##.#.', '##kkkk##', '.######.', '..#..#..'], eye: 1, eyeColor: 0xff6a5a, colors: { '#': 0x8c3a3a, k: 0x20242e }, tint: 0x8c3a3a },
    // An Imperial shuttle: tall fin, folded wings.
    other: { rows: ['...##...', '...##...', '########', '.#.##.#.'], eye: 2, feet: false, colors: { '#': 0xb8bec6 }, tint: 0xb8bec6 },
  },
}
