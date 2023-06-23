import React from "react";
import "./Home.css";
import Carousel from "../../Carousel/Carousel";
import Discover from "../../Discover/Discover";
import Features from "../../Features/Features";
const Home = () => {
  return (
    <div>
      <Carousel></Carousel>
      <Discover></Discover>
      <Features></Features>
    </div>
  );
};

export default Home;
