# Open issues — sets-architecture.github.io

Known problems, deferred deliberately. Newest section first. Audited 2026-08-14.

---

## 0. Phase N/A/B data-extraction pages not checked for the same "Overall" weighting inconsistency — UNVERIFIED, DEFERRED

**Origin (PI, 2026-08-14):** on
`preliminary-work/question-answering/naive_vs_guided.html` the top *Overall
Accuracy* table and the *Summary by Question Category* table's `Overall` row both
said "Overall" but computed different things, and disagreed by up to 6.4 points:

- Top table — **question-weighted**: every score from 22 questions × images ×
  10 runs pooled flat into one mean (`overall_accuracy()`,
  `venice-39-guided/analyze_naive_vs_guided.py`). Claude naive = 56.8%.
- Summary row — **category-weighted**: mean of the six category means, so each
  category counts equally regardless of size. Spatial location is one question
  (Q5) and Counting is ten, yet each carried 1/6 of the total. Because the
  single-question categories are among the highest-scoring, this always reads
  higher. Claude naive = 63.2%.

Neither figure was wrong; the shared label was. **Fixed 2026-08-14 for this page
only** — the `Overall` row was removed from the summary table and reissued as its
own table, *Overall Accuracy (category-weighted)*, with a note on each table
naming its weighting. Numbers did not move (all 330 per-question cells identical
before and after; the `evaluate.py` provenance hash advanced `84b25a97` →
`6a43a832` but was scoring-neutral for this page).

**Open question:** whether the phase N/A/B pages under
`preliminary-work/data-extraction/` carry the same defect. Those come from
`venice-39-data-extraction` (`build_summary.py` → `build_results_tables.py` →
`build_field_tables.py` → `publish_html.py`), a **separate generator** from the
question-answering scripts, so the fix above does not propagate. That experiment
is 9 fields rather than 22 questions, and whether its fields are grouped into
unequal categories at all is unchecked. If they are, expect the same
mean-of-means vs pooled-mean divergence.

Deferred by PI at the time of the fix; not investigated. Cheapest first step is
to grep those build scripts for `statistics.mean` over already-averaged values.

---

## 1. Plotly charts render at the wrong size until the window is resized — BUG, DEFERRED

**Symptom (PI, 2026-08-14):** on
`preliminary-work/question-answering/count_error_comparison.html` some charts do
not render properly until the browser window is zoomed in and out.

**Scale:** that page contains **50 `Plotly.newPlot` calls** (10 counting
questions × 5 models, naive and guided overlaid per chart).

**Likely cause.** The charts are created synchronously in one pass, and each
`.chart` div is `width: 100%` inside `.col { flex: 1; min-width: 0 }` within
`.row { display: flex }` (`analyze_count_error_comparison.py` lines 155–158).
A flex child with `min-width: 0` can measure as zero width at plot time, so
Plotly bakes in the wrong width. `{responsive: true}` IS already passed
(line 260) — and that is exactly why zooming fixes it: `responsive` listens for
window resize, so the first resize event corrects every chart. That makes
"renders correctly only after a resize" the signature of a plot-time measurement
problem, not a Plotly config omission.

**Likely fixes, cheapest first:**
1. `window.addEventListener('load', () => document.querySelectorAll('.chart').forEach(d => Plotly.Plots.resize(d)))` — one forced re-measure after layout settles.
2. Defer each plot until its container is on screen (`IntersectionObserver`), which also avoids building 50 charts up front.
3. Give `.chart` an explicit width instead of `100%` inside the flex column.

**Related decision (PI, 2026-08-14): do NOT add min–max whiskers to these
charts.** Range across the 10 runs would be the better encoding of spread than
best-of, but 50 charts with whiskers risks being unreadable on a laptop. The
range is currently available on hover only
(`Mean: 2.4 (range: 1–4)`, lines 205–213) — visible spread needs a layout that
can carry it, so revisit presentation and this rendering bug together rather
than separately.

---

## 2. Four duplicate `propel-1.x.md` files at the site root — DECISION PENDING

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

Whichever copy survives inherits the dead links in §4.

---

## 3. `preliminary-work/index.md` — superseded phase structure, overhaul deferred

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

## 4. 22 dead links inside the four `propel-1.x` reports

All predate the 2026-08-12 audit. Left alone because the reports are slated for
rewrite; whichever copy survives §2 carries these.

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
