import Image from "next/image";
import useMediaQuery from "../../../hooks/useMediaQuery";
import { screens } from "../../../utils/constants";

interface IMessageButtonProps {
    text: string;
    icon: string;
    alt?: string;
    link: string;
    className?: string;
}

export default function MessageButton({
    text,
    icon,
    link,
    alt,
    className,
}: IMessageButtonProps) {
    const largeDevices = useMediaQuery(screens.lg);

    return (
        <a
            href={link}
            target="_blank"
            rel="noreferrer"
            className={`border-1 border-black
             cursor-pointer w-full p-2 font-medium text-xs
              lg:text-xl lg:space-x-3 flex items-center justify-center space-x-1
                  ${className}
                `}
        >
            <Image
                className="w-20"
                width={largeDevices ? 40 : 20}
                height={largeDevices ? 40 : 20}
                src={icon}
                alt={alt || "messanger"}
            />
            <span className="break-all ">{text}</span>
        </a>
    );
}
