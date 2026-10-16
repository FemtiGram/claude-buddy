# buddy

A small animated pixel companion for [Claude Code](https://claude.com/claude-code). It lives in a side pane and reacts to what Claude is doing:

- **chilling** — idles with a gentle bob and the occasional blink
- **thinking** — eyes dart around while the model works, caption ripples
- **working** — bounces and steps while tools run
- **done** — jumps with sparkles when a turn finishes
- **oh no** — droops with a tear when a tool fails

Every agent Claude starts gets a row in the **agent list** below the big buddy: a tiny buddy tinted by agent type, its name with the tool count and elapsed time, its task, and what it's doing right now (`▸ Read page.tsx`, `▸ Grep Promise.all`, `✓ done`). Running agents list first; finished ones stay for 30 seconds, dimmed. While agents run, the big buddy shrinks to make room and shows its own current tool under the caption.

```
 ── agents · 1 running ──────────────────────
 ▗▆▆▖  Explore                 6 tools · 0:42
 ▐▀▀▌  Find all usages of requireAuth
 ▝▘▝▘  ▸ Grep requireAuth
```

Drawn with half-block pixels in the terminal's own colours, so empty space stays transparent.

Around the holidays buddy dresses up. In the week up to **Halloween** (Oct 24–31) he wears a witch hat, a bat flits over his shoulder, a jack-o'-lantern flickers at his feet, and he says `SPOOKY` and `BOO!`. Through **Christmas** (Dec 1–26) he wears a Santa hat, snow falls behind him, a present waits at his feet, and he says `HO HO HO` and `MERRY!`.

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
- Terminal only for now; the desktop and VS Code surfaces show a one-line text status.

## Develop

```
claude --plugin-dir ~/code/claude-buddy   # run from the working copy
claude plugin validate .
claude plugin test .
```
