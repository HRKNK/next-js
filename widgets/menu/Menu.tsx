import classNames from 'classnames';
import React, { DetailedHTMLProps, HTMLAttributes, ReactNode, useContext } from 'react';
import style from './menu.module.css';
import { MenuItem } from '@/interfaces/IMenu';
import Search from '@/components/Search/Search';
import Logo from '@/components/Logo/Logo';

import Courses from '@/public/menu/courses.svg';
import Books from '@/public/menu/books.svg';
import Products from '@/public/menu/products.svg';
import Services from '@/public/menu/services.svg';

interface IMenu extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	children?: ReactNode;
    nav_item: MenuItem[];
};

const Menu = async ({nav_item, children, ...props}: IMenu): Promise<JSX.Element> => {
    return (
        <div className={style.menu} {...props}>
            <Logo className={style.menu__logo} naming={true}/>
            <Search className={style.menu__search} button={true} target='Поиск...'></Search>
            {/* {nav_item.map(i => (<li key={i._id.secondCategory}>{i._id.secondCategory}</li>) )} */}
            <nav className={style.nav__menu}>
                <ul>
                    <li className={classNames(style.menu__nav, style.nav__item, style['nav__item-selected'])}><a href='#'><Courses/><span>{'Курсы'}</span></a></li>
                    <li className={classNames(style.nav__item)}><a href='#'><Services/><span>{'Сервисы'}</span></a></li>
                    <li className={classNames(style.nav__item)}><a href='#'><Books/><span>{'Книги'}</span></a></li>
                    <li className={classNames(style.nav__item)}><a href='#'><Products/><span>{'Товары'}</span></a></li>
                </ul>
            </nav>
        </div>
    );
};

export default Menu;