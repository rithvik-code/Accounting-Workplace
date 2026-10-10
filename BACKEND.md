# Office System backend

The existing HTML, CSS, and app JavaScript are served unchanged. The Node server adds a same-origin API and injects a small runtime bridge into the HTML response so existing workspace saves persist on the server and the assistant can hold a conversation.

## Run it

Requires Node.js 20 or newer. From this folder:

```powershell
node server.mjs
```

Open <http://127.0.0.1:4173>. Workspace data is stored in `data/workspace.json` (created on first save). Keep this service on a trusted machine/network: this local prototype does not add user authentication or multi-user access controls.

## Conversational AI

By default, chat uses the locally installed Ollama model `qwen2.5:3b`. Workspace data is sent to Ollama on this machine at `http://127.0.0.1:11434`, not to a hosted AI service. If Ollama is unavailable, the assistant falls back to basic local workspace responses. To select another installed Ollama model:

```powershell
$env:OLLAMA_MODEL = "qwen2.5:3b"
node server.mjs
```

`OLLAMA_BASE_URL` defaults to `http://127.0.0.1:11434`. To use a hosted OpenAI-compatible service instead, set `AI_PROVIDER=openai`, `OPENAI_API_KEY`, and optionally `OPENAI_MODEL` / `OPENAI_BASE_URL` before starting the server. Only the workspace data included in each conversation request is passed to the selected model.

## API

- `GET /api/health` — server and assistant mode.
- `GET /api/workspace`, `PUT /api/workspace` — read or replace the workspace JSON document.
- `GET /api/collections` — list supported collection names.
- `GET /api/collections/:name` — list records.
- `POST /api/collections/:name` — create a record; an ID is generated if omitted.
- `PUT /api/collections/:name/:id` — update a record.
- `DELETE /api/collections/:name/:id` — delete a record.
- `GET /api/members` — list members.
- `POST /api/members` — add a member with `name` and optional `role` (`Partner`, `Manager`, `Senior`, `Accountant`, or `Trainee`).
- `PUT /api/members/:id` — edit a member's name or role.
- `DELETE /api/members/:id` — remove a member.
- `POST /api/assistant/chat` — conversational assistant. Body: `{ "conversationId": "...", "message": "...", "history": [], "workspace": {} }`.
- `POST /api/assistant/stream` — same conversational API, streamed as server-sent events so answers appear while the model generates them.

Example PowerShell commands:

```powershell
$member = Invoke-RestMethod -Method Post -Uri http://127.0.0.1:4173/api/members -ContentType 'application/json' -Body '{"name":"Asha Mehta","role":"Senior"}'
Invoke-RestMethod -Method Put -Uri "http://127.0.0.1:4173/api/members/$($member.id)" -ContentType 'application/json' -Body '{"role":"Manager"}'
Invoke-RestMethod -Method Delete -Uri "http://127.0.0.1:4173/api/members/$($member.id)"
```

Reload the app after changing members through the API so the current browser copy refreshes from the server. The member endpoints are backend routes; the existing UI has no member-management screen.

The workspace still includes its original demo seed records. Team Members is now managed in the app and persisted through `/api/members`; the other seeded screens have not yet been converted to fully user-created data. Member management is limited in the UI to the Partner role.
