import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { FiX, FiMonitor, FiTablet, FiSmartphone, FiInfo } from "react-icons/fi";

const ResponsiveWrapper = styled.div`
  position: fixed;
  bottom: 6rem;
  right: 2rem;
  z-index: 1000;
`;

const TestButton = styled(motion.button)`
  background-color: var(--primary);
  color: white;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: none;
  box-shadow: 0 5px 15px var(--shadow);

  svg {
    font-size: 1.5rem;
  }
`;

const TestPanel = styled(motion.div)`
  background-color: var(--card-bg);
  border-radius: var(--radius);
  padding: 1rem;
  box-shadow: 0 5px 20px var(--shadow);
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  min-width: 220px;
`;

const InfoBadge = styled(motion.div)`
  position: absolute;
  top: -10px;
  right: -10px;
  background-color: var(--accent);
  color: white;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  box-shadow: 0 2px 5px var(--shadow);
`;

const DeviceInfo = styled(motion.div)`
  background-color: rgba(var(--primary-rgb), 0.1);
  border-radius: var(--radius);
  padding: 0.5rem;
  margin-top: 0.5rem;
  font-size: 0.8rem;
  color: var(--text-light);
  display: flex;
  justify-content: space-between;
`;

const ResolutionBadge = styled.span`
  background-color: var(--primary);
  color: white;
  border-radius: 20px;
  padding: 2px 8px;
  font-size: 0.7rem;
  display: inline-block;
  margin-left: 5px;
`;

const DeviceButton = styled(motion.button)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background-color: ${(props) =>
    props.isActive ? "var(--primary)" : "var(--background)"};
  color: ${(props) => (props.isActive ? "white" : "var(--text)")};
  border: 1px solid
    ${(props) => (props.isActive ? "var(--primary)" : "var(--border)")};
  border-radius: var(--radius);
  padding: 0.5rem 1rem;
  cursor: pointer;
  transition: var(--transition);

  &:hover {
    background-color: ${(props) =>
      props.isActive ? "var(--primary)" : "rgba(var(--primary-rgb), 0.1)"};
  }
`;

const screenSizes = [
  {
    id: "desktop",
    name: "Desktop",
    icon: <FiMonitor />,
    width: "100%",
    description: "Full width view",
  },
  {
    id: "laptop",
    name: "Laptop",
    icon: <FiMonitor />,
    width: "1024px",
    description: "Standard laptop",
  },
  {
    id: "tablet",
    name: "Tablet",
    icon: <FiTablet />,
    width: "768px",
    description: "iPad, tablets",
  },
  {
    id: "mobile",
    name: "Mobile",
    icon: <FiSmartphone />,
    width: "375px",
    description: "Modern smartphones",
  },
];

const ResponsiveTester = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSize, setActiveSize] = useState(null);
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleSizeChange = (size) => {
    if (activeSize === size.id) {
      setActiveSize(null);
      document.body.style.maxWidth = "";
      document.body.style.margin = "";
      document.body.style.boxShadow = "";
    } else {
      setActiveSize(size.id);
      document.body.style.maxWidth = size.width;
      document.body.style.margin = "0 auto";
      document.body.style.boxShadow = "0 0 40px rgba(0,0,0,0.2)";
    }
  };

  return (
    <ResponsiveWrapper>
      <AnimatePresence>
        {isOpen && (
          <TestPanel
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 24 }}
          >
            {screenSizes.map((size) => (
              <DeviceButton
                key={size.id}
                isActive={activeSize === size.id}
                onClick={() => handleSizeChange(size)}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.95 }}
              >
                {size.icon} {size.name}
                <ResolutionBadge>{size.width}</ResolutionBadge>
              </DeviceButton>
            ))}

            {activeSize && (
              <DeviceInfo
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.2 }}
              >
                <span>
                  Current window: {windowSize.width} × {windowSize.height}
                </span>
                <span>Testing: {activeSize}</span>
              </DeviceInfo>
            )}
          </TestPanel>
        )}
      </AnimatePresence>

      <TestButton
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      >
        {isOpen ? <FiX /> : <FiMonitor />}
        <AnimatePresence>
          {showTooltip && !isOpen && (
            <InfoBadge
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
            >
              <FiInfo />
            </InfoBadge>
          )}
        </AnimatePresence>
      </TestButton>
    </ResponsiveWrapper>
  );
};

export default ResponsiveTester;
