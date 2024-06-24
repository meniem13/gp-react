import React from "react";
import PickMeals from "../Assets/ph5.png";
import ChooseMeals from "../Assets/ph6.png";
import DeliveryMeals from "../Assets/ph7.png";
// import appApk from "../../public/installerV3.exe";
import appApk from "../";

const Work = () => {
  const workInfoData = [
    {
      image: DeliveryMeals,
      title: "Car",
      text: "This code controls a two-wheeled car via a mobile app with buttons for movement (forward, backward, left, right). It also offers a foundation for future expansion beyond basic controls",
    },
    {
      image: ChooseMeals,
      title: "Thermo",
      text: "Sensor-based Control & Mobile Monitoring: This code creates a sensor station that adapts to its environment. It uses sensors to monitor temperature and light, triggering a fan when needed. Real-time data is sent to a mobile app for remote monitoring. ",
    },
    {
      image: PickMeals,
      title: "Water Tank",
      text: "Automated Water Level Control: This code uses an ultrasonic sensor to measure water level in a 100 cm tank and controls a pump based on real-time data.",
    },
  ];
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Work</p>
        <h1 className="primary-heading">How It Works</h1>
        <p className="primary-text">
          The app generates ESP32-compatible code for IoT projects using LLMs.
          Users specify their needs, and the app produces ready-to-use code
          snippets. It also offers testing and validation features to ensure
          code reliability.
        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
