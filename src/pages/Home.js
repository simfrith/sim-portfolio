import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <section className="home">
      <h1 className="typing">
  Hello, I'm Simeon Frith IV!
</h1>

      <p>Networking Student | Kennesaw State University</p>
      <div className="home-buttons">
        <Link to="/about" className="home-btn">About Me</Link>
        <Link to="/projects" className="home-btn">Projects</Link>
        <Link to="/resume" className="home-btn">Resume</Link>
        <Link to="/contact" className="home-btn">Contact Me</Link>
      </div>
    </section>
  );
}

export default Home;
