import {
  FiMail,
  FiGithub,
  FiInstagram,
  FiLinkedin,
  FiArrowUp
} from "react-icons/fi";

import "../styles/contact.css";

function Contact() {
  return (
    <section className="contact" id="contact">

      <div className="contact-container">

        <h2>Contact Me</h2>

        <p className="contact-desc">
          Jika Anda tertarik untuk berdiskusi, bekerja sama,
          maupun sekadar berbagi pengalaman mengenai dunia
          pengembangan website dan UI/UX, silakan hubungi saya
          melalui salah satu media berikut.
        </p>

        <div className="contact-list">

          <a
            href="mailto:email@email.com"
            className="contact-item"
          >
            <div className="contact-icon">
              <FiMail />
            </div>

            <span>tugaskuliahmartin@email.com</span>
          </a>

          <a
            href="https://github.com/username"
            target="_blank"
            className="contact-item"
          >
            <div className="contact-icon">
              <FiGithub />
            </div>

            <span>tugaskuliahmartin-glitch/MartinGL</span>
          </a>

          {/* <a
            href="https://linkedin.com"
            target="_blank"
            className="contact-item"
          >
            <div className="contact-icon">
              <FiLinkedin />
            </div>

            <span>LinkedIn</span>
          </a> */}

          <a
            href="https://instagram.com"
            target="_blank"
            className="contact-item"
          >
            <div className="contact-icon">
              <FiInstagram />
            </div>

            <span>@martingl.vn</span>
          </a>

        </div>

        <a href="#home" className="back-top">

          <FiArrowUp />

        </a>

      </div>

    </section>
  );
}

export default Contact;