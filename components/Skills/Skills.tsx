import skills from "../../content/skills";
import SkillCard from "./SkillCard/SkillCard";

export default function Skills() {
    return (
        <section className=" bg-[#FFF152]">
            <div className="container px-4 mx-auto py-20 grid gap-14">
                <h4 className="text-center">Skills &amp; Expertise</h4>

                <div className="grid lg:grid-cols-2 gap-4 items-stretch lg:mx-0 justify-center">
                    {skills.map((skill, index) => (
                        <SkillCard
                            className="cursor-pointer hover:shadow-lg transition-all w-full "
                            key={index.toString() + "-skill"}
                            {...skill}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
