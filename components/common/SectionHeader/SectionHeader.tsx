import React from "react";
interface ISectionHeaderProps {
    title: string;
    subtitle?: string;
    className?: string;
}

export default function SectionHeader({
    title,
    subtitle,
    className,
}: ISectionHeaderProps) {
    return (
        <header className={`grid gap-3 ${className}`}>
            <h4 className="text-center">{title}</h4>
            {subtitle && <p className="text-center">{subtitle}</p>}
        </header>
    );
}
