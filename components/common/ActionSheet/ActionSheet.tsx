import React from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import * as ReactDOM from "react-dom";
import { MdClose } from "react-icons/md";
import AcionSheetItem from "./ActionSheetItem/AcionSheetItem";

export default function ActionSheet() {
    const [isOpen, setIsOpen] = React.useState(false);

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
        <div>
            <button
                onClick={() => setIsOpen(true)}
                className="border-1 border-black w-full p-2 rounded-sm flex items-center justify-between"
            >
                <span>Website</span>
                <RiArrowDropDownLine size={18} />
            </button>
            {isOpen ? (
                <ActionSheetContainer>
                    <div
                        onClick={() => setIsOpen(false)}
                        className="bg-black h-screen w-screen fixed z-[1000] opacity-70"
                    />
                    <div className="bg-white rounded-t-xl w-full h-[calc(100%-7rem)] bottom-0 fixed z-[10001]">
                        <div className="px-4 py-4 flex justify-between items-center border-b-1 border-gray-300">
                            <span className="font-bold text-blue-900">
                                Select Categories
                            </span>
                            <MdClose
                                size={24}
                                onClick={() => setIsOpen(false)}
                            />
                        </div>
                        <div className="h-full pb-16">
                            <ul className="h-full overflow-scroll scrollbar-hide">
                                <AcionSheetItem>Website</AcionSheetItem>
                            </ul>
                        </div>
                    </div>
                </ActionSheetContainer>
            ) : null}
        </div>
    );
}

const ActionSheetContainer = ({ children }: { children: React.ReactNode }) => {
    const [isMounted, setIsMounted] = React.useState(false);

    React.useEffect(() => {
        setIsMounted(true);
        return () => setIsMounted(false);
    }, []);

    if (isMounted) {
        return ReactDOM.createPortal(
            children,
            document.getElementById("action-sheet-container") as HTMLElement
        );
    }
    return null;
};
