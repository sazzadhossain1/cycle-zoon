import React from "react";
import "./CustomerReviews.css";

const CustomerReviews = ({ review }) => {
  console.log(review);
  const { customer, description, img, name } = review;

  return (
    <div>
      <div className="review-single-div">
        <img
          src="https://149357172.v2.pressablecdn.com/wp-content/uploads/2017/07/star-rating-four-star.png"
          alt=""
        />
        <p className="description">{description}</p>
        <div className="review-flex-div">
          <img className="review-img" src={img} alt="" />
          <div>
            <h3 className="review-name">{name}</h3>
            <p className="review-customer">{customer}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerReviews;
