import React from 'react';
import './App.css';


const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
       <h1 className='text-5xl m-9 font-serif text-text'>Welcome to ESP Assistant!</h1>
        <button id="downloadButton" className='m-9'>Download Installer</button>
      </div>
    </section>
  );
};

export default Hero;
