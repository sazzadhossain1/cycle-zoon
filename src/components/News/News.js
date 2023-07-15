import React from "react";
import "./News.css";
import { useLoaderData } from "react-router-dom";
import NewsDetail from "../NewsDetails/NewsDetail";
import NewsRightSiteNav from "../NewsRightSiteNav/NewsRightSiteNav";

const News = () => {
  const newsData = useLoaderData();
  // console.log(newsData);
  return (
    <div>
      <div className="about-background-parent-div news-parent-div">
        <h1 className="shop-shop">News</h1>
      </div>

      <div className="news-grid-div">
        <div className="map-parent-div ">
          {newsData.map((data) => (
            <NewsDetail data={data} key={data.id}></NewsDetail>
          ))}
        </div>
        {/*  */}
        <NewsRightSiteNav></NewsRightSiteNav>
      </div>
    </div>
  );
};

export default News;
