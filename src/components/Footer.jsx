import { useGSAP } from "@gsap/react";
import React from "react";
import gsap from "gsap";

const Footer = () => {
    const text = "Thank You For Visiting...❤";

    useGSAP(() => {
        gsap.from(".animateText", {
            opacity: 0,
            y: -30,
            delay: 0.5,
            duration: 5,
            stagger: 0.05,
            ease: "power3.out",
            scrollTrigger: {
                trigger: ".animateText",
                scroller: "body",
                markers: false,
                
            },
        });
    });

    return (
        <div className="h-[50vh] flex items-center justify-center mt-16">
            <div>
                <h1 className="text-center  max-sm:text-3xl  text-5xl my-4 font-bold px-3">
                    {text.split("").map((letter, index) => (
                        <span
                            key={index}
                            className="inline-block animateText"
                            style={{
                                marginRight: letter === " " ? "0.5rem" : "0",
                            }}
                        >
                            {letter === " " ? "\u00A0" : letter}
                        </span>
                    ))}
                </h1>
            </div>
        </div>
    );
};

export default Footer;
