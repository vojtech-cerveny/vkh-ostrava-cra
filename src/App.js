import React from 'react'
import './App.css'
import { Footer } from './sections/footer'
import { Header } from './sections/header'
import { VKHinString } from './sections/vkhInString'
import { AboutVKH } from './sections/aboutVKH'
import { Events } from './sections/events'
import { InstagramPanel } from './sections/instagramPanel'

function App() {
  return (
    <div className="App">
      <Header />
      <VKHinString />
      <AboutVKH />
      <Events />
      <InstagramPanel />
      <Footer />
    </div>
  )
}

export default App
