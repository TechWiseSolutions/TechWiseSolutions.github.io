import logo from "./logo.svg";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Experts from "./pages/Experts";
import Contact from "./pages/Contact";
import Book from "./pages/Book";
import InfrastructureService from "./pages/services/ItInfrastructureService";
import BuissnesService from "./pages/services/BuissnessIntelligenceService";
import CyberSecurityService from "./pages/services/CyberSecurityService";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/experts" element={<Experts />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/book" element={<Book />} />
          <Route
            path="/it-infrastructure"
            element={<InfrastructureService />}
          />
          <Route path="/business-intelligence" element={<BuissnesService />} />
          <Route path="/cybersecurity" element={<CyberSecurityService />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
