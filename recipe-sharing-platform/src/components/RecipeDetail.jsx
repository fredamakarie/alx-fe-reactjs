import React from "react";
import { useParams } from "react-router-dom";
import data from "../data.json";

function RecipeDetail() {
  const { id } = useParams(); // gets the id from the URL
  const recipe = data.find((r) => r.id.toString() === id);

  if (!recipe) {
    return <h2 className="text-center mt-10">Recipe not found!</h2>;
  }

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-4">{recipe.title}</h1>
      <img
        src={recipe.image}
        alt={recipe.title}
        className="w-full max-w-md rounded-lg mb-4"
      />
      <p className="max-w-xl">{recipe.summary}</p>
    </div>
  );
}

export default RecipeDetail;
