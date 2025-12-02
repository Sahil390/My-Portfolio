import React, { useRef, useState } from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const form = useRef();
  const [isMobile] = useState(window.innerWidth <= 768);

  const handleSendEmail = (e) => {
    e.preventDefault();

    const formData = new FormData(form.current);
    const name = formData.get('user_name');
    const email = formData.get('user_email');
    const message = formData.get('message');

    const subject = `Portfolio Contact from ${name}`;
    const body = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;

    const mailtoLink = `mailto:sahil.119480@stu.upes.ac.in?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;
  };

  return (
    <section id="Contact" className="contact-section">
      <h2 className="contact-title">Contact</h2>
      <div className="contact-content">
        {isMobile ? (
          <>
            <form className="contact-form contact-form-mobile" ref={form} onSubmit={handleSendEmail}>
              <input type="text" name="user_name" placeholder="Your Name" required />
              <input type="email" name="user_email" placeholder="Your Email" required />
              <textarea name="message" placeholder="Your Message" rows={5} required />
              <button type="submit">Send Message</button>
            </form>
            <div className="contact-info-box contact-info-mobile">
              <p className="contact-message">
                Feel free to reach out to me via email or connect on social media!
              </p>
              <div className="contact-links contact-links-mobile">
                <a
                  href="mailto:sahil.119480@stu.upes.ac.in"
                  className="contact-link"
                  title="Gmail"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaEnvelope size={28} />
                </a>
                <a
                  href="https://www.linkedin.com/in/sahil-narang-6600b11bb/"
                  className="contact-link"
                  title="LinkedIn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin size={28} />
                </a>
                <a
                  href="https://github.com/Sahil390"
                  className="contact-link"
                  title="GitHub"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub size={28} />
                </a>
              </div>
            </div>
          </>
        ) : (
          <>
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
            <form className="contact-form" ref={form} onSubmit={handleSendEmail}>
              <input type="text" name="user_name" placeholder="Your Name" required />
              <input type="email" name="user_email" placeholder="Your Email" required />
              <textarea name="message" placeholder="Your Message" rows={5} required />
              <button type="submit">Send Message</button>
            </form>
          </>
        )}
      </div>
    </section>
  );
};

export default Contact;