import React from "react";
import "./Carousel.css";
import { Link } from "react-router-dom";

const Carousel = () => {
  return (
    <div>
      <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full">
          <img
            alt=""
            src="https://onzo.progressionstudios.com/wp-content/uploads/2017/07/slide-1.jpg"
            className="w-full carousel-img"
          />
          <div className="carousel-text-parent-div absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle p">
              ❮
            </a>
            <div className="carousel-text">
              <h3 className="lightest">Lightest Gets Lighter</h3>
              <h2 className="all-new">ALL-NEW CYCLE ZzOoN PRO</h2>
              <button className="learn-more">
                <Link>Learn more</Link>
              </button>
            </div>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img
            alt=""
            src="https://onzo.progressionstudios.com/wp-content/uploads/2017/07/slide-2.jpg"
            className="w-full carousel-img"
          />
          <div className="carousel-text-parent-div absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <div className="carousel-text">
              <h3 className="lightest">Lightest Gets Lighter</h3>
              <h2 className="all-new">ALL-NEW CYCLE ZzOoN PRO</h2>
              <button className="learn-more">
                <Link>Learn more</Link>
              </button>
            </div>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
