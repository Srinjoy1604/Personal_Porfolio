import React, { useState, useEffect, useRef } from "react";
import styles from "./Common.module.css";
import pj1 from "../images/Project/Project_Indfab.png";
import pj2 from "../images/Project/Project_TAPL.png";
import pj3 from "../images/Project/Project_DocVault.png";
import pj4 from "../images/Project/Vivacity25Proj.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight, faLink } from "@fortawesome/free-solid-svg-icons";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const projectList = [
    { name: "Vivacity 2k25 Website", color: "#3dff71", shadow: "2px 4px 35px 11px rgba(33,227,134,0.75)", image: pj4, start: "December 2024", end: "January 2025", desc: "Developed the Vivacity 2025 website for The LNM Institute of Information Technology using the MERN stack, integrating GSAP for animations to enhance user experience. Led development and maintenance, driving 22,000+ views in two weeks and managing event registrations exclusively through the site.", skills: ["React.js", "Node.js", "Express.js", "MongoDB", "Framer Motion", "GSAP"], github: "https://github.com/Srinjoy1604/Vivacity_main_website_2025", weblink: "https://www.vivacity25.live/" },
    { name: "DocVault", image: pj3, color: "#ab6ad9", shadow: "2px 4px 35px 11px rgba(200,33,227,0.75)", start: "August 2024", end: "October 2024", desc: "Developed Doc Vault, a document management portal for organizing digital files, with a React.js frontend and a Node.js/Express.js backend. Integrated JWT for secure authentication, Firebase for file storage, and MongoDB for metadata management, enabling efficient handling of over 100 documents.", skills: ["React.js", "Node.js", "Express.js", "MongoDB", "Firebase"], github: "https://github.com/Srinjoy1604/DocVault", weblink: "https://doc-vault-beta.vercel.app/" },
    { name: "Indfab", image: pj1, color: "#ed2d2d", shadow: "2px 4px 35px 11px rgba(227,28,28,0.75)", start: "May 2024", end: "July 2024", desc: "Developed and deployed a React.js website for Indfab on Cloudflare, featuring interactive Framer Motion animations and a custom design to showcase services and enhance user experience.", skills: ["React.js", "Framer Motion", "Cloudfare"], github: "https://github.com/Srinjoy1604/Indfab", weblink: "https://indfab.co/" },
    { name: "TAPL", image: pj2, color: "#7edff2", shadow: "2px 4px 35px 11px rgba(6,255,255,0.75)", start: "June 2024", end: "August 2024", desc: "Developed and launched a responsive frontend website for Tirupati Ancillaries Pvt Ltd. using HTML, CSS, JavaScript, and Bootstrap, hosted on Firebase, delivering a user-friendly interface tailored to client needs.", skills: ["HTML", "CSS", "JavaScript", "JQuery", "Firebase"], github: "https://github.com/Srinjoy1604/TAPL", weblink: "https://tirupatiancillaries.com/" },
];

gsap.registerPlugin(ScrollTrigger);

