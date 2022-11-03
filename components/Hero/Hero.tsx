import Image from "next/image";
import PrimaryButton from "../common/PrimaryButton/PrimaryButton";
import UserReviewHero from "./UserReviewHero/UserReviewHero";

export default function Hero() {
    return (
        <section className=" bg-primary-100">
            <div className="grid gap-4">
                <div className="relative bg-hero-pattern py-4 bg-contain">
                    <div className="max-w-[22rem] mx-auto h-64 relative  mt-14 z-10 flex flex-col items-center justify-center">
                        <Image
                            src="/images/computer.png"
                            alt="computer"
                            width={"100%"}
                            height={"100%"}
                            layout="fill"
                            objectFit="contain"
                        />
                        <UserReviewHero
                            name=" McPence, UI Designer"
                            text=" Amazing work, he responds on time even at weekend."
                            ratings={5}
                        />

                        <div className="relative bg-secondary-100 w-48 h-32 rounded-t-full -mt-52 z-[-1]"></div>
                    </div>
                </div>
                <div className="relative px-4 pb-10 flex items-center flex-col space-y-5 ">
                    <h1 className="text-white text-center">
                        Hello, I’m Naim, a Expert Web
                        <span className="text-secondary-100"> Developer</span>
                    </h1>
                    <p className="text-center text-gray-200">
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
