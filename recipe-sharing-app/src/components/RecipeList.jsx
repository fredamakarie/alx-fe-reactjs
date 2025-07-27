import useRecipeStore from './recipeStore';
import { Link } from 'react-router-dom';

  const RecipeList = () => {
    const recipes = useRecipeStore(state => state.recipes);
    const filteredRecipes = useRecipeStore(state => state.filteredRecipes);

    return (
      <div>
        <h2>Recipe List</h2>
        
          {recipes.map(recipe => (
            <div key={recipe.id}>
              <h3>{recipe.title}</h3>
              <p>{recipe.description}</p>
            </div>
          ))}
              
        {filteredRecipes.map(recipe => (
          <div key={recipe.id}>
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
            <Link to = "/recipe-details" style = {{color: "orange"}}> Recipe Details </Link>
          </div>
        ))}
      </div>
    );
  };
export default RecipeList;

