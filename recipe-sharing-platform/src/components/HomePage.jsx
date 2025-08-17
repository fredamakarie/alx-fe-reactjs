import React, { useState } from "react";
import data from "../data.json";

function HomePage() {
  const [recipes, setRecipes] = useState(data);

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
            <h2 className="text-lg font-semibold">{recipe.title}</h2>
            <p className="text-sm">{recipe.summary}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HomePage;
