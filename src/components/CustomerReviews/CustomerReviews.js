import React from "react";
import "./CustomerReviews.css";

const CustomerReviews = ({ review }) => {
  console.log(review);
  const { customer, description, img, name } = review;

  return (
    <div>
      <div>
        <img
          src="https://149357172.v2.pressablecdn.com/wp-content/uploads/2017/07/star-rating-four-star.png"
          alt=""
        />
        <p>{description}</p>
        <div>
          <img src={img} alt="" />
          <div>
            <h3>{name}</h3>
            <p>{customer}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerReviews;
