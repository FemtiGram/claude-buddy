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
| 15 | Sci-fi ships group: xwing, tie, falcon, destroyer, enterprise, borg, birdofprey, rocinante, serenity, tardis (windows as eyes, engine glow as feet); `smileColor` lets a happy face light up instead of darken (the TARDIS lamp). 89 skins. Version 0.7.0 | committed `89aa51d` |
| 16 | Marvel group (spidey, ironman, hulk, cap, thor, groot, deadpool, panther, venom, strange) and 18 more anime (goku, vegeta, saitama, luffy, chopper, spike, tanjiro, nezuko, levi, deku, allmight, gojo, ichigo, ryuk, edward, eva, pochita, anya); MIT LICENSE for the code and a fan-project disclaimer in the README. 117 skins. Version 0.8.0 | committed `4e43cfc` |
| 17 | DC group: batman, superman, wonder, joker, flash, harley, robin, lantern, aquaman, catwoman, cyborg, ivy; the skin tests now also check that every creature's eyes sit on its body. 129 skins. Version 0.9.0 | committed `9035373` |
| 18 | Art pass: a review rated every skin and the 35 weakest were redrawn (rims on dark characters, shading on pale ones, real silhouettes for the ships, cleaner colour ramps); a contrast check makes every skin read on both a dark and a light terminal. Version 0.10.0 | committed `f6b2045` |
| 19 | Second art pass: 30 more skins redrawn (the rest of the review's weak list, the skins it flagged for contrast or repeated colours, and seven DC skins drawn after it); 65 of 129 skins now polished. Version 0.11.0 | committed `48805d3` |
| 20 | The caption font has the whole alphabet: A, F, J, Q, V, X, Z added; 28 captions that were bent around them now say what they meant (`PIKA` / `PIKACHU!`, `BANKAI`, `MAXIMUM`, `WAKANDA`, `QAPLA!`, `ZOOM!`, `BOOYAH!`, `THE WAY`, `WAHOO!`, `SMASH!`...); a test checks the font covers A–Z. Version 0.12.0 | committed `eb92dac` |
| 21 | Eleven new groups, 79 skins drawn by 25 agents: Pokémon (8), Nintendo (8), Warcraft (8), Diablo (7), Pixar & Disney (8), TV cartoons (13: Looney Tunes, Simpsons, SpongeBob, Rick and Morty, Adventure Time), Muppets (5), Fantasy (6: LOTR, Harry Potter), Robots (4), more Ghibli (5) and more games (7). Pikachu, Mario, Link, Kirby, Mike, WALL-E, Baymax, Joy and the Iron Giant moved into the new groups. 208 skins. Version 0.13.0 | committed (this commit) |

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
- The checks include contrast: at least 30% of a skin's pixels must stand out from a dark (#1e1e1e) and from a white terminal, so dark characters need a lighter rim and pale ones a mid-tone edge. Good references for new skins: mario, blackmage, slime, calcifer, doraemon, tanjiro, redbird, chewie, creeper, ironman (a 2–3 tone ramp, a highlight on top, eyes on a contrasting patch, one bold detail).
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

## Where things stand (2026-10-17)

Version **0.13.0**, pushed to github.com/FemtiGram/claude-buddy (the marketplace your friend installs from). **208 skins** in groups Buddy, Ghibli, Star Wars, Sci-fi ships, Marvel, DC, Pokémon, Nintendo, Games, Warcraft, Diablo, Pixar & Disney, Film & TV, TV cartoons, Muppets, Fantasy, Robots, Anime, Cartoons & folklore, Horror; `/buddy list`, `/buddy random`, `/buddy rotate daily|session|off`; seasons (Halloween week = a horror skin a day, Christmas); buddy watches/cheers/flinches for his agents; works in the terminal, the desktop app, VS Code and mobile (SVG). 1270 tests. The caption font covers A–Z. Two art passes polished 65 skins; the rest rated good in review. The 79 skins of 0.13.0 have not had an art review yet. MIT licence for the code, fan-project disclaimer in the README.

**How we've been working:** new skins go in as placeholders (`hooks/skins/stub.ts` + an entry in `index.ts`), then parallel agents draw 2–3 skins each in their own files and paste their previews; I review, fix shared-test failures, delete `stub.ts`, bump the version, commit and push. Agents must not touch git (one ran `git stash` mid-batch once) and must not `pkill` test runs (one killed everyone's once). At most 20 agents run at once; queue the rest. With 20 agents testing at once a full run takes up to 7 minutes and the shared creature test can time out; re-run on a quiet machine. The agent brief lives in the session scratchpad; rebuild it from the skin rules above (format, contrast, creatures, captions) and the rules here.

## Next iterations

1. **Review the 79 new skins** in previews (or a real pane) and redraw the weak ones; check for minis repeated across skins (Psyduck and Slowpoke are in both snorlax and squirtle).
2. **Promote buddy:** a promo README top section (a one-line pitch, the install command, a ~10 s GIF of buddy thinking, three agents popping up as critters and buddy cheering, a grid of a dozen skins, "terminal, desktop, VS Code, mobile") and a Reddit post draft for r/ClaudeAI. Lead with buddy's own designs (classic, forest, mask) and the agent list; mention the fan skins as a bonus, never as the headline, keep it free, and be ready to pull a skin if a rights holder asks. Then: X/Bluesky with the GIF, awesome-claude-code lists, Show HN once the README is polished.
3. **Format limits that hurt some skins:** one `eyeColor` for both eyes (Cyborg's red eye can't move), one `arms.color` (the Dalek's gun can't move), no per-skin season hats. Small additions to `SkinLook` would fix these.
4. **Look at it in a real pane:** the redrawn skins, Christmas, the forest and mask skins, the desktop redraw speed. Halloween week starts Oct 24: check the daily monster there.
5. **Art pass three:** the remaining 64 skins were rated good (4/5); a light pass could still help.
6. **Easter** (Good Friday to Easter Monday, anonymous Gregorian algorithm; Easter Sunday 2027 is March 28) and **New Year** (Dec 31–Jan 1) seasons. Maybe Nov 1–2 for the calavera.
7. **Stress test the agent list:** 9+ agents (the 8-agent cap and "+N more"), a failing agent (`✗ failed`, buddy flinches), a stopped one (`■ stopped`).
8. **Tests for untested code:** the frame loop, 1s clock and 5s sweep timers; `tool.call`; `turn.step`; `ui.close`; the 8-agent cap; `describeTool` for more tools.
9. Maybe: remember a `/buddy <season>` preview across restarts, as skins and rotation already are (`$.store`).

## Restarting

Open a new session in this folder and say something like: "Read ROADMAP.md and pick up at next iteration 1." Some captions are still squeezed by the 32-pixel row (`EXTERMINATE`, `RASENGAN`, `ASSEMBLE` don't fit). `SKIN-IDEAS.md` has the skin catalog and new-group ideas; `hooks/skins/types.ts` documents the skin format.
