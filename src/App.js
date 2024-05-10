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
// document.getElementById('downloadButton').addEventListener('click', function() {
//   var link = document.createElement('a');
//   link.href = 'path/to/your/installer.exe'; // Update this path
//   link.download = 'installer.exe'; // Filename for the download
//   link.style.display = 'none';
//   document.body.appendChild(link);
//   link.click();
//   document.body.removeChild(link);
// });
