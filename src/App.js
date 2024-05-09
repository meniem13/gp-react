import React from 'react';
import './App.css';
import Hero from './hero'; // Import the Hero component
import Body from './body'; // Import the Body component

const App = () => {
  return (
    <div className="App bg-background">
      <Hero />
      <Body />
    </div>
  );
};

export default App;
