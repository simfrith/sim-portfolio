import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <section className="contact">
      <h2>Contact Me</h2>

      <div className="contact-cards">
        {/* EMAIL */}
        <a
          href="mailto:simeonfrith5@gmail.com"
          className="contact-card"
        >
          📧
          <h3>Email</h3>
          <p>simeonfrith5@gmail.com</p>
        </a>

        {/* LINKEDIN */}
        <a
          href="https://www.linkedin.com/in/simfri4"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-card"
        >
          💼
          <h3>LinkedIn</h3>
          <p>View my profile</p>
        </a>

        {/* PHONE */}
        <a
          href="tel:+14706307957"
          className="contact-card"
        >
          📞
          <h3>Phone</h3>
          <p>(470) 630-7957</p>
        </a>
      </div>
    </section>
  );
}

export default Contact;

