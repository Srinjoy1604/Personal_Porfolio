import React, { useState } from "react";
import styles from "./Common.module.css";
import pj1 from "../images/Project/Project_Indfab.png";
import pj2 from "../images/Project/Project_TAPL.png";
import pj3 from "../images/Project/Project_DocVault.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight, faLink } from "@fortawesome/free-solid-svg-icons";

const projectList = [
    { name: "DocVault", image: pj3, start: "August 2024", end: "October 2024", desc: "Developed Doc Vault, a document management portal for organizing digital files, with a React.js frontend and a Node.js/Express.js backend. Integrated JWT for secure authentication, Firebase for file storage, and MongoDB for metadata management, enabling efficient handling of over 100 documents.", skills: ["React.js", "Node.js", "Express.js", "MongoDB", "Firebase"], github: "https://github.com/Srinjoy1604/DocVault", weblink: "https://doc-vault-beta.vercel.app/" },
    { name: "Indfab", image: pj1, start: "May 2024", end: "July 2024", desc: "Developed and deployed a React.js website for Indfab on Cloudflare, featuring interactive Framer Motion animations and a custom design to showcase services and enhance user experience.", skills: ["React.js", "Framer Motion", "Cloudfare"], github: "https://github.com/Srinjoy1604/Indfab", weblink: "https://indfab.co/" },
    { name: "TAPL", image: pj2, start: "June 2024", end: "August 2024", desc: "Developed and launched a responsive frontend website for Tirupati Ancillaries Pvt Ltd. using HTML, CSS, JavaScript, and Bootstrap, hosted on Firebase, delivering a user-friendly interface tailored to client needs.", skills: ["HTML", "CSS", "JavaScript", "JQuery", "Firebase"], github: "https://github.com/Srinjoy1604/TAPL", weblink: "https://tirupatiancillaries.com/" },
];

function Projects() {
    const [currentIndex, setCurrentIndex] = useState(0);


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
        <div className={`${styles.HomeBackground}`}>
            <div className="grid place-items-center m-[5%] ml-[3%] mr-[3%]">
                <h1 className="text-start w-[100%] p-[3%] font-BrunoAce mt-[120px] max-md:text-3xl">Some of my recent Projects</h1>
                <div className={`${styles.ProjectBlock} bg-slate-900 m-[2%] border-4 rounded-xl w-[80%]`}>
                    <div className={`${styles.projectCard} grid grid-flow-col p-[2%] m-[2%] place-items-center grid-cols-[1fr,1.5fr] max-md:grid-flow-row max-md:grid-cols-[1fr]`}>
                        <div className="grid place-items-center grid-flow-row m-[1%] w-[100%]">
                            <h1 className="font-Tourney text-[4rem]">{currentIndex < 9 ? `0${currentIndex + 1}` : `${currentIndex + 1}`}</h1>
                            <h2 className="font-Tektur text-[2rem] text-green-500">{currentProject.name}</h2>
                            <h3 className="font-mono ">{currentProject.start} - {currentProject.end}</h3>
                            <p className="font-Lekton text-orange-500">{currentProject.skills.join(", ")}</p>
                            <p className="font-Poppins m-[2%] w-[100%] p-[1%]">{currentProject.desc}</p>
                            <div className="flex justify-evenly w-[100%]">
                                <a href={currentProject.github} target="_blank"><button className="hover:bg-[#333] text-white hover:border-2 hover:border-blue-400 w-[70px] h-[50px] grid place-items-center">          <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-4 w-4"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                </svg></button></a>
                                <a href={currentProject.weblink} target="_blank"><button className="hover:bg-[#333] text-white hover:border-2 hover:border-blue-400 w-[70px] h-[50px] grid place-items-center"><FontAwesomeIcon icon={faLink} /></button></a>
                            </div>
                        </div>
                        <div className="grid place-items-center w-[100%]"><img src={currentProject.image} alt={currentProject.name} className="w-[600px] h-[300px] rounded-lg" /></div>

                    </div>
                    <div className={`${styles.navigationButtons} flex justify-between p-[1%]`}>
                        <button onClick={handlePrevious} className={`${styles.navButton} bg-green-400 text-gray-900`} >
                            <FontAwesomeIcon icon={faArrowLeft} />
                        </button>
                        <button onClick={handleNext} className={`${styles.navButton}  bg-green-400 text-gray-900`}>
                            <FontAwesomeIcon icon={faArrowRight} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Projects;
