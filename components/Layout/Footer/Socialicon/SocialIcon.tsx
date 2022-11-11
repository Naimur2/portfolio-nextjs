import { ISocialIconProps } from "../../../../typescript/interfaces";

export default function SocialIcon({
    icon,
    href,
    className,
}: ISocialIconProps) {
    return (
        <a href={href} target="_blank" rel="noreferrer">
            <div
                className={`border-white border-1 rounded-sm p-1
                flex items-center justify-center
                hover:bg-white cursor-pointer text-sm text-white hover:text-primary-100
                active:text-primary-100 transition-all duration-300 ease-in-out ${className}`}
            >
                {icon}
            </div>
        </a>
    );
}
