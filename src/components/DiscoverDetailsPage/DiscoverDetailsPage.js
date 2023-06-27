import React from "react";
import "./DiscoverDetailsPage.css";
import { useLoaderData } from "react-router-dom";

const DiscoverDetailsPage = () => {
  const singleData = useLoaderData();
  console.log(singleData);
  const {
    imgOne,
    name,
    nameTwo,
    paragraph,
    price,
    smallImgFour,
    smallImgOne,
    smallImgTwo,
    smallImgThree,
  } = singleData;
  return (
    <div>
      <div className="discoverDetailsPage-backGround-Photo-div">
        <h2 className="shop">SHOP</h2>
      </div>
      <div className="discover-details-grid">
        <div>
          <img className="img-one" src={imgOne} alt="" />
          <div className="smallImg-div">
            <img className="small-img" src={smallImgOne} alt="" />
            <img className="small-img" src={smallImgTwo} alt="" />
            <img className="small-img" src={smallImgThree} alt="" />
            <img className="small-img" src={smallImgFour} alt="" />
          </div>
        </div>
        <div>
          <h2 to="/home" className="discover-details-title-name   ">
            Cycle Zz<span className="oo">Oo</span>N
          </h2>
          <p className="paragraph">{paragraph}</p>
          <p className="price">{price}</p>{" "}
        </div>
      </div>
    </div>
  );
};

export default DiscoverDetailsPage;
