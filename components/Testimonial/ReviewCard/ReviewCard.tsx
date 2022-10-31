import React from "react";
import { IReviewCardProps } from "../../../typescript/interfaces";
import Ratings from "../../common/Ratings/Ratings";

export default function ReviewCard({
    name,
    ratings,
    text,
    company,
}: IReviewCardProps) {
    return (
        <div className="p-4 h-72 flex flex-col justify-between">
            <p className="text-xl text-gray-700">{text}</p>
            <div className="grid gap-1">
                <h4>{name}</h4>
                <p>{company}</p>
                <Ratings ratings={ratings} />
            </div>
        </div>
    );
}
