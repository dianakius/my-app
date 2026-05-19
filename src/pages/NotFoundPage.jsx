import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div className="bg-cream min-h-[80vh] flex flex-col items-center justify-center font-sans px-6 text-center">
      <p
        className="font-serif font-bold text-brown-border leading-none mb-0"
        style={{ fontSize: "clamp(6rem, 20vw, 12rem)" }}
      >
        404
      </p>

      <div className="flex items-center gap-4 w-full max-w-[300px] my-6">
        <div className="flex-1 h-px bg-brown-border" />
        <span className="text-terracotta text-xl">✦</span>
        <div className="flex-1 h-px bg-brown-border" />
      </div>

      <p className="text-[0.7rem] tracking-[0.18em] uppercase text-terracotta mb-3 font-medium">
        Page not found
      </p>

      <h1
        className="font-serif font-bold text-brown leading-tight mb-4"
        style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)" }}
      >
        This cat ran away 🐱
      </h1>

      <p
        className="text-brown-mid text-sm leading-relaxed mb-10"
        style={{ maxWidth: "380px" }}
      >
        The page you're looking for doesn't exist or has been moved. Let's get
        you back on track.
      </p>

      <div className="flex gap-4 flex-wrap justify-center">
        <Link
          to="/"
          className="inline-block px-8 py-3 bg-brown text-cream rounded-full text-sm font-medium no-underline tracking-wide transition-colors duration-200"
          onMouseEnter={function (e) {
            e.currentTarget.style.background = "#c97d4e";
          }}
          onMouseLeave={function (e) {
            e.currentTarget.style.background = "#3d2b1f";
          }}
        >
          Back to Home
        </Link>
        <Link
          to="/cats"
          className="inline-block px-8 py-3 bg-transparent text-brown rounded-full text-sm font-medium no-underline tracking-wide border border-brown-border transition-colors duration-200"
          onMouseEnter={function (e) {
            e.currentTarget.style.background = "#3d2b1f";
            e.currentTarget.style.color = "#fdf8f2";
          }}
          onMouseLeave={function (e) {
            e.currentTarget.style.background = "transparent";
            e.currentTarget.style.color = "#3d2b1f";
          }}
        >
          Browse Cats
        </Link>
      </div>
    </div>
  );
}
