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
            className={
                "bg-secondary-100 min-w-[7rem] transition-all ease-in font-bold py-3 px-5 shadow-medium hover:shadow-none focus:shadow-none  text-sm" +
                " " +
                className
            }
            onClick={onClick}
            {...rest}
        >
            {children}
        </button>
    );
}
