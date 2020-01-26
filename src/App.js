import React from 'react'
import './App.css'
import { Footer } from './sections/Footer'
import { FirstSection } from './sections/FirstSection'
import { SecondSection } from './sections/SecondSection'
import { ParallaxOne } from './sections/ParallaxOne'
import { Instagram } from './sections/Instagram'
import { Navbar } from './components/Navbar'
import { Calendar } from './components/Calendar'

function App() {
  return (
    <div className="App">
      <Navbar />

      <FirstSection />
      <SecondSection />
      <ParallaxOne />
      <Calendar />
      <Instagram />
      <Footer />
    </div>
  )
}

export default App
