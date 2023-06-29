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
      <div className="customer-review-parent-div">
        <h3 className="testimonials">TESTIMONIALS</h3>
        <h2 className="reviews-heading">CUSTOMER REVIEWS</h2>
        {getData[0].Reviews.map((review) => (
          <CustomerReviews key={review.id} review={review}></CustomerReviews>
        ))}
      </div>
    </div>
  );
};

export default Home;
