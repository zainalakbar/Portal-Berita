import express from "express";
import cors from "cors";
 import fetch from "node-fetch";

const app = express();
app.use(cors());

app.get("/test", (req, res) => {
  res.json({ message: "SERVER OK" });
});

const API_KEY = "d81d52f68ea64624809764b049b23b8f";

app.get("/api/news", async (req, res) => {
  const response = await fetch(
    `https://newsapi.org/v2/top-headlines?country=id&apiKey=${API_KEY}`
  );
  const data = await response.json();
  res.json(data.articles || []); // ✅ kirim langsung ke array ke frontend
});

app.listen(5000, () => console.log("✅ Server jalan di http://localhost:5000"));
