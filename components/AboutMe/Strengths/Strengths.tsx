import Image from "next/image";
import { IStrengthsProps } from "../../../typescript/interfaces";

export default function Strengths({
    title,
    description,
    image,
}: IStrengthsProps) {
    return (
        <div className="border-1 grid grid-cols-[2.75rem,auto] gap-5 border-black p-4 max-w-lg">
            <div>
                <div className="bg-[#6F48BF33] p-2 flex items-center">
                    <Image
                        src={image || "/svg/web-developer.svg"}
                        alt="web-developping"
                        width={28}
                        height={28}
                    />
                </div>
            </div>
            <div className="grid gap-2 pr-4">
                <h2 className="text-xl font-semibold">{title}</h2>
                <p className="text-gray-500 text-sm">{description}</p>
            </div>
        </div>
    );
}
