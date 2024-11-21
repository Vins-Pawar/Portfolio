import React from "react";

function ProjectCard({ project }) {
    console.log(project);
    const {
        name,
        image,
        techStack,
        description,
        liveDemo,
        github,
        liveDemoLink,
        githubLink,
    } = project;

    return (
        <div className="max-w-sm max-sm:m-4 mx-auto bg-transparent text-white shadow-lg rounded-lg overflow-hidden m-2 border border-slate-700 p-4 hover:shadow-lg hover:shadow-slate-500 ">
            <div className="relative h-56">
                <img
                    src={image}
                    alt="card-image"
                    className="w-full h-full rounded-lg"
                />
            </div>

            <div className="py-4">
                <h5 className="text-xl font-bold mb-2 ">{name}</h5>

                <p className="text-gray-500">{description}</p>
            </div>
            <div className="py-1">
                <div className="flex gap-4">
                    {techStack.map((tech, index) => (
                        <img
                            key={index}
                            className="  w-10 h-10 rounded-full p-1 hover:border hover:border-white hover:shadow-sm hover:shadow-white"
                            src={"./logos/" + tech + ".png"}
                        />
                    ))}
                </div>
            </div>
            <div className="flex flex-row my-2 gap-2 text-black font-semibold">
                {github && (
                    <a href={githubLink} className="w-full">
                        <button className="w-full bg-white py-1   rounded-lg hover:text-white hover:bg-transparent hover:border hover:border-white overflow-hidden">
                            <div className="flex flex-row items-center justify-center gap-1">
                                <img
                                    src="./logos/github.png "
                                    className="  w-8 h-8 rounded-full p-1"
                                    alt="github"
                                />
                                View Code
                            </div>
                        </button>
                    </a>
                )}
                {liveDemo && (
                    <button className="w-full bg-white py-1    rounded-lg  overflow-hidden">
                        <div className="flex flex-row items-center justify-center gap-1">
                            <img
                                src="./logos/link.png "
                                className="  w-8 h-8 rounded-full p-1"
                                alt="github"
                            />
                            Live Demo
                        </div>
                    </button>
                )}
            </div>
        </div>
    );
}

export default ProjectCard;
