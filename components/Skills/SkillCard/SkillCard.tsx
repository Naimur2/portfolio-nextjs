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
            className={`bg-white w-full  border-2 p-10 flex flex-col gap-6 border-black ${className} `}
        >
            <h5 className="font-bold text-2xl lg:text-3xl max-w-[16ch] leading-normal">
                {title}
            </h5>
            <ul className="flex gap-2 lg:gap-3 flex-wrap">
                {skills.map((skill, index) => (
                    <SkillItem key={index.toString() + "-skill"} text={skill} />
                ))}
            </ul>
        </div>
    );
}
