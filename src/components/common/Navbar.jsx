import React, { useState, useEffect } from "react";
import { useTheme } from "../../context/ThemeContext";
import { motion } from "framer-motion";
import { FiSun, FiMoon, FiMenu, FiX, FiDownload } from "react-icons/fi";
import styled from "styled-components";
import resume from "../../assets/resume";

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  padding: 1rem 0;
  background-color: var(--background);
  box-shadow: 0 2px 10px var(--shadow);
  transition: var(--transition);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  background-color: ${(props) =>
    props.isScrolled
      ? "var(--background)"
      : "rgba(var(--background-rgb), 0.8)"};
`;

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.a`
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--primary);
  text-decoration: none;

  span {
    color: var(--text);
  }
`;

const MenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: var(--text);
  font-size: 1.5rem;
  cursor: pointer;

  @media (max-width: 768px) {
    display: flex;
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;

  .nav-items-container {
    display: flex;
    align-items: center;
    gap: 2rem;
  }

  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    right: ${(props) => (props.isOpen ? "0" : "-100%")};
    bottom: 0;
    width: 70%;
    max-width: 300px;
    background-color: var(--background);
    box-shadow: -5px 0 15px var(--shadow);
    flex-direction: column;
    padding: 5rem 2rem 2rem;
    transition: right 0.3s ease;
    z-index: 101;
    align-items: flex-start;
    overflow-y: auto; /* Mobilde kaydırma ekle */

    .nav-items-container {
      flex-direction: column;
      align-items: flex-start;
      width: 100%;
      gap: 1rem;
    }
  }
`;

const NavLink = styled.a`
  color: var(--text);
  text-decoration: none;
  font-weight: 500;
  padding: 0.5rem 0;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background-color: var(--primary);
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: 100%;
  }

  &.active::after {
    width: 100%;
  }
`;

const ThemeButton = styled.button`
  background: none;
  border: none;
  color: var(--text);
  font-size: 1.25rem;
  cursor: pointer;
  display: flex;
  align-items: center;
`;

// Resume linki için diğer NavLink'ler ile aynı stilde ama özel ikon eklenmiş versiyon
const ResumeLink = styled(NavLink)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;

  @media (max-width: 768px) {
    margin-top: 1rem; /* Mobil görünümde daha fazla boşluk */
  }
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 50;
  display: ${(props) => (props.isOpen ? "block" : "none")};

  @media (min-width: 769px) {
    display: none;
  }
`;

const Navbar = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 50);

    // Find the current section
    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 100;
      const sectionHeight = section.offsetHeight;
      const id = section.getAttribute("id");

      if (
        window.scrollY >= sectionTop &&
        window.scrollY < sectionTop + sectionHeight
      ) {
        setActiveSection(id);
      }
    });
  };

  const handleNavClick = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth",
      });
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <Nav isScrolled={isScrolled}>
      <NavContainer className="container">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Logo href="#home">
            Berkay<span>Acar</span>
          </Logo>
        </motion.div>

        <MenuButton onClick={() => setIsMenuOpen(true)}>
          <FiMenu />
        </MenuButton>

        <NavLinks isOpen={isMenuOpen}>
          {isMenuOpen && (
            <MenuButton
              style={{ position: "absolute", top: "1rem", right: "1rem" }}
              onClick={() => setIsMenuOpen(false)}
            >
              <FiX />
            </MenuButton>
          )}

          <div className="nav-items-container">
            {/* Navigasyon linkleri */}
            {[
              "home",
              "about",
              "experience",
              "skills",
              "projects",
              "contact",
            ].map((section, index) => (
              <motion.div
                key={section}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <NavLink
                  href={`#${section}`}
                  className={activeSection === section ? "active" : ""}
                  onClick={(e) => handleNavClick(e, section)}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </NavLink>
              </motion.div>
            ))}

            {/* Resume linki */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              style={{ display: "inline-flex" }}
            >
              <ResumeLink
                href={resume}
                download="berkay-acar-resume.pdf"
                aria-label="Download Resume"
              >
                <FiDownload /> Resume
              </ResumeLink>
            </motion.div>

            {/* Tema değiştirme butonu */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              style={{ display: "inline-flex" }}
            >
              <ThemeButton onClick={toggleTheme}>
                {isDarkMode ? <FiSun /> : <FiMoon />}
              </ThemeButton>
            </motion.div>
          </div>
        </NavLinks>
      </NavContainer>

      <Overlay isOpen={isMenuOpen} onClick={() => setIsMenuOpen(false)} />
    </Nav>
  );
};

export default Navbar;
