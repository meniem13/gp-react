import React from "react";
import BannerBackground from "../Assets/home-banner-background.png";
import BannerImage from "../Assets/home-banner-image.png";
import Navbar from "./Navbar";
import { FiDownload } from "react-icons/fi";

const Home = () => {
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
            <a
              href="https://esp32-assistant-bucket.s3.eu-central-1.amazonaws.com/Website/app-release.apk"
              className="secondary-button"
              download
            >
              Download Apk <FiDownload className="button-icon" />
            </a>
            <a
              href="https://esp32-assistant-bucket.s3.eu-central-1.amazonaws.com/Website/installerV3.exe"
              className="secondary-button"
              download
            >
              Download Installer <FiDownload className="button-icon" />
            </a>
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
