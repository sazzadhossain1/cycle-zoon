import React from "react";
import "./Discover.css";
import { Link, useLoaderData } from "react-router-dom";

const Discover = ({ data }) => {
  console.log(data);
  const { number, name } = data;

  console.log(number, name);
  return (
    <div>
      <div className="">
        <div className="common-div itsBorder">
          <h3>
            <Link>
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
