import { ISkillCardProps } from "../../typescript/interfaces";
import SkillCard from "./SkillCard/SkillCard";

export default function Skills() {
    const skills: ISkillCardProps[] = [
        {
            title: "Languages",
            skills: [
                "JavaScript",
                "TypeScript",
                "HTML",
                "CSS",
                "Python",
                "PHP",
            ],
        },
        {
            title: "Frontend Frameworks & Libraries",
            skills: [
                "React",
                "Next.js",
                "React Native",
                "Tailwind CSS",
                "Bootstrap",
                "Bootstrap",
                "Material UI",
                "SASS",
                "Styled Components",
                "Flowbite",
            ],
        },
        {
            title: "Backend Frameworks & Libraries",
            skills: [
                "Node.js",
                "Express.js",
                "MongoDB",
                "MySQL",
                "Firebase",
                "Socket.io",
                "GraphQL",
                "Apollo",
                "Sequelize",
                "Mongoose",
                "Jest",
            ],
        },
        {
            title: "Tools",
            skills: [
                "Git",
                "GitHub",
                "VS Code",
                "Figma",
                "Adobe XD",
                "Photoshop",
                "Illustrator",
                "Android Studio",
                "Xcode",
            ],
        },
        {
            title: "Other",
            skills: ["Redux", "Redux Toolkit", "Tensorflow", "Keras"],
        },
    ];

    return (
        <section className=" bg-[#FFF152]">
            <div className="container px-4 mx-auto py-20 grid gap-14">
                <h4 className="text-center">Skills &amp; Expertise</h4>
                <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-5 auto-rows-fr">
                    {skills.map((skill, index) => (
                        <SkillCard
                            className="xl:last:col-start-2"
                            key={index}
                            {...skill}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
