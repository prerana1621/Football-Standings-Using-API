# ⚽ Football Analytics Dashboard
![Netlify](https://img.shields.io/badge/Frontend-Netlify-00C7B7?logo=netlify&logoColor=white)
![Render](https://img.shields.io/badge/Backend-Render-46E3B7?logo=render&logoColor=white)
![Status](https://img.shields.io/badge/Status-Live-success)
![License](https://img.shields.io/badge/License-Educational-blue)

![HTML](https://img.shields.io/badge/HTML-5-E34F26?logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS-3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6-F7DF1E?logo=javascript&logoColor=black)
![Chart.js](https://img.shields.io/badge/Chart.js-Visualizations-FF6384)
![Node.js](https://img.shields.io/badge/Node.js-Backend-339933?logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/Express.js-API-black)
![Author](https://img.shields.io/badge/Author-Prerana%20Acharyya-purple)

A full-stack football analytics web application that displays **live league standings**, interactive charts, and team statistics with a clean UI and dark mode support.

The project is designed with **secure API handling**, keeping the API key hidden behind a backend service.

---

## 🌐 Live Demo

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
