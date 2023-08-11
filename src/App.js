import React from 'react';
import './App.css';
import Header from './component/Header';
import Hero from './component/Hero';
import Brands from './component/Brands';
import About from './component/About';
import Skills from './component/Skills';
import Portfolio from './component/Portfolio';
import Services from './component/Services';
import Testimonial from './component/Testimonial';
import Contact from './component/Contact';
import Footer from './component/Footer';
import BackToTop from './component/BackToTop';

function App() {
  return (
    <>
      <div>
      <Header/>
      <Hero/>
      <Brands/>
      <About/>
      <Skills/>
      <Portfolio/>
      <Services/>
      <Testimonial/>
      <Contact/>
      <Footer/>
      <BackToTop/>
      </div>
    </>
  );
}

export default App;
