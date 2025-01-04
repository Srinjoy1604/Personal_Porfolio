import React, { useEffect } from 'react';
import { gsap } from 'gsap';

const Transition = ({ children }) => {
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Entry animation
      gsap.fromTo(
        '.page',
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' }
      );
    });

    return () => {
      // Exit animation
      gsap.to('.page', { opacity: 0, y: -50, duration: 0.5, ease: 'power2.in' });
      ctx.revert(); // Clean up GSAP context
    };
  }, []);

  const pageStyles = {
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
  };

  return (
    <div className="page" style={pageStyles}>
      {children}
    </div>
  );
};

export default Transition;

