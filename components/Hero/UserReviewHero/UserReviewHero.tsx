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
        <div className="bg-white shadow-small z-10 absolute p-2 w-36 grid gap-2 -top-6 right-2">
            <Ratings
                ratings={ratings}
                className={"grid-cols-[repeat(5,14px)]"}
                starClassName="fill-secondary-200 text-black stroke-1"
                starProps={{ size: 10 }}
            />
            <p className="text-[0.5rem] leading-3">{text}</p>
            <p className="font-semibold text-[0.625rem] leading-4">{name}</p>
        </div>
    );
}
