import React from 'react'
import './App.css'
import { Footer } from './sections/footer'
import { FirstSection } from './newSections/FirstSection'
import { SecondSection } from './newSections/SecondSection'
import { ParallaxOne } from './newSections/ParallaxOne'
import { InstagramSection } from './newSections/InstagramSection'
import { Navbar } from './components/Navbar'

function App() {
  return (
    <div className="App">
      <Navbar />
      <FirstSection />
      <SecondSection />
      <ParallaxOne />

      <InstagramSection />
      <Footer />
    </div>
  )
}

export default App
