import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import {
  AiFillHome,
  AiOutlineUser,
  AiOutlineFundProjectionScreen,
} from "react-icons/ai";
import {BsFileRichtext} from "react-icons/bs"


function Navbar() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const location = useLocation();

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav>
      {windowWidth > 768 ? (
        <React.Fragment>
          <NavLink to="/" className="logo link">
            Danilis
          </NavLink>
          <ul>
            <NavLink
              to="/about"
              className={`link ${
                location.pathname === "/about" ? "active-link" : ""
              }`}
            >
              About
            </NavLink>
            <NavLink
              to="/projects"
              className={`link ${
                location.pathname === "/projects" ? "active-link" : ""
              }`}
            >
              Projects
            </NavLink>
            <NavLink
              to="/blog"
              className={`link ${
                location.pathname === "/blog" ? "active-link" : ""
              }`}
            >
              Blog
            </NavLink>
          </ul>
        </React.Fragment>
      ) : (
        <ul className="bottom-bar">
          <NavLink
            to="/"
            className={`link ${location.pathname === "/" ? "active-link" : ""}`}
          >
            <AiFillHome size={24} />
          </NavLink>
          <NavLink
            to="/about"
            className={`link ${
              location.pathname === "/about" ? "active-link" : ""
            }`}
          >
            <AiOutlineUser size={24} />
          </NavLink>
          <NavLink
            to="/projects"
            className={`link ${
              location.pathname === "/projects" ? "active-link" : ""
            }`}
          >
            <AiOutlineFundProjectionScreen size={24} />
          </NavLink>
          <NavLink
            to="/blog"
            className={`link ${
              location.pathname === "/blog" ? "active-link" : ""
            }`}
          >
            <BsFileRichtext size={24} />
          </NavLink>
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
