import React from "react";
import "./Discover.css";
import { Link } from "react-router-dom";

const Discover = ({ data }) => {
  // console.log(data);
  const { number, name, id } = data;

  // console.log(number, name);
  return (
    <div>
      <div className="">
        <div className="common-div itsBorder">
          <h3>
            <Link to={`/discoverDetailsPage/${id}`}>
              <span className="number">{number}</span>
              <span className="text">{name}</span>
            </Link>{" "}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Discover;
