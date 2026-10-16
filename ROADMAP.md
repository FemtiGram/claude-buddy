# buddy roadmap

Where buddy is and what comes next. Written 2026-10-10 to pick work up in a fresh session.

## Milestones

| # | What | State |
|---|------|-------|
| 1 | Animated pixel buddy in a side pane: moods chilling, thinking, working, done, oh no | committed `3ee9348` |
| 2 | Agent list: a tinted mini per subagent with name, task, tool count, elapsed time and live activity (`▸ Read page.tsx`, `✓ done`); finished agents linger 30s dimmed; big buddy shrinks to 1× while agents are listed | committed `0167af1` |
| 3 | Seasons, Halloween (Oct 24–31): witch hat, bat, jack-o'-lantern, `SPOOKY` / `BOO!`; `/buddy halloween\|normal\|auto` preview | committed `0167af1` |
| 4 | Seasons, Christmas (Dec 1–26): Santa hat, snow behind buddy, present, `HO HO HO` / `MERRY!`; `/buddy christmas` | committed `28a61ed` |
| 5 | Skins, forest: a grey 16×16 spirit with ears, belly chevron, grin, `WHEEE!`; minis become critters by agent type (sprout, owl, acorn, spirit, mushroom), names in the critter's colour; `/buddy forest\|classic`, remembered in `$.store` | committed `ab1200b` |
| 6 | Skins, mask: a forest girl with hair, a carved cream mask (red stripe, eyeholes), fur cape and tunic; the mask goes up to show her face when happy or sad; `WILD!`; forest critters as minis; `/buddy mask` | committed `b7644f1` |
| 7 | Mask skin redrawn: a round red mask with two horns, two yellow-rimmed eyeholes side by side and white stripes, over a white fur cape; her pupils show her mood | committed `9e825be` |
| 8 | Desktop, VS Code and mobile: the pane draws buddy, his caption and the agent list as SVG (`svgOf`), redrawn whole every other frame when a sprite changed; buddy grows to fit the pane (`remotePx`) | committed `d48ec5c` |
| 9 | Skins, R2-D2: silver dome, sliding lens, flashing light, `BEEP!`; droids as minis; each skin now has its own creature universe (`UNIVERSE`, `critterFor(type, skin)`) | committed `5f9c111` |
| 10 | Skins drawn from data: one file per skin in `hooks/skins/` (`SkinLook`), drawn by `drawLook()`, checked by `looks.test.tsx`, previewed as text by `preview.test.tsx`. Ten skins: mario, moogle, pikachu, slime, barba, moomin, tomte, kirby, creeper, soot; version 0.3.0 | committed `41f58cd` |
| 11 | Horror skins: stripe, sam, alien, jason, chucky, freddy, ghostface, predator, pennywise, frank. Rotation: `/buddy rotate daily|session|off` (`dailySkin`, `skinAt`), kept in `$.store` as `rotate`; picking a skin stops it. Version 0.4.0 | committed `9840577` |
| 12 | Halloween week: buddy wears a different horror skin each day (`HORROR`, `halloweenSkin`) over his own skin and any rotation; `/buddy normal` takes it off; the classic witch hat stays for `frame()` with the classic skin only. Version 0.4.1 | committed `53da96e` |
| 13 | Star Wars skins (vader, trooper, chewie, yoda, grogu, threepio, mando, leia, ewok, jawa); `group` on every skin; `/buddy list` (`skinGroups`) and `/buddy random`; buddy reacts to his agents (`mainLook`: watches with `GO GO GO`, cheers or flinches for `CREW_MS` when one ends). Version 0.5.0 | committed `7f13974` |
| 14 | The whole backlog of SKIN-IDEAS.md: 45 more skins drawn by 15 agents (three each); groups Film & TV and Anime; gillman and bonnie join the Halloween monsters; the creature test samples key frames to stay fast with 300+ creatures. 79 skins. Version 0.6.0 | committed `3c0349d` |
| 15 | Sci-fi ships group: xwing, tie, falcon, destroyer, enterprise, borg, birdofprey, rocinante, serenity, tardis (windows as eyes, engine glow as feet); `smileColor` lets a happy face light up instead of darken (the TARDIS lamp). 89 skins. Version 0.7.0 | committed (this commit) |

A test run with three Explore agents showed the agent list working live. `/buddy halloween` and `/buddy normal` were tried in a real session and worked. The desktop drawing was tried in the desktop app and works. Christmas and the forest and mask skins have not been looked at in a real pane yet.

## How seasons work (`hooks/register.tsx`)

- `seasonFor(ms)` maps a local date to a `Season`; `SEASONS` lists them for `/buddy <name>`.
- In a season the sprite is 16 rows instead of 14 (`heightOf`), and `frame()` draws buddy 2 rows lower (`top`) so a hat fits even at the top of the happy jump. Sparkles and thinking dots move down with him.
- Each season is one `if (season === '…')` block at the end of `frame()` (hat, props) and one in `tinyFrame()` (a pixel or two on the mini). Anything that should pass *behind* buddy (snow) is drawn before the body.
- `SEASON_CAPTIONS` overrides some moods' captions; `captionFor` falls back to the usual ones. New letters go in `FONT`.
- `preview` holds a `/buddy <season>` choice in memory only; a restart goes back to the calendar.

