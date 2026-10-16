import { test, expect, mock } from 'claude-code/testing'
import { LOOKS } from './skins'
import type { SkinLook } from './skins/types'
import { CRITTERS, captionFor, captionWidth, critterFor, frame, hasGlyphs, tinyFrame } from './register'

// Every skin in skins/ gets the same checks, named after it, so a skin's
// author can tell which failures are theirs.
const MOODS = ['idle', 'think', 'run', 'happy', 'sad'] as const
const NONE = 0x01000000
const SPARK = 0xf5d76e
const DOT = 0x9aa0a6
const EYE = 0x1f1e1d
const TEAR = 0x5aa9e6
// WCAG contrast ratio between two colours.
const luminance = (c: number) => {
  const f = (v: number) => ((v /= 255) <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4)
  return 0.2126 * f((c >> 16) & 255) + 0.7152 * f((c >> 8) & 255) + 0.0722 * f(c & 255)
}
const contrast = (a: number, b: number) => {
  const [hi, lo] = [luminance(a), luminance(b)].sort((x, y) => y - x)
  return (hi! + 0.05) / (lo! + 0.05)
}
const PROPS = [0x6a3d9a, 0x8bc34a, 0x8e6bbf, 0xf0882a, 0xc0541c, 0xd63a3a, 0xf4f4f4, 0xcfe3f2, 0x3f9b4f]

for (const [name, look] of Object.entries(LOOKS) as [keyof typeof LOOKS, SkinLook][]) {
  const cell = ([x, y]: [number, number]) => look.rows[y]?.[x] ?? '.'

  test(`${name}: its rows, colours, eyes, smile, tear, arms and feet fit the format`, () => {
    expect(look.rows.length).toBeLessThanOrEqual(11)
    for (const row of look.rows) {
      expect(row.length).toBeLessThanOrEqual(10)
      for (const ch of row) if (ch !== '.') expect(look.colors[ch], `colour for '${ch}'`).toBeDefined()
    }
    // eyes, smile and tear sit on his face, never on an empty pixel
    for (const c of [...look.eyes, ...(look.smile ?? []), look.tear]) expect(cell(c), `cell ${c}`).not.toBe('.')
    if (look.arms) {
      expect(look.arms.up.length).toBe(look.arms.down.length)
      for (const c of [...look.arms.up, ...look.arms.down]) expect(cell(c), `arm ${c}`).toBe('.')
    }
    // the season props must not be mistaken for him
    for (const c of Object.values(look.colors)) expect(PROPS).not.toContain(c)
  })

  test(`${name}: whole in every mood, never clipped, never covered by a season`, () => {
    const mine = new Set([...Object.values(look.colors), look.eyeColor ?? EYE, EYE, TEAR, look.arms?.color, look.feet?.color, look.smileColor])
    const drawn = (px: number[]) => px.filter(c => c !== NONE && c !== SPARK && c !== DOT && mine.has(c)).length
    for (const mood of MOODS) {
      const plain = drawn(frame(mood, 0, undefined, undefined, name))
      for (let tick = 0; tick < 96; tick++) {
        const px = frame(mood, tick, undefined, undefined, name)
        expect(px).toHaveLength(256)
        expect(drawn(px), `${mood} at tick ${tick}`).toBe(plain)
        for (const season of ['halloween', 'christmas'] as const) {
          expect(drawn(frame(mood, tick, undefined, season, name)), `${mood} at tick ${tick} in ${season}`).toBe(plain)
        }
      }
    }
  })

  test(`${name}: reads on a dark and on a light terminal`, () => {
    // Enough of him must stand out from both a dark (#1e1e1e) and a white
    // background, or he melts into one of them.
    const px = frame('idle', 0, undefined, undefined, name).filter(c => c !== NONE)
    const share = (bg: number, min: number) => px.filter(c => contrast(c, bg) >= min).length / px.length
    expect(share(0x1e1e1e, 1.6), 'share of pixels that stand out on a dark terminal').toBeGreaterThanOrEqual(0.3)
    expect(share(0xffffff, 1.3), 'share of pixels that stand out on a light terminal').toBeGreaterThanOrEqual(0.3)
  })

  test(`${name}: captions fit the font and the row`, () => {
    for (const text of Object.values(look.captions ?? {})) {
      expect(hasGlyphs(text!), `glyphs for ${text}`).toBe(true)
      expect(captionWidth(text!)).toBeLessThanOrEqual(32)
    }
    if (look.captions?.happy) expect(captionFor('happy', undefined, name)).toBe(look.captions.happy)
  })

  test(`${name}: five creatures, one per agent role, each its own`, () => {
    const roles = ['Explore', 'Plan', 'fork', 'general-purpose', 'something-else'] as const
    const minis = roles.map(r => critterFor(r, name))
    expect(new Set(minis).size).toBe(5)
    const looks = new Set(minis.map(c => tinyFrame('idle', 0, undefined, undefined, name, c).join(',')))
    expect(looks.size).toBe(5)
    for (const c of minis) {
      expect(CRITTERS[c].rows.length).toBe(4)
      expect(CRITTERS[c].colors['#'], `${c} needs a main colour '#'`).toBeDefined()
      expect(CRITTERS[c].rows.join(''), `${c} must use its main colour '#' in its rows`).toContain('#')
      const { rows, eye, eyes = [2, 5] } = CRITTERS[c]
      for (const x of eyes) expect(rows[eye]?.[x] ?? '.', `${c}: an eye at column ${x} of row ${eye} must sit on its body`).not.toBe('.')
    }
  })

  test(`${name}: /buddy ${name} puts it on`, async ($, on) => {
    mock.clock(on)
    on('store.set', () => ({ value: undefined }))
    on('ui.panes', () => ({ value: [{ id: 'buddy' }] as never }))
    expect((await $.command.run({ command: 'buddy', args: name })).text).toBe(look.said)
  })
}
