import React from "react";

export default function ReviewBox({ children }: { children: React.ReactNode }) {
    return (
        <div className="border-2 z-20 border-black bg-white shadow-medium relative h-72 overflow-hidden">
            {children}
        </div>
    );
}
