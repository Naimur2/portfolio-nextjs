import ComputerImage from "./ComputerImage/ComputerImage";
import HeroDescription from "./HeroDescription/HeroDescription";

export default function Hero() {
    return (
        <section className=" bg-primary-100" id="home">
            <div className="grid gap-4 lg:grid-cols-2 h-full container py-10">
                <ComputerImage />
                <HeroDescription />
            </div>
        </section>
    );
}
