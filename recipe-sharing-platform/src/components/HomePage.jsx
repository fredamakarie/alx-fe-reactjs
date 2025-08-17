import React, { useState, useEffect } from "react";
import data from "../data.json";
import { Link } from "react-router-dom";

function HomePage() {
  const [recipes, setRecipes] = useState(data);

  useEffect(() => {
    // Try to fetch updated data (e.g. from /public/data.json or an API)
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => setRecipes(data))
      .catch((err) => {
        console.error("Error loading data:", err);
        // If fetch fails, fallback to already loaded localData
      });
  }, []);

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 p-4 text-center">
      <h1 className="text-3xl font-bold mb-6">Share the Yum!</h1>
      
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-6xl">
        {recipes.map((recipe) => (
          <li
            key={recipe.id}
            className="bg-red-950 text-white p-4 rounded-lg shadow-md flex flex-col h-full"
          >
            <img
              src={recipe.image}
              alt={recipe.title}
              className="w-full h-48 object-cover rounded-lg mb-2"
            />
            <Link
              to={`/recipe/${recipe.id}`}
              className="block text-lg font-semibold bg-gray-300 text-red-950 hover:text-green-950 px-2 py-1 rounded"
            >
              {recipe.title}
            </Link>
            <p className="text-sm mt-2 flex-grow">{recipe.summary}</p>
            <button className="mt-4 bg-green-600 hover:bg-green-700 text-white py-1 px-3 rounded">
              View Recipe
            </button>
          </li>
        ))}
      </ul>

    </div>
  );
}

export default HomePage;
