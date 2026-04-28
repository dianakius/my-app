import { Link, useLocation } from "react-router-dom";

const links = [
  { to: "/", label: "Home" },
  { to: "/cats", label: "Cats" },
  { to: "/adoption", label: "Adopt" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const { pathname } = useLocation();

  return (
    <nav
      style={{
        background: "#fdf8f2",
        borderBottom: "1px solid #e8d8cc",
        padding: "0 2rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        height: "64px",
        fontFamily: "'DM Sans', sans-serif",
        position: "sticky",
        top: 0,
        zIndex: 100,
      }}
    >
      
      <Link
        to="/"
        style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: "1.3rem",
          fontWeight: 700,
          color: "#3d2b1f",
          textDecoration: "none",
          letterSpacing: "0.01em",
        }}
      >
        Cat World <span style={{ color: "#c97d4e" }}>✦</span>
      </Link>

      
      <div style={{ display: "flex", gap: "2rem", alignItems: "center" }}>
        {links.map(({ to, label }) => {
          const active = pathname === to;
          return (
            <Link
              key={to}
              to={to}
              style={{
                fontSize: "0.875rem",
                fontWeight: active ? 500 : 400,
                color: active ? "#c97d4e" : "#7a5c4a",
                textDecoration: "none",
                letterSpacing: "0.03em",
                borderBottom: active ? "1.5px solid #c97d4e" : "1.5px solid transparent",
                paddingBottom: "2px",
                transition: "color 0.2s, border-color 0.2s",
              }}
              onMouseEnter={(e) => {
                if (!active) e.currentTarget.style.color = "#3d2b1f";
              }}
              onMouseLeave={(e) => {
                if (!active) e.currentTarget.style.color = "#7a5c4a";
              }}
            >
              {label}
            </Link>
          );
        })}

        <Link
          to="/adoption"
          style={{
            fontSize: "0.8rem",
            fontWeight: 500,
            color: "#fdf8f2",
            background: "#c97d4e",
            padding: "0.45rem 1.2rem",
            borderRadius: "999px",
            textDecoration: "none",
            letterSpacing: "0.04em",
            transition: "background 0.2s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.background = "#3d2b1f")}
          onMouseLeave={(e) => (e.currentTarget.style.background = "#c97d4e")}
        >
          Adopt Now
        </Link>
      </div>
    </nav>
  );
}