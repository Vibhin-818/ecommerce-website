# Local development (Netlify frontend + local backend)

1. Start MongoDB (local or Atlas)
2. Backend
   - cd backend
   - cp .env.example .env (edit MONGO_URI)
   - npm install
   - node seed.js
   - npm run dev
3. Frontend
   - cd frontend
   - npm install
   - copy .env.example to .env and edit VITE_BACKEND_URL if needed
   - npm run dev
4. For production build (Netlify)
   - cd frontend
   - npm run build
   - deploy `frontend/dist` to Netlify (or connect repo to Netlify and set build command `npm run build` and publish dir `frontend/dist`)
