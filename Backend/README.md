Quick start:
1. Copy .env.example -> .env and set MONGO_URI & JWT_SECRET
2. npm install
3. npm run dev  (or docker build / run)

API:
POST /api/auth/signup   { name, email, password }
POST /api/auth/login    { email, password }
GET  /api/auth/me       Authorization: Bearer <token>
