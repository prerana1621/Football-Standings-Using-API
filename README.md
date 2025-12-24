# ⚽ Football Analytics Dashboard

A full-stack football analytics web application that displays **live league standings**, interactive charts, and team statistics with a clean UI and dark mode support.

The project is designed with **secure API handling**, keeping the API key hidden behind a backend service.

---

## 🌐 Demo

- **Frontend (Netlify):**  
  👉 https://football-analytics-dashboard.netlify.app/

- **Backend (Render):**  
  👉 https://football-standings-using-api.onrender.com/standings/PL

---

## 🚀 Features

- 📊 Live football league standings
- 🏆 Supports multiple leagues:
  - Premier League
  - La Liga
  - Serie A
  - Bundesliga
  - Ligue 1
- 🔍 Search teams by name
- 🔃 Sort by points, wins, losses, or name
- 📈 Bar chart visualization for top teams
- 🌙 Light / Dark mode toggle
- 🔐 Secure backend proxy for API requests
- 🎨 Clean UI with custom favicon and branding

---

## 🏗️ Tech Stack

### Frontend
- HTML
- CSS
- JavaScript
- Chart.js

### Backend
- Node.js
- Express.js
- Football-Data.org API

### Deployment
- **Frontend:** Netlify
- **Backend:** Render

---

## 🔐 API Security

The Football-Data API key is **never exposed** to the frontend or GitHub.

- API key is stored as an **environment variable** on the backend
- Frontend communicates only with the backend endpoint
- `.env` file is excluded using `.gitignore`

This follows **industry-standard security practices**.

---

## 🧠 Architecture Overview

```bash
Browser (Frontend)
↓
Backend API (Render)
↓
Football-Data.org API
```


The backend acts as a secure proxy and returns only the required data to the frontend.

---

## 🛠️ Running the Project Locally

### 1️⃣ Clone the repository
```bash
git clone https://github.com/prerana1621/Football-Standings-Using-API.git
cd Football-Standings-Using-API
```
### 2️⃣ Backend setup
```bash
cd backend
npm install
```
Get your API Key after creating an account here 👉🏻👉🏻 https://www.football-data.org/

Create a .env file inside backend:
```bash
API_KEY=your_api_key_here
```
Start the backend:
```bash
node server.js
```
Test:
```bash
http://localhost:3000/standings/PL
```
### 3️⃣ Frontend setup
Open frontend/index.html using Live Server or any local server.

---
### ⚠️ Deployment Note
The Football-Data API enforces restrictions on certain cloud IP addresses.
The backend is deployed separately to handle API access securely while ensuring compliance with API usage policies.

This is a deliberate architectural decision, not a limitation.

---

### 📌 Future Enhancements
- Add match-level and player-level analytics
- Implement caching to reduce API calls
- Improve mobile responsiveness
- Add league comparison charts
---
### 👤 Author
Prerana Acharyya

Full-Stack Developer

---
### 📄 License
This project is intended for educational and portfolio purposes.
