import './App.css';
import React from 'react';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Hero from './Components/Hero/Hero';
import Products from './Components/Products/Products';
import WCU from './Components/WhyChooseUs/WCU';
import GITouch from './Components/GetInTouch/GITouch';
import FAQ from './Components/FAQ/FAQ';


function App() {
  return (
    <div className="app">
      <Header/>
      <hr/>
      <Hero/>
      <Products/>
      <WCU/>
      <GITouch/>
      <FAQ/>
      <Footer/>
    </div>
  );
}

export default App;
