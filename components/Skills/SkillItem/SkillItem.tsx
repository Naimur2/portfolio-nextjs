import React from "react";
import { BiCheckCircle } from "react-icons/bi";
import TickMark from "./TickMark";

export default function SkillItem({
    text,
    className,
}: {
    text: string;
    className?: string;
}) {
    return (
        <li
            className={`flex flex-row items-center space-x-4 text-black ${className}`}
        >
            <TickMark />
            <span className="text-xl font-medium">{text}</span>
        </li>
    );
}
