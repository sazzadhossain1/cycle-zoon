import React from "react";
import "./NewsDetail.css";
const NewsDetail = ({ data }) => {
  console.log(data);
  const { img, title, date, paragraphOne } = data;
  return (
    <div className="newsDetails-parent-div">
      <img src={img} alt="" />
      <h3>{title}</h3>
      <p>{date}</p>
      <p>{paragraphOne}</p>
    </div>
  );
};

export default NewsDetail;
