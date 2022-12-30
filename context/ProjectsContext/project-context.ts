import React from "react";
import { ProjectContextState } from "./project-context.types";

const ProjectContext = React.createContext<ProjectContextState>({
    state: {
        projects: [],
        filteredTag: null,
    },
    dispatch: () => {},
});

export default ProjectContext;
