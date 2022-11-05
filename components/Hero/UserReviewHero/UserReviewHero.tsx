import React from "react";
import Ratings from "../../common/Ratings/Ratings";

interface UserReviewHeroProps {
    name: string;
    ratings: number;
    text: string;
}

export default function UserReviewHero({
    name,
    ratings = 5,
    text,
}: UserReviewHeroProps) {
    return (
        <div className="bg-white shadow-small z-10 absolute p-2 lg:px-4 lg:py-3 w-36 lg:w-60 grid gap-2 lg:gap-4 -top-6 right-2">
            <Ratings
                ratings={ratings}
                className={
                    "grid-cols-[repeat(5,14px)] lg:text-xl lg:grid-cols-[repeat(5,21px)]"
                }
                starClassName="fill-secondary-200 text-black stroke-1 lg:text-50"
            />
            <p className="text-[0.5rem] leading-3 lg:text-sm lg:leading-4">
                {text}
            </p>
            <p className="font-semibold text-[0.625rem] leading-4 lg:text-sm lg:leading-5">
                {name}
            </p>
        </div>
    );
}
