import Hamburger from "hamburger-react";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import useMediaQuery from "../../hooks/useMediaQuery";
import { screens } from "../../utils/constants";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
    const router = useRouter();
    const mediumDevice = useMediaQuery(screens.md);

    const [isOpen, setOpen] = React.useState(false);

    React.useEffect(() => {
        setOpen(!mediumDevice ? isOpen : true);
    }, [mediumDevice, isOpen]);

    const navLinks = [
        {
            name: "Home",
            path: "/",
        },
        {
            name: "About me",
            path: "/about",
        },
        {
            name: "Projects",
            path: "/projects",
        },
        {
            name: "Services",
            path: "/services",
        },
        {
            name: "Blog",
            path: "/blog",
        },
        {
            name: "Contact",
            path: "/contact",
        },
    ];

    return (
        <nav className="px-4 grid grid-cols-2 sticky top-0 left-0 right-0 bg-white">
            <div className="flex items-center">
                <Image
                    alt="Naim."
                    src={"/svg/icon.svg"}
                    width={50}
                    height={35}
                    className=""
                />
            </div>

            <div className=" flex justify-end md:hidden">
                <Hamburger
                    toggled={isOpen}
                    toggle={() => setOpen((prev) => !prev)}
                    size={20}
                />
            </div>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className={`col-span-2 transition-all duration-100 origin-top ease-in-out 
                     bg-white left-0 right-0 top-8 py-2 overflow-hidden`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{
                            height: "auto",
                            opacity: 0,
                        }}
                        transition={{ duration: 0.2, type: "spring" }}
                    >
                        <ul>
                            {navLinks.map((link, index) => (
                                <li
                                    key={index}
                                    className="p-2
                             hover:bg-purple-100 active:hover:bg-light-700 text-gray-600
                             hover:text-primary-100 active:text-primary-100
                             font-medium hover:font-bold active:font-bold
                             transition-all duration-300 ease-in-out
                             cursor-pointer text-center"
                                    onClick={() => router?.push(link.path)}
                                >
                                    {link?.name}
                                </li>
                            ))}
                        </ul>
                        <button
                            className="p-2 block border-1 border-black bg-secondary-100 font-bold mt-2
                hover:shadow-small active:shadow-small w-full
                "
                        >
                            Contact me
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
