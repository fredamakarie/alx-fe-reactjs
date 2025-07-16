import { useState } from 'react'
import Header from './components/Header'
import WelcomeMessage from './components/WelcomeMessage'
import MainContent from './components/MainContent'
import UserProfile from './components/UserProfile'
import Footer from './components/Footer'
import Counter from './components/Counter'
import './App.css'

function App() {

  return (
    <>
      <Header />
      <WelcomeMessage />
      <Counter/>
      <MainContent />
      <UserProfile name="Alice" age="25" bio="Loves hiking and photography" />
      <Footer />
    </>
  )
}

export default App
