import Image from "next/image";
import React from "react";
import PrimaryButton from "../common/PrimaryButton/PrimaryButton";
import Strengths from "./Strengths/Strengths";

export default function AboutMe() {
    return (
        <section
            id="about"
            className="px-4 py-20 grid gap-14 container lg:grid-cols-2 lg:gap-20 lg:py-40"
        >
            <div
                className="text-center lg:text-start grid gap-8  
             content-center lg:content-start 
             lg:col-start-2 justify-items-center lg:justify-items-start mx-auto max-w-lg lg:gap-10"
            >
                <h4>I am an expert web developer based in BD</h4>
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Debitis deleniti, dignissimos impedit suscipit quae hic
                    placeat laboriosam itaque quos voluptatum!
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Sit, dolor!
                </p>

                <PrimaryButton className="justify-center">
                    Hire Me
                </PrimaryButton>
            </div>
            <div className="flex flex-col space-y-6 items-center justify-center lg:col-start-1 lg:row-start-1">
                <Strengths
                    image="/svg/web-developer.svg"
                    title="Web Development"
                    description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, dolor!"
                />
                <Strengths
                    image="/svg/web-developer.svg"
                    title="Web Development"
                    description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, dolor!"
                />
                <Strengths
                    image="/svg/web-developer.svg"
                    title="Web Development"
                    description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, dolor!"
                />
            </div>
        </section>
    );
}
