# <Title> Implementation Plan

**Status:** approved / in progress / blocked
**Planned with:** Astra or Fable, <date>

**Goal:** One sentence. The outcome this plan delivers, stated so anyone can tell whether it happened.

**Why now:** One or two sentences of context — the problem, the request, or the backlog item this closes.

**Architecture:** How the change fits the existing build. Name the patterns and files it reuses rather than inventing new structure.

## Global constraints

- Copy, design, and evidence rules this work must respect (point at the specific `PRODUCT.md` / `DESIGN.md` rule).
- Behavior that must not change.
- Exact values, URLs, strings, or slugs that are already decided.

## Out of scope

Binding for this pass. Name the adjacent work that is deliberately not being done, including anything a reasonable agent would be tempted to fix along the way.

- <Thing> — leave untouched; <why, or which future pass owns it>.

## Open questions

Answer these before the plan is approved. An unanswered question here means the executing agent stops at the step that needs it.

- [ ] <Question> — needs Alex.

## Assets and inputs

Everything the plan depends on, with in-repo paths. Note anything still missing; missing inputs block the steps that use them.

- `src/assets/...` — present / **missing, blocks Task N**

---

## Task 1: <Short task name>

**Files:**
- Create: `path`
- Modify: `path`

**Interfaces:**
- Consumes: <existing data, components, or assets>
- Produces: <what other tasks or routes can rely on afterward>

- [ ] **Step 1: <Action>**

What to change, precisely enough that there is nothing to invent.

- [ ] **Step 2: <Verification>**

```bash
npm run build
```

Expected: <the specific observable result — route count, zero errors, a string present in output>.

## Task 2: <Short task name>

...

---

## Definition of done

- [ ] Every task above is checked off.
- [ ] `npm run build` passes with the expected route count and zero errors.
- [ ] `node --test tests/*.test.mjs` passes (build first; tests read `dist/`).
- [ ] Browser pass on affected routes at 1440px and 390px.
- [ ] Nothing outside the files named above was changed.
- [ ] `plan.md` `## Recent` has one closeout entry.
