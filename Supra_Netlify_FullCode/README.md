# Supra - Fullstack E-commerce (React + Express + MongoDB) - Netlify Frontend

This repository contains the full Supra project:
- React (Vite) frontend — deploy to Netlify (build output)
- Node.js + Express backend — deploy to Render/Heroku/Cloud Run
- MongoDB Atlas for database

## Quick steps to upload to GitHub and deploy

1. Push this repo to GitHub.
2. **Frontend (Netlify)**:
   - In Netlify, create a new site from Git, select this repo, and set build command: `npm run build` and publish directory: `frontend/dist`.
   - Add any environment variables in Netlify if needed (none required for static frontend). For API calls, the frontend expects a backend base URL in `VITE_BACKEND_URL` (set in Netlify Environment Variables).
3. **Backend**:
   - Deploy `backend/` to Render/Heroku/Cloud Run. Set `MONGO_URI` env var and `PORT` if needed.
4. Seed DB: run `node backend/seed.js` locally or from a temporary script pointing to your Atlas `MONGO_URI`.


See docs/LOCAL_DEV.md for full local dev instructions.
