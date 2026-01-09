import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
  <Link to="/">Home</Link>
  <Link to="/about">About Me</Link>
  <Link to="/projects">Projects</Link>
  <Link to="/resume">Resume</Link>
  <Link to="/contact">Contact Me</Link>
</nav>
  );
}

export default Navbar;
