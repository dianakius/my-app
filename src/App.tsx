import { Routes, Route, Link } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CatListPage from "./pages/CatListPage";
import CatDetailsPage from "./pages/CatDetailsPage";
import './App.css'


  function App() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      <nav className="flex justify-center gap-6 p-4 bg-white shadow">
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/cats" className="hover:underline">Cats</Link>
      </nav>

    
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cats" element={<CatListPage />} />
        <Route path="/cats/:id" element={<CatDetailsPage />} />
      </Routes>
    </div>
  );
}

export default App;