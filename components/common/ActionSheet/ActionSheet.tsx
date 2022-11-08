import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import { MdClose } from "react-icons/md";
import { RiArrowDropDownLine } from "react-icons/ri";
import Portal from "../Portal/Portal";
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
        <div className="max-w-sm mx-auto w-full">
            <button
                onClick={() => setIsOpen(true)}
                className="border-1 border-black w-full p-2 rounded-sm flex items-center justify-between"
            >
                <span>Website</span>
                <RiArrowDropDownLine size={18} />
            </button>
            {isOpen ? (
                <AnimatePresence>
                    <Portal containerId="action-sheet-container">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 0.7 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsOpen(false)}
                            className="bg-black h-screen w-screen fixed z-[1000] opacity-70"
                        />
                        <motion.div
                            initial={{ translateY: 100000 }}
                            animate={{ translateY: 0 }}
                            exit={{ translateY: 100000 }}
                            className="bg-white rounded-t-xl w-full h-[calc(100%-7rem)] bottom-0 fixed z-[10001]"
                        >
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
                        </motion.div>
                    </Portal>
                </AnimatePresence>
            ) : null}
        </div>
    );
}
