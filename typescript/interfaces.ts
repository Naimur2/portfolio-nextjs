export interface ISocialIconProps {
    icon: React.ReactNode;
    href: string;
    className?: string;
}

export interface IReviewCardProps {
    id?: string;
    text: string;
    name: string;
    company?: string;
    ratings: number;
}
