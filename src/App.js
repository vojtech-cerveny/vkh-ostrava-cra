import React from 'react'
import './App.css'
import { Footer } from './sections/footer'
import { FirstSection } from './newSections/FirstSection'
import { SecondSection } from './newSections/SecondSection'
import { ParallaxOne } from './newSections/ParallaxOne'
import { InstagramSection } from './newSections/InstagramSection'

function App() {
  return (
    <div className="App">
      <FirstSection />
      <ParallaxOne />
      <SecondSection />
      <InstagramSection />
      <Footer />
    </div>
  )
}

export default App
