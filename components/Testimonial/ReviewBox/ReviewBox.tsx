import React from "react";

export default function ReviewBox({ children }: { children: React.ReactNode }) {
    return (
        <div
            className="border-2 z-20
        mx-auto
        border-black bg-white max-w-2xl shadow-medium relative h-72 overflow-hidden"
        >
            {children}
        </div>
    );
}
