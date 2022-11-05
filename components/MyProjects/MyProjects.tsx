import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import PrimaryButton from "../common/PrimaryButton/PrimaryButton";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import ScrollViewProduct from "../common/ScrollViewProduct/ScrollViewProduct";
import { RiArrowDropDownLine } from "react-icons/ri";
import ActionSheet from "../common/ActionSheet/ActionSheet";
import useMediaQuery from "../../hooks/useMediaQuery";
import { screens } from "../../utils/constants";

export default function MyProjects() {
    const scrollRef = useRef<HTMLDivElement>(null);
    const largeDevice = useMediaQuery(screens.lg);
    const [windowWidth, setWindowWidth] = useState(0);

    const horizontalScroll = (e: WheelEvent) => {
        e.preventDefault();
        const race = 300; // How many pixels to scroll
        if (scrollRef.current) {
            if (e.deltaY > 0)
                // Scroll right
                scrollRef.current.scrollLeft += race;
            // Scroll left
            else scrollRef.current.scrollLeft -= race;
        }
    };

    const handleWindowResize = (e: Event) => {
        const windowWidth = window.innerWidth;
        setWindowWidth(windowWidth);
    };
    console.log(windowWidth);

    useEffect(() => {
        const horizontalScrollar = scrollRef.current;
        if (horizontalScrollar) {
            horizontalScrollar?.addEventListener("wheel", horizontalScroll);

            return () => {
                horizontalScrollar?.removeEventListener(
                    "wheel",
                    horizontalScroll
                );
            };
        }
    }, []);

    useEffect(() => {
        if (window) {
            window.addEventListener("resize", handleWindowResize);
            setWindowWidth(window.innerWidth);

            return () => {
                window.removeEventListener("resize", handleWindowResize);
            };
        }
    }, []);
    const text = `Lorem ipsum dolor sit, amet ipsum dolor sit amet
    consectetur adipisicing`;

    return (
        <section className=" py-14 grid gap-8 lg:container" id="projects">
            <div className="px-4 grid gap-8 pb-5">
                <h4 className="text-center">My Projects</h4>
                <ActionSheet />
            </div>
            <div
                ref={scrollRef}
                className={`overflow-scroll scrollbar-hide scroll-smooth lg:overflow-hidden`}
            >
                <ul
                    className="flex flex-row space-x-5
                 snap-both lg:grid lg:grid-cols-3 lg:gap-8 lg:space-x-0 "
                >
                    <ScrollViewProduct
                        title="Lorem ipsum dhjhgkjghrtu ur5t5yrol"
                        description="Lorem dhththththtghtr wweweg4wergweipsum dolor sit, amet ipsum dolor sit amet
                            consectetur adipisicing hhh consectetur adipisicing
                            hhh hhh hh"
                        image="https://images.unsplash.com/photo-1661961110372-8a7682543120?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                        tags={["Web", "Android"]}
                        onSeeMoreClick={() => {}}
                        onTagClick={(tag) => {}}
                    />
                    <ScrollViewProduct
                        title="Lorem ipsum dhjhgkjghrtu ur5t5yrol"
                        description="Lorem ipsum dolor sit, amet ipsum dolor sit amet
                            consectetur adipisicing hhh consectetur adipisicing
                            hhh hhh hh"
                        image="https://images.unsplash.com/photo-1661961110372-8a7682543120?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                        tags={["Web", "Android"]}
                        onSeeMoreClick={() => {}}
                        onTagClick={(tag) => {}}
                    />
                    <ScrollViewProduct
                        title="Lorem ipsum dhjhgkjghrtu ur5t5yrol"
                        description="Lorem ipsum dolor sit, amet ipsum dolor sit amet
                            consectetur adipisicing hhh consectetur adipisicing
                            hhh hhh hh"
                        image="https://images.unsplash.com/photo-1661961110372-8a7682543120?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                        tags={["Web", "Android"]}
                        onSeeMoreClick={() => {}}
                        onTagClick={(tag) => {}}
                    />
                    <ScrollViewProduct
                        title="Lorem ipsum dhjhgkjghrtu ur5t5yrol"
                        description="Lorem ipsum dolor sit, amet ipsum dolor sit amet
                            consectetur adipisicing hhh consectetur adipisicing
                            hhh hhh hh"
                        image="https://images.unsplash.com/photo-1661961110372-8a7682543120?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                        tags={["Web", "Android"]}
                        onSeeMoreClick={() => {}}
                        onTagClick={(tag) => {}}
                    />
                    <ScrollViewProduct
                        title="Lorem ipsum dhjhgkjghrtu ur5t5yrol"
                        description="Lorem ipsum dolor sit, amet ipsum dolor sit amet
                            consectetur adipisicing hhh consectetur adipisicing
                            hhh hhh hh"
                        image="https://images.unsplash.com/photo-1661961110372-8a7682543120?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                        tags={["Web", "Android"]}
                        onSeeMoreClick={() => {}}
                        onTagClick={(tag) => {}}
                    />
                    <ScrollViewProduct
                        title="Lorem ipsum dhjhgkjghrtu ur5t5yrol"
                        description="Lorem ipsum dolor sit, amet ipsum dolor sit amet
                            consectetur adipisicing hhh consectetur adipisicing
                            hhh hhh hh"
                        image="https://images.unsplash.com/photo-1661961110372-8a7682543120?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                        tags={["Web", "Android"]}
                        onSeeMoreClick={() => {}}
                        onTagClick={(tag) => {}}
                    />
                </ul>
            </div>
            <PrimaryButton className="justify-self-center mb-6">
                See More
            </PrimaryButton>
        </section>
    );
}
