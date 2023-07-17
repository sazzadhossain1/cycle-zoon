import React, { useState } from "react";
import "./ShopDetails.css";

const ShopDetails = ({ data }) => {
  const getElement = document.querySelector("#color");
  console.log(getElement);
  //   console.log(data);
  const { img, price, description } = data;

  return (
    <div id="div">
      <div id="color" className="background">
        <img src={img} alt="" />
      </div>
    </div>
  );
};

export default ShopDetails;
