import React from 'react';
import './App.css';


const Hero = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = 'path/to/your/installer.exe'; // Update this path
    link.download = 'installer.exe'; // Filename for the download
    link.style.display = 'none';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };  
  return (
    <section className="hero">
      <div className="hero-content">
       <h1 className='text-5xl m-9 font-bold font-sans-serif  text-text'>Welcome to ESP Assistant!</h1>
        <button id="downloadButton" className='m-9 rounded-lg shadow-lg hover:bg-blue-500 hover:scale-110 transition duration-300' onClick={handleDownload}>Download Installer</button>
      </div>
    </section>
  );
};

export default Hero;
