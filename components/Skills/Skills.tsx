import skills from "../../content/skills";
import SkillCard from "./SkillCard/SkillCard";

export default function Skills() {
    return (
        <section className=" bg-[#FFF152]">
            <div className="container px-4 mx-auto py-20 grid gap-14">
                <h4 className="text-center">Skills &amp; Expertise</h4>
                <div className="flex  flex-wrap gap-y-8 items-stretch lg:mx-0 justify-center">
                    {skills.map((skill, index) => (
                        <SkillCard
                            className="xl:hover:scale-105 hover:shadow-lg transition-all w-full lg:w-[calc(50%-2rem)] 2xl:w-[calc(33%-2rem)] lg:!mx-0 lg:!mr-8 lg:!last:mr-0"
                            key={index}
                            {...skill}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
