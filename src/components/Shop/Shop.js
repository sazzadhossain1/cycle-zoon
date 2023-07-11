import React from "react";
import "./Shop.css";
import { useLoaderData } from "react-router-dom";

const Shop = () => {
  const shopData = useLoaderData();
  console.log(shopData);
  return (
    <div>
      <div className="about-background-parent-div">
        <h1 className="shop-shop">SHOP</h1>
      </div>
      <div>{shopData.map((data) => console.log(data))}</div>
    </div>
  );
};

export default Shop;
