import React from "react";
import "./DiscoverDetailsPage.css";
import { useLoaderData } from "react-router-dom";

const DiscoverDetailsPage = () => {
  const singleData = useLoaderData();
  console.log(singleData);
  return (
    <div>
      <h1>This is discover Details Page</h1>
    </div>
  );
};

export default DiscoverDetailsPage;
