import React from "react";
import "./Projects.css";
import pro from "./pro.png";
import { FiGithub } from "react-icons/fi";
import { TbLivePhoto } from "react-icons/tb";

const Projects = () => {
  return (
    <div className="projects_page">
      <h1>Projects</h1>
      <div className="projects">
        <div className="project">
          <div className="project_img">
            <img src={pro} alt="" />
          </div>
          <div className="project_name">
            <h5>project name</h5>
          </div>
          <div className="project_details">
            <p>
              My static front-end website showcases elegant design and seamless
              user experience, highlighting my proficiency in creating visually
              appealing and responsive web interfaces
            </p>
          </div>
          <div className="project_links">
            <a href=""><FiGithub />code</a>
            <a href=""><TbLivePhoto />live</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
