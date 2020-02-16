import React from 'react'
import './App.css'
import Footer from './sections/Footer'
import FirstSection from './sections/FirstSection'
import About from './sections/About'
import Quotes from './sections/Quotes'
import Instagram from './sections/Instagram'

import { Navbar } from './components/NavBar/Navbar'
import { Calendar } from './components/Calendar'

function App() {
  return (
    <div className="App">
      <Navbar />

      <FirstSection />
      <About />
      <Quotes />
      <Calendar />
      <Instagram />
      <Footer />
    </div>
  )
}

export default App
