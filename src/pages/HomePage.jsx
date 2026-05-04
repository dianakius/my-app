import { Link, useNavigate } from "react-router-dom";

const cards = [
  {
    img: "/PepperBell.png",
    title: "Beautiful Cats",
    description: "Discover the most adorable cats from around the world.",
    tag: "Featured",
  },
  {
    img: "/TabbyTongue.png",
    title: "Explore Breeds",
    description: "Browse hundreds of unique cat breeds and their traits.",
    tag: "Breeds",
    to:"/breeds",
  },
  {
    img: "/Grey.png",
    title: "Find Your Favorite",
    description: "Save and revisit the cats that steal your heart.",
    tag: "Favorites",
    position: "object-[50%_20%]",
  },
];

export default function HomePage() {
  const navigate = useNavigate();
  return (
    <div
      style={{
        fontFamily: "'DM Sans', sans-serif",
        background: "var(--cream, #fdf8f2)",
        minHeight: "100vh",
        color: "#3d2b1f",
      }}
    >
      {/* Hero */}
      <section
        style={{
          padding: "6rem 2rem 5rem",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Decorative blob */}
        <div
          style={{
            position: "absolute",
            top: "-80px",
            left: "50%",
            transform: "translateX(-50%)",
            width: "600px",
            height: "600px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, #f0d9c8 0%, transparent 70%)",
            opacity: 0.6,
            pointerEvents: "none",
          }}
        />

        <p
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "0.75rem",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "#c97d4e",
            marginBottom: "1.25rem",
            fontWeight: 500,
          }}
        >
          Welcome to Pawsome
        </p>

        <h1
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(2.8rem, 7vw, 5.5rem)",
            lineHeight: 1.1,
            fontWeight: 700,
            color: "#3d2b1f",
            marginBottom: "1.5rem",
            maxWidth: "700px",
            margin: "0 auto 1.5rem",
          }}
        >
          Discover the World <em style={{ fontStyle: "italic", color: "#c97d4e" }}>of Cats</em>
        </h1>

        <p
          style={{
            fontSize: "1.1rem",
            color: "#7a5c4a",
            maxWidth: "480px",
            margin: "0 auto 2.5rem",
            lineHeight: 1.7,
            fontWeight: 300,
          }}
        >
          Browse adorable cats, explore different breeds, and save your favorites.
        </p>

        <Link
          to="/cats"
          style={{
            display: "inline-block",
            padding: "0.85rem 2.5rem",
            background: "#3d2b1f",
            color: "#fdf8f2",
            borderRadius: "999px",
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "0.9rem",
            fontWeight: 500,
            letterSpacing: "0.05em",
            textDecoration: "none",
            transition: "background 0.2s, transform 0.2s",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "#c97d4e";
            e.currentTarget.style.transform = "translateY(-2px)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "#3d2b1f";
            e.currentTarget.style.transform = "translateY(0)";
          }}
        >
          Explore Cats →
        </Link>
      </section>

      {/* Divider */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "1rem",
          maxWidth: "900px",
          margin: "0 auto",
          padding: "0 2rem",
        }}
      >
        <div style={{ flex: 1, height: "1px", background: "#e8d8cc" }} />
        <span style={{ color: "#c97d4e", fontSize: "1.2rem" }}>✦</span>
        <div style={{ flex: 1, height: "1px", background: "#e8d8cc" }} />
      </div>

      {/* Cards */}
      <section
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "1.75rem",
          maxWidth: "1100px",
          margin: "4rem auto",
          padding: "0 2rem 4rem",
        }}
      >
        {cards.map((card, i) => (
          <div
            key={i}
            onClick={() => { if (card.to) navigate(card.to); }}
            style={{
              borderRadius: "20px",
              overflow: "hidden",
              background: "#fff",
              boxShadow: "0 8px 32px rgba(61,43,31,0.10)",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-6px)";
              e.currentTarget.style.boxShadow = "0 20px 48px rgba(61,43,31,0.18)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 8px 32px rgba(61,43,31,0.10)";
            }}
          >
            {/* Image with overlay */}
            <div style={{ position: "relative", height: "220px" }}>
              <img
                src={card.img}
                alt={card.title}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: card.position ?? "center",
                  display: "block",
                }}
              />
              {/* Gradient overlay */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(to bottom, transparent 40%, rgba(61,43,31,0.55) 100%)",
                }}
              />
              {/* Tag badge */}
              <span
                style={{
                  position: "absolute",
                  top: "14px",
                  left: "14px",
                  background: "#fdf8f2",
                  color: "#c97d4e",
                  fontSize: "0.7rem",
                  fontWeight: 500,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  padding: "4px 12px",
                  borderRadius: "999px",
                }}
              >
                {card.tag}
              </span>
            </div>

            {/* Content */}
            <div style={{ padding: "1.4rem 1.5rem 1.6rem" }}>
              <h2
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "1.35rem",
                  fontWeight: 700,
                  color: "#3d2b1f",
                  marginBottom: "0.5rem",
                  lineHeight: 1.25,
                }}
              >
                {card.title}
              </h2>
              <p
                style={{
                  fontSize: "0.9rem",
                  color: "#7a5c4a",
                  lineHeight: 1.65,
                  fontWeight: 300,
                  margin: 0,
                }}
              >
                {card.description}
              </p>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}