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
        <NavLink to="#home">home</NavLink>
        <NavLink to="#about">about</NavLink>
        <NavLink to="#projects">projects</NavLink>
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
