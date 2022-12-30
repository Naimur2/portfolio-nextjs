import { IProject, ICategory } from "../../typescript/interfaces";
export const SET_PROJECTS = "projects/SET_PROJECTS";
export const SET_FILTERED_TAGS = "projects/SET_FILTERED_TAGS";

export const setProjects = (projects: IProject[]) => ({
    type: SET_PROJECTS,
    payload: projects,
});

export const setFilteredTags = (tag: ICategory | null) => ({
    type: SET_FILTERED_TAGS,
    payload: tag,
});
