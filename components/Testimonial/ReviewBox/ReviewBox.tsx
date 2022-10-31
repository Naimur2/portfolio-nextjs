import React from "react";

export default function ReviewBox({ children }: { children: React.ReactNode }) {
    return (
        <div className="border-2 border-black bg-white shadow-medium ">
            {children}
        </div>
    );
}
