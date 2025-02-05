import React from "react";
import styles from "./Common.module.css";
const Resume_link=import.meta.env.VITE_RESUME_LINK;
const openLink = () => {
    window.open(Resume_link, "_blank");
};
function Homepage()
{
    return(
        <div className={`${styles.HomeBackground} grid place-items-center min-h-[100vh]`}>
            <div className="grid place-items-center w-[80%] h-[60%]">
                <h1 className="m-[0.3%] text-7xl font-Poppins">Srinjoy Roy</h1>
                <h2 className="text-3xl text-orange-500 font-BrunoAce">Software developer</h2>
                <p className={`${styles.TextBg} max-w-[600px] font-Lekton text-lg`}>Driven by innovation, I bring full-stack expertise and a solid background in generative AI to craft seamless, user-friendly solutions. With extensive experience and a knack for automation, I deliver impactful results that streamline and elevate processes.</p>
                <button onClick={openLink} className="border-1 border-white hover:border-orange-400 font-BrunoAce">Resume</button>
            </div>
        </div>
    )
}

export default Homepage;