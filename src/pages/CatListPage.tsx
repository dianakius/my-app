import { Link } from "react-router-dom";
import { cats } from "../data/Cats";

export default function CatListPage() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold">All Cats</h1>

      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cats.map((cat) => (
          <li key={cat.id} className="bg-white rounded-2xl shadow p-4 flex items-center gap-4">
            <img
              src={cat.image}
              alt={cat.name}
              className="w-20 h-20 object-cover rounded-xl flex-shrink-0"
            />
            <div className="flex-1">
              <Link to={`/cats/${cat.id}`} className="text-lg font-semibold hover:underline text-blue-800">
                {cat.name}
              </Link>
              <p className="text-sm text-blue-500">{cat.breed} • {cat.age} yrs</p>
              <p className="mt-2 text-sm">{cat.bio}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}