function Projects() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const projectRefs = useRef([]);
    const containerRef = useRef(null);

    useEffect(() => {
        const projects = projectRefs.current;

        // Set initial state: first project visible, others hidden
        gsap.set(projects, { opacity: 0, zIndex: 0 });
        gsap.set(projects[0], { opacity: 1, zIndex: 10 });

        projects.forEach((project, index) => {
            if (project) {
                const textElements = project.querySelectorAll("h1, h2, h3, p, .flex"); // Select text and button container
                const imageElement = project.querySelector("img"); // Select image

                // Set initial animation states
                gsap.set(textElements, { x: -50, opacity: 0 });
                gsap.set(imageElement, { scale: 0.8, opacity: 0 });

                // Animate in for the first project
                if (index === 0) {
                    gsap.to(textElements, { x: 0, opacity: 1, duration: 0.5, ease: "power2.out", stagger: 0.1 });
                    gsap.to(imageElement, { scale: 1, opacity: 1, duration: 0.5, ease: "power2.out" });
                }

                ScrollTrigger.create({
                    trigger: project,
                    start: "top 20%", // Start pinning when top of project hits 20% from viewport top
                    end: () => `+=${project.offsetHeight * 1}`, // Extend end to prevent gaps
                    pin: true,
                    pinSpacing: false, // No extra space
                    anticipatePin: 1, // Smooth pinning
                    invalidateOnRefresh: true, // Recompute on resize
                    // markers:true,
                    id: `project-${index}`,
                    onEnter: () => {
                        // Fade in project and animate text/image
                        gsap.to(project, { opacity: 1, zIndex: 10, duration: 0.5, ease: "power2.out" });
                        gsap.to(textElements, { x: 0, opacity: 1, duration: 0.5, ease: "power2.out", stagger: 0.1 });
                        gsap.to(imageElement, { scale: 1, opacity: 1, duration: 0.5, ease: "power2.out" });
                        // Fade out other projects
                        projects.forEach((otherProject, otherIndex) => {
                            if (otherIndex !== index) {
                                const otherText = otherProject.querySelectorAll("h1, h2, h3, p, .flex");
                                const otherImage = otherProject.querySelector("img");
                                gsap.to(otherProject, { opacity: 0, zIndex: 0, duration: 0.5, ease: "power2.out" });
                                gsap.to(otherText, { x: -50, opacity: 0, duration: 0.5, ease: "power2.out" });
                                gsap.to(otherImage, { scale: 0.8, opacity: 0, duration: 0.5, ease: "power2.out" });
                            }
                        });
                    },
                    onEnterBack: () => {
                        // Fade in when scrolling back up
                        gsap.to(project, { opacity: 1, zIndex: 10, duration: 0.5, ease: "power2.out" });
                        gsap.to(textElements, { x: 0, opacity: 1, duration: 0.5, ease: "power2.out", stagger: 0.1 });
                        gsap.to(imageElement, { scale: 1, opacity: 1, duration: 0.5, ease: "power2.out" });
                        // Fade out other projects
                        projects.forEach((otherProject, otherIndex) => {
                            if (otherIndex !== index) {
                                const otherText = otherProject.querySelectorAll("h1, h2, h3, p, .flex");
                                const otherImage = otherProject.querySelector("img");
                                gsap.to(otherProject, { opacity: 0, zIndex: 0, duration: 0.5, ease: "power2.out" });
                                gsap.to(otherText, { x: -50, opacity: 0, duration: 0.5, ease: "power2.out" });
                                gsap.to(otherImage, { scale: 0.8, opacity: 0, duration: 0.5, ease: "power2.out" });
                            }
                        });
                    },
                    onLeave: () => {
                        // Only fade out if not the last project
                        if (index < projects.length - 1) {
                            gsap.to(project, { opacity: 0, zIndex: 0, duration: 0.5, ease: "power2.out" });
                            gsap.to(textElements, { x: -50, opacity: 0, duration: 0.5, ease: "power2.out" });
                            gsap.to(imageElement, { scale: 0.8, opacity: 0, duration: 0.5, ease: "power2.out" });
                        }
                    },
                    onLeaveBack: () => {
                        // Only fade out if not the first project
                        if (index > 0) {
                            gsap.to(project, { opacity: 0, zIndex: 0, duration: 0.5, ease: "power2.out" });
                            gsap.to(textElements, { x: -50, opacity: 0, duration: 0.5, ease: "power2.out" });
                            gsap.to(imageElement, { scale: 0.8, opacity: 0, duration: 0.5, ease: "power2.out" });
                        }
                    },
                });
            }
        });

        return () => {
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        };
    }, []);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % projectList.length);
    };

    const handlePrevious = () => {
        setCurrentIndex((prevIndex) =>
            (prevIndex - 1 + projectList.length) % projectList.length
        );
    };

    const currentProject = projectList[currentIndex];

    return (
        <div className={`${styles.HomeBackground} overflow-hidden`} ref={containerRef}>
            <div className="grid place-items-center ">
                <div
                    
                    className={`${styles.HeadingTitleProject} text-center w-full p-[3%] mt-[70px] mb-0`}
                >
                    <h1 className="text-white font-BrunoAce max-md:text-3xl">
                        Featured
                        <div className={`${styles.WorkText} font-DancingScript`}>Works</div>
                    </h1>
                </div>
                <div className={`min-h-[200vh] m-[5%] mt-0 max-md:mt-[0%]`}>
                    {projectList.map((project, index) => (
                        <div
                            key={index}
                            ref={(el) => (projectRefs.current[index] = el)}
                            style={{
                                boxShadow: project.shadow,

                            }}
                            className={`${styles.projectCard} relative rounded-[16px] h-[80dvh] grid grid-flow-col p-[2%] m-[2%] place-items-center grid-cols-[1fr,1.5fr] max-md:grid-flow-row max-md:grid-cols-[1fr] `}
                        >
                            <div
                                style={{

                                    backgroundColor: project.color,
                                    borderRadius: "16px"
                                }}

                                className={`${styles.ProjShape} w-[50%] h-[100%] absolute right-0`}
                            ></div>
                            <div className="grid place-items-center grid-flow-row m-[1%] w-[100%]">
                                <h1 className="font-Tourney text-[4rem]">{index < 9 ? `0${index + 1}` : `${index + 1}`}</h1>
                                <h2 className="font-Tektur text-[2rem] text-green-500">{project.name}</h2>
                                <h3 className="font-mono">{project.start} - {project.end}</h3>
                                <p className="font-Lekton text-orange-500">{project.skills.join(", ")}</p>
                                <p className="font-Poppins m-[2%] w-[100%] p-[1%]">{project.desc}</p>
                                <div className="flex justify-evenly w-[100%]">
                                    <a href={project.github} target="_blank"><button className="hover:bg-[#333] text-white hover:border-2 hover:border-blue-400 w-[70px] h-[50px] grid place-items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                        </svg></button></a>
                                    <a href={project.weblink} target="_blank"><button className="hover:bg-[#333] text-white hover:border-2 hover:border-blue-400 w-[70px] h-[50px] grid place-items-center"><FontAwesomeIcon icon={faLink} /></button></a>
                                </div>
                            </div>
                            <div className="grid place-items-center w-[100%]"><img src={project.image} alt={project.name} className="w-[600px] h-[300px] rounded-lg" /></div>
                        </div>
                    ))}
                </div>
            </div>
        </div >
    );
}

export default Projects;