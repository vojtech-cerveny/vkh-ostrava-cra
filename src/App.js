import React from 'react';
import './App.css';
import { Footer } from './components/footer';
import { Header } from './components/header';
import { VKHinString } from './components/vkhInString';
import { AboutVKH } from './components/aboutVKH';
import { Events } from './components/events';
import { InstagramPanel } from './components/instagramPanel';

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
    
  );
}

export default App;
