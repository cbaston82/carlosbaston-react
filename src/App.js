import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Github from './components/Github';
import Contact from './components/Contact';
import Knowledge from './components/knowledge';

const App = () => (
  <div className="App">
    <Navbar />
    <Hero />
    <About />
    <Knowledge />
    <Contact />
  </div>
);

export default App;
