import express from "express";
import fetch from "node-fetch";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();
app.use(cors());

app.get("/standings/:league", async (req, res) => {
  try {
    const response = await fetch(
      `https://api.football-data.org/v4/competitions/${req.params.league}/standings`,
      {
        headers: {
          "X-Auth-Token": process.env.API_KEY
        }
      }
    );

    const data = await response.json();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch standings" });
  }
});

app.listen(3000, () => {
  console.log("Backend running on http://localhost:3000");
});
