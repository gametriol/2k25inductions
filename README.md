## Free Hosting Instructions

### Backend (Render)
1. Go to https://render.com and sign up.
2. Click 'New Web Service', connect your GitHub repo, and select the backend folder (`Dbms`).
3. Set build command: `npm install`
4. Set start command: `npm start`
5. Add environment variables:
  - `MONGODB_URI` (use MongoDB Atlas, free tier)
  - `PORT` (default: 4000)
6. Deploy. Your backend will be available at a public URL (e.g. https://your-app.onrender.com).

### Frontend (Vercel or Netlify)
1. Go to https://vercel.com or https://netlify.com and sign up.
2. Import your repo and select the frontend folder (`Frontend`).
3. Set build command: `npm run build`
4. Set publish directory: `dist`
5. Add environment variable:
  - `VITE_API_BASE` (set to your Render backend URL, e.g. https://your-app.onrender.com)
6. Deploy. Your frontend will be available at a public URL.

### MongoDB Atlas (Free)
1. Go to https://www.mongodb.com/atlas/database and create a free cluster.
2. Create a database user and whitelist your IP.
3. Copy the connection string and use it for `MONGODB_URI` in Render.

### Notes
- Make sure your backend CORS allows your frontend domain (now set to allow all).
- If you want to restrict CORS, set the `origin` in backend to your frontend URL.
# FLUX Dbms Backend

Simple Express + MongoDB backend to accept application form data.

Fields accepted:
# FLUX Dbms Backend

Simple Express + MongoDB backend to accept application form data.

Fields accepted:
- name (string)
- branch (string)
- year (string)
- phone (string)
- email (string)
- whyJoin (string)
- softSkills (array of strings or comma-separated string)
- hardSkills (array of strings or comma-separated string)

Endpoints:
- POST /api/applications  - create new application
- GET  /api/applications  - list recent applications

Setup

1. Copy `.env.example` to `.env` and set `MONGODB_URI` (for local MongoDB use `mongodb://localhost:27017/flux_db`).
2. Install dependencies: `npm install`.
3. Start server: `npm run dev` (requires nodemon) or `npm start`.

Example POST body (JSON):

{
  "name": "Alice",
  "branch": "Computer Science",
  "year": "3",
  "phone": "+1234567890",
  "email": "alice@example.com",
  "whyJoin": "I want to learn",
  "softSkills": ["communication","teamwork"],
  "hardSkills": "JavaScript,Node.js"
}
  "branch": "Computer Science",
