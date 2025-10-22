import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";



export default function CatDetailsPage() {
  const { id } = useParams();
  const [cat, setCat] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCat = async () => {
      try {
        const res = await fetch(`https://api.thecatapi.com/v1/images/${id}`);
        if (!res.ok) throw new Error("Failed to fetch cat");
        const data = await res.json();

        setCat(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCat();
  }, [id]);

  if (loading) return <div className="p-6">Loading...</div>;

  if (error || !cat) {
    return (
      <div className="p-6">
        <h1 className="text-2xl font-bold">Cat not found</h1>
        <p className="mt-2">We couldn't find a cat with id: {id}</p>
        <Link to="/cats" className="mt-4 inline-block hover:underline">
          Back to all cats
        </Link>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <div className="bg-white rounded-2xl shadow p-6 flex flex-col md:flex-row gap-6">
        <img
          src={cat.url}
          alt="cat"
          className="w-full md:w-64 h-64 object-cover rounded-xl"
        />

        <div>
          <h1 className="text-3xl font-bold">{cat.id}</h1>

          

          <div className="mt-6">
            <Link to="/cats" className="hover:underline">
              ← Back to cats
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
