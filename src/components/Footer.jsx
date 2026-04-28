import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF, faInstagram, faYoutube, faTwitter, faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const footerLinks = [
  {
    heading: "About Us",
    items: [
      { label: "How it works", to: "/signup" },
      { label: "Testimonials", to: "/" },
    ],
  },
  {
    heading: "Contact",
    items: [
      { label: "Contact", to: "/contact" },
      { label: "Support", to: "/" },
    ],
  },
  {
    heading: "Services",
    items: [
      { label: "Browse Cats", to: "/cats" },
      { label: "Adopt a Cat", to: "/adoption" },
      { label: "Cat Care Tips", to: "/" },
    ],
  },
];

const socials = [
  { icon: faInstagram, href: "https://instagram.com" },
  { icon: faFacebookF, href: "https://facebook.com" },
  { icon: faYoutube, href: "https://youtube.com" },
  { icon: faTwitter, href: "https://twitter.com" },
  { icon: faLinkedin, href: "https://linkedin.com" },
];

const inner = {
  maxWidth: "1100px",
  margin: "0 auto",
  padding: "0 2rem",
};

function SocialLink({ icon, href }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      style={{ color: "#a08878", fontSize: "0.95rem" }}
      onMouseEnter={function(e) { e.currentTarget.style.color = "#c97d4e"; }}
      onMouseLeave={function(e) { e.currentTarget.style.color = "#a08878"; }}
    >
      <FontAwesomeIcon icon={icon} />
    </a>
  );
}

function FooterLink({ label, to }) {
  return (
    <Link
      to={to}
      style={{ color: "#a08878", fontSize: "0.875rem", textDecoration: "none" }}
      onMouseEnter={function(e) { e.currentTarget.style.color = "#fdf8f2"; }}
      onMouseLeave={function(e) { e.currentTarget.style.color = "#a08878"; }}
    >
      {label}
    </Link>
  );
}

export default function Footer() {
  return (
    <footer style={{ background: "#2a1f17", color: "#e8d8cc", fontFamily: "'DM Sans', sans-serif" }}>

      {/* Newsletter */}
      <div style={{ borderBottom: "1px solid rgba(232,216,204,0.12)" }}>
        <div style={{ ...inner, padding: "3.5rem 2rem", textAlign: "center" }}>
          <p style={{ fontSize: "0.7rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "#c97d4e", marginBottom: "0.75rem", fontWeight: 500 }}>
            Stay in the loop
          </p>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.4rem, 3vw, 2rem)", fontWeight: 700, color: "#fdf8f2", marginBottom: "0.5rem", lineHeight: 1.25 }}>
            Join the Cat World newsletter
          </h2>
          <p style={{ color: "#a08878", fontSize: "0.875rem", marginBottom: "1.75rem" }}>
            Adorable cats, breed spotlights & adoption news. Unsubscribe anytime.
          </p>
          <div style={{ display: "flex", gap: "0.75rem", justifyContent: "center", flexWrap: "wrap" }}>
            <input
              type="email"
              placeholder="your@email.com"
              style={{
                padding: "0.7rem 1.25rem",
                borderRadius: "999px",
                border: "1px solid rgba(232,216,204,0.2)",
                background: "rgba(255,255,255,0.06)",
                color: "#fdf8f2",
                fontSize: "0.875rem",
                outline: "none",
                width: "260px",
                fontFamily: "'DM Sans', sans-serif",
              }}
            />
            <button
              style={{
                padding: "0.7rem 1.75rem",
                borderRadius: "999px",
                background: "#c97d4e",
                color: "#fdf8f2",
                border: "none",
                fontSize: "0.875rem",
                fontWeight: 500,
                cursor: "pointer",
                fontFamily: "'DM Sans', sans-serif",
              }}
              onMouseEnter={function(e) {
                e.currentTarget.style.background = "#fdf8f2";
                e.currentTarget.style.color = "#3d2b1f";
              }}
              onMouseLeave={function(e) {
                e.currentTarget.style.background = "#c97d4e";
                e.currentTarget.style.color = "#fdf8f2";
              }}
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Links grid */}
      <div style={{ ...inner, padding: "3rem 2rem" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))", gap: "2rem" }}>
          {footerLinks.map(function(section) {
            return (
              <div key={section.heading}>
                <h3 style={{ fontSize: "0.7rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#c97d4e", marginBottom: "1rem", fontWeight: 500 }}>
                  {section.heading}
                </h3>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.6rem" }}>
                  {section.items.map(function(item) {
                    return (
                      <li key={item.label}>
                        <FooterLink label={item.label} to={item.to} />
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: "1px solid rgba(232,216,204,0.12)" }}>
        <div style={{ ...inner, padding: "1.5rem 2rem", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1rem" }}>
          <Link to="/" style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.2rem", fontWeight: 700, color: "#fdf8f2", textDecoration: "none" }}>
            Cat World <span style={{ color: "#c97d4e" }}>✦</span>
          </Link>

          <p style={{ fontSize: "0.75rem", color: "#6b5347", margin: 0 }}>
            © {new Date().getFullYear()} Cat World. All rights reserved.
          </p>

          <div style={{ display: "flex", gap: "1.25rem" }}>
            {socials.map(function(s) {
              return <SocialLink key={s.href} icon={s.icon} href={s.href} />;
            })}
          </div>
        </div>
      </div>

    </footer>
  );
}