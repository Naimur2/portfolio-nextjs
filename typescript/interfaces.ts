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

export interface IProject {
    title: string;
    description: string;
    image: string;
    tags?: string[];
    onSeeMoreClick: () => void;
    onTagClick?: (tag: string) => void;
    onClick?: () => void;
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

export interface IUseWindowSize {
    windowSize: number | undefined;
    isGreaterThan: (size: TScreens) => boolean;
    isLessThan: (size: TScreens) => boolean;
    isBetween: (min: TScreens, max: TScreens) => boolean;
    isBetweenOrEqual: (min: TScreens, max: TScreens) => boolean;
    isGreaterThanEqual: (size: TScreens) => boolean;
    isLessThanEqual: (size: TScreens) => boolean;
    isEqual: (size: TScreens) => boolean;
}

export interface ICategory {
    id?: number | string;
    title: string;
    slug: string;
}

export interface IActionSheet {
    items: ICategory[];
    onSelect: (item: ICategory) => void;
    selected: ICategory | null;
}

export interface ISkillCardProps {
    title: string;
    skills: string[];
    className?: string;
}

export interface IContextActions {
    type: string;
    payload: any;
}
