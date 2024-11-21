import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import ProjectCard from "./ProjectCard";
const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 4,
        slidesToSlide: 4, // optional, default to 1.
    },
    tablet: {
        breakpoint: { max: 1024, min: 768 },
        items: 3,
        slidesToSlide: 3, // optional, default to 1.
    },
    mobile: {
        breakpoint: { max: 767, min: 464 },
        items: 2,
        slidesToSlide: 1, // optional, default to 1.
    },
};

const projects = [<ProjectCard />];

const Slider = () => {
    return (
        <div className="parent">
            <Carousel
                responsive={responsive}
                autoPlay={false}
                swipeable={true}
                draggable={true}
                showDots={true}
                infinite={false}
                partialVisible={false}
                dotListClass="custom-dot-list-style"
            >
                {/* {sliderImageUrl.map((imageUrl, index) => {
                    return (
                        <div className="slider" key={index}>
                            <img src={imageUrl.url} alt="movie" />
                        </div>
                    );
                })} */}
                {projects.map((project, index) => {
                    return (
                        <div className="p-4 mx-5" key={index}>
                            {" "}
                            {project}
                        </div>
                    );
                })}
            </Carousel>
        </div>
    );
};
export default Slider;
