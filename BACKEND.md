# Office System backend

The existing HTML, CSS, and app JavaScript are served unchanged. The Node server adds a same-origin API and injects a small runtime bridge into the HTML response so existing workspace saves persist on the server and the assistant can hold a conversation.

## Run it

Requires Node.js 20 or newer. From this folder:

```powershell
node server.mjs
```

Open <http://127.0.0.1:4173>. Workspace data is stored in `data/workspace.json` (created on first save). Keep this service on a trusted machine/network: this local prototype does not add user authentication or multi-user access controls.

## Conversational AI

Without configuration, the assistant uses a local, workspace-aware fallback and can answer basic client/workspace questions and ask follow-ups. For full model-backed conversations, set an OpenAI-compatible endpoint and key before starting the server:

```powershell
$env:OPENAI_API_KEY = "your-key"
$env:OPENAI_MODEL = "gpt-4o-mini"
node server.mjs
```

`OPENAI_BASE_URL` defaults to `https://api.openai.com/v1` and can point at another OpenAI-compatible provider. Only workspace data included in the conversation request is sent to that provider.

## API

- `GET /api/health` — server and assistant mode.
- `GET /api/workspace`, `PUT /api/workspace` — read or replace the workspace JSON document.
- `GET /api/collections` — list supported collection names.
- `GET /api/collections/:name` — list records.
- `POST /api/collections/:name` — create a record; an ID is generated if omitted.
- `PUT /api/collections/:name/:id` — update a record.
- `DELETE /api/collections/:name/:id` — delete a record.
- `POST /api/assistant/chat` — conversational assistant. Body: `{ "conversationId": "...", "message": "...", "history": [], "workspace": {} }`.

The current screen still contains its original demo seed records and sign-in behavior. Making every screen start empty and editing those records entirely through user input requires changes to the existing app JavaScript; this backend preserves the frontend as requested and provides persistence and APIs for that next integration step.
