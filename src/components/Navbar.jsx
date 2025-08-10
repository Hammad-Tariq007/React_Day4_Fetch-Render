import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <div className="navbar-logo">
          <a href="/">MyApp</a>
        </div>

        {/* Navigation Links */}
        <ul className="navbar-links">
          <li><a href="/">Home</a></li>
          <li><a href="/posts">Posts</a></li>
          <li><a href="/about">About</a></li>
        </ul>

        {/* Call to Action */}
        <div className="navbar-cta">
          <button className="navbar-button">Sign In</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
