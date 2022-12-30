import React from "react";
import { ITagProps } from "../../../../typescript/interfaces";

export default function Tag({ onClick, text }: ITagProps) {
    return (
        <span
            onClick={onClick}
            className="bg-[#2A71F821] hover:bg-[#2A71F840] px-2 py-1 text-xs font-medium cursor-pointer "
        >
            {text}
        </span>
    );
}
