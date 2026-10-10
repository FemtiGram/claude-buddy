# buddy

A small animated pixel companion for [Claude Code](https://claude.com/claude-code). It lives in a side pane and reacts to what Claude is doing:

- **chilling** — idles with a gentle bob and the occasional blink
- **thinking** — eyes dart around while the model works, caption ripples
- **working** — bounces and steps while tools run
- **done** — jumps with sparkles when a turn finishes
- **oh no** — droops with a tear when a tool fails

Every agent Claude starts gets its own **mini-buddy** below the big one, tinted by agent type, with the agent's task and what it's doing right now (`▸ Read page.tsx`, `▸ Grep Promise.all`, `✓ done`). Up to 8 show in two columns.

Drawn with half-block pixels in the terminal's own colours, so empty space stays transparent.

## Install

In a Claude Code terminal session:

```
/plugin install buddy --marketplace FemtiGram/claude-buddy
```

Answer `y` to add the marketplace and pick the **user** scope to have buddy in every project.

## Use

- Opens as a side pane on its own when the terminal is ≥ 144 columns wide.
- `/buddy` toggles it (opens it at any width).
- Terminal only for now; the desktop and VS Code surfaces show a one-line text status.

## Develop

```
claude --plugin-dir ~/code/claude-buddy   # run from the working copy
claude plugin validate .
claude plugin test .
```
