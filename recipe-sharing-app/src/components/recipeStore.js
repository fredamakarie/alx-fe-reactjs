import {create} from 'zustand';

const useRecipeStore = create(set => ({

  recipes: [],
  addRecipe: (newRecipe) => set(state => ({ recipes: [...state.recipes, newRecipe] })),
  setRecipes: (recipes) => set({ recipes }),

  searchTerm: '',
  setSearchTerm: (term) => set({ searchTerm: term }),

  filteredRecipes: [],
  filterRecipes: () => set(state => ({
    filteredRecipes: state.recipes.filter(recipe =>
      recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase()))
  })), //to update recipes


  deleteRecipes:(recipeId) => set(state =>({
    deleteRecipes: state.recipes.filter((r) => r.name !== recipeId)
  })),  


  editRecipe: (oldName, updateRecipe) =>
    set((state) => ({
      recipes: state.recipes.map((recipe) =>
        recipe.name === oldName ? updateRecipe : recipe)
    })),

  favorites: [],  
  addFavorite: (recipeId) => set(state => ({ favorites: [...state.favorites, recipeId] })),
  removeFavorite: (recipeId) => set(state => ({
    favorites: state.favorites.filter(id => id !== recipeId)
  })),


  recommendations: [],
  generateRecommendations: () => set(state => {
    // Mock implementation based on favorites
    const recommended = state.recipes.filter(recipe =>
      state.favorites.includes(recipe.id) && Math.random() > 0.5
    );
    return { recommendations: recommended };
  }),


}));

export default useRecipeStore;

