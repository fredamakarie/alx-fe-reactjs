import React, { useState } from "react";

function RecipeForm() {
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [ingredientInput, setIngredientInput] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const [preparationsteps, setPreparationsteps] = useState("");
  const [errors, setErrors] = useState({});

  // Add ingredient to the list
  const addIngredient = () => {
    if (ingredientInput.trim()) {
      setIngredients([...ingredients, ingredientInput.trim()]);
      setIngredientInput("");
    }
  };

  // Validation
  const validate = () => {
    const newErrors = {};
    if (!title.trim()) newErrors.title = "Title is required";
    if (!summary.trim()) newErrors.summary = "Summary is required";
    if (ingredients.length < 2) newErrors.ingredients = "At least 2 ingredients are required";
    setErrors(newErrors);
    if (!preparationsteps.trim()) newErrors.preparationsteps = "Summary is required";
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert("Recipe submitted successfully ✅");
      // Reset form
      setTitle("");
      setSummary("");
      setIngredients([]);
      setIngredientInput("");
      setPreparationsteps("")
      setErrors({});
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 max-w-md mx-auto p-6 bg-white rounded-lg shadow"
    >
      <h2 className="text-2xl font-bold text-center">Add a Recipe</h2>

      {/* Title */}
      <div>
        <input
          type="text"
          placeholder="Recipe Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full border rounded p-2"
        />
        {errors.title && <p className="text-red-500 text-sm">{errors.title}</p>}
      </div>

      {/* Summary */}
      <div>
        <textarea
          placeholder="Recipe Summary"
          value={summary}
          onChange={(e) => setSummary(e.target.value)}
          className="w-full border rounded p-2"
        />
        {errors.summary && <p className="text-red-500 text-sm">{errors.summary}</p>}
      </div>

      {/* Ingredients */}
      <div>
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Add Ingredient"
            value={ingredientInput}
            onChange={(e) => setIngredientInput(e.target.value)}
            className="flex-1 border rounded p-2"
          />
          <button
            type="button"
            onClick={addIngredient}
            className="bg-blue-600 text-white px-3 rounded hover:bg-blue-700"
          >
            Add Recipe
          </button>
        </div>

        {/* Ingredient List */}
        <ul className="list-disc list-inside mt-2">
          {ingredients.map((ing, index) => (
            <li key={index} className="text-gray-700">{ing}</li>
          ))}
        </ul>

        {errors.ingredients && (
          <p className="text-red-500 text-sm">{errors.ingredients}</p>
        )}
      </div>

       {/* Preparation Steps */}
      <div>
        <textarea
          placeholder="Preparation Steps"
          value={preparationsteps}
          onChange={(e) => setPreparationsteps(e.target.value)}
          className="w-full border rounded p-2"
        />
        {errors.preparationsteps && <p className="text-red-500 text-sm">{errors.preparationsteps}</p>}
      </div>

      {/* Submit */}
      <button
        type="submit"
        className="bg-green-600 text-white py-2 rounded hover:bg-green-700"
      >
        Submit Recipe
      </button>
    </form>
  );
}

export default RecipeForm;
