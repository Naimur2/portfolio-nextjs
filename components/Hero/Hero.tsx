import Image from "next/image";
import PrimaryButton from "../common/PrimaryButton/PrimaryButton";
import UserReviewHero from "./UserReviewHero/UserReviewHero";

export default function Hero() {
    return (
        <section className=" bg-primary-100" id="home">
            <div className="grid gap-4 lg:grid-cols-2 h-full">
                <div className="relative   lg:col-start-2 bg-hero-pattern py-4 md:py-20 bg-contain ">
                    <div
                        className="max-w-[22rem] mx-auto
                     h-64 relative  mt-14 z-10 flex flex-col
                      items-center justify-center
                    lg:max-w-[38rem]
                    lg:h-[28rem]
                   
                      "
                    >
                        <Image
                            src="/images/computer.png"
                            alt="computer"
                            layout="fill"
                            objectFit="contain"
                        />
                        <UserReviewHero
                            name=" McPence, UI Designer"
                            text=" Amazing work, he responds on time even at weekend."
                            ratings={5}
                        />

                        <div
                            className="relative
                         bg-secondary-100 w-48 h-32 lg:w-3/5 lg:h-48
                          rounded-t-full  -mt-52 lg:mt-[-25rem] z-[-1]"
                        ></div>
                    </div>
                </div>
                <div
                    className="relative 
                  lg:col-start-1 lg:row-start-1 px-4 pb-10 lg:py-20 
                  flex items-center flex-col lg:items-start space-y-6 lg:space-y-10
                   lg:max-w-[calc(100%-6rem)]
         xl:max-w-[calc(100%-10rem)] 2xl:max-w-[calc(100%-13rem)] mx-auto "
                >
                    <h1 className="text-white text-center max-w-[15ch] lg:text-left">
                        Hello, I’m Naim, a Expert Web
                        <span className="text-secondary-100"> Developer</span>
                    </h1>
                    <p className="text-center text-gray-200 lg:text-left max-w-md">
                        I’m a young expert web developer with one year of
                        experience, but a huge motivation to create something
                        user-friendly and beautiful.
                    </p>
                    <PrimaryButton>Contact Me</PrimaryButton>
                </div>
            </div>
        </section>
    );
}
