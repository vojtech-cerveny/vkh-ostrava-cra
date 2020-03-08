import React from 'react'
import './App.css'
import { Switch, Route } from 'react-router-dom'

import Footer from './sections/Footer'
import FirstSection from './sections/FirstSection'
import About from './sections/About'
import Quotes from './sections/Quotes'
import Instagram from './sections/Instagram'
import WordpressPage from './pages/WordpressPage'
import { Navbar } from './components/NavBar/Navbar'
import { Calendar } from './components/Calendar'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path="/rada">
          <WordpressPage id={12} />
        </Route>
        <Route path="/duchovni-zivot-v-ostrave">
          <WordpressPage id={25} />
        </Route>
        <Route path="/kontakt">
          <WordpressPage id={27} />
        </Route>
        <Route path="/vkh-v-cr">
          <WordpressPage id={30} />
        </Route>
        <Route path="/">
          <FirstSection />
          <About />
          <Quotes />
          <Calendar />
          <Instagram />
          <Footer />
        </Route>
      </Switch>
    </div>
  )
}

export default App
