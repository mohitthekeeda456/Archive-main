# NoirSane Archive

Frontend + backend codebase organized for easier team onboarding and maintenance.

## Project structure

```text
Archive-main/
|- backend/
|  |- src/
|  |  |- app.js
|  |  |- server.js
|  |  |- config/
|  |  |  |- db.js
|  |  |- controllers/
|  |  |- routes/
|  |  |- models/
|  |  |- data/
|  |     |- sampleData.js
|  |- package.json
|- public/
|- src/
|  |- assets/
|  |- components/
|  |- contexts/
|  |- data/
|  |- pages/
|  |- styles/
|  |- App.jsx
|  |- main.jsx
|- package.json
|- vite.config.js
```

## Why this layout

- Backend runtime files are under `backend/src` (standard Node service layout).
- API bootstrapping is split into:
  - `backend/src/server.js`: process startup and port binding.
  - `backend/src/app.js`: express app and route wiring.
  - `backend/src/config/db.js`: database connection logic.
- Frontend naming is consistent (`components`, `contexts`) to avoid case issues on Linux/CI.

## Run the project

Frontend:

```bash
npm install
npm run dev
```

Backend:

```bash
cd backend
npm install
npm run dev
```

From root, you can also run backend dev with:

```bash
npm run dev:server
```
