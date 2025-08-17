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
      
      <ul className="flex flex-col gap-4 text-white bg-red-950 p-8 rounded-lg sm:max-w-xs mx-auto">
        {recipes.map((recipe) => (
          <li key={recipe.id} className="border-b border-red-700 pb-2 last:border-b-0">
            <img
              src={recipe.image}
              alt={recipe.title}
              className="w-full h-auto rounded-lg mb-2"
            />
            <Link to={`/recipe/${recipe.id}`}className="text-lg font-semibold bg-gray-300 text-red-950 hover:text-green-950 shadow:lg">{recipe.title}</Link>
            <p className="text-sm">{recipe.summary}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HomePage;
