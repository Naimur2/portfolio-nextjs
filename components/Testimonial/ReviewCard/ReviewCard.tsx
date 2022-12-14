import React from "react";
import { IReviewCardProps } from "../../../typescript/interfaces";
import Ratings from "../../common/Ratings/Ratings";

function ReviewCard(
    { name, ratings, text, company, active, animationType }: IReviewCardProps,
    ref?: React.Ref<HTMLDivElement>
) {
    const inactiveClassName =
        animationType === "left"
            ? "translate-x-[10000px] opacity-0"
            : "translate-x-[-10000px] opacity-0";
    return (
        <div
            className={`p-6 h-full flex flex-col justify-between absolute top-0
            left-0 w-full transition-all duration-500 ease-in-out -z-10
            ${active ? "translate-x-0 z-10 opacity-100" : inactiveClassName}`}
            ref={ref}
        >
            <p className="text-xl text-gray-700 max-w-[200ch] overflow-hidden">
                {text}
            </p>
            <div className="grid gap-1 lg:flex lg:justify-between lg:items-center">
                <div className="flex flex-col space-y-1">
                    <h4>{name}</h4>
                    <p>{company}</p>
                </div>
                <Ratings
                    ratings={ratings}
                    starClassName="lg:text-2xl"
                    className="lg:grid-cols-[repeat(5,30px)]"
                />
            </div>
        </div>
    );
}

export default React.forwardRef(ReviewCard);
