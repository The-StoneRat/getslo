# CLAUDE.md — slo.photo

Static marketing site for Slo (HTML/CSS, no build, GitHub Pages, domain `slo.photo`).

**Read `CONTEXT.md` first** — voice, banned terms ("film roll"/"roll" → "pack"/"slot"), platform status, locked page structure. `HANDOFF.md` is the 2026-06-18 build-out plan for this site (not the cross-repo issue convention).

## Repo family

Product work starts in the master repo, **The-StoneRat/Slo** — work for this site arrives as **self-contained GitHub issues** posted here (label `ready-for-agent`): execute from the issue body; if it's insufficient, comment + apply `needs-info`. Backend = The-StoneRat/slo-backend (irrelevant to this static site). Never invent product claims — `CONTEXT.md`'s "Do not claim" list wins.

## Rules

- No build step, no frameworks — extend `index.html` / `styles.css` in place.
- All copy is original (see HANDOFF.md hard rule). Marketing voice may be evocative; use the `/mad-don-draper` skill conventions where available.
- Site changes are live on push to `main` (GitHub Pages) — verify locally in a browser before pushing.
