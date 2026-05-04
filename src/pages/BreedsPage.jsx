import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function BreedsPage() {
  const [breeds, setBreeds] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://api.thecatapi.com/v1/breeds")
      .then((res) => res.json())
      .then((data) => {
        setBreeds(data);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div style={{ minHeight: "60vh", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'DM Sans', sans-serif", background: "#fdf8f2" }}>
        <p style={{ color: "#7a5c4a", fontSize: "1rem" }}>Loading breeds...</p>
      </div>
    );
  }

  return (
    <div style={{ background: "#fdf8f2", minHeight: "100%", padding: "5rem 1.5rem", fontFamily: "'DM Sans', sans-serif" }}>

      {/* Header */}
      <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
        <p style={{ fontSize: "0.7rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "#c97d4e", marginBottom: "0.75rem", fontWeight: 500 }}>
          Discover your perfect match
        </p>
        <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2.2rem, 5vw, 3.5rem)", fontWeight: 700, color: "#3d2b1f", lineHeight: 1.1, margin: 0 }}>
          Cat <em style={{ fontStyle: "italic", color: "#c97d4e" }}>Breeds</em>
        </h1>
      </div>

      {/* Grid */}
      <div style={{ maxWidth: "1100px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "1.75rem" }}>
        {breeds.map((breed) => (
          <div
            key={breed.id}
            onClick={() => navigate(`/breeds/${breed.id}`)}
            style={{ borderRadius: "20px", overflow: "hidden", background: "#fff", boxShadow: "0 8px 32px rgba(61,43,31,0.10)", cursor: "pointer", transition: "transform 0.3s ease, box-shadow 0.3s ease" }}
            onMouseEnter={function(e) {
              e.currentTarget.style.transform = "translateY(-6px)";
              e.currentTarget.style.boxShadow = "0 20px 48px rgba(61,43,31,0.18)";
            }}
            onMouseLeave={function(e) {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 8px 32px rgba(61,43,31,0.10)";
            }}
          >
            {/* Image */}
            <div style={{ position: "relative", height: "200px", background: "#f0e6de" }}>
              {breed.image?.url ? (
                <img
                  src={breed.image.url}
                  alt={breed.name}
                  style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                />
              ) : (
                <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "3rem" }}>🐱</div>
              )}
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, transparent 40%, rgba(61,43,31,0.45) 100%)" }} />
              <span style={{ position: "absolute", top: "14px", left: "14px", background: "#fdf8f2", color: "#c97d4e", fontSize: "0.7rem", fontWeight: 500, letterSpacing: "0.12em", textTransform: "uppercase", padding: "4px 12px", borderRadius: "999px" }}>
                {breed.origin}
              </span>
            </div>

            {/* Content */}
            <div style={{ padding: "1.4rem 1.5rem 1.6rem" }}>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.25rem", fontWeight: 700, color: "#3d2b1f", marginBottom: "0.4rem" }}>
                {breed.name}
              </h2>
              <p style={{ fontSize: "0.8rem", color: "#c97d4e", marginBottom: "0.6rem", fontWeight: 500 }}>
                {breed.temperament?.split(",").slice(0, 3).join(" · ")}
              </p>
              <p style={{ fontSize: "0.875rem", color: "#7a5c4a", lineHeight: 1.6, margin: 0, display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden" }}>
                {breed.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}