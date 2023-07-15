import React from "react";
import { Link, useLoaderData } from "react-router-dom";
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
          <h3 className="title">{title}</h3>
          <p className="date">{date}</p>
          <p className="paragraphOne">{paragraphOne}</p>
          <p className="paragraphOne left-border">{paragraphTwo}</p>
          <p className="paragraphOne">{paragraphThree}</p>
          <div className="text-img-grid-div">
            <p className="paragraphOne">{paragraphFour}</p>
            <img className="smallImg" src={smallimg} alt="" />
          </div>
          <p className="paragraphOne">{paragraphFive}</p>
          <button className="newsBtn">
            <Link to="/news">Go Back To News</Link>
          </button>
        </div>
        <div className="right-div">
          <NewsRightSiteNav></NewsRightSiteNav>
        </div>
      </div>
    </div>
  );
};

export default NewsSeeMore;
