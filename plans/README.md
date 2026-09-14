# Plans

Approved implementation plans for work that is bigger than the fast path in `AGENTS.md`.

## How work moves through here

1. **Plan elsewhere.** Alex works the problem out with Astra or Fable — goal, approach, file-level tasks, and what is explicitly not being done.
2. **Commit the plan.** Save it here as `YYYY-MM-DD-short-slug.md` using `TEMPLATE.md`. The plan lands on its own before implementation starts, so there is a reviewable boundary before any code moves.
3. **Execute here.** A coding agent reads the plan and builds exactly what it lists, checking off steps as they land. The plan is the scope boundary: its `Out of scope` list is binding, and anything not in the plan waits for its own pass.
4. **Close out.** When the plan is fully executed and shipped, record it in `plan.md` `## Recent` and move the plan file to `plans/done/`.

## Rules for plans

- **Executable from a clean checkout.** No `~/` paths, no `/assets/` staging folder, no `~/Downloads`, no Framer CLI. Any image, video, or copy the plan depends on is committed to the repo or attached to the task. A plan that needs something only on Alex's machine is not ready to execute.
- **File-level tasks.** Each task names the files it creates or modifies. If the executing agent needs a file the plan never mentions, that is a stop-and-report, not a judgment call.
- **Say what is not in scope.** The `Out of scope` section is the main defense against a bounded task bloating. Name the adjacent, tempting, obviously-related things that are deliberately being left alone.
- **Decisions belong in the plan, not the execution.** Open questions get answered before the plan is approved. An unanswered question in an approved plan means the executing agent stops there.
- **One plan, one branch, one PR**, unless the plan says otherwise.

## History

`docs/superpowers/plans/` and `docs/superpowers/specs/` hold plans from the earlier superpowers workflow. They are read-only reference for format and past decisions; new plans go here.
