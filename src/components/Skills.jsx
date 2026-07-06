import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGitAlt,
  FaGithub,
  FaFigma,
} from "react-icons/fa";

import {
  SiMysql,
} from "react-icons/si";

import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";
import "../styles/skills.css";

function Skills() {
  const { theme } = useTheme();

  const skills = [
    { icon: <FaHtml5 color="#E34F26" />, name: "HTML5" },
    { icon: <FaCss3Alt color="#1572B6" />, name: "CSS3" },
    { icon: <FaJs color="#F7DF1E" />, name: "JavaScript" },
    { icon: <FaReact color="#61DAFB" />, name: "React" },
    { icon: <FaFigma color="#F24E1E" />, name: "Figma" },
  ];

  const tools = [
    { icon: <FaGitAlt color="#F05032" />, name: "Git" },
    {
      icon: <FaGithub color={theme === "dark" ? "white" : "black"} />,
      name: "GitHub",
    },
    { icon: <SiMysql color="#4479A1" />, name: "MySQL" },
  ];

  return (
    <section className="skills" id="skills">
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        My Skill & Tools
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Berikut beberapa teknologi dan tools yang saya gunakan dalam
        mengembangkan website serta merancang antarmuka pengguna yang modern,
        responsif, dan mudah digunakan.
      </motion.p>

      <div className="skill-grid">
        {skills.map((item, index) => (
          <motion.div
            key={index}
            className="skill-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: index * 0.08,
            }}
            viewport={{ once: true }}
            whileHover={{
              y: -10,
              scale: 1.05,
            }}
          >
            <div className="icon">{item.icon}</div>

            <h4>{item.name}</h4>
          </motion.div>
        ))}
      </div>

      <motion.h3
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Tools
      </motion.h3>

      <div className="tool-grid">
        {tools.map((item, index) => (
          <motion.div
            key={index}
            className="tool-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: index * 0.08,
            }}
            viewport={{ once: true }}
            whileHover={{
              y: -10,
              scale: 1.05,
            }}
          >
            <div className="icon">{item.icon}</div>

            <h4>{item.name}</h4>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Skills;