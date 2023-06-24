import React from "react";
import "./Gellery.css";

const Gellery = () => {
  return (
    <div className="gallery-parent-div">
      <h3 className="product">PRODUCT GALLERY</h3>
      <h1 className="gallery-cycle">
        Cycle Zz<span className="gallery-oo">Oo</span>N in Action
      </h1>

      <div className="gallery-grid-div">
        <img
          src="https://149357172.v2.pressablecdn.com/wp-content/uploads/2017/07/image-500x480.jpg"
          alt=""
        />
        <img
          src="https://149357172.v2.pressablecdn.com/wp-content/uploads/2017/07/image-6-500x480.jpg"
          alt=""
        />
        <img
          src="https://149357172.v2.pressablecdn.com/wp-content/uploads/2017/07/image-5-500x480.jpg"
          alt=""
        />
        <img
          src="https://149357172.v2.pressablecdn.com/wp-content/uploads/2017/07/image-3-500x480.jpg"
          alt=""
        />
        <img
          src="https://149357172.v2.pressablecdn.com/wp-content/uploads/2017/07/image-4-500x480.jpg"
          alt=""
        />
        <img
          src="https://149357172.v2.pressablecdn.com/wp-content/uploads/2017/07/image-tall-3-500x480.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default Gellery;
