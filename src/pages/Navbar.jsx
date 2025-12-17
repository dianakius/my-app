import { Link } from "react-router-dom";
function Navbar() {
  return (
    <nav className="flex justify-center gap-6 p-4 bg-white shadow">
      <Link to="/" className="hover:underline">
        Home
      </Link>
      <Link to="/cats" className="hover:underline">
        Cats
      </Link>
    </nav>
  );
}

export default Navbar;
