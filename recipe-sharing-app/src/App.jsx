import AddRecipeForm from "./components/AddRecipeForm";
import RecipeList from "./components/RecipeList";
import RecipeDetails from "./components/RecipeDetails";
import "./App.css";
import SearchBar from "./components/SearchBar";
import { Routes, Route } from "react-router-dom";

function App() {
  return(
    <>
    <h1>Makarie Recipes</h1>
    <SearchBar/>
    <RecipeList/>
    <AddRecipeForm/>
   <Routes>
    <Route path="/RecipeDetails" element={<RecipeDetails/>} />
   </Routes>
    </>
  )
  
}

export default App;