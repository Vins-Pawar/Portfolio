import React, { useRef } from "react";
import Header from "./Header";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Home = () => {
    const firstNameRef = useRef();
    const secondNameRef = useRef();

    const breakText = () => {};

    useGSAP(() => {
        const tl = gsap.timeline();
        tl.from(firstNameRef.current, {
            opacity: 0,
            delay: 0.3,
            y: 50,
            duration: 2,
        });
        tl.from(secondNameRef.current, {
            opacity: 0,
            y: 50,
            duration: 2,
        });
    }, [firstNameRef]);
    return (
        <div className="w-full h-screen " id="home">
            <Header />
            <div className="font-bold text-center tracking-wider select-none h-full  flex justify-center items-center">
                <div className="text-7xl md:text-9xl leading-normal">
                    <h1 ref={firstNameRef} className="">
                        VINAYAK
                    </h1>
                    <h1 ref={secondNameRef} className="">
                        PAWAR
                    </h1>
                </div>
            </div>
        </div>
    );
};

export default Home;
