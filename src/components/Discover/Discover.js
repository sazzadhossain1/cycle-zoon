import React from "react";
import "./Discover.css";
import { Link, useLoaderData } from "react-router-dom";

const Discover = ({ data }) => {
  console.log(data);
  return (
    <div>
      <div className="discover-child-parent-div">
        <div>
          <h3 className="easily">EASILY CUSTOMIZABLE</h3>
          <h1 className="discover">Discover The Cycle ZzOon</h1>
        </div>
      </div>
      <div className="discover-grid-div">
        <div className="common-div itsBorder">
          <h3>
            <Link>
              <span className="number">01</span>
              <span className="text">STARTER</span>
            </Link>{" "}
          </h3>
        </div>
        <div className="common-div itsBorder">
          <h3>
            <Link>
              <span className="number">02</span>
              <span className="text">ROAD</span>
            </Link>
          </h3>
        </div>
        <div className="common-div">
          <h3>
            <Link>
              <span className="number">03</span>{" "}
              <span className="text">PRO</span>
            </Link>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Discover;
