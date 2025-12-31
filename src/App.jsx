import MyNavbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Detail from "./components/Detail";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <MyNavbar />
      <Routes>
        { /* Halaman utama */}
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
