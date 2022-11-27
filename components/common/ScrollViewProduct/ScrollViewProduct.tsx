import Image from "next/image";
import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { IScrollViewProductProps } from "../../../typescript/interfaces";
import { HScrollItem } from "../../HScroll/HScroll";
import Tag from "./Tag/Tag";

const DEFAULT_IMAGE = "images/fallback.jpg";

export default function ScrollViewProduct({
    title,
    description,
    image,
    tags,
    onSeeMoreClick,
    onTagClick,
}: IScrollViewProductProps) {
    return (
        <HScrollItem>
            <div className="border-1 border-black min-w-[18rem] lg:min-w-fit">
                <div className="pt-4 px-4 bg-[#DAD4CD] h-56 overflow-hidden">
                    <Image
                        alt="user-portfolio"
                        src={image || DEFAULT_IMAGE}
                        layout="responsive"
                        objectFit="cover"
                        width={"100%"}
                        height={"100%"}
                    />
                </div>
                <div className="p-4 grid gap-5">
                    <div className="grid gap-3">
                        <h5 className="h-12 overflow-hidden md:h-16">
                            {title?.trim()}
                        </h5>
                        <p className="text-sm text-gray-600 text-justify h-[4rem] overflow-hidden">
                            {description?.trim().slice(0, 100) + "..."}
                        </p>
                    </div>
                    <div className="flex justify-between items-center">
                        <div className="flex space-x-2">
                            {tags?.slice(0, 2).map((tag) => (
                                <Tag
                                    key={tag}
                                    text={tag}
                                    onClick={() => onTagClick?.(tag)}
                                />
                            ))}
                        </div>
                        <span className=" font-bold text-base   cursor-pointer flex items-center space-x-1 transition-all ease-in-out text-primary-100 hover:text-primary-100/60">
                            <span onClick={onSeeMoreClick}>See Details</span>
                            <MdOutlineKeyboardArrowRight size={18} />
                        </span>
                    </div>
                </div>
            </div>
        </HScrollItem>
    );
}
