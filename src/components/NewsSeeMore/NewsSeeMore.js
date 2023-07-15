import React from "react";
import { useLoaderData } from "react-router-dom";
import NewsRightSiteNav from "../NewsRightSiteNav/NewsRightSiteNav";
import "./NewsSeeMore.css";

const NewsSeeMore = () => {
  const getSeeMoreData = useLoaderData();
  console.log(getSeeMoreData);

  const {
    img,
    title,
    date,
    paragraphOne,
    paragraphTwo,
    paragraphThree,
    paragraphFour,
    paragraphFive,
    paragraphSix,
    smallimg,
  } = getSeeMoreData;
  console.log(img);
  return (
    <div>
      <div className="about-background-parent-div newsSeeMore-parent-div">
        <h1 className="shop-shop">News</h1>
      </div>
      <div className="newsSeeMore-grid-div">
        <div className="text-img-div">
          <img src={img} alt="" />
        </div>
        <div className="right-div">
          <NewsRightSiteNav></NewsRightSiteNav>
        </div>
      </div>
    </div>
  );
};

export default NewsSeeMore;