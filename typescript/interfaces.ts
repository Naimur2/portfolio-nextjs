import React from "react";
import { TScreens } from "./types";

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

export interface ITagProps {
    onClick?: () => void;
    text: string;
}

export interface IScrollViewProductProps {
    title: string;
    description: string;
    image: string;
    tags?: string[];
    onSeeMoreClick: () => void;
    onTagClick?: (tag: string) => void;
}

export interface IActionSheetItemProps {
    children: React.ReactNode;
    onClick: () => void;
    isCheck?: boolean;
}

export interface INavLinkProps {
    href: string;
    text: string;
}

export interface IDeviceContext {
    device: TScreens | null;
    screenSize: number;
    setDevice: (device: TScreens) => void;
}
