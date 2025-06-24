import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

export const useScrollAnimation = (threshold = 0.1) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold,
  });

  return { ref, inView };
};
