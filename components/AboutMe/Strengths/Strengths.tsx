import Image from "next/image";
import { IStrengthsProps } from "../../../typescript/interfaces";

export default function Strengths({
    title,
    description,
    image,
}: IStrengthsProps) {
    return (
        <div className="border-1 border-black p-3 flex flex-row space-x-4">
            <div className="w-11">
                <div className="bg-[#6F48BF33] p-2 flex items-center">
                    <Image
                        src={image || "/svg/web-developer.svg"}
                        alt="web-developping"
                        width={28}
                        height={28}
                    />
                </div>
            </div>
            <div className="w-fit grid gap-2">
                <p className="text-xl font-semibold">{title}</p>
                <p className="text-gray-500 text-sm">{description}</p>
            </div>
        </div>
    );
}
