import PrimaryButton from "../../common/PrimaryButton/PrimaryButton";

export default function HeroDescription() {
    return (
        <div
            className="relative 
                lg:col-start-1 lg:row-start-1 px-4 pb-10 lg:py-20 
                flex items-center flex-col lg:items-start space-y-6 lg:space-y-10
               "
        >
            <h1 className="text-white text-center max-w-[15ch] lg:text-left">
                Hello, I’m Naim, a Expert Web
                <span className="text-secondary-100"> Developer</span>
            </h1>
            <p className="text-center text-gray-200 lg:text-left max-w-md">
                I’m a young expert web developer with one year of experience,
                but a huge motivation to create something user-friendly and
                beautiful.
            </p>
            <PrimaryButton>Contact Me</PrimaryButton>
        </div>
    );
}
