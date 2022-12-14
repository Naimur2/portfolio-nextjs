import AboutMe from "../components/AboutMe/AboutMe";
import Contact from "../components/Contact/Contact";
import Hero from "../components/Hero/Hero";
import MyProjects from "../components/MyProjects/MyProjects";
import Skills from "../components/Skills/Skills";
import Testimonial from "../components/Testimonial/Testimonial";

export default function index() {
    return (
        <>
            <Hero />
            <AboutMe />
            <Skills />
            <MyProjects />
            <Testimonial />
            <Contact />
        </>
    );
}
