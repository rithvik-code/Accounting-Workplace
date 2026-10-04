# Run Doc — Accounting Workplace

## How to reproduce the artifacts

There are **none**. This is a dependency-free static site — no `package.json`, no
lockfile, no build step, no framework config, and no `.env` files.

- Source of truth: `index.html`, `app.js`, `styles.css` at the repo root.
- Nothing to install, nothing to compile, nothing to copy from the main checkout.
- `.freebuff/serve.js` is the preview server helper (agent tooling, not app source).
- Sanity check on the JS: `node --check app.js`

## How to run the server

### Primary — static server on 5173 (this is what works)

Do **not** use `register_preview` with `htmlPath` for this project. Verified failure:
the app-served `htmlPath` mode returns `index.html` correctly but **404s its relative
siblings** (`app.js`, `styles.css`). The page then loads unstyled with an inert DOM —
`#app-view` stays empty because `app.js` never executes. Confirmed via `fetch` probes
returning 404 for both assets.

Run the bundled dependency-free server instead:

```bash
node .freebuff/serve.js 5173
```

Then register with:
- **url:** `http://127.0.0.1:5173/`
- **pid:** the pid printed by the launcher

Windows detach recipe (note: the wrapper may report a timeout even though
`Start-Process` succeeds — verify with `netstat` and a `curl` probe before retrying):

```powershell
powershell -NoProfile -Command "(Start-Process -FilePath 'node.exe' -ArgumentList '.freebuff/serve.js','5173' -RedirectStandardOutput '<log>' -RedirectStandardError '<log>.err' -WindowStyle Hidden -PassThru).Id"
```

Confirm it survived and actually serves assets (all three must be 200):

```bash
powershell -NoProfile -Command "Get-Process -Id <pid>"
for f in "" app.js styles.css; do curl -s -o /dev/null -w "/$f -> %{http_code}\n" "http://127.0.0.1:5173/$f"; done
```

Port 5173 was chosen because it was free. Port 8000 is already occupied by an
unrelated process (PID 20992) — do not assume it is available.

### Fallback if `.freebuff/serve.js` is unavailable

Any static server rooted at the repo root works, e.g. `python -m http.server 5173`
or `npx serve -l 5173`. The requirement is that sibling assets resolve over HTTP,
not `file://` — `localStorage` and the CSS custom-property branding both behave
correctly only over HTTP.

## Notes

- Firm branding is configurable at runtime via the **Firm Settings** view; defaults
  live in `seedData.firm` at the top of `app.js`.
- State persists to `localStorage` under `acc_workplace_os_data`. `loadFromStorage`
  merges stored data over `seedData`, so blobs saved by older builds still receive
  newly added top-level collections. To reset everything, clear that key.
- Known limitation: this is UI-level only. `localStorage` is readable and writable
  from devtools, so any future permission model is not a security boundary.