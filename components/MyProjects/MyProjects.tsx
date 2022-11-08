import { useEffect, useRef } from "react";
import useCurrentDevice from "../../hooks/useCurrentDevice";
import useMediaQuery from "../../hooks/useMediaQuery";
import { devices, screens } from "../../utils/constants";
import ActionSheet from "../common/ActionSheet/ActionSheet";
import PrimaryButton from "../common/PrimaryButton/PrimaryButton";
import ScrollViewProduct from "../common/ScrollViewProduct/ScrollViewProduct";

export default function MyProjects() {
    const scrollRef = useRef<HTMLDivElement>(null);
    const largeDevice = useMediaQuery(screens.lg);
    const [screenName, screenSize] = useCurrentDevice();
    console.log({ screenName, screenSize });
    console.log(screenSize && screenSize >= devices.lg);

    useEffect(() => {
        const horizontalScroll = (e: WheelEvent) => {
            if (screenSize && screenSize >= devices.lg) return;
            else {
                e.preventDefault();
                const race = 300; // How many pixels to scroll
                if (scrollRef.current) {
                    if (e.deltaY > 0)
                        // Scroll right
                        scrollRef.current.scrollLeft += race;
                    // Scroll left
                    else scrollRef.current.scrollLeft -= race;
                }
            }
        };
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
    }, [screenSize]);

    const text = `Lorem ipsum dolor sit, amet ipsum dolor sit amet
    consectetur adipisicing`;

    return (
        <section
            className="py-20 lg:py-24 grid gap-8 lg:container lg:max-w-none"
            id="projects"
        >
            <div className="px-4 grid gap-8 pb-5">
                <h4 className="text-center">My Projects</h4>
                <ActionSheet />
            </div>
            <div
                ref={scrollRef}
                className={`overflow-scroll scrollbar-hide xl:max-w-[65rem] lg:mx-auto scroll-smooth lg:overflow-hidden`}
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
