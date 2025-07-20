import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const Contact = () => (
  <section id="Contact" className="contact-section">
    <h2 className="contact-title">Contact</h2>
    <div className="contact-content">
      <div className="contact-info-box">
        <p className="contact-message">
          Feel free to reach out to me via email or connect on social media!
        </p>
        <div className="contact-links">
          <a
            href="mailto:sahil.119480@stu.upes.ac.in"
            className="contact-link"
            title="Gmail"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaEnvelope size={24} style={{ marginRight: 10 }} />
            sahil.119480@stu.upes.ac.in
          </a>
          <a
            href="https://www.linkedin.com/in/sahil-narang-6600b11bb/"
            className="contact-link"
            title="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={24} style={{ marginRight: 10 }} />
            LinkedIn
          </a>
          <a
            href="https://github.com/Sahil390"
            className="contact-link"
            title="GitHub"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={24} style={{ marginRight: 10 }} />
            GitHub
          </a>
        </div>
      </div>
      <form className="contact-form">
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" rows={5} required />
        <button type="submit">Send Message</button>
      </form>
    </div>
  </section>
);

export default Contact;