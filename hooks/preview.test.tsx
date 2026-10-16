import { test } from 'claude-code/testing'
import { LOOKS } from './skins'
import type { SkinLook } from './skins/types'
import { critterFor, frame, tinyFrame, CRITTERS } from './register'

// Prints every skin from skins/ as text, all five moods side by side plus its
// creatures, so you can see a sprite without a terminal pane. Run
// `claude plugin test .` and look for "PREVIEW <name>". Each colour prints as
// the letter it has in the skin's `colors`.
const MOODS = [['idle', 0], ['think', 12], ['run', 0], ['happy', 5], ['sad', 4]] as const
test('preview every skin drawn from data', () => {
  for (const [name, look] of Object.entries(LOOKS) as [keyof typeof LOOKS, SkinLook][]) {
    const key = new Map<number, string>([[0x01000000, '.'], [0x1f1e1d, '@'], [0x5aa9e6, '~'], [0xf5d76e, '*'], [0x9aa0a6, ':']])
    for (const [k, v] of Object.entries(look.colors)) if (!key.has(v)) key.set(v, k)
    if (look.arms && !key.has(look.arms.color)) key.set(look.arms.color, 'a')
    if (look.feet && !key.has(look.feet.color)) key.set(look.feet.color, 'f')
    if (look.eyeColor && !key.has(look.eyeColor)) key.set(look.eyeColor, 'e')
    const show = (px: number[], w: number) => px.map((c, i) => (key.get(c) ?? '?') + ((i + 1) % w ? '' : '\n')).join('').trimEnd().split('\n')
    const big = MOODS.map(([m, t]) => show(frame(m, t, undefined, undefined, name), 16))
    const out = [`PREVIEW ${name}`, MOODS.map(([m]) => m.padEnd(16)).join('  ')]
    for (let r = 0; r < 16; r++) out.push(big.map(f => f[r]).join('  '))
    const roles = ['Explore', 'Plan', 'fork', 'general-purpose', 'other'] as const
    const minis = roles.map(r => {
      const c = critterFor(r, name)
      const k2 = new Map(key)
      for (const [ch, v] of Object.entries(CRITTERS[c].colors)) if (!k2.has(v)) k2.set(v, ch)
      return tinyFrame('idle', 0, undefined, undefined, name, c).map((v, i) => (k2.get(v) ?? '?') + ((i + 1) % 8 ? '' : '\n')).join('').trimEnd().split('\n')
    })
    out.push(roles.map(r => r.slice(0, 8).padEnd(8)).join('  '))
    for (let r = 0; r < 6; r++) out.push(minis.map(m => m[r]).join('  '))
    console.log(out.join('\n') + '\n')
  }
})
