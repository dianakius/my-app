import { Link } from "react-router-dom";

const steps = [
  {
    number: "01",
    title: "Browse Our Cats",
    description:
      "Explore our curated collection of cats from around the world. Filter by breed, age, or temperament to find your perfect match.",
    icon: "🐾",
  },
  {
    number: "02",
    title: "Explore Breeds",
    description:
      "Dive deep into breed profiles — learn about personality traits, care requirements, and what life with each breed really looks like.",
    icon: "📖",
  },
  {
    number: "03",
    title: "Submit an Adoption Request",
    description:
      "Found your match? Fill out our simple adoption form and tell us a little about yourself and your home.",
    icon: "✍️",
  },
  {
    number: "04",
    title: "We Get Back to You",
    description:
      "Our team reviews every request personally. We'll reach out within 48 hours to guide you through the next steps.",
    icon: "💌",
  },
  {
    number: "05",
    title: "Welcome Home",
    description:
      "Once approved, it's time to welcome your new companion. We'll support you through the transition every step of the way.",
    icon: "🏡",
  },
];

export default function HowItWorks() {
  return (
    <div className="bg-cream min-h-full py-20 px-6 font-sans">

      {/* Header */}
      <div className="text-center mb-20">
        <p className="text-[0.7rem] tracking-[0.18em] uppercase text-terracotta mb-3 font-medium">
          Simple & transparent
        </p>
        <h1
          className="font-serif font-bold text-brown leading-tight m-0"
          style={{ fontSize: "clamp(2.2rem, 5vw, 3.5rem)" }}
        >
          How it <em className="italic text-terracotta">Works</em>
        </h1>
        <p className="text-brown-mid text-base mt-4 mx-auto" style={{ maxWidth: "480px" }}>
          Adopting a cat should be joyful, not stressful. Here's exactly what to expect.
        </p>
      </div>

      {/* Steps */}
      <div className="max-w-[720px] mx-auto flex flex-col gap-6">
        {steps.map((step, i) => (
          <div
            key={i}
            className="bg-white rounded-[20px] border border-brown-border p-8 flex gap-6 items-start transition-all duration-300 group cursor-default"
            style={{ boxShadow: "0 4px 20px rgba(61,43,31,0.06)" }}
            onMouseEnter={function(e) {
              e.currentTarget.style.boxShadow = "0 12px 40px rgba(61,43,31,0.14)";
              e.currentTarget.style.transform = "translateY(-3px)";
            }}
            onMouseLeave={function(e) {
              e.currentTarget.style.boxShadow = "0 4px 20px rgba(61,43,31,0.06)";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            {/* Number */}
            <div className="flex-shrink-0 w-14 h-14 rounded-full bg-cream border border-brown-border flex items-center justify-center transition-all duration-300"
              style={{}}
              ref={null}
            >
              <span className="font-serif font-bold text-terracotta text-lg">
                {step.number}
              </span>
            </div>

            {/* Content */}
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-2xl">{step.icon}</span>
                <h2 className="font-serif text-xl font-bold text-brown m-0">
                  {step.title}
                </h2>
              </div>
              <p className="text-sm text-brown-mid leading-relaxed m-0">
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Divider */}
      <div className="flex items-center gap-4 max-w-[720px] mx-auto px-8 mt-16 mb-16">
        <div className="flex-1 h-px bg-brown-border" />
        <span className="text-terracotta text-xl">✦</span>
        <div className="flex-1 h-px bg-brown-border" />
      </div>

      {/* CTA */}
      <div className="text-center">
        <p className="text-brown-mid text-sm mb-6">Ready to find your perfect companion?</p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Link
            to="/cats"
            className="inline-block px-8 py-3 bg-brown text-cream rounded-full text-sm font-medium no-underline tracking-wide transition-colors duration-200"
            onMouseEnter={function(e) { e.currentTarget.style.background = "#c97d4e"; }}
            onMouseLeave={function(e) { e.currentTarget.style.background = "#3d2b1f"; }}
          >
            Browse Cats →
          </Link>
          <Link
            to="/adoption"
            className="inline-block px-8 py-3 bg-transparent text-brown rounded-full text-sm font-medium no-underline tracking-wide border border-brown-border transition-colors duration-200"
            onMouseEnter={function(e) {
              e.currentTarget.style.background = "#3d2b1f";
              e.currentTarget.style.color = "#fdf8f2";
            }}
            onMouseLeave={function(e) {
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.color = "#3d2b1f";
            }}
          >
            Start Adoption
          </Link>
        </div>
      </div>

    </div>
  );
}