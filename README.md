# 🛍️ Supra — Fullstack Multilingual E-Commerce Website

Supra is a fullstack e-commerce web application similar to Amazon, built using:

- **Frontend:** React (Vite) + Tailwind CSS + `react-i18next` (for multilingual support)
- **Backend:** Node.js + Express.js + MongoDB (Mongoose ORM)
- **Database:** MongoDB Atlas (Cloud)
- **Deployment:**
  - Frontend → **Netlify**
  - Backend → **Render / Heroku / Cloud Run**
- **Languages Supported:** English 🇬🇧, Hindi 🇮🇳, Tamil 🇮🇳, Telugu 🇮🇳
- **Goal:** A fully functional multilingual shopping platform for the Indian market.

---

## 🚀 Features

### 🌐 Multi-Language Frontend
- Supports English, Hindi, Tamil, and Telugu.
- Built using `react-i18next` with dynamic language switching.
- Localized product names and descriptions are served by the backend.

### 🛒 E-Commerce Functionality
- Product listing and product details pages.
- Add to cart, remove items, clear cart.
- Place order (Order data stored in MongoDB).

### 🧠 AI-Assisted Project Design Journey
This project was designed collaboratively with **ChatGPT-5**, using a sequence of prompts to define, refine, and deploy the full stack.

Below is the full prompt history that guided Supra’s creation.

---

## 💬 Prompt History (Chronological Order)



###  
**Prompt:**  
> Extract the text from this image.  
(Uploaded an image describing an **E-Commerce Website Task**.)

---

### 
**Prompt:**  
> Use React as specified, with a Node.js backend using Express.js and MongoDB as the database. Provide all details here.

---

###  
**Prompt:**  
> (Uploaded two images for design reference)  
> Design the frontend for the e-commerce website so that it supports multiple Indian languages.

---

### 
**Prompt:**  
> I want a complete, fully functional e-commerce website — similar to Amazon — with all the above features and multilingual support (all Indian languages).  
> Name this e-commerce website **“Supra”** and give me the complete project here.



###  
**Prompt:**  
> Provide the complete directory structure for the project.

---

###   
**Prompt:**  
> Generate a downloadable ZIP file of the project.

---

 use **Netlify** for deployment and give me the complete Supra project ZIP file to upload to GitHub.

---

### 
**Prompt:**  
> Generate a README and include all my prompts that I used to generate the project. ✅ (This one!)

---

## 🧩 Project Architecture

supra/
├── backend/               # Node.js + Express API
│   ├── models/            # Mongoose schemas
│   ├── routes/            # Product & order routes
│   ├── server.js          # Express entry point
│   ├── seed.js            # Seeds sample multilingual data
│   ├── .env.example
│   ├── Dockerfile
│   └── Procfile
│
├── frontend/              # React + Vite frontend (deployed to Netlify)
│   ├── src/
│   │   ├── components/    # UI components (LangSwitch, ProdCard, Header)
│   │   ├── pages/         # Home, Product, Cart
│   │   ├── context/       # Cart context
│   │   ├── i18n.js        # Language setup
│   │   └── App.jsx
│   ├── index.html
│   ├── vite.config.js
│   ├── tailwind.config.cjs
│   ├── postcss.config.cjs
│   ├── .env.example
│   └── Dockerfile
│
├── docs/
│   └── LOCAL_DEV.md
│
├── netlify.toml           # Netlify build settings
├── docker-compose.yml
└── README.md              # You’re reading it!

---

## 🧠 Tech Stack Summary

| Layer | Technology | Purpose |
|-------|-------------|----------|
| Frontend | React (Vite) + Tailwind CSS | Fast and responsive UI |
| Backend | Node.js + Express | REST API |
| Database | MongoDB (Atlas) | Product & Order storage |
| Localization | react-i18next | Multilingual frontend |
| Deployment | Netlify (frontend), Render (backend) | Production hosting |
| Language Support | English, Hindi, Tamil, Telugu | Multilingual UX |

---

## 🧰 Environment Setup

### Backend
```bash
cd backend
cp .env.example .env
# Add your MongoDB connection string to .env
npm install
node seed.js     # seed database
npm run dev

Backend runs on: http://localhost:5000

Frontend
cd frontend
npm install
cp .env.example .env
# Set VITE_BACKEND_URL to your backend endpoint (e.g., https://supra-api.onrender.com)
npm run dev

Frontend runs on: http://localhost:5173

Deploy to Netlify


Push the project to GitHub.


In Netlify:


Select your GitHub repo.


Build command: npm run build


Publish directory: frontend/dist




Set Environment Variable:
VITE_BACKEND_URL=https://your-backend-service.onrender.com




Deploy Backend to Render


In Render dashboard → Create New Web Service.


Connect to this repo and choose the backend/ directory.


Set Environment Variables:
MONGO_URI = your MongoDB Atlas connection string
PORT = 5000



Click Deploy.


Copy Render URL (e.g., https://supra-backend.onrender.com) and use it in your frontend .env.



🧪 Testing


Visit https://your-netlify-site.netlify.app


Browse multilingual products.


Add to cart, place orders.


Verify data in your MongoDB Atlas cluster.



📸 Preview
Supra – The Indian Multilingual E-Commerce Platform
(Designed to feel like Amazon, but localized for Indian users.)

🧑‍💻 Author
SAI Vibhin
B.E. Artificial Intelligence & Data Science,
CMR Institute of Technology, Bengaluru (2026 Batch)

🧾 License
This project is open-source for educational and personal use.
All technologies used are open-source.

⭐ Acknowledgements
Built entirely with the help of ChatGPT-5 through iterative prompts, architecture design, and code generation.
This project demonstrates how AI can assist in building production-ready software end-to-end.

📦 Project ZIP provided:
Supra_Netlify_FullCode.zip


✅ Summary
Supra = React + Node + Mongo + i18n + Netlify + Render
A fully functional multilingual e-commerce website built from scratch using AI-guided development.
“Made with ❤️ in India — for all Indian languages.”


---

Would you like me to include this README.md **inside your Supra_Netlify_FullCode.zip** (and regenerate the zip so it’s ready for direct GitHub upload)?
