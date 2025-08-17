import { Route, Routes, NavLink, BrowserRouter } from "react-router-dom";
import HomePage from "./components/HomePage";
import RecipeDetail from "./components/RecipeDetail";
import AddRecipeForm from "./components/AddRecipeForm"

function App() {
  return (
    <BrowserRouter>
    <div className="p-4">
      <nav className="mb-6 space-x-4">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-red-600 font-bold" : "text-gray-700"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/addrecipe"
          className={({ isActive }) =>
            isActive ? "text-red-600 font-bold" : "text-gray-700"
          }
        >
          Add Recipe
        </NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/recipe/:id" element={<RecipeDetail />} />
        <Route path="/addrecipe" element={<AddRecipeForm />} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
