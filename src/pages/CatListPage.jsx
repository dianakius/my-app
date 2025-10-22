import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const API_URL = import.meta.env.VITE_CAT_API_URL;

export default function CatListPage() {
  const [cats, setCats] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [limit, setLimit] = useState(10);

  useEffect(() => {
    const fetchCats = async () => {
      try {
        const response = await fetch(`${API_URL}?limit=${limit}`);

        if (!response.ok) throw new Error("Failed to fetch cats");
        const data = await response.json();

        setCats(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchCats();
  }, [limit]);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold">All Cats</h1>

      {!loading && !error && (
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
      )}
    </div>
  );
}
