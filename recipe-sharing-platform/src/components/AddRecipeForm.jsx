import { useState } from 'react';
import useRecipeStore  from './recipeStore';

  const AddRecipeForm = () => {
    const addRecipe = useRecipeStore(state => state.addRecipe);
    const [title, setTitle] = useState('');
    const [ingredients, setIngredients] = useState('');
    const [preparationsteps, setPreparationSteps] = useState('');

    const handleSubmit = (event) => {
      event.preventDefault();
      addRecipe({ id: Date.now(), title, ingredients, preparationsteps});
      setTitle('');
      setIngredients('');
      setPreparationSteps('');
    };

    return (
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
        />
        <textarea
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
          placeholder="Ingredients"
        />
        <textarea
          value={preparationsteps}
          onChange={(e) => setPreparationSteps(e.target.value)}
          placeholder="Preparation Steps"
        />
        <button type="submit">Add Recipe</button>
      </form>
    );
  };
  
  export default AddRecipeForm;
