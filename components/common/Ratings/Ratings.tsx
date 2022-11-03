import Star from "./Star/Star";
import useRatings from "../../../hooks/useRatings";

export default function Ratings({
    ratings,
    className,
    starClassName,
    starProps,
}: {
    ratings: number;
    className?: string;
    starClassName?: string;
    starProps?: any;
}) {
    const ratingsValues = useRatings({
        currentRatings: ratings || 0,
        maximumRatings: 5,
    });

    return (
        <div className={"grid grid-cols-[repeat(5,18px)]" + " " + className}>
            {ratingsValues.map((rat) => {
                const isHalfStar = rat.value === 0.5;

                const state = isHalfStar ? "half" : "full";

                return (
                    <Star
                        key={rat.key}
                        state={rat.value === 0 ? "empty" : state}
                        size={14}
                        className={"text-secondary-200" + " " + starClassName}
                        {...starProps}
                    />
                );
            })}
        </div>
    );
}
