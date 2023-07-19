import React from "react";
import { useLoaderData } from "react-router-dom";

const AccessoriesDetails = () => {
  const getAccessoriesData = useLoaderData();
  console.log(getAccessoriesData);

  return (
    <div>
      <div className="about-background-parent-div">
        <h1 className="shop-shop">SHOP</h1>
      </div>
      <h1>This is AccessoriesDetails</h1>
    </div>
  );
};

export default AccessoriesDetails;
