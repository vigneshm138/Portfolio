import React from "react";
import "./Home.css";
import me from "./me.png";
import arrow from "./arrow.svg";

const Home = () => {
  return (
    <div className="home">
      <div className="myPhoto">
        <img src={me} alt="myPhoto" />
        <img src={arrow} className="arrow_byMy" />
        <p className="myName_byMy">Hello! I Am <span>Vignesh M</span></p>
      </div>
      <p className="para_byD"><span>MERN Stack Developer</span>, with knowledge in Frontend and Backend</p>
    </div>
  );
};

export default Home;
