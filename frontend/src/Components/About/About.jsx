import React from "react";
import "./About.css";
import { FiGithub } from "react-icons/fi";
import { SlSocialLinkedin } from "react-icons/sl";

const About = () => {
  return (
    <div className="aboutUs">
      <h1>About me</h1>
      <p>
        <span>Hi ! </span>
        <span>I’m Vignesh</span>, a <span>MERN Stack developer</span>
        passionate about creating smooth and engaging web experiences. I excel
        in both frontend and backend development, building user-friendly
        applications with sleek design and solid performance. Let’s work
        together to turn your ideas into reality with the{" "}
        <span>MERN Stack !</span>
      </p>
      <div className="about_social">
        <p>Reach out anytime </p>
        <a href="#">
          <FiGithub className="about_icons" />
        </a>
        <a href="#">
          <SlSocialLinkedin className="about_icons" />
        </a>
      </div>
    </div>
  );
};

export default About;
