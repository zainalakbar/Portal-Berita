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
            `https://newsapi.org/v2/top-headlines?country=us&category=tecnologi&apiKey=${API_KEY}`
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
        ? `http://localhost:5000/api/news/&{category}`
        : `http://localhost:5000/api/news`;

        const response = await fetch(url);
        const data = await response.json();
        return data.articles;
    } catch (error) {
        console.error("Gagal fetch berita:", error);
        return[];
    }
}

// endpoint kategori
app.get("/api.news/:category", async (req, res) => {
    const category = req.params.category;
    try {
        const response = await fetch(
            `https://newsapi.org/v2/top-headlines?country=id&category=${CATEGORY}&apiKey=${API_KEY}`
        );
        const data = await response.json();
        res.json(data);
    } catch (error) {
        console.error("Terjadi error:", error);
        res.status(500).json({ error: "Gagal ambil berita kategori" });
    }
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server berjalan di http://localhost:${PORT}`));