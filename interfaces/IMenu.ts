import { TopLevelCategory } from "./IPage"

export interface MenuItem {
  _id: {
    secondCategory: string
  };
  pages: PageItem[];
  isOpen?: boolean;
}

export interface PageItem {
  alias: string
  title: string
  _id: string
  category: TopLevelCategory
}
