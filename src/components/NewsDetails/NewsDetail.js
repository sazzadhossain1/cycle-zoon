import React from "react";
import "./NewsDetail.css";
const NewsDetail = ({ data }) => {
  console.log(data);
  const { img, title, date, paragraphOne } = data;
  return (
    <div className="newsDetails-parent-div">
      <img className="newsDetails-img" src={img} alt="" />
      <h3 className="title">{title}</h3>
      <p className="date">{date}</p>
      <p className="paragraphOne">{paragraphOne}</p>
      <button className="see-more-btn">See More </button>
    </div>
  );
};

export default NewsDetail;
