import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const API_URL = import.meta.env.VITE_CAT_API_URL;

export default function CatListPage() {
  const [cats, setCats] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [limit, setLimit] = useState(10);

  useEffect(() => {
    const fetchCats = async () => {
      try {
        setLoading(true);

        const response = await fetch(`${API_URL}?limit=${limit}`); // Wait for the download

        if (!response.ok) throw new Error("Failed to fetch cats");
        const data = await response.json(); //Wait for JSON conversion

        setCats(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchCats();
  }, [limit]);

  if (loading) return <div className="p-6">Loading cats...</div>;

  if (error) {
    return (
      <div className="p-6">
        <h1 className="text-2xl font-bold">All Cats</h1>
        <p className="mt-4 text-red-600">Error: {error}</p>
        <Link to="/" className="mt-4 inline-block hover:underline">
          Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold">All Cats</h1>

      {}
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {cats.length > 0 ? (
          cats.map((cat) => (
            <li
              key={cat.id}
              className="bg-white rounded-2xl shadow p-4 flex items-center gap-4"
            >
              <img
                src={cat.url}
                alt="cat"
                className="w-20 h-20 object-cover rounded-xl flex-shrink-0"
              />
              <div className="flex-1">
                <Link
                  to={`/cats/${cat.id}`}
                  className="text-lg font-semibold hover:underline text-blue-800"
                >
                  {cat.id}
                </Link>
              </div>
            </li>
          ))
        ) : (
          <p>No cats found</p>
        )}
      </ul>
    </div>
  );
}
