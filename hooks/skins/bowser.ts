import type { SkinLook } from './types'

const GREEN = 0x3c9a32
const TAN = 0xf0c870
const RED = 0xe0501e
const HORN = 0xf4ecd8

// Bowser, King of the Koopas: cream horns, a shock of red hair, green scaly
// head, angry eyes, a big tan muzzle with fangs, white shell spikes down his
// sides and a tan belly.
export const look: SkinLook = {
  said: 'Buddy roars: Bowser is here!',
  group: 'Nintendo',
  rows: [
    'h..rrrr..h',
    'hhrrrrrrhh',
    '.hgggggggh',
    '.gwwggwwg.',
    '.gggggggg.',
    'sgttttttgs',
    'sgtnttntgs',
    '.gtftftfg.',
    'sgggttgggs',
    '.ggttttgg.',
    'ssgttttgss',
  ],
  colors: { h: HORN, r: RED, g: GREEN, w: 0xffffff, t: TAN, n: 0x8a5a2a, f: 0xffffff, s: HORN },
  eyes: [[2, 3], [7, 3]],
  eyeColor: 0xb01818,
  smile: [[3, 7], [5, 7]],
  tear: [3, 4],
  arms: { color: TAN, down: [[0, 9], [9, 9]], up: [[0, 7], [9, 7]] },
  feet: { color: TAN, at: [3, 6] },
  captions: { idle: 'GRR', happy: 'BWAHAHA' },
  critters: {
    // Koopa Troopa: yellow head over a green shell.
    Explore: { rows: ['..####..', 'g######g', 'gwwwwwwg', '.gwwwwg.'], eye: 1, colors: { '#': 0xf2c840, g: 0x2fa640, w: 0xf4ecd0 }, tint: 0x2fa640 },
    // Kamek: a blue-hooded Magikoopa in a white-trimmed robe.
    Plan: { rows: ['...bb...', '..bbbb..', '.b####b.', '.wbbbbw.'], eye: 2, colors: { '#': 0xe8d050, b: 0x3a58c8, w: 0xf4f4f4 }, tint: 0x3a58c8 },
    // Bowser Jr., in his bandana with the big mouth drawn on.
    fork: { rows: ['h.rrrr.h', '.######.', '.wwkkww.', '..####..'], eye: 1, colors: { '#': 0x5aa83a, h: HORN, r: RED, w: 0xf4f4f4, k: 0x3a2a2a }, tint: 0x5aa83a },
    // Bob-omb: a black bomb with a fuse and a wind-up key.
    'general-purpose': { rows: ['...f....', '..####.k', '.######k', '..####..'], eye: 2, eyeColor: 0xf4f4f4, colors: { '#': 0x34343e, f: 0xf2a030, k: 0xb0b0b8 }, tint: 0xf2a030 },
    // Chain Chomp: all teeth, on its chain.
    other: { rows: ['..####..', '.######.', '##wwww##', '.#rrrr#c'], eye: 1, eyeColor: 0xf4f4f4, feet: false, arms: false, colors: { '#': 0x30303a, w: 0xf4f4f4, r: 0xd02a2a, c: 0x8a8a96 }, tint: 0x8a8a96 },
  },
}
