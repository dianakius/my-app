import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCats, setLoading, setError } from "../store/catsSlice";

const API_URL = import.meta.env.VITE_CAT_API_URL;

export default function CatListPage() {
  const dispatch = useDispatch();
  const { items: cats, loading, error } = useSelector((state) => state.cats);
  const [limit, setLimit] = useState(10);

  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;
    const fetchCats = async () => {
      try {
        dispatch(setLoading(true));
        const response = await fetch(`${API_URL}?limit=${limit}`, { signal });
        if (!response.ok) throw new Error("Failed to fetch cats");
        const data = await response.json();
        dispatch(setCats(data));
      } catch (err) {
        if (err.name !== "AbortError") dispatch(setError(err.message));
      } finally {
        if (!signal.aborted) dispatch(setLoading(false));
      }
    };
    fetchCats();
    return () => controller.abort();
  }, [limit, dispatch]);

  if (loading) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center bg-cream font-sans">
        <p className="text-brown-mid text-base">Loading cats...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center bg-cream font-sans gap-4">
        <p className="text-red-600 text-base">Error: {error}</p>
        <Link to="/" className="text-terracotta text-sm hover:underline">
          Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-cream min-h-full py-20 px-6 font-sans">

      {/* Header */}
      <div className="text-center mb-14">
        <p className="text-[0.7rem] tracking-[0.18em] uppercase text-terracotta mb-3 font-medium">
          Browse our collection
        </p>
        <h1 className="font-serif font-bold text-brown leading-tight m-0" style={{ fontSize: "clamp(2.2rem, 5vw, 3.5rem)" }}>
          All <em className="italic text-terracotta">Cats</em>
        </h1>
      </div>

      
      <ul
        className="max-w-[1100px] mx-auto grid gap-7 list-none p-0 m-0"
        style={{ gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))" }}
      >
        {cats.length > 0 ? cats.map((cat) => (
          <li
            key={cat.id}
            className="rounded-[20px] overflow-hidden bg-white cursor-pointer transition-all duration-300"
            style={{ boxShadow: "0 8px 32px rgba(61,43,31,0.10)" }}
            onMouseEnter={function(e) {
              e.currentTarget.style.transform = "translateY(-6px)";
              e.currentTarget.style.boxShadow = "0 20px 48px rgba(61,43,31,0.18)";
            }}
            onMouseLeave={function(e) {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 8px 32px rgba(61,43,31,0.10)";
            }}
          >
            <Link to={`/cats/${cat.id}`} className="no-underline block">
              <div className="relative h-[220px]">
                <img
                  src={cat.url}
                  alt="cat"
                  className="w-full h-full object-cover block"
                />
                <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, transparent 40%, rgba(61,43,31,0.45) 100%)" }} />
              </div>
              <div className="px-6 py-5">
                <p className="font-serif text-lg font-bold text-brown m-0">
                  {cat.id}
                </p>
              </div>
            </Link>
          </li>
        )) : (
          <p className="text-brown-mid">No cats found</p>
        )}
      </ul>

     
      <div className="flex justify-center mt-12">
        <button
          onClick={() => setLimit((l) => l + 10)}
          className="px-10 py-3 rounded-full bg-brown text-cream border-none text-sm font-medium cursor-pointer font-sans tracking-wide transition-colors duration-200"
          onMouseEnter={function(e) { e.currentTarget.style.background = "#c97d4e"; }}
          onMouseLeave={function(e) { e.currentTarget.style.background = "#3d2b1f"; }}
        >
          Load more →
        </button>
      </div>
    </div>
  );
}