import React from "react";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { IActionSheetItemProps } from "../../../../typescript/interfaces";

export default function AcionSheetItem({
    children,
    onClick,
    isCheck,
}: IActionSheetItemProps) {
    return (
        <li
            onClick={onClick}
            className={`px-4
            hover:text-primary-100 hover:bg-purple-100
            flex justify-between gap-2 items-center
             active:text-primary-100 border-b-1 py-3  border-b-[#cccccc] last:border-none  ${
                 isCheck ? "text-gray-800 bg-purple-100 font-medium" : ""
             }`}
        >
            {children}
            {isCheck && (
                <BsFillCheckCircleFill className="text-green-500" size={18} />
            )}
        </li>
    );
}
