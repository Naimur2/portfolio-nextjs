import { useEffect, useRef } from "react";
import useCurrentDevice from "../../hooks/useCurrentDevice";
import { devices } from "../../utils/constants";

interface HScrollItemProps {
    children: React.ReactNode;
}

export const HScrollItem = ({ children }: HScrollItemProps) => (
    <li className="first:pl-4 last:pr-4 lg:first:pl-0 lg:last:pr-0">
        {children}
    </li>
);

export default function HScroll({ children }: HScrollItemProps) {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [screenName, screenSize] = useCurrentDevice();

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

    return (
        <div
            ref={scrollRef}
            className={`overflow-scroll scrollbar-hide 
    lg:container lg:mx-auto scroll-smooth lg:overflow-hidden`}
        >
            <ul
                className="flex flex-row space-x-5
     snap-both lg:grid lg:grid-cols-3 2xl:grid-cols-4 lg:gap-8 lg:space-x-0"
            >
                {children}
            </ul>
        </div>
    );
}
