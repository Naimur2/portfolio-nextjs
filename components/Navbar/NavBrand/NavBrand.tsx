import Image from "next/image";
import { TScreens } from "../../../typescript/types";

interface INAvBrandProps {
    logo?: string;
    name?: string;
    onClick?: () => void;
    device: TScreens | undefined;
}

export default function NavBrand({
    logo,
    name,
    onClick,
    device,
}: INAvBrandProps) {
    const brandImageSize = () => {
        if (device === "lg") {
            return 150;
        } else if (device === "md") {
            return 100;
        } else {
            return 60;
        }
    };

    return (
        <div className="flex items-center" onClick={onClick}>
            <Image
                alt={name || "Naim."}
                src={logo || "/svg/icon.svg"}
                width={brandImageSize()}
                height={35}
            />
        </div>
    );
}
