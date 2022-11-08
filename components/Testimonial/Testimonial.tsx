import { IReviewCardProps } from "../../typescript/interfaces";
import SectionHeader from "../common/SectionHeader/SectionHeader";
import Review from "./Review/Review";

export default function Testimonial() {
    const reviews: IReviewCardProps[] = [
        {
            id: 1,
            name: "Naimur Rahman",
            ratings: 5,
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
            company: "Google Inc.",
        },
        {
            id: 2,
            name: "Ashiqur Rahman",
            ratings: 4.5,
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
            company: "Facebook Inc.",
        },
        {
            id: 3,
            name: "PicNRide",
            ratings: 4.5,
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
            company: "PicNRide",
        },
    ];

    return (
        <section className="py-20 lg:py-28 bg-tertiary-100 ">
            <div className="container grid gap-10 lg:grid-cols-2   ">
                <SectionHeader
                    className="lg:flext flex-row justify-center items-center lg:items-start"
                    subTitleClassName="max-w-[40ch]"
                    titleClassName="max-w-[14ch] text-[2.5rem] leading-[3.5rem] 
                    lg:text-[3.5rem] lg:leading-[4.5rem] "
                    title="Testimonial from my Clients"
                    subtitle="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
                />
                <Review reviews={reviews} />
            </div>
        </section>
    );
}
