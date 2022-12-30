import { ICategory } from "../../typescript/interfaces";

export interface IMyProjectHeaderProps {
    categories: ICategory[];
    selectedCategories: ICategory[];
    onCategoryChange: (category: ICategory) => void;
}
