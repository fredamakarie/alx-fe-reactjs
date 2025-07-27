import React from 'react'
import useRecipeStore from './recipeStore';

const DeleteRecipeButton = () => {
    const deleteRecipes = useRecipeStore(state => state.deleteRecipes);
  return (
    <div>
        <button>Delete Recipe</button>
    </div>
  )
}

export default DeleteRecipeButton