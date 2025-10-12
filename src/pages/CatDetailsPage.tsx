import { useParams } from "react-router-dom";

export default function CatDetailsPage() {
  const { id } = useParams();
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Cat Details for ID: {id}</h1>
    </div>
  );
}
