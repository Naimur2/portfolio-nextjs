import Image from "next/image";
import { useEffect, useRef } from "react";
export default function MyProjects() {
    const scrollRef = useRef<HTMLDivElement>(null);
    const innerScrollContainerRef = useRef<HTMLDivElement>(null);

    const horizontalScroll = (e: WheelEvent) => {
        e.preventDefault();
        const race = 15; // How many pixels to scroll
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

    const ProjectItem = () => (
        <li className="first:pl-4 last:pr-4">
            <div className="p-4 border-1 border-black min-w-[15rem]">
                <div className="pt-2 px-2">
                    <Image
                        alt="user-portfolio"
                        src="https://images.unsplash.com/photo-1661961110372-8a7682543120?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                        width={"100%"}
                        height={"100%"}
                        layout="responsive"
                        objectFit="cover"
                    />
                </div>
                <div>
                    <h1>Lorem ipsum dol</h1>
                    <p>Lorem ipsum dolor sit, amet consectet</p>
                </div>
            </div>
        </li>
    );

    return (
        <section className=" py-20 grid gap-8">
            <div className="px-4">
                <h4 className="text-center">My Projects</h4>
            </div>
            <div ref={scrollRef} className={` overflow-scroll scrollbar-hide `}>
                <ul className="flex flex-row space-x-5 snap-both ">
                    <ProjectItem />
                    <ProjectItem />
                    <ProjectItem />
                    <ProjectItem />
                    <ProjectItem />
                    <ProjectItem />
                    <ProjectItem />
                    <ProjectItem />
                    <ProjectItem />
                </ul>
            </div>
        </section>
    );
}
