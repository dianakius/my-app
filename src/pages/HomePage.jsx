import { Link } from "react-router-dom";
import { Box, Image, Heading, Text } from "@chakra-ui/react";

export default function HomePage() {
  const cards = [
    {
      img: "/PepperBell.png",
      title: "Beautiful Cats",
      description: "Discover the most adorable cats from around the world.",
    },
    {
      img: "/TabbyTongue.png",
      title: "Explore Breeds",
      description: "Browse hundreds of unique cat breeds and their traits.",
    },
    {
      img: "/Grey.png",
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
          Browse adorable cats, explore different breeds, and save your
          favorites.
        </p>

        <Link to="/cats" className="text-black hover:bg-blue-800 transition">
          Explore Cats
        </Link>
      </section>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.map((card, index) => (
          <Box
            key={index}
            maxW="sm"
            borderRadius="2xl"
            overflow="hidden"
            shadow="md"
            _hover={{ shadow: "xl", transform: "scale(1.03)" }}
            transition="all 0.3s"
          >
            <Image
              src={card.img}
              alt={card.title}
              height="200px"
              objectFit="cover"
            />
            <Box p={4}>
              <Heading size="md" mb={2}>
                {card.title}
              </Heading>
              <Text color="gray.600" fontSize="sm">
                {card.description}
              </Text>
            </Box>
          </Box>
        ))}
      </div>
    </div>
  );
}
