import Image from "next/image";
import React from "react";
import UserReviewHero from "../UserReviewHero/UserReviewHero";

export default function ComputerImage() {
    return (
        <div className="relative  lg:col-start-2 bg-hero-pattern py-4 md:py-20 bg-contain ">
            <div
                className="max-w-[22rem] mx-auto
     h-64 relative  mt-14 z-10 flex flex-col
      items-center justify-center  lg:max-w-[38rem]
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
    );
}
