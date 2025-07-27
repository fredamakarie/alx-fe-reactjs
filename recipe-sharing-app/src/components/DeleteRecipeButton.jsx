import React from 'react'
import useRecipeStore from './recipeStore';
import { useNavigate } from 'react-router-dom';

function DeleteRecipeButton({ recipeName }) {
  const deleteRecipes = useRecipeStore((state) => state.deleteRecipes);
  const navigate = useNavigate();

  const handleDelete = () => {
    deleteRecipes(recipeName);
    navigate('/recipes'); // go back to list
  };

  return (
    <button onClick={handleDelete}>🗑️ Delete Recipe</button>
  );
}

export default DeleteRecipeButton;