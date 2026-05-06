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
    to: "/breeds",
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
    <div className="font-sans bg-cream min-h-screen text-brown">
      <section className="px-8 pt-24 pb-20 text-center relative overflow-hidden">
        <div
          className="absolute left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full opacity-60 pointer-events-none"
          style={{
            top: "-80px",
            background: "radial-gradient(circle, #f0d9c8 0%, transparent 70%)",
          }}
        />

        <p className="font-sans text-xs tracking-[0.2em] uppercase text-terracotta mb-5 font-medium">
          Welcome to Pawsome
        </p>

        <h1
          className="font-serif font-bold text-brown leading-tight mx-auto mb-6"
          style={{ fontSize: "clamp(2.8rem, 7vw, 5.5rem)", maxWidth: "700px" }}
        >
          Discover the World <em className="italic text-terracotta">of Cats</em>
        </h1>

        <p
          className="text-lg text-brown-mid mx-auto mb-10 leading-relaxed font-light"
          style={{ maxWidth: "480px" }}
        >
          Browse adorable cats, explore different breeds, and save your
          favorites.
        </p>

        <Link
          to="/cats"
          className="inline-block px-10 py-3 bg-brown text-cream rounded-full font-sans text-sm font-medium tracking-wide no-underline transition-all duration-200"
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

      <div className="flex items-center gap-4 max-w-[900px] mx-auto px-8">
        <div className="flex-1 h-px bg-brown-border" />
        <span className="text-terracotta text-xl">✦</span>
        <div className="flex-1 h-px bg-brown-border" />
      </div>

      <section
        className="grid gap-7 max-w-[1100px] mx-auto mt-16 px-8 pb-16"
        style={{ gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))" }}
      >
        {cards.map((card, i) => (
          <div
            key={i}
            onClick={() => {
              if (card.to) navigate(card.to);
            }}
            className="rounded-[20px] overflow-hidden bg-white cursor-pointer transition-all duration-300"
            style={{ boxShadow: "0 8px 32px rgba(61,43,31,0.10)" }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-6px)";
              e.currentTarget.style.boxShadow =
                "0 20px 48px rgba(61,43,31,0.18)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow =
                "0 8px 32px rgba(61,43,31,0.10)";
            }}
          >
            <div className="relative h-[220px]">
              <img
                src={card.img}
                alt={card.title}
                className="w-full h-full object-cover block"
                style={{ objectPosition: card.position ?? "center" }}
              />

              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to bottom, transparent 40%, rgba(61,43,31,0.55) 100%)",
                }}
              />

              <span className="absolute top-3.5 left-3.5 bg-cream text-terracotta text-[0.7rem] font-medium tracking-[0.12em] uppercase px-3 py-1 rounded-full">
                {card.tag}
              </span>
            </div>

            <div className="px-6 py-5">
              <h2 className="font-serif text-[1.35rem] font-bold text-brown mb-2 leading-tight">
                {card.title}
              </h2>
              <p className="text-sm text-brown-mid leading-relaxed font-light m-0">
                {card.description}
              </p>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
