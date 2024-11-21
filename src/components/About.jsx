import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const About = () => {
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
            className="min-h-screen flex items-center justify-center "
            id="about"
        >
            <div className="max-w-[1550px]">
                <h1
                    ref={title}
                    className="text-center text-6xl md:text-8xl   my-5 py-5 font-bold"
                >
                    ABOUT ME
                </h1>
                <div className="grid md:grid-cols-2 max-sm:grid-rows-2 grid-rows-auto justify-center items-center">
                    <div className="py-5 px-2 md:p-10 md:text-3xl  text-2xl text-center  font-semibold  order-2 md:order-1 md:text-left  ">
                        "I’m someone who believes in diving deep—whether it’s
                        into new ideas, complex concepts, or exciting
                        challenges. I love turning curiosity into innovation,
                        crafting solutions that not only solve problems but also
                        leave a meaningful impact. ".
                        <div className="w-full flex items-center justify-center gap-5  p-4 my-2">
                            <a href="https://www.linkedin.com/in/vinayakapawar/">
                                <img
                                    src="/socialMedia/linkedin.png"
                                    alt=""
                                    className="w-14 h-14 p-1  rounded-full hover:border hover:border-white hover:shadow-md hover:shadow-slate-400"
                                />
                            </a>
                            <a href="https://github.com/Vins-Pawar?tab=repositories">
                                <img
                                    src="/socialMedia/github.png"
                                    alt=""
                                    className="w-14 h-14  p-1 rounded-full hover:border hover:border-white hover:shadow-md hover:shadow-slate-400"
                                />
                            </a>
                            <a href="https://www.instagram.com/vins_pawar_/">
                                <img
                                    src="/socialMedia/instagram.png"
                                    alt=""
                                    className="w-14 h-14  p-1 rounded-full hover:border hover:border-white hover:shadow-md hover:shadow-slate-400"
                                />
                            </a>
                        </div>
                    </div>
                    <div className="flex justify-center order-1 md:order-2   ">
                        <img
                            className="w-80 h-80 max-sm:w-60 max-sm:h-60 md:h-auto rounded-full md:rounded-lg border border-slate-200 shadow-md shadow-gray-500"
                            src="/images/vins.jpeg"
                            alt=""
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};
