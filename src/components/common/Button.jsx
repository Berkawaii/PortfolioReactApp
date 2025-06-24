import React from 'react';
import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';

const ButtonStyles = css`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: ${(props) => (props.$size === 'large' ? '1rem 2rem' : props.$size === 'small' ? '0.5rem 1rem' : '0.75rem 1.5rem')};
  border-radius: var(--radius);
  border: none;
  font-weight: 600;
  font-size: ${(props) => (props.$size === 'large' ? '1.1rem' : props.$size === 'small' ? '0.9rem' : '1rem')};
  cursor: pointer;
  transition: var(--transition);
  text-decoration: none;
  gap: 0.5rem;

  ${(props) =>
    props.$variant === 'primary' &&
    css`
      background-color: var(--primary);
      color: white;
      
      &:hover {
        background-color: var(--primary-dark);
      }
    `}

  ${(props) =>
    props.$variant === 'secondary' &&
    css`
      background-color: var(--secondary);
      color: white;
      
      &:hover {
        filter: brightness(1.1);
      }
    `}

  ${(props) =>
    props.$variant === 'outline' &&
    css`
      border: 2px solid var(--primary);
      color: var(--primary);
      background: transparent;
      
      &:hover {
        background-color: var(--primary);
        color: white;
      }
    `}
    
  ${(props) =>
    props.$variant === 'ghost' &&
    css`
      background: transparent;
      color: var(--text);
      
      &:hover {
        background-color: var(--card-bg);
      }
    `}
`;

const StyledButton = styled.button`
  ${ButtonStyles}
`;

const StyledLink = styled.a`
  ${ButtonStyles}
`;

const Button = ({
  children,
  variant = 'primary',
  size = 'medium',
  href,
  onClick,
  animate = true,
  icon,
  ...props
}) => {
  const buttonContent = (
    <>
      {children}
      {icon && icon}
    </>
  );

  if (href) {
    return animate ? (
      <motion.div
        whileHover={{ y: -5 }}
        whileTap={{ scale: 0.95 }}
      >
        <StyledLink
          href={href}
          $variant={variant}
          $size={size}
          {...props}
        >
          {buttonContent}
        </StyledLink>
      </motion.div>
    ) : (
      <StyledLink
        href={href}
        $variant={variant}
        $size={size}
        {...props}
      >
        {buttonContent}
      </StyledLink>
    );
  }

  return animate ? (
    <motion.div
      whileHover={{ y: -5 }}
      whileTap={{ scale: 0.95 }}
    >
      <StyledButton
        onClick={onClick}
        $variant={variant}
        $size={size}
        {...props}
      >
        {buttonContent}
      </StyledButton>
    </motion.div>
  ) : (
    <StyledButton
      onClick={onClick}
      $variant={variant}
      $size={size}
      {...props}
    >
      {buttonContent}
    </StyledButton>
  );
};

export default Button;
