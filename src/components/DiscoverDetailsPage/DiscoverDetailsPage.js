import React from "react";
import "./DiscoverDetailsPage.css";
import { useLoaderData } from "react-router-dom";

const DiscoverDetailsPage = () => {
  const singleData = useLoaderData();
  console.log(singleData);
  return (
    <div>
      <div className="discoverDetailsPage-backGround-Photo-div">
        <h2 className="shop">SHOP</h2>
      </div>
    </div>
  );
};

export default DiscoverDetailsPage;
