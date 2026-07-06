import "../styles/projects.css";

import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";

import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

import { motion } from "framer-motion";

function Projects() {

  const projects = [
    {
      title: "Prototype Desain Website",
      image: project1,
      description:
        "Prototype desain website OrangUtanHeaven yang dibuat menggunakan gabungan dari Stitch dan Figma, yang memiliki landing page beserta informasi seputar OUH dan mempertimbanggkan UI/UX.",
      tech: ["Stitch", "Figma", "HTML", "CSS"],
      github: "https://stitch.withgoogle.com/projects/15389173064495516134",
      demo: "https://stitch.withgoogle.com/preview/15389173064495516134?node-id=36a271021c23476980f9b528638e1025",
    },

    {
      title: "Program Tiket Kereta",
      image: project2,
      description:
        "Aplikasi desktop Java menggunakan konsep Pemrograman Berorientasi Objek dengan fitur pemesanan tiket kereta api.",
      tech: ["Java", "Swing"],
      github: "#",
      demo: "#",
    },

    {
      title: "Website Portfolio",
      image: project3,
      description:
        "Portfolio pribadi yang dibangun menggunakan React, Vite dan Framer Motion dengan tampilan modern dan responsif.",
      tech: ["React", "CSS", "Framer Motion"],
      github: "https://github.com/tugaskuliahmartin-glitch/portopolio-react",
      demo: "https://tugaskuliahmartin-glitch.github.io/portopolio-react/",
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