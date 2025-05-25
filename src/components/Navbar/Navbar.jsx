import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "../../pages/Common.module.css";
import hambuger from "../../images/Navbar/hamburger-menu.png";
import cross from "../../images/Navbar/cross.png";
import NameLogo from "../../images/InitialsLogo.png";
const items = [
    { name: "Home", link: "/" },
    { name: "Projects", link: "/projects" },
    { name: "Skills", link: "/skills" },
    { name: "Experience", link: "/experience" },
    { name: "Contact", link: "/contactus" },
];

const Resume_link = import.meta.env.VITE_RESUME_LINK;
const openLink = () => {
    window.open(Resume_link, "_blank");
};

function Navbar() {
    const location = useLocation();
    const [NavbarToggle, setNavToggle] = useState(true);
    const ToggleNavbar = () => {
        setNavToggle(!NavbarToggle);
    };
    return (
        <div className="h-[5%]">
            <div className={`${styles.NavStyle} fixed top-0 z-20 max-sm:hidden `}>
                <div className="grid place-items-center w-screen border-b-2 border-b-orange-500 p-[1%] grid-flow-col h-fit">
                    <div className="w-full grid place-items-start">
                        <Link to="/">
                            <h1 className="bg-blue-950 p-1 text-green-300 cursor-pointer"><img src={NameLogo} className="w-[50px] h-auto"></img></h1>
                        </Link>
                    </div>
                    <div className="w-full">
                        <ul className="grid grid-flow-col w-full max-sm:hidden">
                            {items.map((item) => (
                                <Link to={item.link} key={item.name} className="flex justify-center align-middle text-center">
                                    <li
                                        className={`flex justify-center items-center align-middle text-center text-lg hover:text-blue-400 cursor-pointer ease-in duration-300  font-Lekton ${location.pathname === item.link
                                            ? "text-green-400 underline decoration-blue-500 hover:decoration-green-500"
                                            : "text-white"
                                            }`}
                                    >
                                        {item.name}
                                    </li>
                                </Link>
                            ))}
                            <li className="flex justify-center align-center"><button onClick={openLink} className="border-1 border-white hover:border-orange-400 font-BrunoAce">Resume</button></li>
                        </ul>

                    </div>
                </div>


            </div>
            <div className="w-[100vw] fixed sm:hidden bg-slate-950 z-[20]">
                <div className="grid grid-flow-col">
                    <div className="w-full grid place-items-start">
                        <Link to="/">
                            <h1 className="bg-blue-950 p-1 text-green-300 cursor-pointer"><img src={NameLogo} className="w-[50px] h-auto"></img></h1>
                        </Link>
                    </div>
                    <div onClick={ToggleNavbar} className="grid place-items-end p-[2%] sm:hidden">{NavbarToggle ? <img src={hambuger} className="w-[50px] h-auto"></img> : <img src={cross} className="w-[50px] h-auto"></img>}</div>
                </div>

            </div>
            <div className={`fixed ${NavbarToggle ? "left-[-200%]" : "left-[0]"} bg-slate-950 mt-[60px] w-[100vw] h-[40vh] z-[20] transition-all ease-in-out duration-300 sm:hidden`}>
                <ul className={`grid w-full h-[80%] `}>
                    {items.map((item) => (
                        <Link to={item.link} key={item.name} className={`${styles.Sidebar} flex justify-center align-middle text-center`}>
                            <li
                                className={`flex justify-center items-center align-middle text-center text-lg hover:text-orange-400 cursor-pointer ease-in duration-300  font-Lekton ${location.pathname === item.link
                                    ? "text-green-400 underline decoration-blue-500 hover:decoration-green-500"
                                    : "text-white"
                                    }`}
                            >
                                {item.name}
                            </li>
                        </Link>
                    ))}
                    <li className={`border-b-4 border-orange-400  flex justify-center align-center m-[2%] p-[1%]`}><button onClick={openLink} className={`border-1 border-white hover:border-orange-400 font-BrunoAce`}>Resume</button></li>
                </ul>
            </div>
            <div>

            </div>
        </div>
    );
}

export default Navbar;

