import React from 'react'
import useRecipeStore from './recipeStore';

const DeleteRecipeButton = () => {
    const deleteRecipes = useRecipeStore(state => state.deleteRecipes);
  return (
    <div>
        <button onClick={() => deleteRecipes(recipe.name)}>❌ Remove</button>
    </div>
  )
}

export default DeleteRecipeButton