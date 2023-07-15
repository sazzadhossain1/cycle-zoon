import React from "react";
import "./NewsDetail.css";
import { Link } from "react-router-dom";
const NewsDetail = ({ data }) => {
  console.log(data);
  const { img, title, date, paragraphOne, id } = data;
  return (
    <div className="newsDetails-parent-div">
      <img className="newsDetails-img" src={img} alt="" />
      <h3 className="title">{title}</h3>
      <p className="date">{date}</p>
      <p className="paragraphOne">{paragraphOne}</p>
      <Link to={`newsData/${id}`}>
        <button className="see-more-btn">See More </button>
      </Link>
    </div>
  );
};

export default NewsDetail;
