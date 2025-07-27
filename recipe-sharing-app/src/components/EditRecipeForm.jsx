import React from 'react';
import useRecipeStore from './recipeStore';

const EditRecipeForm = () => {
const editRecipe = useRecipeStore(state => state.editRecipe);
  return (
    <div>
      <h2>Edit Recipe</h2>
       <ul>
        {recipes.map((recipe, index) => (
          <li key={index}>
            <strong>{recipe.name}</strong>: {recipe.ingredients}{' '}
            <button onClick={() => setEditingRecipe(recipe)}>✏️ Edit</button>
            

            {/* Show the EditRecipeForm for the selected recipe */}
            {editRecipe?.name === recipe.name && (
              <EditRecipeForm
                recipe={editRecipe}
                onFinish={() => setEditingRecipe(null)}
              />
            )}
          </li>
        ))}
      </ul>
      </div>
    
  )
}

export default EditRecipeForm