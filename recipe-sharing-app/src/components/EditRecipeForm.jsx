import React,{useState} from 'react';
import useRecipeStore from './recipeStore';

const EditRecipeForm = ({ recipe, onFinish }) => {
  const editRecipe = useRecipeStore(state => state.editRecipe);
  const [name, setTitle] = useState(recipe.title);
  const [ingredients, setIngredients] = useState(recipe.ingredients);

  const handleUpdate = (event) => {
    event.preventDefault();
    if (!name || !ingredients) return;
    editRecipe(recipe.name, { name, ingredients });
    onFinish(); // tell parent to close the form
  }
  return (
    <div>
      <h2>Edit Recipe</h2>
       <input
        placeholder="Recipe name"
        value={name}
        onChange={(e) => setTitle(e.target.value)}
      />
      <br />
      <input
        placeholder="Ingredients"
        value={ingredients}
        onChange={(e) => setIngredients(e.target.value)}
      />
      <br />
      <button onClick={handleUpdate}>✅ Update</button>
      <button onClick={onFinish}>❌ Cancel</button>
      </div>
    
  )
}

export default EditRecipeForm;