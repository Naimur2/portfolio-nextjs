import { IReviewCardProps } from "../../../typescript/interfaces";
import ReviewBox from "../ReviewBox/ReviewBox";
import ReviewCard from "../ReviewCard/ReviewCard";
import React from "react";

export default function Review({ reviews }: { reviews: IReviewCardProps[] }) {
    const [currentReview, setCurrentReview] = React.useState(reviews?.[0]);

    const handleReviewChange = (review: IReviewCardProps) => {
        setCurrentReview(review);
    };

    return (
        <div>
            <ReviewBox>
                <ReviewCard {...currentReview} />
            </ReviewBox>
        </div>
    );
}
