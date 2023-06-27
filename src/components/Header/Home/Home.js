import React from "react";
import "./Home.css";
import Carousel from "../../Carousel/Carousel";
import Discover from "../../Discover/Discover";
import Features from "../../Features/Features";
import Gellery from "../../Gallery/Gellery";
import CustomerReviews from "../../CustomerReviews/CustomerReviews";
import { useLoaderData } from "react-router-dom";
const Home = () => {
  const getData = useLoaderData();
  console.log(getData);
  return (
    <div>
      <Carousel></Carousel>
      {getData.map((data) => (
        <Discover data={data} key={data.id}></Discover>
      ))}

      <Features></Features>
      <Gellery></Gellery>
      <CustomerReviews></CustomerReviews>
    </div>
  );
};

export default Home;
