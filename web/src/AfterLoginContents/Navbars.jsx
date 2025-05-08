import React, { useState } from "react";
import "./styless/Navbars.css";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";

const Navbars = () => {
  const [menu, setMenu] = useState("menu");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <>
      <div className="navbars" id="Homepage">
        {/* Left: Hamburger + Logo */}
        <div className="navbar-left">
          <img
            src={assets.hamburger}
            alt="menu"
            className="hamburger"
            onClick={toggleSidebar}
          />
          <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <img src={assets.ustpfoodlogo} alt="logo" className="ustpfoodlogo" />
          </Link>
        </div>



        {/* Right: Auth Buttons */}
        <div className="navbar-right">
          <Link to="/Homepage" className="nav-link home">Home</Link>
          <Link to="/stores" className="nav-link stores">Stores</Link>
          <img src={assets.user} alt="user" className="User" />
        </div>
      </div>

      {/* Sidebar Overlay */}
      {isSidebarOpen && <div className="sidebar-overlay" onClick={closeSidebar}></div>}

      {/* Sidebar */}
      <div className={`sidebar ${isSidebarOpen ? "show" : ""}`}>
        <div className="sidebar-header">
          <span className="close-btn" onClick={toggleSidebar}>×</span>
        </div>
        <div className="sidebar-content">
          <Link to="/about-us" onClick={toggleSidebar}>
            <div className="sidebar-item"><img src="/about-us.png" alt="" />About Us</div>
          </Link>
          <Link to="/contact-us" onClick={toggleSidebar}>
            <div className="sidebar-item"><img src="/phone-call.png" alt="" />Contact Us</div>
          </Link>
          <Link to="/faq" onClick={toggleSidebar}>
            <div className="sidebar-item"><img src="/question.png" alt="" />FAQ</div>
          </Link>
          <Link to="/feedback" onClick={toggleSidebar}>
            <div className="sidebar-item"><img src="/rate.png" alt="" />Feedback</div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbars;