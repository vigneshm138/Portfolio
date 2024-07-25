import React from "react";
import "./Skills.css";
import html from "./html.svg";
import css from "./css.svg";
import bootstarp from "./bootstarp.svg";
import js from "./js.svg";
import react from "./react.svg";
import mongoDB from "./mongoDB.svg";

const Skills = () => {
  return (
    <div className="skills">
      <h1>Skills</h1>
      <div className="skills_boxs">
        <div className="skill_box1">
          <div className="skills_box">
            <img src={html} alt="html" />
          </div>
          <div className="skills_box">
            <img src={css} alt="html" />
          </div>
          <div className="skills_box">
            <img src={bootstarp} alt="html" />
          </div>
          <div className="skills_box">
            <img src={js} alt="html" />
          </div>
        </div>
        <div className="skill_box1">
          <div className="skills_box">
            <img src={react} alt="html" />
          </div>
          <div className="skills_box">
            <img src={mongoDB} alt="html" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
