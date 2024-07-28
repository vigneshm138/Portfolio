import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { RiMenu4Line } from "react-icons/ri";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
  const [openCloseNavbar, setOpenCloseNavbar] = useState(false);
  return (
    <div className="navbar_container">
      <div className="navbar_logo">
        <h1>vm</h1>
      </div>
      <div
        className="navbar_links"
        style={openCloseNavbar ? { left: "0px" } : { left: "-600px" }}
      >
        <div className="navbar_closeBtnDiv">
          <button
            className="navbar_icons"
            onClick={() => setOpenCloseNavbar(false)}
          >
            <IoClose />
          </button>
        </div>
        <a href="#home_page">home</a>
        <a href="#about_page">about</a>
        <a href="#projects_page">projects</a>
      </div>
      <div className="navbar_openBtnDiv">
        <button
          className="navbar_icons"
          onClick={() => setOpenCloseNavbar(true)}
        >
          <RiMenu4Line />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
