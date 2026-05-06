import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faYoutube,
  faTwitter,
  faLinkedin,
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

function SocialLink({ icon, href }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-[#a08878] text-base transition-colors duration-200"
      onMouseEnter={function (e) {
        e.currentTarget.style.color = "#c97d4e";
      }}
      onMouseLeave={function (e) {
        e.currentTarget.style.color = "#a08878";
      }}
    >
      <FontAwesomeIcon icon={icon} />
    </a>
  );
}

function FooterLink({ label, to }) {
  return (
    <Link
      to={to}
      className="text-[#a08878] text-sm no-underline transition-colors duration-200"
      onMouseEnter={function (e) {
        e.currentTarget.style.color = "#fdf8f2";
      }}
      onMouseLeave={function (e) {
        e.currentTarget.style.color = "#a08878";
      }}
    >
      {label}
    </Link>
  );
}

export default function Footer() {
  return (
    <footer className="bg-[#2a1f17] text-[#e8d8cc] font-sans">
      <div className="border-b border-white/10">
        <div className="max-w-[1100px] mx-auto px-8 py-14 text-center">
          <p className="text-[0.7rem] tracking-[0.18em] uppercase text-terracotta mb-3 font-medium">
            Stay in the loop
          </p>
          <h2
            className="font-serif font-bold text-cream mb-2 leading-tight"
            style={{ fontSize: "clamp(1.4rem, 3vw, 2rem)" }}
          >
            Join the Cat World newsletter
          </h2>
          <p className="text-[#a08878] text-sm mb-7">
            Adorable cats, breed spotlights & adoption news. Unsubscribe
            anytime.
          </p>
          <div className="flex gap-3 justify-center flex-wrap">
            <input
              type="email"
              placeholder="your@email.com"
              className="px-5 py-2.5 rounded-full border border-white/20 bg-white/5 text-cream text-sm outline-none font-sans w-[260px]"
            />
            <button
              className="px-7 py-2.5 rounded-full bg-terracotta text-cream border-none text-sm font-medium cursor-pointer font-sans transition-colors duration-200"
              onMouseEnter={function (e) {
                e.currentTarget.style.background = "#fdf8f2";
                e.currentTarget.style.color = "#3d2b1f";
              }}
              onMouseLeave={function (e) {
                e.currentTarget.style.background = "#c97d4e";
                e.currentTarget.style.color = "#fdf8f2";
              }}
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-[1100px] mx-auto px-8 py-12">
        <div
          className="grid gap-8"
          style={{
            gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
          }}
        >
          {footerLinks.map(function (section) {
            return (
              <div key={section.heading}>
                <h3 className="text-[0.7rem] tracking-[0.15em] uppercase text-terracotta mb-4 font-medium">
                  {section.heading}
                </h3>
                <ul className="list-none p-0 m-0 flex flex-col gap-2.5">
                  {section.items.map(function (item) {
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

      <div className="border-t border-white/10">
        <div className="max-w-[1100px] mx-auto px-8 py-6 flex justify-between items-center flex-wrap gap-4">
          <Link
            to="/"
            className="font-serif text-xl font-bold text-cream no-underline"
          >
            Cat World <span className="text-terracotta">✦</span>
          </Link>
          <p className="text-xs text-[#6b5347] m-0">
            © {new Date().getFullYear()} Cat World. All rights reserved.
          </p>
          <div className="flex gap-5">
            {socials.map(function (s) {
              return <SocialLink key={s.href} icon={s.icon} href={s.href} />;
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}
