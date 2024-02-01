import { TopLevelCategory } from "@/interfaces/IPage";

export interface FirstLevelMenu {
    route: string;
    name: string;
    icon: JSX.Element;
    id: TopLevelCategory;
}