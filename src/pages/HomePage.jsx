export default function HomePage() {
  const cards = [
    {
      img: "/public/PepperBell.png",
      title: "Beautiful Cats",
      description: "Discover the most adorable cats from around the world.",
    },
    {
      img: "/public/TabbyTongue.png",
      title: "Explore Breeds",
      description: "Browse hundreds of unique cat breeds and their traits.",
  
    },
    {
      img: "/public/Grey.png",
      title: "Find Your Favorite",
      description: "Save and revisit the cats that steal your heart.",
      position: "object-[50%_20%]",
    },
  ];

  return (
    <div className="p-6">
      <section className="text-center py-16">
        <h1 className="text-5xl font-bold mb-4">
          Discover the World of Cats 🐾
        </h1>

        <p className="text-gray-600 max-w-xl mx-auto mb-6">
          Browse adorable cats, explore different breeds, and save your favorites.
        </p>

        <Link
        to="/cats"
        className="bg-black text-white px-6 py-3 rounded-xl hover:bg-gray-800 transition">
          Explore Cats
        </Link>
      </section>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow hover:shadow-xl transition-all duration-300 overflow-hidden group"
          >
            <img
              src={card.img}
              alt={card.title}
              className={`w-full h-48 object-cover ${card.position || "object-center"} group-hover:scale-110 transition-transform duration-500`}
              
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{card.title}</h2>
              <p className="text-gray-600 text-sm">{card.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow hover:shadow-xl transition-all duration-300 overflow-hidden group"
          >
            <img
              src={card.img}
              alt={card.title}
              className={`w-full h-48 object-cover ${card.position || "object-center"} group-hover:scale-110 transition-transform duration-500`}
              
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{card.title}</h2>
              <p className="text-gray-600 text-sm">{card.description}</p>
            </div>
          </div>
        ))}
      </div><div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow hover:shadow-xl transition-all duration-300 overflow-hidden group"
          >
            <img
              src={card.img}
              alt={card.title}
              className={`w-full h-48 object-cover ${card.position || "object-center"} group-hover:scale-110 transition-transform duration-500`}
              
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{card.title}</h2>
              <p className="text-gray-600 text-sm">{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
