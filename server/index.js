import express from "express";
import fetch from "node-fetch";
import cors from "cord";

const app = express();
app.use(cors());

const API_KEY = "d81d52f68ea64624809764b049b23b8f";

// endpoint berita umum 
app.get("api/news", async (req, res) => {
    try {
        const response = await fetch(
            `https://newsapi.org/v2/everything?q=Apple&from=2025-12-29&sortBy=popularity&apiKey=${API_KEY}`
        );
        const data = await response.json();
        res.json(data);
    } catch (error) {
        console.error("Terjadi error:", error);
        res.status(500).json({ error: "Gagal ambil berita" });
    }
});
export async function fetchNews(category = "") {
    try {
        const url = category
        ``
    }
}