import React from "react";
import { IContextActions } from "../../typescript/interfaces";
import ProjectContext from "./project-context";
import { SET_FILTERED_TAGS, SET_PROJECTS } from "./project-context.actions";
import { InitialContextState } from "./project-context.types";

const initialState: InitialContextState = {
    projects: [],
    filteredTag: null,
};

const projectReducer = (
    state: InitialContextState,
    action: IContextActions
) => {
    switch (action.type) {
        case SET_PROJECTS:
            return {
                ...state,
                projects: action.payload,
            };
        case SET_FILTERED_TAGS:
            return {
                ...state,
                filteredTag: action.payload,
            };
        default:
            return state;
    }
};

export const ProjectProvider = ({
    children,
}: {
    children: React.ReactNode;
}) => {
    const [state, dispatch] = React.useReducer(projectReducer, initialState);

    const store = React.useMemo(() => {
        return {
            state,
            dispatch,
        };
    }, [state]);

    return (
        <ProjectContext.Provider value={store}>
            {children}
        </ProjectContext.Provider>
    );
};
