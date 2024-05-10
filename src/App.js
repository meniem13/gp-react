import React from 'react';
import { Helmet } from 'react-helmet'; // Import Helmet
import './App.css';
import Hero from './hero'; // Import the Hero component
import Body from './body'; // Import the Body component

const App = () => {
  return (
    <div className="App bg-background">
      <Helmet>
        <title>Your App Title</title>
        <meta name="description" content="Description of your app.esp assistant to help in automate the hardware process with mobile app " />
        <meta name="keywords" content="esp, assistant, app" />
        <meta name="author" content="Your Name" />
        <meta property="og:title" content="Your App Title" />
        <meta property="og:description" content="Description of your app." />
        <meta property="og:image" content="URL_TO_YOUR_APP_IMAGE" />
        <meta property="og:url" content="https://esp-assistant.netlify.app/" />
        <meta property="og:type" content="website" />
      </Helmet>
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
