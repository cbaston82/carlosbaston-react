import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Github from './components/Github';
import Contact from './components/Contact';
import ChuckNorris from './components/ChuckNorris';

const App = () => (
  <div className="App">
    <Navbar />
    <Hero />
    <About />
    <Github />
    <ChuckNorris />
    {/* <Youtube /> */}
    <Contact />
  </div>
);


export default App;
