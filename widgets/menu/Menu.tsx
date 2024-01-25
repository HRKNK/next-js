import classNames from 'classnames';
import React, { DetailedHTMLProps, HTMLAttributes, ReactNode, useContext } from 'react';
import style from './menu.module.css';
import { MenuItem } from '@/interfaces/IMenu';
import Search from '@/components/Search/Search';
import Logo from '@/components/Logo/Logo';

interface IMenu extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	children?: ReactNode;
    nav_item: MenuItem[];
};

const Menu = async ({nav_item, children, ...props}: IMenu): Promise<JSX.Element> => {
    return (
        <div className={classNames()} {...props}>
            <Logo naming={true}/>
            <Search button={true} target='Поиск...'></Search>
            {nav_item.map(i => (<li key={i._id.secondCategory}>{i._id.secondCategory}</li>) )}
        </div>
    );
};

export default Menu;