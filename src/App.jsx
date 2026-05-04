import { Routes, Route, Link } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CatListPage from "./pages/CatListPage";
import CatDetailsPage from "./pages/CatDetailsPage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./App.css";
import Contact from "./pages/Contact";
import Adoption from "./pages/Adoption";
import { Provider } from "@/components/ui/provider";
import BreedsPage from "./pages/BreedsPage";

function App() {
  return (
    <Provider>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/adoption" element={<Adoption />} />
            <Route path="/cats" element={<CatListPage />} />
            <Route path="/cats/:id" element={<CatDetailsPage />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/breeds" element={<BreedsPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Provider>
  );
}

export default App;
