import { useGSAP } from "@gsap/react";
import React from "react";
import gsap from "gsap";

const Header = () => {
    useGSAP(() => {
        const tl = gsap.timeline();
        tl.from("li", {
            y: -20,
            opacity: 0,
            duration: 1,
            stagger: 0.3,
            delay: 0.5,
        });
    });
    return (
        <div className="flex justify-center min-w-full absolute z-50 bg-transparent">
            <div className="md:flex md:justify-center   mt-20 md:mt-10 text-sm md:text-lg  items-start  rounded-lg bg-transparent backdrop-blur-lg">
                <ol className="flex justify-between border-[0.1px] p-1 border-slate-400 rounded-lg font-semibold bg-black opacity-80 shadow-sm shadow-slate-500 ">
                    <li className="hover:text-black hover:bg-white  px-2 py-2 md:py-2 md:px-6 rounded-lg cursor-pointer">
                        <a href="#home">Home</a>
                    </li>

                    <li className="hover:text-black hover:bg-white px-2 py-2 md:py-2 md:px-6 rounded-lg cursor-pointer">
                        <a href="#about">About</a>
                    </li>

                    <li className="hover:text-black hover:bg-white  px-2 py-2 md:py-2 md:px-6 rounded-lg cursor-pointer">
                        <a href="#skills">Skills</a>
                    </li>
                    <li className="hover:text-black hover:bg-white  px-2 py-2 md:py-2 md:px-6 rounded-lg cursor-pointer">
                        <a href="#timeline">Timeline</a>
                    </li>
                    <li className="hover:text-black hover:bg-white  px-2 py-2 md:py-2 md:px-6 rounded-lg cursor-pointer">
                        <a href="#projects">Projects</a>
                    </li>
                </ol>
            </div>
        </div>
    );
};

export default Header;
