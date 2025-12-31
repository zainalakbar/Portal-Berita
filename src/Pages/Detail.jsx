import { useParams } from "react-router-dom";

function Detail() {
    const { id } = useParams();

    return (
        <div className="container mt-4">
            <h2>Detail Berita { id }</h2>
            <p>Isi DEtail Berita Dengan ID { id } ditampilkan di sini...</p>
        </div>
    );
}

export default Detail;