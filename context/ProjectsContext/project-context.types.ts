import {
    IProject,
    IContextActions,
    ICategory,
} from "../../typescript/interfaces";

export type InitialContextState = {
    projects: IProject[] | null;
    filteredTag: ICategory | null;
};

export interface ProjectContextState {
    state: InitialContextState;
    dispatch: React.Dispatch<IContextActions>;
}
