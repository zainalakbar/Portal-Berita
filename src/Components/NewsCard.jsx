import { Card, Button } from "react-bootstrap";
import Image from "../assets/news.jpg";

function NewsCard({ title, description, src, url }) {
  console.log("Render NewsCard:", { title, description, src, url });
  //   console.log("Fallback src path:", fallbacksrc);

  return (
    <Card className="h-100 shadow-sm news-card">
      <Card.Img
        variant="top"
        src={
          src && typeof src === "string" && src.trim() !== ""
            ? src
            : Image
        }
        alt={title || "News image"}
        style={{ height: "250px", objectFit: "cover" }}
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
