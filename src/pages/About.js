import React from "react";
import "./About.css";

function About() {
  return (
    <section className="about">
      {/* Profile Image */}
      <div className="about-header">
        <img
          src="/aboutpic.jpg"
          alt="Profile"
          className="about-img"
        />
      </div>

      {/* Info Cards */}
      <div className="about-cards">
        <div className="about-card">
          <h3>Career Goals</h3>
          <p>
            I am pursuing a career as a networking engineer where I can
            design, implement, and secure network infrastructures for
            organizations. My interests include routing and switching,
            network security, troubleshooting, and supporting scalable
            enterprise networks.
          </p>
        </div>

        <div className="about-card">
          <h3>Professional Experience</h3>
          <p>
            I have hands-on experience working as a data cable technician,
            installing and maintaining structured cabling systems. This
            role strengthened my understanding of physical networking
            infrastructure, attention to detail, and real-world
            problem solving in production environments.
          </p>
        </div>

        <div className="about-card">
          <h3>Hobbies & Interests</h3>
          <p>
            Outside of technology, I enjoy running 5Ks with former cross
            country teammates, completing hands-on maintenance and repair
            projects, and listening to music. These hobbies help me stay
            disciplined, focused, and balanced.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
