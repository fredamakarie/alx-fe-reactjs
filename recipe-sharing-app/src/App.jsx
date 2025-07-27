import AddRecipeForm from "./components/AddRecipeForm";
import RecipeList from "./components/RecipeList";
import RecipeDetails from "./components/RecipeDetails";
import "./App.css";
import SearchBar from "./components/SearchBar";
import { Routes, Route, Link } from "react-router-dom";
import RecommendationsList from "./components/RecommendationsList";
import FavoritesList from "./components/FavoritesList";

function App() {
  return(
    <>
      <h1>Makarie Recipes</h1>
       <nav>
          <Link to="/">Home</Link> | <Link to="/recipes">Recipe List</Link>
        </nav>

      <h2>Add a recipe</h2>
      <AddRecipeForm/>
      <SearchBar/>
    <Routes>
      <Route path="/" element={<div>Welcome to the Recipe App! 🧑‍🍳</div>} />
      <Route path="/recipes" element={<RecipeList/>}/>
      <Route path="/recipe-details" element={<RecipeDetails/>}/>
    </Routes>
    
  

    </>
  )
  
}

export default App;