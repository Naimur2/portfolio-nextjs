import Image from "next/image";
import { useEffect, useRef } from "react";
import PrimaryButton from "../common/PrimaryButton/PrimaryButton";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import ScrollViewProduct from "../common/ScrollViewProduct/ScrollViewProduct";
import { RiArrowDropDownLine } from "react-icons/ri";
import ActionSheet from "../common/ActionSheet/ActionSheet";

export default function MyProjects() {
    const scrollRef = useRef<HTMLDivElement>(null);
    const innerScrollContainerRef = useRef<HTMLDivElement>(null);

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
    const text = `Lorem ipsum dolor sit, amet ipsum dolor sit amet
    consectetur adipisicing`;

    return (
        <section className=" py-14 grid gap-8">
            <div className="px-4 grid gap-8 pb-5">
                <h4 className="text-center">My Projects</h4>
                <ActionSheet />
            </div>
            <div
                ref={scrollRef}
                className={` overflow-scroll scrollbar-hide scroll-smooth`}
            >
                <ul className="flex flex-row space-x-5 snap-both ">
                    <ScrollViewProduct
                        title="Lorem ipsum dhjhgkj ghrtu ur5t5y rol yfth tfhftj gnvgny gngny tytdh et5er  ete erter "
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
