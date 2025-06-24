import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import { FaCode, FaReact } from "react-icons/fa";

const LoaderWrapper = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: var(--background);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  flex-direction: column;
`;

const LogoContainer = styled(motion.div)`
  font-size: 2.5rem;
  font-weight: 800;
  color: var(--primary);
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;

  span {
    color: var(--text);
  }
`;

const ProgressBarContainer = styled.div`
  width: 200px;
  height: 4px;
  background-color: rgba(var(--primary-rgb), 0.2);
  border-radius: 2px;
  overflow: hidden;
  position: relative;
`;

const ProgressBar = styled(motion.div)`
  height: 100%;
  background-color: var(--primary);
  border-radius: 2px;
  width: 100%;
`;

const IconsContainer = styled.div`
  display: flex;
  margin-top: 2rem;
  gap: 1.5rem;
`;

const IconWrapper = styled(motion.div)`
  font-size: 1.5rem;
  color: var(--primary);
`;

const LoadingText = styled(motion.div)`
  margin-top: 1rem;
  font-size: 0.9rem;
  color: var(--text-light);
  letter-spacing: 1px;
`;

const Loader = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  const iconRotate = {
    initial: { rotate: 0 },
    animate: { rotate: 360 },
  };

  return (
    <LoaderWrapper
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div variants={container} initial="hidden" animate="show">
        <LogoContainer variants={item}>
          <motion.span
            animate={{
              scale: [1, 1.2, 1],
              color: ["#0066ff", "#6c63ff", "#0066ff"],
            }}
            transition={{ duration: 2, repeat: Infinity }}
            style={{ marginRight: "10px" }}
          >
            &lt;
          </motion.span>
          Berkay<span>Acar</span>
          <motion.span
            animate={{
              scale: [1, 1.2, 1],
              color: ["#0066ff", "#6c63ff", "#0066ff"],
            }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
            style={{ marginLeft: "10px" }}
          >
            /&gt;
          </motion.span>
        </LogoContainer>

        <ProgressBarContainer>
          <ProgressBar
            initial={{ x: "-100%" }}
            animate={{ x: "0%" }}
            transition={{
              duration: 1.5,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        </ProgressBarContainer>

        <LoadingText
          variants={item}
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          LOADING...
        </LoadingText>

        <IconsContainer>
          <IconWrapper
            variants={iconRotate}
            animate="animate"
            initial="initial"
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          >
            <FaReact />
          </IconWrapper>
          <IconWrapper
            variants={item}
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 10, -10, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            <FaCode />
          </IconWrapper>
        </IconsContainer>
      </motion.div>
    </LoaderWrapper>
  );
};

export default Loader;
