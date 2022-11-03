import Image from "next/image";
import React from "react";
import PrimaryButton from "../common/PrimaryButton/PrimaryButton";
import Strengths from "./Strengths/Strengths";

export default function AboutMe() {
    return (
        <section className="px-4 py-20 grid gap-14">
            <div className="text-center grid gap-4 items-center content-center">
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
                <div className="flex justify-center">
                    <PrimaryButton>Hire Me</PrimaryButton>
                </div>
            </div>
            <div className="grid gap-4">
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
