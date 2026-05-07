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

  if (loading) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center bg-cream font-sans">
        <p className="text-brown-mid text-base">Loading...</p>
      </div>
    );
  }

  if (error || !cat) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center bg-cream font-sans gap-4">
        <h1 className="font-serif text-3xl font-bold text-brown">Cat not found</h1>
        <p className="text-brown-mid">We couldn't find a cat with id: {id}</p>
        <Link to="/cats" className="text-terracotta text-sm hover:underline">
          ← Back to all cats
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-cream min-h-full py-20 px-6 font-sans">
      <div className="max-w-[800px] mx-auto">

        {/* Back link */}
        <Link
          to="/cats"
          className="inline-block text-sm text-brown-mid no-underline mb-8 tracking-wide transition-colors duration-200"
          onMouseEnter={function(e) { e.currentTarget.style.color = "#c97d4e"; }}
          onMouseLeave={function(e) { e.currentTarget.style.color = "#7a5c4a"; }}
        >
          ← Back to all cats
        </Link>

        
        <div
          className="bg-white rounded-[24px] overflow-hidden border border-brown-border"
          style={{ boxShadow: "0 8px 40px rgba(61,43,31,0.08)" }}
        >
          <div className="relative h-[420px]">
            <img
              src={cat.url}
              alt="cat"
              className="w-full h-full object-cover block"
            />
            <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, transparent 50%, rgba(61,43,31,0.6) 100%)" }} />
            <div className="absolute bottom-0 left-0 p-8">
              <h1 className="font-serif text-4xl font-bold text-cream m-0">
                {cat.id}
              </h1>
            </div>
          </div>

          {cat.breeds?.length > 0 && (
            <div className="px-8 py-6">
              <h2 className="font-serif text-xl font-bold text-brown mb-4">
                {cat.breeds[0].name}
              </h2>
              <p className="text-sm text-brown-mid leading-relaxed mb-4">
                {cat.breeds[0].description}
              </p>
              <p className="text-sm text-terracotta font-medium">
                {cat.breeds[0].temperament}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}