import useRecipeStore from '../stores/recipeStore';

  const RecipeList = () => {
    const filteredRecipes = useRecipeStore(state => state.filteredRecipes);

    return (
      <div>

      <h2>Recipe List</h2>
        {filteredRecipes.map(recipe => (
          <div key={recipe.id}>
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
            <Link to = "/RecipeDetails" style = {{color: "orange"}}> Recipe Details </Link>
          </div>
        ))}
      </div>
    );
  };
export default RecipeList;