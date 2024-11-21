import { useGSAP } from "@gsap/react";
import React, { useRef } from "react";
import gsap from "gsap";
import { allSkills } from "../constants";

const Skills = () => {
    const title = useRef();
    useGSAP(() => {
        gsap.from(title.current, {
            scale: 0.9,
            opacity: 0,
            duration: 2,
            delay: 0.5,
            scrollTrigger: {
                trigger: title.current,
                scroller: "body",
                markers: false,
            },
        });
    });
    return (
        <div
            className="min-h-screen w-full flex items-center justify-center"
            id="skills"
        >
            <div>
                <h1
                    ref={title}
                    className="text-center text-7xl md:text-8xl  my-5 py-5 font-bold"
                >
                    SKILLS
                </h1>
                <div className="flex flex-wrap justify-center w-full p-10 max-sm:p-1">
                    {Object.entries(allSkills).map(
                        ([skill, logo], index) => (
                            <div
                                key={index}
                                className=" max-sm:px-3 max-sm:py-2 px-6 py-2 max-sm:m-2 max-sm:gap-1 border border-slate-400 flex items-center rounded-lg gap-3 md:m-4 hover:text-black hover:bg-slate-200"
                            >
                                <img
                                    src={"./logos/" + logo}
                                    alt={skill}
                                    className="max-sm:w-7 max-sm:h-7 w-12 h-12"
                                />
                                <h1 className="max-sm:text-sm text-xl font-bold">
                                    {skill}
                                </h1>
                            </div>
                        )
                    )}
                </div>
            </div>
        </div>
    );
};

export default Skills;
