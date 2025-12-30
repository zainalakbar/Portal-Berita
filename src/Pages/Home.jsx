import { useEffect, useState } from "react";
import NewsCard from "../Components/NewsCard";
import { fetchNews } from "../Services/newsSarvices";
import { Container, Row, Col } from "react-bootstrap";
import "./styles/App.css";

function Home() {
    const [newsList, setNewsList] = useState([]);

    useEffect(() => {
        async function getNews() {
            const news = await fetchNews(); // ambil berita umum
            setNewsList(news);
        }
        getNews();
    }, []);
    useEffect(() => {
        async function getNews() {
            const news = await fetchNews();
            console.log("Berita Yang di Terima:", news); // debug
            setNewsList(news);
        }
        getNews();
    }, []);

    return (
        <Container fluid className="news-container mt-4">
            <h1 className="text-center fw-bold mb-4">Berita Terkini Indonesia</h1>
            <Row className="g-4">
                {newsList
                .filter(news => news.tittle && news.description && news.urlToImage)
                .map((news, index) => (
                    <Col key={index} xs={12} sm={6} lg={3}>
                        <NewsCard
                        tittle={news.tille}
                        description={news.description}
                        image={news.image}
                        url={news.url} 
                            />
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default Home;