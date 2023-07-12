import React from "react";
import "./News.css";
import { useLoaderData } from "react-router-dom";
import NewsDetail from "../NewsDetails/NewsDetail";

const News = () => {
  const newsData = useLoaderData();
  // console.log(newsData);
  return (
    <div>
      <div className="about-background-parent-div">
        <h1 className="shop-shop">News</h1>
      </div>

      <div>
        <div>
          {newsData.map((data) => (
            <NewsDetail data={data} key={data.id}></NewsDetail>
          ))}
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default News;
