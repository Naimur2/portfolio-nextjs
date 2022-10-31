import React from "react";
import Image from "next/image";

interface IMessageButtonProps {
    title: string;
    subtitle: string;
    icon: string;
    alt?: string;
    className?: string;
}

export default function ContactButton({
    title,
    subtitle,
    icon,
    alt,
    className,
}: IMessageButtonProps) {
    return (
        <div className="flex space-x-4">
            <div
                className={`bg-[#FF7D4A30] grid items-center p-2 w-12 h-12 ${className}`}
            >
                <Image
                    width={24}
                    height={24}
                    src={icon}
                    alt={alt || "details"}
                />
            </div>
            <div className="grid">
                <h5>{title}</h5>
                <p className="text-sm font-medium text-gray-500 break-all">
                    {subtitle}
                </p>
            </div>
        </div>
    );
}
