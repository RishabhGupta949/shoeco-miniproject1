import React from "react";
import './Hero.css'

const Hero = () => {
  return (
    <>
      <div className="mainhero">

        <div className="herocontent">
          <h1 className="head">YOUR FEET DESERVE <br></br> THE BEST</h1>
          <p>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO <br></br>HELP YOU WITH OUR SHOES.YOUR FEET DESERVE<br></br> THE BEST AND WE’RE HERE TO HELP YOU WITH OUR <br></br>SHOES.</p>
          <div className="buttons">
            <button className="b1"> SHOP NOW</button>
            <button className="b2">CATEGORY</button>
          </div>
          <p>Also Available On</p>
          <div className="images">
            <img className="img1" src="flipkart.png" alt="" />
            <img className="img2" src="amazon.png" alt="" />
          </div>
        </div>


        <div className="heroimage">
            <img src="/shoe_image.png" alt="" />
        </div>

      </div>
    </>
  );
};

export default Hero;
