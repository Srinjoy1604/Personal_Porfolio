import React, { useState, useEffect } from "react";
import styles from "./Common.module.css";

const Resume_link = import.meta.env.VITE_RESUME_LINK;

const openLink = () => {
  window.open(Resume_link, "_blank");
};

function Homepage() {
  const roles = [
    "Software Developer",
    "Problem Solver",
    "Competitive Coder",
    "Tech Explorer",
  ];
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % roles.length);
        setFade(true);
      }, 300); // matches fade-out time
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className={`${styles.HomeBackground} grid place-items-center min-h-[100vh]`}
    >
      <div className="grid place-items-center w-[80%] h-[60%] text-center">
        <h1 className="m-[1%] text-8xl font-DancingScript">Srinjoy Roy</h1>
        <h2
          className={`${styles.smoothText} font-BrunoAce ${
            fade ? styles.fadeIn : styles.fadeOut
           }`}
        >
          {roles[index]}
        </h2>
        <p
          className={`${styles.TextBg} max-w-[600px] font-Lekton text-lg mt-4`}
        >
          Driven by innovation, I bring full-stack expertise and a solid
          background in generative AI to craft seamless, user-friendly
          solutions. With extensive experience and a knack for automation, I
          deliver impactful results that streamline and elevate processes.
        </p>
        <button
          onClick={openLink}
          className="border border-white hover:border-orange-400 font-BrunoAce m-[1%] px-4 py-2 mt-4"
        >
          Resume
        </button>
      </div>
    </div>
  );
}

export default Homepage;
