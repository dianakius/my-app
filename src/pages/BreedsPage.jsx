import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const BASE_URL = import.meta.env.VITE_CAT_BASE_URL;

export default function BreedsPage() {
  const [breeds, setBreeds] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`${BASE_URL}/breeds`)
      .then((res) => res.json())
      .then((data) => {
        setBreeds(data);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center bg-cream font-sans">
        <p className="text-brown-mid text-base">Loading breeds...</p>
      </div>
    );
  }

  return (
    <div className="bg-cream min-h-full py-20 px-6 font-sans">
      <div className="text-center mb-14">
        <p className="text-[0.7rem] tracking-[0.18em] uppercase text-terracotta mb-3 font-medium">
          Discover your perfect match
        </p>
        <h1
          className="font-serif font-bold text-brown leading-tight m-0"
          style={{ fontSize: "clamp(2.2rem, 5vw, 3.5rem)" }}
        >
          Cat <em className="italic text-terracotta">Breeds</em>
        </h1>
      </div>

      <div
        className="max-w-[1100px] mx-auto grid gap-7"
        style={{ gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))" }}
      >
        {breeds.map((breed) => (
          <div
            key={breed.id}
            onClick={() => navigate(`/breeds/${breed.id}`)}
            className="rounded-[20px] overflow-hidden bg-white cursor-pointer transition-all duration-300"
            style={{ boxShadow: "0 8px 32px rgba(61,43,31,0.10)" }}
            onMouseEnter={function (e) {
              e.currentTarget.style.transform = "translateY(-6px)";
              e.currentTarget.style.boxShadow =
                "0 20px 48px rgba(61,43,31,0.18)";
            }}
            onMouseLeave={function (e) {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow =
                "0 8px 32px rgba(61,43,31,0.10)";
            }}
          >
            <div className="relative h-[200px] bg-brown-light">
              {breed.image?.url ? (
                <img
                  src={breed.image.url}
                  alt={breed.name}
                  className="w-full h-full object-cover block"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-5xl">
                  🐱
                </div>
              )}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to bottom, transparent 40%, rgba(61,43,31,0.45) 100%)",
                }}
              />
              <span className="absolute top-3.5 left-3.5 bg-cream text-terracotta text-[0.7rem] font-medium tracking-[0.12em] uppercase px-3 py-1 rounded-full">
                {breed.origin}
              </span>
            </div>

            <div className="px-6 py-5">
              <h2 className="font-serif text-xl font-bold text-brown mb-1.5">
                {breed.name}
              </h2>
              <p className="text-[0.8rem] text-terracotta mb-2 font-medium">
                {breed.temperament?.split(",").slice(0, 3).join(" · ")}
              </p>
              <p className="text-sm text-brown-mid leading-relaxed m-0 line-clamp-2">
                {breed.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
