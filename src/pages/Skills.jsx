import React, { useRef, useEffect, useState } from "react";
import styles from "./Common.module.css";
import SkillList from "./Skills.json";
import cf from "../images/Skills/codeforces.png";
import lt from "../images/Skills/LeetCode_Logo_1.png";
import SkillHeading from "../images/Skills/Skills_heading2.png";
import { gsap } from "gsap";

function Skills() {
  const iconRefs = useRef([]);
  const [activeTab, setActiveTab] = useState(SkillList[0].GroupName);

  const addToRefs = (el) => {
    if (el && !iconRefs.current.includes(el)) {
      iconRefs.current.push(el);
    }
  };

  useEffect(() => {
    iconRefs.current.forEach((icon) => {
      gsap.to(icon, {
        y: "+=6",
        repeat: -1,
        yoyo: true,
        duration: 2,
        ease: "power1.inOut",
      });
    });
  }, []);

  return (
    <div className={`${styles.SkillBackground} grid place-items-center`}>
      <div className="w-[100%] h-[100%] m-[5%] ml-[3%] mr-[3%]">
        <div className="grid place-items-center mt-[100px]">
          <div className="grid place-items-center">
            <div className="grid place-items-start w-[100%] p-[1%] pb-0 ml-[2%]">
              <h1>
                <span className="text-green-400">{`<>`}</span>
                <span className="font-BrunoAce">{`Technical Skills`}</span>
              </h1>
            </div>
            <div className={`w-full p-[2%] font-Poppins text-[1.2rem]`}>
              <p>
                I display a diverse set of skills in{" "}
                <span className="text-orange-400">full-stack development</span>,
                working with the <span className="text-green-300">MERN stack</span> and{" "}
                <span className="text-indigo-400">Python</span>. I build responsive web apps,
                integrate APIs, automate tasks, and explore{" "}
                <span className="text-rose-500">generative AI</span>. My work focuses on clean,
                efficient, and user-friendly solutions. I adapt quickly to new challenges and
                enjoy turning ideas into practical, real-world applications.
              </p>
            </div>
          </div>

          {/* Tabs */}
          <div className="w-full flex justify-center flex-wrap items-center mb-4">
            {SkillList.map((group, idx) => (
              <button
                key={idx}
                onClick={() => {
                  iconRefs.current = []; // reset refs for new group
                  setActiveTab(group.GroupName);
                }}
                className={`m-2 px-4 py-2 rounded-lg font-Poppins border ${
                  activeTab === group.GroupName
                    ? "bg-green-500 text-black"
                    : "bg-slate-800 text-white hover:border-green-500"
                }`}
              >
                {group.GroupName}
              </button>
            ))}
          </div>

          {/* Selected Group */}
          <div className="w-full flex justify-center flex-wrap items-center">
            {SkillList.filter((group) => group.GroupName === activeTab).map((group, index) => (
              <div
                key={index}
                className={`${styles.skillGroup} p-[2%] m-[2%] text-slate-100 bg-slate-900 border-2 border-green-500 rounded-lg`}
              >
                {/*<h2 className="font-Poppins text-[1.5rem] underline decoration-red-500">
                  {group["GroupName"]}
                </h2>*/}
                <div className={`${styles.skillItems} flex flex-wrap justify-evenly gap-2`}>
                  {group.items.map((item, itemIndex) => (
                    <div
                      key={itemIndex}
                      ref={addToRefs}
                      className={`${styles.skillItem} text-black text-center p[1.5%]`}
                    >
                      <div className={styles.logoImage}>
                        <img src={item.Logo} className={styles.Iconlogo} alt={item.Name} />
                      </div>
                      <h3 className="font-Poppins">{item.Name}</h3>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
