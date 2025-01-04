import React from "react";
import styles from "./Common.module.css";
import ExperienceList from "./Experience.json";
function Experience() {
    return (
        <div className={`${styles.HomeBackground} grid place-items-center`}>
            <div className="w-[90%] h-[100%]  ml-[3%] mr-[3%]">
                <div className="grid place-items-center mt-[120px]">
                    <div className="grid grid-cols-2 gap-4 w-[100%] h-[100%] place-items-center max-[1007px]:grid-cols-1">
                        {ExperienceList.map((exp, index) => (
                            <div key={index} className={`${styles.ExpBlock} p-[2%] w-[90%] h-[100%]`}>

                                <div className="grid grid-flow-col max-[455px]:grid-flow-row ">
                                    <div className="m-[1%] min-w-[150px] h-[100%] grid place-items-center"><img src={exp.Image} className="h-[100%]"></img></div>
                                    <div className="m-[1%]">
                                        <h1 className="font-BrunoAce text-[2rem] text-green-400">{exp.Name}</h1>
                                        <h3 className="font-Lekton">{`${exp["Start Date"]} - ${exp["End Date"]}`}</h3>
                                        <h2 className="font-Tektur text-orange-300">{exp.Role}</h2>
                                        <h4 className="font-mono">{exp.Location}</h4>
                                    </div>
                                </div>
                                <p className="font-Poppins p-[2%] text-sm">{exp.Desc}</p>
                            </div>


                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Experience;