export default function HomePage() {

  const cards = [
    {
      img: "/public/PepperBell.png",  
      title: "Beautiful Cats",
      description: "Discover the most adorable cats from around the world.",
    },
    {
      img: "/public/PepperBell.png",  
      title: "Explore Breeds",
      description: "Browse hundreds of unique cat breeds and their traits.",
    },
    {
      img: "/public/PepperBell.png",
      title: "Find Your Favorite",
      description: "Save and revisit the cats that steal your heart.",
    },
  ];

  
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-center">
        Welcome to the Cat World
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow hover:shadow-lg transition-shadow overflow-hidden"
          >
            <img
              src={card.img}
              alt={card.title}
              className="w-full h-48 object-cover"
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
 
