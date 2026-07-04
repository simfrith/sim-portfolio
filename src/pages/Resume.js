import React from "react";
import "./Resume.css";

function Resume() {
  return (
    <section className="resume">
      <h2>Resume</h2>

      <div className="resume-actions">
        <a
          href="/ResSLF4.pdf"
          download
          className="resume-btn"
        >
          Download Resume
        </a>
      </div>

      <div className="resume-viewer">
        <iframe
          src="/ResSLF4.pdf"
          title="Resume PDF"
          width="100%"
          height="600px"
        />
      </div>
    </section>
  );
}

export default Resume;
