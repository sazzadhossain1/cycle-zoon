import React from "react";
import "./About.css";

const About = () => {
  return (
    <div>
      <div className="about-background-parent-div">
        <h3 className="about-title">
          About Zz<span className="oo">Oo</span>N
        </h3>
      </div>
      <h4 className="introduction">INTRODUCTION</h4>
      <h3 className="embedded">EMBEDDED VIDEOS</h3>
      <div className="about-first-grid-div">
        <div className="about-left-text-div">
          <h3 className="about-left-heading">
            EMBED VIDEOS FROM YOUTUBE OR VIMEO
          </h3>
          <p className="about-left-paragraph">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda a
            culpa consectetur modi.
          </p>
          <h3 className="about-left-heading">
            POWERED BY ELEMENTAL PAGE BUILDER
          </h3>
          <p className="about-left-paragraph">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam
            repellendus hic optio doloribus.
          </p>
          <h3 className="about-left-heading">BACKED WITH AMAZING SUPPORT</h3>
          <p className="about-left-paragraph">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas ea
            eligendi distinctio corrupti.
          </p>
        </div>
        <div className="about-right-video-div">
          <iframe
            className="video"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/T3wAwHrF7d0"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
      </div>

      {/*  */}
      <div className="second-parent-div">
        <h4 className="choose">CHOOSE A MODEL</h4>
        <h1 className="featured">FEATURED BIKE</h1>
        <div className="second-grid-div">
          <div className="about-second-text-div">
            <h3 className="cycle-zoon">Cycle ZzOon Starter </h3>
            <div className="about-blank-div"></div>
            <p className="about-price">$1,700</p>
            <p className="about-paragraph">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores veritatis quo voluptatibus commodi! Illum, rem adipisci
              expedita ab iure eligendi animi! Repellendus rerum beatae
              doloribus doloremque explicabo adipisci consequuntur sunt omnis
              enim sequi, maiores ab cum vel odio dolores dolorum.
            </p>
            <button className="about-selet">SELET OPTIONS</button>
          </div>
          <div>
            <img
              className="about-cycle-img"
              src="https://149357172.v2.pressablecdn.com/wp-content/uploads/2017/07/bike.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
