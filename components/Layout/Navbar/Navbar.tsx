import { useRouter } from "next/router";
import React from "react";
import useMediaQuery from "../../../hooks/useMediaQuery";
import { INavLinkProps } from "../../../typescript/interfaces";
import { TScreens } from "../../../typescript/types";
import { screens } from "../../../utils/constants";
import NavBrand from "./NavBrand/NavBrand";
import NavLinks from "./NavLinks/NavLinks";
import Navtoggler from "./Navtoggler/Navtoggler";
import Sidenav from "./SideNav/SideNav";

const navLinks: INavLinkProps[] = [
    {
        text: "Home",
        href: "/",
    },
    {
        text: "About me",
        href: "/about",
    },
    {
        text: "Show Case",
        href: "/projects",
    },
    // {
    //     text: "Services",
    //     href: "#services",
    // },
    // {
    //     text: "Blog",
    //     href: "#blog",
    // },
    {
        text: "Contact Me",
        href: "/contact",
    },
];

function Navbar({}, ref) {
    const router = useRouter();

    const mediumDevice = useMediaQuery(screens.md);
    const largeDevice = useMediaQuery(screens.lg);
    const [currentDevice, setCurrentDevice] = React.useState<
        TScreens | undefined
    >();

    const [isLargeDevice, setIsLargeDevice] = React.useState(false);

    const [isOpen, setOpen] = React.useState(false);

    React.useEffect(() => {
        setIsLargeDevice(largeDevice);
    }, [mediumDevice, largeDevice]);

    React.useEffect(() => {
        if (largeDevice) {
            setCurrentDevice("lg");
        } else if (mediumDevice) {
            setCurrentDevice("md");
        } else {
            setCurrentDevice("sm");
        }
    }, [largeDevice, mediumDevice]);

    return (
        <header
            ref={ref}
            className="fixed top-0 left-0 right-0 z-[100] bg-white"
        >
            <nav className="container flex justify-between ">
                <NavBrand
                    logo="/svg/icon.svg"
                    name="Naim."
                    device={currentDevice}
                />

                {!isLargeDevice ? (
                    <Navtoggler
                        isOpen={isOpen}
                        onToggle={() => setOpen((prev) => !prev)}
                    />
                ) : null}

                {isLargeDevice ? <NavLinks links={navLinks} /> : null}
                {!isLargeDevice ? (
                    <Sidenav
                        isOpen={isOpen}
                        onClose={() => setOpen((prev) => !prev)}
                        navLinks={navLinks}
                        devices={currentDevice}
                    />
                ) : null}
            </nav>
        </header>
    );
}

export default React.forwardRef(Navbar);
