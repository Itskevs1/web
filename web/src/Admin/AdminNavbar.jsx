// AdminNavbar.jsx

import React, { useState, useEffect } from "react";
import "./DashStyle/AdminNavbar.css"; // Fixed file name from 'AdminNavbars.css'
import { assets } from "../assets/assets"; // Make sure this path is valid
import { Link, useLocation } from "react-router-dom";

const AdminNavbar = () => {
  const [activeLink, setActiveLink] = useState("");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const currentPath = location.pathname;
    if (currentPath.startsWith("/user-profile")) {
      setActiveLink("user-profile");
    } else {
      setActiveLink("");
    }
  }, [location.pathname]);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  const handleNavLinkClick = (linkName) => {
    setActiveLink(linkName);
  };

  const handleSidebarLinkClick = () => {
    closeSidebar();
  };

  return (
    <>
      <div className="navbars" id="Homepage">
        <div className="navbar-left">
          <img
            src={assets.hamburger}
            alt="menu"
            className="hamburger"
            onClick={toggleSidebar}
          />
          <img src={assets.ustpfoodlogo} alt="logo" className="ustpfoodlogo" />
        </div>


      </div>

      {isSidebarOpen && <div className="sidebar-overlay" onClick={closeSidebar}></div>}

      <div className={`sidebar ${isSidebarOpen ? "show" : ""}`}>
        <div className="sidebar-header">
          <span className="close-btn" onClick={toggleSidebar}>×</span>
        </div>
        <div className="sidebar-content">
          <Link to="/about-us" onClick={handleSidebarLinkClick}>
            <div className="sidebar-item"><img src="/about-us.png" alt="About Us" />About Us</div>
          </Link>
          <Link to="/contact-us" onClick={handleSidebarLinkClick}>
            <div className="sidebar-item"><img src="/phone-call.png" alt="Contact Us" />Contact Us</div>
          </Link>
          <Link to="/faq" onClick={handleSidebarLinkClick}>
            <div className="sidebar-item"><img src="/question.png" alt="FAQ" />FAQ</div>
          </Link>
          <Link to="/feedback" onClick={handleSidebarLinkClick}>
            <div className="sidebar-item"><img src="/rate.png" alt="Feedback" />Feedback</div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default AdminNavbar;
