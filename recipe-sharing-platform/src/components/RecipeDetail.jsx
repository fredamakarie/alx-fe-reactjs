import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import data from "../data.json";

function RecipeDetail() {
  const { id } = useParams(); // gets the id from the URL
    const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    // Simulate fetching data
    const foundRecipe = data.find((item) => item.id === parseInt(id));
    setRecipe(foundRecipe);
  }, [id]); // re-run if the id changes

  if (!recipe) {
    return <p>Loading recipe...</p>;}

  

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-4">{recipe.title}</h1>
      <img
        src={recipe.image}
        alt={recipe.title}
        className="w-full max-w-md rounded-lg mb-4"
      />
      <h3>Ingredients</h3>
      <p className="max-w-xl">{recipe.ingredients}</p>

      <h4>Instructions</h4>
      <p className="max-w-xl">{recipe.instructions}</p>
    </div>
  );
}

export default RecipeDetail;
