import DeleteRecipeButton from './DeleteRecipeButton';
import EditRecipeForm from './EditRecipeForm';
import useRecipeStore from './recipeStore';

  const RecipeDetail = ({ recipeId }) => {
    const recipe = useRecipeStore(state =>
      state.recipes.find(recipe => recipe.id === recipeId)
    );

    return (
      <div>
        <h1>{recipe.title}</h1>
        <p>{recipe.ingredients}</p>
        <p>{recipe.description}</p>
        <DeleteRecipeButton/>
        <EditRecipeForm/>
      </div>
    );
  };

  export default RecipeDetail;