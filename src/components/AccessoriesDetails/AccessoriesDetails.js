import React from "react";
import { useLoaderData } from "react-router-dom";
import "./AccessoriesDetails.css";

const AccessoriesDetails = () => {
  const getAccessoriesData = useLoaderData();
  const { title, img, price, description } = getAccessoriesData;

  console.log(title, img, price, description);
  return (
    <div>
      <div className="about-background-parent-div">
        <h1 className="shop-shop">SHOP</h1>
      </div>
      <div className="accessories-grid-div">
        <img src={img} alt="" />
        <div className="accessories-text-div">
          <h3 className="accessories-title">{title}</h3>
          <p className="accessories-description">{description}</p>
          <p className="accessories-price">{price}</p>
        </div>
      </div>
    </div>
  );
};

export default AccessoriesDetails;
