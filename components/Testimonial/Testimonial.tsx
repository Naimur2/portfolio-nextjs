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
        <section className="px-4 py-20 bg-tertiary-100 grid gap-5">
            <SectionHeader
                title="Testimonial from my Clients"
                subtitle="It is a long established fact that a reader will be
                    distracted"
            />

            <Review reviews={reviews} />
        </section>
    );
}
