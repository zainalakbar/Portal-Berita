import express from "express";
import cors from "cors";
import fetch from "node-fetch";
import dotenv from "dotenv";

const app = express();
app.use(cors());

app.get("/test", (req, res) => {
  res.json({ message: "SERVER OK" });
});

const API_KEY = process.env.API_KEY



app.get("/api/news", async (req, res) => {
  const response = await fetch(
    `https://newsapi.org/v2/everything?q=indonesia&language=id&apikey=${API_KEY}`
  );
  const data = await response.json();
  res.json(data.articles || []); // ✅ kirim langsung ke array ke frontend
});

app.listen(5000, () => console.log("✅ Server jalan di http://localhost:5000"));
