import { useEffect, useRef, useState } from "react";
import useCurrentDevice from "../../hooks/useCurrentDevice";
import useWindow from "../../hooks/useWindow";
import { ICategory } from "../../typescript/interfaces";
import { devices } from "../../utils/constants";
import ActionSheet from "../common/ActionSheet/ActionSheet";
import PrimaryButton from "../common/PrimaryButton/PrimaryButton";
import ScrollViewProduct from "../common/ScrollViewProduct/ScrollViewProduct";
import HScroll from "../HScroll/HScroll";

const categories: ICategory[] = [
    {
        id: 1,
        title: "React Js",
        slug: "react-js",
    },
    {
        id: 2,
        title: "React Native",
        slug: "react-native",
    },
    {
        id: 3,
        title: "Next Js",
        slug: "next-js",
    },
    {
        id: 4,
        title: "Full Stack",
        slug: "full-stack",
    },
    {
        id: 5,
        title: "TypeScript",
        slug: "typescript",
    },
    {
        id: 6,
        title: "JavaScript",
        slug: "javascript",
    },
    {
        id: 7,
        title: "Tailwind CSS",
        slug: "tailwind-css",
    },
    {
        id: 8,
        title: "Bootstrap",
        slug: "Bootstrap",
    },
    {
        id: 9,
        title: "Other",
        slug: "Other",
    },
];

export default function MyProjects() {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [screenName, screenSize] = useCurrentDevice();
    const [selectedItems, setSelectedItems] = useState<ICategory[]>([]);

    const [showActionSheet, setShowActionSheet] = useState(false);

    const { isLessThan } = useWindow();

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

    const selectionhandler = (item: ICategory) => {
        const isExist = selectedItems.find((i) => i.id === item.id);
        if (isExist) {
            const newItems = selectedItems.filter((i) => i.id !== item.id);
            setSelectedItems(newItems);
        } else {
            setSelectedItems([...selectedItems, item]);
        }
    };

    return (
        <section
            className="py-20 lg:py-24 grid gap-8 lg:container lg:max-w-none"
            id="projects"
        >
            <div className="px-4 grid gap-8 pb-5">
                <h4 className="text-center">My Projects</h4>
                <ActionSheet
                    items={categories}
                    selected={selectedItems}
                    onSelect={selectionhandler}
                />
            </div>
            <HScroll>
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
            </HScroll>
            <PrimaryButton className="justify-self-center mb-6">
                See More
            </PrimaryButton>
        </section>
    );
}
