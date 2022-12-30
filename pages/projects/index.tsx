import React, { useContext } from "react";
import MyProjects from "../../components/MyProjects/MyProjects";
import ProjectContext from "../../context/ProjectsContext/project-context";

export default function Projects() {
    const projects = useContext(ProjectContext);

    console.log(projects.state);
    return <MyProjects />;
}
