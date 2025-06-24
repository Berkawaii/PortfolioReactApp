import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiSun, FiMoon } from "react-icons/fi";
import styled from "styled-components";
import { useTheme } from "../../context/ThemeContext";

const ToggleButton = styled(motion.div)`
  position: fixed;
  bottom: 2rem;
  left: 2rem;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: ${(props) =>
    props.isDarkMode ? "var(--secondary)" : "var(--primary)"};
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 100;
  box-shadow: 0 3px 15px var(--shadow);

  svg {
    font-size: 1.5rem;
  }
`;

const IconWrapper = styled(motion.div)`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
`;

const ThemeToggle = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <ToggleButton
      isDarkMode={isDarkMode}
      onClick={toggleTheme}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
      layout
    >
      <AnimatePresence mode="wait" initial={false}>
        {isDarkMode ? (
          <IconWrapper
            key="sun"
            initial={{ rotate: -180, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: 180, opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            <FiSun />
          </IconWrapper>
        ) : (
          <IconWrapper
            key="moon"
            initial={{ rotate: 180, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: -180, opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            <FiMoon />
          </IconWrapper>
        )}
      </AnimatePresence>
    </ToggleButton>
  );
};

export default ThemeToggle;
