import React from "react";
import { useRef,useEffect } from "react";
import styles from "./Common.module.css";
import SkillList from "./Skills.json";
import cf from "../images/Skills/codeforces.png";
import lt from "../images/Skills/LeetCode_Logo_1.png";
import { gsap } from "gsap";
function Skills() {
  const iconRefs = useRef([]);

  // Function to add refs dynamically
  const addToRefs = (el) => {
    if (el && !iconRefs.current.includes(el)) {
      iconRefs.current.push(el);
    }
  };
  useEffect(() => {
    // GSAP Animation for floating effect
    iconRefs.current.forEach((icon) => {
      gsap.to(icon, {
        y: "+=6", // Smooth floating effect
        repeat: -1, // Infinite loop
        yoyo: true, // Reverse motion
        duration: 2, // Slower movement for a soothing effect
        ease: "power1.inOut",
      });
    });
  }, []);
  return (
    <div className={`${styles.HomeBackground} grid place-items-center`}>
      <div className="w-[90%] h-[100%] m-[5%] ml-[3%] mr-[3%]">
        <div className="grid place-items-center mt-[120px]">
          <div className="bg-slate-400 grid place-items-center grid-col-2 p-[2%] w-[90%] border-2 border-gray-900 rounded-lg">
            <h1 className="m-[1%] font-BrunoAce text-black max-sm:text-[1.5rem]">Coding Profiles</h1>
            <div className="flex justify-evenly align-middle items-center text-black flex-wrap w-[100%]">
              <a href="https://codeforces.com/profile/Srinjoy_Roy" target="_blank" className="m-[1%] text-black"><button className={`${styles.codeforcesBut} flex justify-evenly align-middle text-center items-center w-[150px]`}><span className="m-[1%] font-Poppins"><img src={cf} className={`w-[25px] m-[1%]`}></img></span>Codeforces</button></a>
              <a href="https://leetcode.com/u/Ironman1604/ " target="_blank" className="m-[1%] text-white"><button className={`${styles.leetcodeBut} flex justify-evenly align-middle text-center items-center w-[150px]`}><span className="m-[1%] font-Poppins"><img src={lt} className={`w-[25px] m-[1%]`}></img></span>Leetcode</button></a>
            </div>
          </div>
          {SkillList.map((group, index) => (
            <div key={index} className={`${styles.skillGroup} w-[85%]  m-[2%] text-slate-100 bg-slate-900 border-2 border-orange-400 rounded-lg`}>
              <h2 className="font-BrunoAce text-[1.5rem] underline decoration-red-500">{group["GroupName"]}</h2>
              <div className={`${styles.skillItems} flex flex-wrap justify-evenly m-[1%]`}>
                {group.items.map((item, itemIndex) => (
                  <div key={itemIndex}  ref={addToRefs} className={`${styles.skillItem} text-black text-center`}>
                    <div className={styles.logoImage}>
                      <img src={item.Logo} className={styles.Iconlogo}></img>
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
  );
}

export default Skills;
