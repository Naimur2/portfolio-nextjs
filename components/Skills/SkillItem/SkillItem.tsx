export default function SkillItem({
    text,
    className,
}: {
    text: string;
    className?: string;
}) {
    return (
        <li
            className={`border-1 border-black px-3 py-1 lg:px-4 lg:py-2 text-black ${className}`}
        >
            <span className="text-sm  lg:text-base font-medium">{text}</span>
        </li>
    );
}
