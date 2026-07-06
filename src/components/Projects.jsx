import "../styles/projects.css";

import project1 from "../assets/project1.jpg";
import project2 from "../assets/project2.jpg";
import project3 from "../assets/project3.jpeg";

import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

import { motion } from "framer-motion";

function Projects() {

  const projects = [
    {
      title: "Website Donasi",
      image: project1,
      description:
        "Website donasi berbasis HTML, CSS dan JavaScript yang memiliki halaman landing page, informasi donasi serta navigasi yang responsif.",
      tech: ["HTML", "CSS", "JavaScript"],
      github: "#",
      demo: "#",
    },

    {
      title: "Program Tiket Kereta",
      image: project2,
      description:
        "Aplikasi desktop Java menggunakan konsep Pemrograman Berorientasi Objek dengan fitur pemesanan tiket kereta api.",
      tech: ["Java", "MySQL", "Swing"],
      github: "#",
      demo: "#",
    },

    {
      title: "Website Portfolio",
      image: project3,
      description:
        "Portfolio pribadi yang dibangun menggunakan React, Vite dan Framer Motion dengan tampilan modern dan responsif.",
      tech: ["React", "CSS", "Framer Motion"],
      github: "#",
      demo: "#",
    },
  ];

  return (
    <section id="projects" className="projects">

      <motion.h2

        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: .7 }}
        viewport={{ once: true }}

      >
        My Projects
      </motion.h2>

      <p className="projects-subtitle">
        Berikut beberapa project yang telah saya kerjakan selama proses belajar
        dan pengembangan kemampuan di bidang pemrograman maupun UI/UX.
      </p>

      <div className="projects-grid">

        {projects.map((project, index) => (

          <motion.div

            className={`project-card ${
              index === 2 ? "project-center" : ""
            }`}

            key={index}

            initial={{ opacity: 0, y: 40 }}

            whileInView={{ opacity: 1, y: 0 }}

            transition={{ duration: .6, delay: index * .2 }}

            viewport={{ once: true }}

            whileHover={{ y: -10 }}

          >

            <img src={project.image} alt={project.title} />

            <div className="project-content">

              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <div className="tech-list">

                {project.tech.map((item, i) => (

                  <span key={i}>{item}</span>

                ))}

              </div>

              <div className="project-button">

                <a href={project.github}>

                  <FaGithub />

                  GitHub

                </a>

                <a href={project.demo}>

                  <FiExternalLink />

                  Demo

                </a>

              </div>

            </div>

          </motion.div>

        ))}

      </div>

    </section>
  );
}

export default Projects;