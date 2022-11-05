import React from "react";

interface PrimaryButtonProps {
    children: React.ReactNode;
    className?: string;
    onClick?: () => void;
    rest?: React.ButtonHTMLAttributes<HTMLButtonElement>;
}

export default function PrimaryButton({
    children,
    className,
    onClick,
    ...rest
}: PrimaryButtonProps) {
    return (
        <button
            className={`primary-button ${className ?? ""}`}
            onClick={onClick}
            {...rest}
        >
            {children}
        </button>
    );
}
