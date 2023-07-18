import React from "react";
import "./Accessories.css";
import { Link } from "react-router-dom";

const Accessories = ({ shopApiData }) => {
  const { img, title, price } = shopApiData;
  console.log(img, title, price);

  return (
    <div className="accessories-div">
      <img className="accessories-img" src={img} alt="" />
      <div className="accessories-text-dvi">
        <h3 className="accessories-title">{title}</h3>
        <p className="accessories-price">{price}</p>
        <button className="accessories-btn">
          <Link>Select Options</Link>
        </button>
      </div>
    </div>
  );
};

export default Accessories;
