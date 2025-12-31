import { Card, Button } from "react-bootstrap";

function NewsCard({ title, description, image, url }) {
    console.log("Render NewsCard:", { title, description, image, url }) ;
    return (

        <Card className="h-100 shadow-sm news-card">
            <Card.Img
            Variant="top"
            src={image || "https://via.placeholder.com/300x200"}
            style={{ height: "250px", objectFit: "cover"}}
            />
            <Card.Body>
                <Card.Title className="fw-bold text-truncate">{title}</Card.Title>
                <Card.Text className="text-muted" style={{ fontSize: "0.9rem" }}>
                    {description}
                </Card.Text>
                {url && (
                    <Button variant="primary" size="sm" href={url} target="_blank">
                        Read More
                    </Button>
                )}
            </Card.Body>
        </Card>
    );
}

export default NewsCard;  