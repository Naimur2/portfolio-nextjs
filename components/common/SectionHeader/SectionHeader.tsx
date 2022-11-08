import React from "react";
interface ISectionHeaderProps {
    title: string;
    subtitle?: string;
    className?: string;
    subTitleClassName?: string;
    titleClassName?: string;
}

export default function SectionHeader({
    title,
    subtitle,
    className,
    subTitleClassName,
    titleClassName,
}: ISectionHeaderProps) {
    return (
        <header className={`flex flex-col space-y-4 ${className || ""}`}>
            <h4 className={`text-center lg:text-left ${titleClassName}`}>
                {title}
            </h4>
            {subtitle && (
                <p
                    className={`text-center lg:text-left ${
                        subTitleClassName || ""
                    }`}
                >
                    {subtitle}
                </p>
            )}
        </header>
    );
}
