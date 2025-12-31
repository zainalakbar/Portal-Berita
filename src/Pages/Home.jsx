import { useEffect, useState } from "react";
import NewsCard from "../Components/NewsCard";
import { fetchNews } from "../Services/newsSarvices";
import { Container, Row, Col } from "react-bootstrap";
import "./styles/App.css";

function Home() {
    const [newsList, setNewsList] = useState([]);

    useEffect(() => {
        async function getNews() {
            try {
            const news = await fetchNews(); // ambil data servis
            console.log("Berita yang di terima:", news);  //debug
            setNewsList(news);
        } catch (err) {
            console.error("Gagal ambil berita:", err);
        }
    }
        getNews();
    }, []);

    return (
        <Container fluid className="news-container mt-4">
            <h1 className="text-center fw-bold mb-4">Berita Terkini Indonesia</h1>
            <Row className="g-4">
                {newsList && newsList.length > 0 ? (
                    newsList.map((news, index) => (
                        <Col key={index} xs={12} sm={6} md={4} lg={3}>
                            <NewsCard
                            tittle={news.tittle}
                            description={news.description}
                            image={news.urlToImage}
                            url={news.url}
                             />
                        </Col>
                    ))

                ) : (
                    <p className="text-center">Belum ada berita yang tersedia.</p>
                )}
            </Row>
        </Container>
    );
}

export default Home;