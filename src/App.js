import { useEffect, useMemo, useRef, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim"; // if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.
import Main from "./components/Main";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const App = () => {
    const [init, setInit] = useState(false);
    const [loading, setLoading] = useState(true);
    const titleRef = useRef();
    const spans = gsap.utils.selector(titleRef);

    useGSAP(() => {
        gsap.from(spans("span"), {
            opacity: 0,
            y: -40,
            delay: 0.5,
            duration: 3,
            stagger: 0.3,
        });
    });

    useEffect(() => {
        const loadParticles = async () => {
            initParticlesEngine(async (engine) => {
                await loadSlim(engine);
            }).then(() => {
                setInit(true);
            });
        };
        const timer = setTimeout(() => {
            setLoading(false);
        }, 4000);

        loadParticles();

        return () => clearTimeout(timer);
    }, []);

    const particlesLoaded = (container) => {
        console.log(container);
    };

    const options = useMemo(
        () => ({
            background: {
                color: {
                    value: "#161616",
                },
            },
            fpsLimit: 120,
            interactivity: {
                events: {
                    onClick: {
                        enable: true,
                        mode: "push",
                    },
                    onHover: {
                        enable: true,
                        mode: "repulse",
                    },
                },
                modes: {
                    push: {
                        quantity: 4,
                    },
                    repulse: {
                        distance: 200,
                        duration: 0.4,
                    },
                },
            },
            particles: {
                color: {
                    value: "#ffffff",
                },
                // links: {
                //   color: "#ffffff",
                //   distance: 100,
                //   enable: true,
                //   opacity: 0.5,
                //   width: 1,
                // },
                move: {
                    direction: "top",
                    enable: true,
                    outModes: {
                        default: "bounce",
                    },
                    random: false,
                    speed: 3,
                    straight: false,
                },
                number: {
                    density: {
                        enable: true,
                    },
                    value: 300,
                },
                opacity: {
                    value: 0.5,
                },
                shape: {
                    type: "circle",
                },
                size: {
                    value: { min: 0.1, max: 3 },
                },
            },
            detectRetina: true,
        }),
        []
    );

    if (loading) {
        return (
            <div className="w-full min-h-screen bg-black text-white flex items-center justify-center">
                <h1 ref={titleRef} className="text-5xl font-bold max-sm:text-2xl">
                    <span className="inline-block mr-2"> Curious, </span>
                    <span className="inline-block mr-2"> Creative, </span>
                    <span className="inline-block mr-2"> Coder </span>
                </h1>
            </div>
        );
    }

    return (
        <div className="relative w-full h-full overflow-auto">
            {init && (
                <Particles
                    id="tsparticles"
                    particlesLoaded={particlesLoaded}
                    options={options}
                    className="absolute top-0 left-0 w-full h-full z-0"
                />
            )}
            <div className="relative z-10 text-white">
                <Main />
            </div>
        </div>
    );
};
export default App;
