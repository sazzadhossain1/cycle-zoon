import React from "react";
import "./Home.css";
import Carousel from "../../Carousel/Carousel";
import Discover from "../../Discover/Discover";
import Features from "../../Features/Features";
import Gellery from "../../Gallery/Gellery";
import CustomerReviews from "../../CustomerReviews/CustomerReviews";
const Home = () => {
  return (
    <div>
      <Carousel></Carousel>
      <Discover></Discover>
      <Features></Features>
      <Gellery></Gellery>
      <CustomerReviews></CustomerReviews>
    </div>
  );
};

export default Home;
