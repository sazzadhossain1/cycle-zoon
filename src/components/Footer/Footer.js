import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer-main-parent-div">
      <div className="footer-grid-parent-div">
        <div>
          <h3 className="footer-section-heading">ABOUT Cycle ZzOoN</h3>
          <div></div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
            quos dolorem qui distinctio rem nihil optio repudiandae deserunt,
            corrupti incidunt, omnis architecto blanditiis doloremque
            temporibus, consectetur velit eius impedit sunt.
          </p>
          <div className="footer-logo-flex-div">
            <Link to="https://www.facebook.com/" target="_blank">
              <img
                className="footer-logo mr-5"
                src="https://image.similarpng.com/very-thumbnail/2020/04/Beautiful-Facebook-logo-icon-social-media-png.png"
                alt=""
              />
            </Link>
            <Link to="https://www.facebook.com/" target="_blank">
              <img
                className="footer-logo mr-5"
                src="https://pngimg.com/uploads/twitter/twitter_PNG2.png"
                alt=""
              />
            </Link>
            <Link to="https://www.facebook.com/" target="_blank">
              <img
                className="footer-logo"
                src="https://freepngimg.com/thumb/instagram/118519-logo-pic-insta-png-free-photo.png"
                alt=""
              />
            </Link>
          </div>
        </div>
        <div>
          <h1 className="footer-section-heading">RECENT NEWS</h1>
          <div></div>
          <div className="book-img-text-div">
            <img
              className="book-logo"
              src="https://w7.pngwing.com/pngs/669/871/png-transparent-document-book-page-line-book-text-paper-page.png"
              alt=""
            />
            <p>Downhill: Taking a Ride in Mountains</p>
          </div>
          <p className="date">June 25, 2017</p>
        </div>
        <div>
          <h1 className="footer-section-heading">INSTAGRAM FEED</h1>
          <div></div>
          <div className="photo-grid-div">
            <img
              src="https://149357172.v2.pressablecdn.com/wp-content/uploads/2020/04/andres-jasso-RQqhVKHXa-k-unsplash.jpg"
              alt=""
            />
            <img
              src="https://149357172.v2.pressablecdn.com/wp-content/uploads/2020/04/william-iven-GANqCr1BRTU-unsplash.jpg"
              alt=""
            />
            <img
              src="https://149357172.v2.pressablecdn.com/wp-content/uploads/2020/04/tobias-rademacher-pMain49yK3g-unsplash.jpg"
              alt=""
            />
            <img
              src="https://149357172.v2.pressablecdn.com/wp-content/uploads/2020/04/kylo-NumnQmIUmF8-unsplash.jpg"
              alt=""
            />
            <img
              src="https://149357172.v2.pressablecdn.com/wp-content/uploads/2020/04/luke-chesser-vCF5sB7QecM-unsplash.jpg"
              alt=""
            />
            <img
              src="https://149357172.v2.pressablecdn.com/wp-content/uploads/2020/04/gyorgy-szemok-5M-A3DFnso8-unsplash.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
