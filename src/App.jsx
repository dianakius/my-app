import { Routes, Route, Link } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CatListPage from "./pages/CatListPage";
import CatDetailsPage from "./pages/CatDetailsPage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./App.css";
import Contact from "./pages/Contact"

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cats" element={<CatListPage />} />
          <Route path="/cats/:id" element={<CatDetailsPage />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;