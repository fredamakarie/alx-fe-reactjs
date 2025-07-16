import React from 'react'
import {Routes, Route, Router} from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Services from './components/Services'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './App.css'

function App() {

  return (
    <>
     <Navbar/>
       <Routes>
        <Route path = "/" element = {<Home />}/>
        <Route path = "/about" element = {<About />}/>
        <Route path = "/services" element = {<Services />}/>
        <Route path = "/contact" element = {<Contact />}/>
      </Routes>
     <Footer/>
    </>
  )
}

export default App
