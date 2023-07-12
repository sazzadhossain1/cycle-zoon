import React from "react";
import "./News.css";
import { Link, useLoaderData } from "react-router-dom";
import NewsDetail from "../NewsDetails/NewsDetail";

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
        <div className="">
          <div className="news-search-div">
            <h3 className="search">Search</h3>
            <div className="news-blank-div"></div>
            <div className="form-control">
              <div className="input-group">
                <input
                  type="text"
                  placeholder="Search…"
                  className="input input-bordered"
                />
                <button className="btn btn-square">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          {/*  */}
          <div className="recent-div">
            <h2 className="recent-news">RECENT NEWS</h2>
            <div className="news-blank-div"></div>

            <div className="recent-flex-parent-div">
              <div className="recent-flex-div">
                <img
                  className="newsLogo-img"
                  src="https://w7.pngwing.com/pngs/669/871/png-transparent-document-book-page-line-book-text-paper-page.png"
                  alt=""
                />
                <Link>
                  <p className="recent-link">
                    DownHill: Taking Ride in Mountains
                  </p>
                </Link>
              </div>
              <p className="recent-date">JUly 5, 2017</p>
              <div className="recent-blank-div"></div>
            </div>
            <div className="recent-flex-parent-div">
              <div className="recent-flex-div">
                <img
                  className="newsLogo-img"
                  src="https://w7.pngwing.com/pngs/669/871/png-transparent-document-book-page-line-book-text-paper-page.png"
                  alt=""
                />
                <Link>
                  <p className="recent-link">
                    DownHill: Taking Ride in Mountains
                  </p>
                </Link>
              </div>
              <p className="recent-date">JUly 5, 2017</p>
              <div className="recent-blank-div"></div>
            </div>
            <div className="recent-flex-parent-div">
              <div className="recent-flex-div">
                <img
                  className="newsLogo-img"
                  src="https://w7.pngwing.com/pngs/669/871/png-transparent-document-book-page-line-book-text-paper-page.png"
                  alt=""
                />
                <Link>
                  <p className="recent-link">
                    DownHill: Taking Ride in Mountains
                  </p>
                </Link>
              </div>
              <p className="recent-date">JUly 5, 2017</p>
              <div className="recent-blank-div"></div>
            </div>
            <div className="recent-flex-parent-div">
              <div className="recent-flex-div">
                <img
                  className="newsLogo-img"
                  src="https://w7.pngwing.com/pngs/669/871/png-transparent-document-book-page-line-book-text-paper-page.png"
                  alt=""
                />
                <Link>
                  <p className="recent-link">
                    DownHill: Taking Ride in Mountains
                  </p>
                </Link>
              </div>
              <p className="recent-date">JUly 5, 2017</p>
              <div className="recent-blank-div"></div>
            </div>
          </div>
          {/*  */}
          <div className="archives-parent-div">
            <h3>ARCHIVES</h3>
            <div className="news-blank-div"></div>

            <div className="archives-flex-div">
              <img
                className="arrow"
                src="https://icons.veryicon.com/png/o/commerce-shopping/online-retailers/arrow-right-32.png"
                alt=""
              />
              <p>July 2017</p>
              <p>1</p>
            </div>
            <div className="archives-flex-div">
              <img
                className="arrow"
                src="https://icons.veryicon.com/png/o/commerce-shopping/online-retailers/arrow-right-32.png"
                alt=""
              />
              <p>July 2017</p>
              <p>1</p>
            </div>
            <div className="archives-flex-div">
              <img
                className="arrow"
                src="https://icons.veryicon.com/png/o/commerce-shopping/online-retailers/arrow-right-32.png"
                alt=""
              />
              <p>July 2017</p>
              <p>1</p>
            </div>
            <div className="archives-flex-div">
              <img
                className="arrow"
                src="https://icons.veryicon.com/png/o/commerce-shopping/online-retailers/arrow-right-32.png"
                alt=""
              />
              <p>July 2017</p>
              <p>1</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
