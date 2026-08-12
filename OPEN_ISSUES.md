# Open issues — sets-architecture.github.io

Known problems, deferred deliberately. Newest section first. Audited 2026-08-12.

---

## 1. Four duplicate `propel-1.x.md` files at the site root — DECISION PENDING

`propel-1.1.md` … `propel-1.4.md` exist at the repo root AND under
`preliminary-work/`. The bodies are **byte-identical**; the only difference is
the `permalink:` line (`/propel-1.x/` vs `/preliminary-work/propel-1.x/`). Both
sets build, so each report is served at two live URLs.

Origin: commit `ddb4c19` (2026-05-24, "Re architect site info to remove
propel-specific file paths") **copied rather than moved** the root originals into
the then-`deep-sources/` tree; `668d170` (2026-06-18) renamed that tree to
`preliminary-work/`. The root copies are the leftover half of an unfinished move.

Verified 2026-08-12: **nothing in the repo links to `/propel-1.x/`.** Swept all
tracked `.md`/`.html` plus `_data/`, `_includes/`, `_layouts/`, `.github/`,
`archives/`, `samples/`. `_data/navigation.yml` references only
`/preliminary-work/`. The four inbound links in `preliminary-work/index.md` now
point at the `preliminary-work/` copies.

Recommendation: remove the root copies. **Caveat blocking the decision:**
`/propel-1.1/`–`/propel-1.4/` have been live since 2026-04-17. These are reports
for a named grant, so if a Propel deliverable, deck, or message to the Dean of
Research cites those URLs, deletion 404s them. Two options:

1. Delete outright — correct if the URLs never circulated outside the team.
2. Replace each root file with a redirect stub to the `preliminary-work/` copy.
   `jekyll-redirect-from` is GitHub Pages-whitelisted (add to `_config.yml`
   `plugins:`, then `redirect_to:` in four one-line stubs); a
   `<meta http-equiv="refresh">` stub avoids the dependency.

Whichever copy survives inherits the dead links in §3.

---

## 2. `preliminary-work/index.md` — superseded phase structure, overhaul deferred

Lines 37–83 re-present the same work twice. Lines 16–23 already use the current
two-experiment structure (question-answering + data-extraction); lines 37–83 then
repeat it under the superseded `1.1`–`1.5` numbering. The old block is a
**duplicate** of the new one, not a supplement.

- Lines 73, 75, 77, 79, 81 — five `<h4>Propel Experiment 1.x:</h4>` headings.
- Lines 74, 76, 78, 80, 82 — prose cross-refs: "builds on 1.1 and 1.3",
  "extends 1.3 and 1.4", "guidance established in 1.1", "used in 1.3".
- Lines 44–47 — mermaid flowchart spine `1.1 → 1.2 → 1.3 → 1.4 → 1.5`. Contains
  no "propel" string, so a grep for `propel` will NOT find it.
- Old numbering had five items; only three map onto the new two experiments.
  **1.1 (expert benchmark) and 1.2 (image pre-processing) belong to neither** —
  they are antecedent work and need a home (own section / folded into the Phase I
  narrative / left to the rewritten reports).

"Propel" as the **grant name** (lines 13, 18, and root `index.md:16`) is a
funding credit and is correct as written — keep it. Only phase labels are stale.

**Separate bug in the same block:** `id="outcomes-title"` appears six times
(lines 38, 73, 75, 77, 79, 81), so `aria-labelledby="outcomes-title"` on line 40
resolves ambiguously. Fix whenever this block is rewritten.

---

## 3. 22 dead links inside the four `propel-1.x` reports

All predate the 2026-08-12 audit. Left alone because the reports are slated for
rewrite; whichever copy survives §1 carries these.

| File | Lines | Problem |
|---|---|---|
| `propel-1.4.md` | 178–188 | 11 links to `analysis/*.html`. **No `analysis/` directory survives anywhere** — deleted in the restructure. |
| `propel-1.4.md` | 26, 61, 114, 150 | 4 links to `task-1-task2-comparison-methodology.md`, `task2-comparison.md`, `task3-comparison-methodology.md`, `task3.2-comparison.md` — none exist at this location. |
| `propel-1.3.md` | 15 | link to `consistency_report.md` — does not exist. |
| `propel-1.4.md` | 17 | malformed: `[](1.3 LLM-aided Document Analysis.)` — empty link text. |
| `propel-1.2.md` | 116 | 5 `samples/*.png` links. Images DO exist, but at root `samples/`; the relative path resolves wrong from either URL. Same relative-path class of bug as the page-image paths in the venice-39 analyze scripts. |

---

## Already fixed 2026-08-12 — do not redo

- **All published `propel` / `1.x` phase labels removed from `/preliminary-work/`.**
  Fixed at the generator source (per the verbatim-from-code rule), then
  regenerated: `venice-39-guided/analyze_propel_comparison.py` (title, h1, note,
  table headers → "Naive vs Guided Summary" / "Naive" / "Guided") and
  `analyze_image_difficulty_comparison.py` (chart legend → "Naive" / "Guided").
  Both diffs contained only the intended strings plus the auto datestamp — no
  accuracy numbers moved.
- **Seven dead links in `preliminary-work/index.md`** repointed from the
  nonexistent `/handwritten archival-sources/…` path to
  `{{ '/preliminary-work/…' | relative_url }}`. That string is now absent from
  the whole repo.
- **Deliberately NOT renamed:** `venice-39-guided/analyze_propel_comparison.py`.
  Internal tooling, not published prose; a rename would touch three places in
  `venice-39-guided/PUBLISH_MAP.md` (mapping row, regenerate loop, cross-repo
  note). PI's call to leave it.
