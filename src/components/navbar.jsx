import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import DehazeIcon from '@mui/icons-material/Dehaze';
import CloseIcon from '@mui/icons-material/Close';
import DarkMode from "./DarkMode/DarkMode";

const Logo_black= require('../static/images/iste-black.png');

const Navbar = () => {
  const [mobile, setMobile] = useState(false);

  const handleResize = () => {
    if (window.innerWidth > 768) {
      setMobile(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleMobileMenu = () => {
    setMobile(!mobile);
  };

  return (
    <>
      <nav className="navbar">
      <img src={Logo_black} alt="Logo" style={{'width':'9vh','padding':'1px'}}/>
        <button className="mobile-menu-icon" onClick={toggleMobileMenu}>
          {mobile ? <CloseIcon /> : <DehazeIcon />}
        </button>
        <ul className={mobile ? "nav-links-mobile" : "nav-links"}>
          <li onClick={() => setMobile(false)}>
            <Link to="/">Home</Link>
          </li>
          <li onClick={() => setMobile(false)}>
            <Link to="/members">Members</Link>
          </li>
          <li onClick={() => setMobile(false)}>
            <Link to="/event">Events</Link>
          </li>
          <li onClick={() => setMobile(false)}>
            <Link to="/gallery">Gallery</Link>
          </li>
          <li onClick={() => setMobile(false)}>
            <Link to="/blog">Blog</Link>
          </li>
          <li onClick={() => setMobile(false)}>
            <DarkMode />
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
