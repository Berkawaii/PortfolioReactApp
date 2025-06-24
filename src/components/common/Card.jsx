import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const CardWrapper = styled(motion.div)`
  background-color: var(--card-bg);
  border-radius: var(--radius);
  box-shadow: 0 5px 15px var(--shadow);
  padding: ${props => props.$padding || '1.5rem'};
  height: ${props => props.$height || 'auto'};
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 4px;
    height: 100%;
    background-color: var(--primary);
    transform: ${props => props.$highlightSide === 'right' ? 'translateX(calc(100% + 4px))' : 'none'};
    right: ${props => props.$highlightSide === 'right' ? '0' : 'auto'};
    opacity: ${props => props.$highlight ? '1' : '0'};
    transition: opacity 0.3s ease;
  }
  
  &:hover::before {
    opacity: 1;
  }
`;

const Card = ({
  children,
  padding,
  height,
  highlight = false,
  highlightSide = 'left',
  animate = true,
  ...props
}) => {
  if (animate) {
    return (
      <CardWrapper
        $padding={padding}
        $height={height}
        $highlight={highlight}
        $highlightSide={highlightSide}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        whileHover={{ y: -5, boxShadow: '0 10px 20px var(--shadow)' }}
        {...props}
      >
        {children}
      </CardWrapper>
    );
  }

  return (
    <CardWrapper
      $padding={padding}
      $height={height}
      $highlight={highlight}
      $highlightSide={highlightSide}
      {...props}
    >
      {children}
    </CardWrapper>
  );
};

export default Card;
