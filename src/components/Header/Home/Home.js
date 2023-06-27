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
      <div>
        <div className="discover-child-parent-div">
          <div>
            <h3 className="easily">EASILY CUSTOMIZABLE</h3>
            <h1 className="discover">Discover The Cycle ZzOon</h1>
          </div>
        </div>
        <div className="discover-grid-div">
          {getData.map((data) => (
            <Discover data={data} key={data.id}></Discover>
          ))}
        </div>
      </div>

      <Features></Features>
      <Gellery></Gellery>
      <CustomerReviews></CustomerReviews>
    </div>
  );
};

export default Home;
