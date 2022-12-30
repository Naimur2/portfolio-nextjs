import { useContext, useEffect, useMemo } from "react";
import categories from "../../content/categories";
import ProjectContext from "../../context/ProjectsContext/project-context";
import { setFilteredTags } from "../../context/ProjectsContext/project-context.actions";
import useWindow from "../../hooks/useWindow";
import { ICategory } from "../../typescript/interfaces";
import ActionSheet from "../common/ActionSheet/ActionSheet";

export default function MyProjectHeader() {
    const { dispatch, state } = useContext(ProjectContext);

    const { isLessThan } = useWindow();

    const isSelected = (item: ICategory) => state.filteredTag?.id === item.id;

    const allCategory: ICategory = useMemo(() => {
        return {
            id: "all",
            title: "All",
            slug: "all",
        };
    }, []);

    useEffect(() => {
        dispatch(setFilteredTags(allCategory));
    }, [allCategory, dispatch]);

    const categoriesWAll = [allCategory, ...categories];

    const handleCategoryChange = (category: ICategory) => {
        const isSelected = state.filteredTag?.id === category.id;
        if (isSelected) {
            return;
        } else {
            dispatch(setFilteredTags(category));
        }
    };

    return (
        <div className="px-4 grid gap-8 pb-5">
            <h4 className="text-center">My Best Projects</h4>

            {isLessThan("lg") ? (
                <ActionSheet
                    items={categoriesWAll}
                    selected={state.filteredTag}
                    onSelect={handleCategoryChange}
                />
            ) : (
                <div className="flex gap-4 items-center flex-wrap justify-center">
                    {categoriesWAll.map((category, id) => (
                        <button
                            key={id.toString() + category.id}
                            className={`filter-btn min-w-[5rem] ${
                                isSelected(category) ? "filter-btn-active" : ""
                            }`}
                            onClick={() => handleCategoryChange(category)}
                        >
                            {category.title}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}
