import React from "react";
import BannerBackground from "../Assets/home-banner-background.png";
import BannerImage from "../Assets/home-banner-image.png";
import Navbar from "./Navbar";
import { FiDownload } from "react-icons/fi";

const Home = () => {
  const handleDownload = (fileType) => {
    const link = document.createElement("a");
    if (fileType === "apk") {
      link.href = "../installerV3.apk"; // Update this path to the correct APK file path
      link.download = "installerV3.apk"; // Filename for the APK download
    } else if (fileType === "installer") {
      link.href = "../app-release.apk"; // Update this path to the correct installer file path
      link.download = "app-release.apk"; // Filename for the installer download
    }
    link.style.display = "none";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  const handleClick = () => {
    const apkUrl = "../installerV3.exe";
    const link = document.createElement("a");
    link.href = apkUrl;
    link.download = "k.name";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="home-container">
      <Navbar />
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="Banner Background" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
            Simple Control, Limitless Possibilities
          </h1>
          <p className="primary-text">
            Bring your IoT ideas to life in a snap with ESP. Our user-friendly
            app takes the complexity out of programming, letting you control
            your connected devices without writing a single line of code. Get
            started quickly and unleash the potential of your smart assistant –
            all with the ease of a few taps.
          </p>
          <div className="button-container">
            <button
              className="secondary-button"
              onClick={() => handleDownload("apk")}
            >
              Download Apk <FiDownload className="button-icon" />
            </button>
            <button
              className="secondary-button"
              onClick={() => handleDownload("installer")}
            >
              Download Installer <FiDownload className="button-icon" />
            </button>
          </div>
        </div>
        <div className="home-image-section">
          <img src={BannerImage} alt="Banner" />
        </div>
      </div>
    </div>
  );
};

export default Home;
