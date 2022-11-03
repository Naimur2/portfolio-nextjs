import { IncrementDecrement } from "./types";

export interface ISocialIconProps {
    icon: React.ReactNode;
    href: string;
    className?: string;
}

export interface IReviewCardProps {
    id?: string | number;
    text: string;
    name: string;
    company?: string;
    ratings: number;
    active?: boolean;
    animationType?: "left" | "right";
}

export interface IStrengthsProps {
    title: string;
    description: string;
    image: string;
}
