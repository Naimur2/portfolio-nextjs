import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import { HiOutlineArrowRight } from "react-icons/hi";
import { IReviewCardProps } from "../../../typescript/interfaces";
import { IncrementDecrement } from "../../../typescript/types";
import ReviewBox from "../ReviewBox/ReviewBox";
import ReviewCard from "../ReviewCard/ReviewCard";

export default function Review({ reviews }: { reviews: IReviewCardProps[] }) {
    const [currentReview, setCurrentReview] = React.useState(0);
    const [animationType, setAnimationType] =
        React.useState<IncrementDecrement | null>(null);

    const totalReviews = reviews.length;

    const handleReviewChange = (type: IncrementDecrement) => {
        const value = type === "increment" ? 1 : -1;
        const newReviews = currentReview + value;

        if (newReviews < 0 || newReviews > totalReviews - 1) return;

        setAnimationType(type);
        setCurrentReview(newReviews);
    };

    return (
        <div>
            <ReviewBox>
                {reviews.map((review, index) => (
                    <ReviewCard
                        key={review.id}
                        {...review}
                        active={index === currentReview}
                        animationType={
                            currentReview - index === 1 ? "left" : "right"
                        }
                    />
                ))}
            </ReviewBox>
            <div className="flex justify-center space-x-4 mt-10">
                <button
                    onClick={() => handleReviewChange("decrement")}
                    className="px-6 py-2 bg-white  shadow-small hover:bg-secondary-100"
                >
                    <HiOutlineArrowRight
                        className="text-primary-100 rotate-180"
                        size={24}
                    />
                </button>
                <button
                    onClick={() => handleReviewChange("increment")}
                    className="px-6 py-2 bg-white  shadow-small hover:bg-secondary-100"
                >
                    <HiOutlineArrowRight
                        className="text-primary-100 "
                        size={24}
                    />
                </button>
            </div>
        </div>
    );
}
