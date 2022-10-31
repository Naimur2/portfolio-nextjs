import { BsStar, BsStarFill, BsStarHalf, IconName } from "react-icons/bs";

interface IStarProps {
    state: "full" | "half" | "empty";
    size: number;
    color?: string;
    className?: string;
}

export default function Star({
    state = "empty",
    size,
    color,
    className,
}: IStarProps) {
    const stars = {
        full: (props: IStarProps) => <BsStarFill {...props} />,
        half: (props: IStarProps) => <BsStarHalf {...props} />,
        empty: (props: IStarProps) => <BsStar {...props} />,
    };

    const RatingsStar = stars[state];

    return <RatingsStar size={size} color={color} className={className} />;
}
