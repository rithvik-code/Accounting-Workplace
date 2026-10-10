# Office System backend

The Node server adds a same-origin API and injects a small runtime bridge into the HTML response so workspace saves persist on the server and the assistant can hold a conversation. The app includes interactive create flows for clients, tasks, client requests, calendar events, announcements, and documents.

## Run it

Requires Node.js 20 or newer. From this folder:

```powershell
node server.mjs
```

Open <http://127.0.0.1:4173>. Workspace data is stored in `data/workspace.json`; original uploaded files are stored under `documents/vault/`. The server binds to loopback. The member PIN screen is still a local demo gate, not server authentication, so do not expose this prototype to a network or use it as a production accounting system.

## Conversational AI

By default, chat uses the locally installed Ollama model `qwen2.5:3b`. Workspace data is sent to Ollama on this machine at `http://127.0.0.1:11434`, not to a hosted AI service. If Ollama is unavailable, the assistant falls back to basic local workspace responses. To select another installed Ollama model:

Conversation history is held only in browser memory and clears when the page is refreshed or closed.

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
- `POST /api/vault/save` — store a UTF-8 document (`{ name, content }`) or a base64 file (`{ name, base64, type }`, up to 8 MB).
- `GET /api/vault/files/:id` — download a stored file by its generated vault ID.
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

Audit history preserves existing entries during whole-workspace saves, and direct audit collection updates/deletes are rejected. This is a local integrity measure, not a cryptographically signed audit ledger.

Statutory dates and tax amounts in the cash forecast are estimates. GST filing frequency/state group can be set when creating clients; verify extensions and portal-specific due dates before filing or payment. Advance tax needs the current-year estimate and credits entered in Firm Settings. Seed records remain so the app opens with an example workspace; new records are user-entered and saved to the same workspace store.
