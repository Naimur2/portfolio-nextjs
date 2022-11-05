import { useRouter } from "next/router";
import { INavLinkProps } from "../../../typescript/interfaces";
import PrimaryButton from "../../common/PrimaryButton/PrimaryButton";
import NavLink from "../NavLink/NavLink";

export default function NavLinks({ links }: { links: INavLinkProps[] }) {
    const route = useRouter();

    const lastElement = links[links.length - 1];
    return (
        <div
            className={`bg-white left-0 right-0 top-8
     py-2 overflow-hidden flex items-center w-3/4 
      justify-between`}
        >
            <ul className="flex">
                {links?.slice(0, links.length - 1).map((link, index) => (
                    <NavLink key={index} href={link.href}>
                        {link?.text}
                    </NavLink>
                ))}
            </ul>
            <div className="mx-1">
                <PrimaryButton
                    onClick={() => route.push(lastElement.href)}
                    className="shadow-none hover:shadow-medium active:shadow-medium border-1 border-black"
                >
                    {lastElement?.text}
                </PrimaryButton>
            </div>
        </div>
    );
}
