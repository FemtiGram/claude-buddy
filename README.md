# buddy

A small animated pixel companion for [Claude Code](https://claude.com/claude-code). It lives in a side pane and reacts to what Claude is doing:

- **chilling** — idles with a gentle bob and the occasional blink
- **thinking** — eyes dart around while the model works, caption ripples
- **working** — bounces and steps while tools run
- **done** — jumps with sparkles when a turn finishes
- **oh no** — droops with a tear when a tool fails

Buddy leads his agents: while they work and he has nothing to do himself, he watches them (`GO GO GO`), he cheers when one finishes and flinches when one fails. Every agent Claude starts gets a row in the **agent list** below the big buddy: a tiny buddy tinted by agent type, its name with the tool count and elapsed time, its task, and what it's doing right now (`▸ Read page.tsx`, `▸ Grep Promise.all`, `✓ done`). Running agents list first; finished ones stay for 30 seconds, dimmed. While agents run, the big buddy shrinks to make room and shows its own current tool under the caption.

```
 ── agents · 1 running ──────────────────────
 ▗▆▆▖  Explore                 6 tools · 0:42
 ▐▀▀▌  Find all usages of requireAuth
 ▝▘▝▘  ▸ Grep requireAuth
```

Drawn with half-block pixels in the terminal's own colours, so empty space stays transparent.

Around the holidays buddy dresses up. In the week up to **Halloween** (Oct 24–31) he turns into a different horror monster each day, from Stripe to Pennywise, while a bat flits over his shoulder and a jack-o'-lantern flickers at his feet, and he says `SPOOKY` and `BOO!`. `/buddy normal` takes the costume off. Through **Christmas** (Dec 1–26) he wears a Santa hat, snow falls behind him, a present waits at his feet, and he says `HO HO HO` and `MERRY!`.

## Install

In a Claude Code terminal session:

```
/plugin install buddy --marketplace FemtiGram/claude-buddy
```

Answer `y` to add the marketplace and pick the **user** scope to have buddy in every project.

## Use

- Opens as a side pane on its own when the terminal is ≥ 144 columns wide.
- `/buddy` toggles it (opens it at any width).
- `/buddy halloween` or `/buddy christmas` tries a costume on now, `/buddy normal` takes it off, `/buddy auto` follows the calendar again.
- `/buddy forest` turns buddy into a grey forest spirit with ears and a belly, and his agents into forest critters: a sprout for Explore, an owl for Plan, an acorn for forks, a little spirit for general-purpose, a mushroom for anyone else. `/buddy classic` turns them back. The skin is remembered across sessions, and seasons still bring their props, just no hat over the ears.
- `/buddy mask` turns buddy into a forest girl behind a round red horned mask with two yellow-rimmed eyeholes, white stripes and a shaggy fur cape. Her eyes show through the holes: up when she's happy, drifting apart when she's sad, darting while she thinks. She says `WILD!` when done, and her agents are the same forest critters.
- `/buddy r2d2` turns buddy into R2-D2: his dome turns to look about while he thinks, his light flashes when he's done, and he says `BEEP!`. His agents are droids: a probe droid, a protocol droid, a mouse droid, a ball droid and a little astromech.
- Ten more skins, each with its own crew of creatures for the agent list: `/buddy mario`, `moogle`, `pikachu`, `slime` (Dragon Quest), `barba` (Barbapapa), `moomin`, `tomte`, `kirby`, `creeper` and `soot` (a soot sprite). Each lives in its own small file in `hooks/skins/`; see `hooks/skins/types.ts` to add one.
- Horror skins too, cute-creepy: `/buddy stripe` (Gremlins), `sam` (Trick 'r Treat), `alien`, `jason`, `chucky`, `freddy`, `ghostface`, `predator`, `pennywise` and `frank` (Frankenstein's monster).
- A Star Wars crew: `/buddy vader`, `trooper`, `chewie`, `yoda`, `grogu`, `threepio`, `mando`, `leia`, `ewok` and `jawa`, each with Star Wars creatures for its agents.
- And many more, 79 in all: Ghibli (`noface`, `calcifer`, `kodama`, `jiji`, `kiki`), games (`link`, `sonic`, `pacman`, `shovel`, `junimo`, `hollow`, `blackmage`, `megaman`, `companion`, `goose`, `bomber`, `rayman`, `redbird`), film and TV (`minion`, `walle`, `baymax`, `mike`, `gizmo`, `toothless`, `dalek`, `slimer`, `irongiant`, `jack`, `joy`), anime (`doraemon`, `naruto`, `usagi`), cartoons and folklore (`pippi`, `tintin`, `gromit`, `smurf`, `calavera`, `lion`, `troll`, `yaga`, `anansi`, `sphinx`, `kitsune`) and two more monsters (`gillman`, `bonnie`). `/buddy list` shows them all.
- `/buddy list` shows every skin by group (Buddy, Ghibli, Star Wars, Games, Cartoons & folklore, Horror) and what he's wearing; `/buddy random` puts on a random one.
- `/buddy rotate` puts on a different skin every day (the same one all day), `/buddy rotate session` a new one each session, `/buddy rotate off` stops. Picking a skin by hand stops the rotation too, and the choice is remembered across sessions.
- Works in the terminal, the Claude desktop app, VS Code and the mobile app. The terminal repaints buddy's pixels in place; the others draw him as an SVG that grows to fit the pane, and redraw it up to about 7 times a second, so he moves a little less smoothly there.

## Develop

```
claude --plugin-dir ~/code/claude-buddy   # run from the working copy
claude plugin validate .
claude plugin test .
```
