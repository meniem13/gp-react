import React from 'react';
import myImage from './car.png'

const Body = () => {
  return (
    <section className="body">
      <div className="body-content">
        <img src={myImage} alt="" />
        <p className="bg-blue-500 text-white p-4">
          This is the body content with an image beside it. You can replace
          this text with your own content.
        </p>
      </div>
    </section>
  );
};

export default Body;
