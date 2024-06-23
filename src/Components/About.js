import React from "react";
import AboutBackground from "../Assets/about-background.png";
import AboutBackgroundImage from "../Assets/about-background-image.png";
import PlaceholderImage1 from "../Assets/ph5.png"; // Add your placeholder images
import { BsFillPlayCircleFill } from "react-icons/bs";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import the carousel styles
import { Carousel } from "react-responsive-carousel";

const About = () => {
  return (
    <div className="about-section-container">
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="" className="background-image" />
      </div>
      <div className="about-section-content">
        <div className="carousel-container">
          <Carousel
            showArrows={true}
            showThumbs={false}
            infiniteLoop={true}
            autoPlay={true}
          >
            <div className="carousel-item">
              <img
                src={AboutBackgroundImage}
                alt="About Background"
                className="carousel-image"
              />
            </div>
            <div className="carousel-item">
              <img
                src={PlaceholderImage1}
                alt="Placeholder 1"
                className="carousel-image"
              />
            </div>
          </Carousel>
        </div>
        <div className="text-center">
          <p className="primary-subheading">About</p>
          <h1 className="primary-heading">
            Food Is An Important Part Of A Balanced Diet
          </h1>
          <p className="primary-text">
            Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et
            elit. Dolor turpis molestie dui magnis facilisis at fringilla quam.
          </p>
          <p className="primary-text">
            Non tincidunt magna non et elit. Dolor turpis molestie dui magnis
            facilisis at fringilla quam.
          </p>
          <div className="about-buttons-container">
            <button className="secondary-button">Learn More</button>
            <button className="watch-video-button">
              <BsFillPlayCircleFill /> Watch Video
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
