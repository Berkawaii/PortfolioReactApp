import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NotFoundWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  text-align: center;
  padding: 2rem;
`;

const NotFoundTitle = styled(motion.h1)`
  font-size: 8rem;
  margin-bottom: 1rem;
  color: var(--primary);

  @media (max-width: 768px) {
    font-size: 5rem;
  }
`;

const NotFoundText = styled(motion.p)`
  font-size: 1.5rem;
  margin-bottom: 2rem;
  max-width: 600px;
`;

const HomeButton = styled(motion.button)`
  background-color: var(--primary);
  color: white;
  border: none;
  padding: 1rem 2rem;
  border-radius: var(--radius);
  font-weight: 600;
  cursor: pointer;
  font-size: 1rem;
  transition: var(--transition);

  &:hover {
    background-color: var(--primary-dark);
  }
`;

const NotFound = () => {
  return (
    <NotFoundWrapper>
      <NotFoundTitle
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        404
      </NotFoundTitle>

      <NotFoundText
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Oops! Aradığınız sayfa bulunamadı. Kayıp mı oldunuz?
      </NotFoundText>

      <Link to="/" style={{ textDecoration: "none" }}>
        <HomeButton
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Ana Sayfaya Dön
        </HomeButton>
      </Link>
    </NotFoundWrapper>
  );
};

export default NotFound;
