import React, { useRef } from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem, { timelineItemClasses } from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const MyTimeline = () => {
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
            className="min-h-screen flex items-center justify-center z-0"
            id="timeline"
        >
            <div>
                <h1
                    ref={title}
                    className="text-center text-6xl md:text-8xl   my-5 py-5 font-bold"
                >
                    TIMELINE
                </h1>
                <div className="">
                    <div className="hidden md:block">
                        <Timeline position="alternate">
                            <TimelineItem sx={{ height: "150px" }}>
                                <TimelineOppositeContent
                                    color="text.secondary"
                                    sx={{ py: "25px", px: 4 }}
                                >
                                    <span className="text-2xl font-bold px-4 py-2 text-white border border-white rounded-lg bg-violet-600 hover:bg-white hover:text-black">
                                        2025
                                    </span>
                                </TimelineOppositeContent>
                                <TimelineSeparator>
                                    <TimelineDot
                                        color="primary"
                                        sx={{ width: 20, height: 20 }}
                                    />
                                    <TimelineConnector />
                                </TimelineSeparator>
                                <TimelineContent sx={{ py: "12px", px: 4 }}>
                                    <div className="">
                                        <h1 className="text-2xl font-bold">
                                            I step into a dynamic and inspiring
                                            workplace.
                                        </h1>
                                        {/* <h2 className="">
                                            Tata Consultancy Services.
                                        </h2> */}
                                    </div>
                                </TimelineContent>
                            </TimelineItem>

                            <TimelineItem sx={{ height: "150px" }}>
                                <TimelineOppositeContent
                                    color="text.secondary"
                                    sx={{ py: "25px", px: 4 }}
                                >
                                    <span className="text-2xl font-bold px-4 py-2 text-white border border-white rounded-lg bg-violet-600 hover:bg-white hover:text-black">
                                        2024
                                    </span>
                                </TimelineOppositeContent>
                                <TimelineSeparator>
                                    <TimelineDot
                                        color="secondary"
                                        sx={{ width: 20, height: 20 }}
                                    />
                                    <TimelineConnector />
                                </TimelineSeparator>
                                <TimelineContent sx={{ py: "12px", px: 4 }}>
                                    <div className="">
                                        <h1 className="text-2xl font-bold">
                                            Nodejs Backend Intern
                                        </h1>
                                        <h2 className="">
                                            Barcadly Services, Kolhapur
                                        </h2>
                                    </div>
                                </TimelineContent>
                            </TimelineItem>

                            <TimelineItem sx={{ height: "150px" }}>
                                <TimelineOppositeContent
                                    color="text.secondary"
                                    sx={{ py: "25px", px: 4 }}
                                >
                                    <span className="text-2xl font-bold px-4 py-2 text-white border border-white rounded-lg bg-violet-600 hover:bg-white hover:text-black">
                                        2020 - 2024
                                    </span>
                                </TimelineOppositeContent>
                                <TimelineSeparator>
                                    <TimelineDot
                                        color="success"
                                        sx={{ width: 20, height: 20 }}
                                    />
                                    <TimelineConnector />
                                </TimelineSeparator>
                                <TimelineContent sx={{ py: "12px", px: 4 }}>
                                    <div className="">
                                        <h1 className="text-2xl font-bold">
                                            BTech in Computer Science
                                        </h1>
                                        <h2 className="">
                                            Tatyasaheb Kore Institute Of
                                            Engineering and Technology,
                                            Warananagar
                                        </h2>
                                    </div>
                                </TimelineContent>
                            </TimelineItem>
                        </Timeline>
                    </div>
                    <div className="block md:hidden">
                        <Timeline
                            sx={{
                                [`& .${timelineItemClasses.root}:before`]: {
                                    flex: 0,
                                    padding: 3,
                                },
                            }}
                        >
                            <TimelineItem sx={{ height: "200px" }}>
                                <TimelineSeparator>
                                    <TimelineDot
                                        color="primary"
                                        sx={{ width: 20, height: 20 }}
                                    />
                                    <TimelineConnector />
                                </TimelineSeparator>
                                <TimelineContent sx={{ py: "30px", px: 5 }}>
                                    <div className="">
                                        <span className="max-sm:text-xl text-2xl font-bold px-4 py-2 text-white border border-white rounded-lg bg-violet-600">
                                            2025
                                        </span>
                                        <h1 className="max-sm:text-xl text-1xl font-bold mt-5">
                                            Step into a dynamic and inspiring
                                            workplace.
                                        </h1>
                                        {/* <h1 className="max-sm:text-xl text-2xl font-bold mt-5">
                                            System Engineer
                                        </h1>
                                        <h2 className="max-sm:text-sm">
                                            Tata Consultancy Services.
                                        </h2> */}
                                    </div>
                                </TimelineContent>
                            </TimelineItem>

                            <TimelineItem sx={{ height: "200px" }}>
                                <TimelineSeparator>
                                    <TimelineDot
                                        color="secondary"
                                        sx={{ width: 20, height: 20 }}
                                    />
                                    <TimelineConnector />
                                </TimelineSeparator>
                                <TimelineContent sx={{ py: "30px", px: 5 }}>
                                    <div className="">
                                        <span className="max-sm:text-xl text-2xl font-bold px-4 py-2 text-white border border-white rounded-lg bg-violet-600">
                                            2024
                                        </span>
                                        <h1 className="max-sm:text-xl text-2xl font-bold mt-5">
                                            Nodejs Backend Intern
                                        </h1>
                                        <h2 className="max-sm:text-sm">
                                            Barcadly Services, Kolhapur.
                                        </h2>
                                    </div>
                                </TimelineContent>
                            </TimelineItem>

                            <TimelineItem sx={{ height: "200px" }}>
                                <TimelineSeparator>
                                    <TimelineDot
                                        color="primary"
                                        sx={{ width: 20, height: 20 }}
                                    />
                                    <TimelineConnector />
                                </TimelineSeparator>
                                <TimelineContent sx={{ py: "30px", px: 5 }}>
                                    <div className="">
                                        <span className="max-sm:text-lg  text-2xl font-bold px-4 py-2 text-white border border-white rounded-lg bg-violet-600">
                                            2020 - 2024
                                        </span>
                                        <h1 className="max-sm:text-lg text-2xl font-bold mt-5">
                                            BTech in Computer Science
                                        </h1>
                                        <h2 className="max-sm:text-sm">
                                            Tatyasaheb Kore Institute Of
                                            Engineering and Technology,
                                            Warananagar.
                                        </h2>
                                    </div>
                                </TimelineContent>
                            </TimelineItem>
                        </Timeline>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyTimeline;
