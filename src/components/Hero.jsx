import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

import profile from "../assets/profile.jpeg";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">

        {/* ===================== */}
        {/* TEXT */}
        {/* ===================== */}

        <motion.div
          className="hero-text"
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >

          <p className="hero-greeting">
            Halo, Saya
          </p>

          <h1>
            Martin Iman GL
          </h1>

          <TypeAnimation
            sequence={[
              "Universitas Satya Terra Bhinneka",
              2000,
              "Teknologi & Ilmu Komputer",
              2000,
              "Informatika",
              2000,
              "Perancangan Web",
              2000,
              "HTML - CSS - JavaScript - React",
              2000
            ]}
            speed={40}
            repeat={Infinity}
            className="typing"
          />

          <p className="hero-description">

            Saya merupakan salah satu mahasiswa jurusan Informatika di Universitas ST Bhinneka, yang memiliki
            ketertarikan pada pengembangan Website,
            UI/UX Design, dan hal-hal yang berbaur tentang vibe coding dan desain.

          </p>

          <div className="hero-buttons">

            <a href="#projects" className="btn-primary">
              Lihat Projek
            </a>

            <a href="#contact" className="btn-secondary">
              Hubungi Saya
            </a>

          </div>

        </motion.div>

        {/* ===================== */}
        {/* FOTO */}
        {/* ===================== */}

        <motion.div
          className="hero-image"
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >

          <Tilt

            glareEnable={true}

            glareMaxOpacity={0.3}

            tiltMaxAngleX={15}

            tiltMaxAngleY={15}

            perspective={1200}

            transitionSpeed={1800}

            scale={1.02}

          >

            <img
              src={profile}
              alt="Foto Profil"
            />

          </Tilt>

        </motion.div>

      </div>
    </section>
  );
}

export default Hero;