import React from "react";
import { ISkillCardProps } from "../../../typescript/interfaces";
import SkillItem from "../SkillItem/SkillItem";

export default function SkillCard({
    skills,
    title,
    className = "",
}: ISkillCardProps) {
    return (
        <div
            className={`bg-white w-full max-w-[30rem] mx-auto border-2 p-10 flex flex-col gap-8 border-black ${className} `}
        >
            <h5 className="font-bold text-4xl max-w-[16ch] leading-normal">
                {title}
            </h5>
            <ul className="flex flex-col space-y-4 ml-5">
                {skills.map((skill, index) => (
                    <SkillItem key={index} text={skill} />
                ))}
            </ul>
        </div>
    );
}