**Adding a season:** add it to `Season`, `SEASONS` and `seasonFor`; add colours, a `frame()` block and a `tinyFrame()` block; add captions (and glyphs); update the `argumentHint`; add tests that the hat pixel count is constant over every mood and tick 0–95 (so it's never clipped), plus date tests; update the README.

## How skins work (`hooks/register.tsx`)

- A skin changes who buddy is all year; a season only dresses him up. They combine: `seasonAt()` and `chosenSkin` are separate.
- `Skin` and `SKINS` list them. `/buddy forest|classic` sets `chosenSkin` and writes it to `$.store` under `skin`; `session.start` reads it back.
- `frame()` picks the big body: `classicBody()`, `spiritBody()` or `maskBody()`. Every skin but classic uses the critters for minis. The spirit and the girl always use the 16-row sprite (`heightOf`) for its ears, and skips the season hats but keeps the props. Snow and the bat are drawn before the body, so they pass behind it.
- Minis in the forest are critters, one per agent type: `CRITTERS` holds each one's 4 rows, eye row, colours and name tint; `critterFor(type)` picks one, mushroom by default. `critterFrame()` draws any of them with shared moods, and puts arms right beside each row's edge.
- Each mini remembers its agent's `type`, so a skin change redraws it as the right critter.

**Adding a skin:** add it to `Skin`/`SKINS`, a body function for `frame()`, and its minis in `tinyFrame()`; add captions to `SKIN_CAPTIONS`; update the `argumentHint` and README; add tests that nothing is clipped in any mood over ticks 0–95.

## How the remote surfaces work

- Only the terminal has `Raster` and `$.ui.blit`. The desktop, VS Code and mobile get an `Svg` per sprite from `svgOf()`, one `<rect>` per run of a colour.
- They can't repaint in place, so the frame loop calls `$.ui.invalidate('ui.render')` every `REMOTE_EVERY` frames, and only when `look(now)`, a fingerprint of every sprite, differs from what was last drawn.
- Panes there count width in columns, not CSS pixels. `remotePx()` draws buddy at about 10 CSS pixels a column, a little wider than the pane, and the surface shrinks an over-wide `Svg` to fit; at most 24 per pixel, 12 while agents are listed.
- `sprites(now)` and `rowOf(mini, now)` are shared by both drawings, so the terminal and the remote panes show the same thing.

## How skins from data work (`hooks/skins/`)

- One file per skin exports `look: SkinLook` (`types.ts` documents every field and how each mood comes out of it); `index.ts` lists them in `LOOKS`, which register.tsx folds into `SKINS`, captions, `CRITTERS` (as `<skin>:<role>`) and `UNIVERSE`.
- `looks.test.tsx` runs the same checks on every skin, named after it: the format, nothing clipped in any mood or season, captions in the font, five distinct creatures each with a main colour '#', and `/buddy <name>`.
- `preview.test.tsx` prints every skin as text (`PREVIEW <name>` in `claude plugin test .`), so a skin can be drawn without a pane. Several agents can draw skins in parallel, one file each.

**Adding a skin:** write `hooks/skins/<name>.ts`, add it to `index.ts`, run the tests and read its preview.

## How rotation works

- `rotation` ('daily' | 'session' | 'off') lives in `$.store` under `rotate`, next to `skin`.
- `skinAt(now)` is the skin to wear: in Halloween week (or `/buddy halloween`) `halloweenSkin(now)`, a different horror skin each day; otherwise `dailySkin(now)` (the local date's day number modulo `SKINS.length`, so the days step through every skin), the session's pick, or the chosen skin.
- The frame loop redraws when `skinAt(now)` changes, so a daily rotation switches at midnight on its own.

## Gotchas

- **`h` is the JSX factory.** A local variable named `h` breaks rendering ("h is not a function"). The sprite height is `spriteH` for that reason.
- **Tests:** `claude plugin test .` and `claude plugin validate .`. The test harness has no `ui.panes` / `ui.open`; stub them with `on('ui.panes', …)` / `on('ui.open', …)` as the `/buddy` command test does.
- `bun` and `tsc` aren't installed, so there's no quick way to print a sprite outside the tests.
- **Auto mode blocks file edits here:** Edit calls fail with "classifier gave no verdict". An `Edit(hooks/**)` allow rule in `.claude/settings.local.json` didn't help (perhaps until a restart). Accept-edits mode, or leaving auto mode, works. Something to try: start with `CLAUDE_CODE_AUTO_MODE_SERVER=0`.

## Next iterations

Skin ideas, researched and ranked, are in `SKIN-IDEAS.md`.


1. **Look at buddy in the desktop app, and at Christmas and the forest and mask skins in a real pane.** On the desktop: how smooth the redraw feels, and that it doesn't slow the app. The girl: the white fur and stripes on a light background, the dark red mask on a dark one. The spirit: the white eyes and cream belly on a light background, the grey on a dark one; the mushroom's cream stem and the owl's brown on both. Check the white brim, pom-pom and pale snow on light and dark backgrounds, and that the red hat stands out from buddy's orange.
2. **Easter:** Good Friday to Easter Monday, computed each year (anonymous Gregorian algorithm). In 2027 Easter Sunday is March 28. Ideas: bunny ears, a bobbing egg, `HOPPY!`.
3. **New Year** (Dec 31–Jan 1): confetti or fireworks, a party hat, a countdown caption?
4. More options: Valentine's Day, a birthday, or national days if wanted.
5. **Stress test the agent list:** 9+ agents (the 8-agent cap and "+N more"), an agent whose tool fails (sad mood, `✗ failed`), and one stopped partway (`■ stopped`).
6. **Tests for untested code:**
   - the three timers (frame loop, 1s clock, 5s sweep);
   - the `tool.call` and `turn.complete` handlers (moods, labels, the 30s linger);
   - `turn.step`;
   - `ui.close`;
   - the 8-agent cap;
   - `describeTool` for more tools.
7. Maybe: remember a `/buddy <season>` preview across restarts, as skins already are (`$.store`).

## Restarting

Open a new session in this folder and say something like: "Read ROADMAP.md and pick up at next iteration 1."
