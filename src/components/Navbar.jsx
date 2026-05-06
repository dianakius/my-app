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
    <nav className="bg-cream border-b border-brown-border px-8 flex items-center justify-between h-16 font-sans sticky top-0 z-50">

      <Link to="/" className="font-serif text-[1.3rem] font-bold text-brown no-underline tracking-tight">
        Cat World <span className="text-terracotta">✦</span>
      </Link>

      <div className="flex gap-8 items-center">
        {links.map(({ to, label }) => {
          const active = pathname === to;
          return (
            <Link
              key={to}
              to={to}
              className="text-sm no-underline tracking-wide transition-colors duration-200"
              style={{
                fontWeight: active ? 500 : 400,
                color: active ? "#c97d4e" : "#7a5c4a",
                borderBottom: active ? "1.5px solid #c97d4e" : "1.5px solid transparent",
                paddingBottom: "2px",
              }}
              onMouseEnter={(e) => { if (!active) e.currentTarget.style.color = "#3d2b1f"; }}
              onMouseLeave={(e) => { if (!active) e.currentTarget.style.color = "#7a5c4a"; }}
            >
              {label}
            </Link>
          );
        })}

        <Link
          to="/adoption"
          className="text-[0.8rem] font-medium text-cream bg-terracotta px-5 py-2 rounded-full no-underline tracking-wide transition-colors duration-200"
          onMouseEnter={(e) => (e.currentTarget.style.background = "#3d2b1f")}
          onMouseLeave={(e) => (e.currentTarget.style.background = "#c97d4e")}
        >
          Adopt Now
        </Link>
      </div>
    </nav>
  );
}