import React, { Suspense } from "react";
import Home from "./Home";
import { About } from "./About";
import Footer from "./Footer";
import Skills from "./Skills";
import Projects from "./Projects";
const MyTimeline = React.lazy(() => import("./MyTimeline"));

const Main = () => {
    return (
        <div>
            <Home />
            <About />
            <Skills />
            <Suspense fallback={<div> Please Wait... </div>}>
                <MyTimeline />
            </Suspense>
            <Projects />
            <Footer />
        </div>
    );
};

export default Main;
