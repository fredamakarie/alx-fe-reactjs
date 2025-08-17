import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <>
        <img src="" alt="" className=''/>
        <ul>
            <li><NavLink to="/" element="">Home</NavLink></li>
            <li><NavLink to="/recipemaker">Recipe Maker</NavLink></li>
            <li><NavLink to="/allrecipes">All Recipes</NavLink></li>
        </ul>
        <button>Log In/Sign Up</button>
    </>
  )
}

export default NavBar