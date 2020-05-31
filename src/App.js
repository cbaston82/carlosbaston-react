import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Github from './components/Github';
import Contact from './components/Contact';
import ChuckNorris from './components/ChuckNorris';
import Knowledge from './components/knowledge';
import Testimonials from './components/Testimonials';

const App = () => (
  <div className="App">
    <Navbar/>
    <Hero/>
    <About/>
    <Knowledge/>
    <Github/>
    {/*<Testimonials/>*/}
    <Contact/>
    <ChuckNorris/>
      {/* <Youtube /> */}
  </div>
);


export default App;
