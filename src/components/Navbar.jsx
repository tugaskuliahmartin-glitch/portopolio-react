import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { FiMoon, FiSun } from "react-icons/fi";
import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      className={`navbar ${scrolled ? "scrolled" : ""}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.7 }}
    >
      <div className="navbar-container">

        <div className="logo">

          <h2>Martin GL</h2>

        </div>

        <ul className="nav-menu">

          {["home", "about", "skills", "projects", "contact"].map((item) => (
            <li key={item}>

              <Link

                to={item}

                spy={true}

                smooth={true}

                offset={-80}

                duration={700}

                activeClass="active"

              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </Link>

            </li>
          ))}

        </ul>

        <div
          className="theme-switch"
          onClick={toggleTheme}
        >

          <FiMoon className="moon" />

          <div className={`switch ${theme === "light" ? "active" : ""}`}>

            <span></span>

          </div>

          <FiSun className="sun" />

        </div>

      </div>
    </motion.nav >
  );
};

export default Navbar;