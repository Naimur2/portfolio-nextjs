import { useRouter } from "next/router";

export default function NavLink({
    children,
    href,
    onClick,
    className,
}: {
    children: React.ReactNode;
    href: string;
    onClick?: () => void;
    className?: string;
}) {
    const router = useRouter();
    return (
        <li
            className={` p-2  hover:bg-purple-100 active:hover:bg-light-700 text-gray-600
                hover:text-primary-100 active:text-primary-100
                font-medium hover:font-bold active:font-bold
                transition-all duration-300 ease-in-out
                cursor-pointer text-center md:min-w-[6rem] text-base xl:text-lg ${
                    className || ""
                }`}
            onClick={() => {
                router.push(href);
                onClick?.();
            }}
        >
            {children}
        </li>
    );
}
