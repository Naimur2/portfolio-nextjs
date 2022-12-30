import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import useWindow from "../../hooks/useWindow";
import { ICategory } from "../../typescript/interfaces";
import HScroll, { HScrollItem } from "../HScroll/HScroll";
import PrimaryButton from "../common/PrimaryButton/PrimaryButton";
import ProjectItem from "../common/ProjectItem/ProjectItem";
import MyProjectHeader from "./MyProjectHeader";
import categories from "../../content/categories";

export default function MyProjects() {
    const scrollRef = useRef<HTMLDivElement>(null);
    const { isGreaterThan, windowSize } = useWindow();
    const [selectedItems, setSelectedItems] = useState<ICategory[]>([]);

    const route = useRouter();

    useEffect(() => {
        const horizontalScroll = (e: WheelEvent) => {
            if (isGreaterThan("lg")) return;
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
    }, [windowSize, isGreaterThan]);

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
            className="py-20 lg:py-24 grid gap-8 lg:container "
            id="projects"
        >
            <MyProjectHeader
                categories={categories}
                selectedCategories={selectedItems}
                onCategoryChange={selectionhandler}
            />

            <HScroll>
                <HScrollItem>
                    <ProjectItem
                        title="Lorem ipsum dhjhgkjghrtu ur5t5yrol"
                        description="Lorem dhththththtghtr wweweg4wergweipsum dolor sit, amet ipsum dolor sit amet
                            consectetur adipisicing hhh consectetur adipisicing
                            hhh hhh hh"
                        image="https://images.unsplash.com/photo-1661961110372-8a7682543120?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                        tags={["Web", "Android"]}
                        onSeeMoreClick={() => {}}
                        onTagClick={(tag) => {}}
                    />
                </HScrollItem>
                <HScrollItem>
                    <ProjectItem
                        title="Lorem ipsum dhjhgkjghrtu ur5t5yrol"
                        description="Lorem dhththththtghtr wweweg4wergweipsum dolor sit, amet ipsum dolor sit amet
                            consectetur adipisicing hhh consectetur adipisicing
                            hhh hhh hh"
                        image="https://images.unsplash.com/photo-1661961110372-8a7682543120?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                        tags={["Web", "Android"]}
                        onSeeMoreClick={() => {}}
                        onTagClick={(tag) => {}}
                    />
                </HScrollItem>
                <HScrollItem>
                    <ProjectItem
                        title="Lorem ipsum dhjhgkjghrtu ur5t5yrol"
                        description="Lorem dhththththtghtr wweweg4wergweipsum dolor sit, amet ipsum dolor sit amet
                            consectetur adipisicing hhh consectetur adipisicing
                            hhh hhh hh"
                        image="https://images.unsplash.com/photo-1661961110372-8a7682543120?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                        tags={["Web", "Android"]}
                        onSeeMoreClick={() => {}}
                        onTagClick={(tag) => {}}
                    />
                </HScrollItem>
                <HScrollItem>
                    <ProjectItem
                        title="Lorem ipsum dhjhgkjghrtu ur5t5yrol"
                        description="Lorem dhththththtghtr wweweg4wergweipsum dolor sit, amet ipsum dolor sit amet
                            consectetur adipisicing hhh consectetur adipisicing
                            hhh hhh hh"
                        image="https://images.unsplash.com/photo-1661961110372-8a7682543120?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                        tags={["Web", "Android"]}
                        onSeeMoreClick={() => {}}
                        onTagClick={(tag) => {}}
                    />
                </HScrollItem>
                <HScrollItem>
                    <ProjectItem
                        title="Lorem ipsum dhjhgkjghrtu ur5t5yrol"
                        description="Lorem dhththththtghtr wweweg4wergweipsum dolor sit, amet ipsum dolor sit amet
                            consectetur adipisicing hhh consectetur adipisicing
                            hhh hhh hh"
                        image="https://images.unsplash.com/photo-1661961110372-8a7682543120?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                        tags={["Web", "Android"]}
                        onSeeMoreClick={() => {}}
                        onTagClick={(tag) => {}}
                    />
                </HScrollItem>
                <HScrollItem>
                    <ProjectItem
                        title="Lorem ipsum dhjhgkjghrtu ur5t5yrol"
                        description="Lorem dhththththtghtr wweweg4wergweipsum dolor sit, amet ipsum dolor sit amet
                            consectetur adipisicing hhh consectetur adipisicing
                            hhh hhh hh"
                        image="https://images.unsplash.com/photo-1661961110372-8a7682543120?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                        tags={["Web", "Android"]}
                        onSeeMoreClick={() => {}}
                        onTagClick={(tag) => {}}
                    />
                </HScrollItem>
            </HScroll>
            <PrimaryButton
                onClick={() => route.push(`/projects`)}
                className="justify-self-center mb-6"
            >
                See More
            </PrimaryButton>
        </section>
    );
}
