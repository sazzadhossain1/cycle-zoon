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

      <div className="news-grid-div">
        <div>
          {newsData.map((data) => (
            <NewsDetail data={data} key={data.id}></NewsDetail>
          ))}
        </div>
        {/*  */}
        <div>
          <div>
            <h3 className="search">Search</h3>
            <div className="news-blank-div"></div>
            <input type="text" placeholder="Enter Keyword to search..." />
          </div>
          <div>
            <h2>RECENT NEWS</h2>
            <div></div>

            <div>
              <img
                className="newsLogo-img"
                src="https://w7.pngwing.com/pngs/669/871/png-transparent-document-book-page-line-book-text-paper-page.png"
                alt=""
              />
              <div>
                <p>DownHill: Taking Ride in Mountains</p>
                <p>JUly 5, 2017</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
