import { Navbar, Container, Nav } from "react-bootstrap";

function MyNavbar() {
    return (
        <Navbar bg="dark" variant="dark" expand="lg" className="stick-top shadow-sn">
            <Container>
                <Navbar.Brand href="/">BeritaOnline</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/katagori/teknologi">Teknologi</Nav.Link>
                    <Nav.Link href="/kategori/olahraga">Olahraga</Nav.Link>
                    <Nav.Link href="/kategori/politik">Politik</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
}

export default MyNavbar;