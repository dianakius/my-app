
import { useParams, Link } from "react-router-dom";
import { cats } from "../data/Cats";

export default function CatDetailsPage() {
  const { id } = useParams<{ id: string }>();
  const cat = cats.find((c) => c.id === id);

  if (!cat) {
    return (
      <div className="p-6">
        <h1 className="text-2xl font-bold">Cat not found</h1>
        <p className="mt-2">We couldn't find a cat with id: {id}</p>
        <Link to="/cats" className="mt-4 inline-block hover:underline">Back to all cats</Link>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <div className="bg-white rounded-2xl shadow p-6 flex flex-col md:flex-row gap-6">
        <img src={cat.image} alt={cat.name} className="w-full md:w-64 h-64 object-cover rounded-xl" />

        <div>
          <h1 className="text-3xl font-bold">{cat.name}</h1>
          <p className="text-sm text-gray-500">{cat.breed} • {cat.age} years old</p>
          <p className="mt-4">{cat.bio}</p>

          <div className="mt-6">
            <Link to="/cats" className="hover:underline">← Back to cats</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
