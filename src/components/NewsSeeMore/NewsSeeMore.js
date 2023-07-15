import React from "react";
import { useLoaderData } from "react-router-dom";
import NewsRightSiteNav from "../NewsRightSiteNav/NewsRightSiteNav";

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
      <div>
        <div></div>
        <div>
          <NewsRightSiteNav></NewsRightSiteNav>
        </div>
      </div>
    </div>
  );
};

export default NewsSeeMore;
