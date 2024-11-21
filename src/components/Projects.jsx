import React, { useRef } from "react";
import ProjectCard from "./ProjectCard";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { projectsInfo } from "../constants";

const Projects = () => {
   
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
            className="min-h-screen grid grid-cols-1 place-content-center "
            id="projects"
        >
            <div className=" ">
                <h1
                    ref={title}
                    className="text-center text-6xl md:text-8xl   my-5 py-5 font-bold"
                >
                    PROJECTS
                </h1>
                <div className="flex items-center justify-center flex-wrap">
                    {projectsInfo.map((project, index) => (
                        <ProjectCard key={index} project={project} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Projects;
