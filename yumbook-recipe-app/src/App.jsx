import { Route, Routes, Router } from 'react-router-dom'
import Search from './components/Search'
import './App.css'
import NavBar from './components/NavBar'
import Addrecipe from './components/Addrecipe'
import Favourites from './components/Favourites'
import Footer from './components/Footer'



function App() {
  

  return (
    <>
     <NavBar/>
        <Routes>
          <Route/>
        </Routes>
     <Search/>
     <Addrecipe/>
     <Favourites/>
     <Footer/>
    </>
  )
}

export default App
