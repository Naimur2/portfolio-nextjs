import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import { INavLinkProps } from "../../../../typescript/interfaces";
import { TScreens } from "../../../../typescript/types";
import Portal from "../../../common/Portal/Portal";
import NavBrand from "../NavBrand/NavBrand";
import NavLink from "../NavLink/NavLink";

interface SideNavProps {
    isOpen: boolean;
    onClose: () => void | React.Dispatch<React.SetStateAction<boolean>>;
    navLinks: INavLinkProps[];
    devices: TScreens | undefined;
}

export default function Sidenav({
    isOpen,
    navLinks,
    onClose,
    devices,
}: SideNavProps) {
    React.useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }

        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isOpen]);

    return (
        <>
            {isOpen ? (
                <AnimatePresence>
                    <Portal containerId="side-nav">
                        {isOpen ? (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 0.7 }}
                                exit={{ opacity: 0 }}
                                onClick={onClose}
                                className="bg-black h-screen w-screen fixed z-[1000] opacity-70"
                            />
                        ) : null}
                        {isOpen ? (
                            <motion.div
                                initial={{ translateX: -100000 }}
                                animate={{ translateX: 0 }}
                                exit={{ translateX: -100000 }}
                                className={`bg-white max-w-xs   w-3/4 h-full bottom-0 fixed z-[10001] `}
                            >
                                <div className="px-8 py-2 flex justify-center border-1 border-slate-400 shadow-sm shadow-dark-300">
                                    <NavBrand device={devices} />
                                </div>
                                <ul className="text-left py-2 mx-2">
                                    {navLinks.map((link) => (
                                        <NavLink
                                            key={link.text}
                                            href={link.href}
                                            onClick={onClose}
                                            className="!text-left px-6 py-3
                                            
                                             border-b-1 border-b-purple-200"
                                        >
                                            {link.text}
                                        </NavLink>
                                    ))}
                                </ul>
                            </motion.div>
                        ) : null}
                    </Portal>
                </AnimatePresence>
            ) : null}
        </>
    );
}
