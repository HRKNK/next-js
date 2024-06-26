import { MenuItem } from '@/interfaces/IMenu';
import { TopLevelCategory } from '@/interfaces/IPage';
import { ReactNode, createContext, useState } from 'react';

export interface IAppContext {
	menu: MenuItem[];
	firstCategory: TopLevelCategory;
	setMenu?: (newMenu: MenuItem[]) => void;
}

export const AppContext = createContext<IAppContext>({ menu: [], firstCategory: TopLevelCategory.Courses });

const AppContextProvider = ({menu, firstCategory, children}: IAppContext & { children: ReactNode }): JSX.Element => {

	const [menuState, setMenuState] = useState<MenuItem[]>(menu);
	const setMenu = (newMenu: MenuItem[]) => {
		setMenuState(newMenu);
	}

	return (
		<AppContext.Provider value={{menu: menuState, firstCategory, setMenu}}>
			{children}
		</AppContext.Provider>
	);
};

export default AppContextProvider;