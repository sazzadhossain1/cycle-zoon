import React from "react";
import "./Features.css";

const Features = () => {
  return (
    <div className="features-parent-div">
      <h1 className="features-heading">Features</h1>
      <div className="blank-div"></div>
      <div className="features-grid-div">
        <div>
          <div className="flex-div">
            <img
              className="features-img-logo"
              src="https://cdn-icons-png.flaticon.com/512/126/126472.png"
              alt=""
            />
            <p className="cart-p-header">All Weather Conditions</p>
          </div>
          <p className="features-paragraph">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
            aperiam reprehenderit non nemo!
          </p>
        </div>
        <div>
          <div className="flex-div">
            <img
              className="features-img-logo"
              src="https://cdn.iconscout.com/icon/free/png-512/free-low-battery-5-474981.png?f=avif&w=256"
              alt=""
            />
            <p className="cart-p-header">Supercharged Battery</p>
          </div>
          <p className="features-paragraph">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
            aperiam reprehenderit non nemo!
          </p>
        </div>
        <div>
          <div className="flex-div">
            <img
              className="features-img-logo"
              src="https://thumbs.dreamstime.com/b/settings-icon-gear-icon-vector-gear-symbol-illustration-web-sites-our-mobile-settings-icon-gear-icon-vector-gear-symbol-151065055.jpg"
              alt=""
            />
            <p className="cart-p-header">Nexxt-Gen CrankShaft</p>
          </div>
          <p className="features-paragraph">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
            aperiam reprehenderit non nemo!
          </p>
        </div>
        <div>
          <div className="flex-div">
            <img
              className="features-img-logo"
              src="https://static.vecteezy.com/system/resources/thumbnails/002/290/601/small/wifi-isolated-icon-black-flat-free-vector.jpg"
              alt=""
            />
            <p className="cart-p-header">GPS Tracking / Anti-Theft</p>
          </div>
          <p className="features-paragraph">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
            aperiam reprehenderit non nemo!
          </p>
        </div>
        <div>
          <div className="flex-div">
            <img
              className="features-img-logo"
              src="https://thumbs.dreamstime.com/b/circular-arrow-circle-arrow-icon-rotation-restart-twist-tur-turn-concept-button-royalty-free-vector-illustration-81814479.jpg"
              alt=""
            />
            <p className="cart-p-header ">Sustainable Practices</p>
          </div>
          <p className="features-paragraph ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
            aperiam reprehenderit non nemo!
          </p>
        </div>
        <div>
          <div className="flex-div">
            <img
              className="features-img-logo"
              src="https://img.uxwing.com/wp-content/themes/uxwing/download/hand-gestures/like-icon.svg"
              alt=""
            />
            <p className="cart-p-header ">Exceptional Support</p>
          </div>
          <p className="features-paragraph ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
            aperiam reprehenderit non nemo!
          </p>
        </div>
        <div className="blank"></div>
      </div>
    </div>
  );
};

export default Features;
