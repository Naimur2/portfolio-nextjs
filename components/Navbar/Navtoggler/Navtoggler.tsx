import Hamburger from "hamburger-react";
import React from "react";

export default function Navtoggler({
    onToggle,
    isOpen,
}: {
    onToggle: () => void;
    isOpen: boolean;
}) {
    return (
        <div className=" flex justify-end lg:hidden">
            <Hamburger toggled={isOpen} toggle={onToggle} size={20} />
        </div>
    );
}
