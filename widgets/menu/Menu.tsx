'use client'

import classNames from 'classnames';
import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';
import style from './menu.module.css';
import { MenuItem } from '@/interfaces/IMenu';
import Search from '@/components/Search/Search';
import Logo from '@/components/Logo/Logo';

import Courses from '@/public/menu/courses.svg';
import Books from '@/public/menu/books.svg';
import Products from '@/public/menu/products.svg';
import Services from '@/public/menu/services.svg';
import { type FirstLevelMenu } from './Menu.types';
import { TopLevelCategory } from '@/interfaces/IPage';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface IMenu extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	children?: ReactNode;
    nav_item: MenuItem[];
};

const levelMenu: FirstLevelMenu[] = [
    { route: '/courses', name: 'Курсы', icon: <Courses/>, id: TopLevelCategory.Courses },
    { route: '/services', name: 'Сервисы', icon: <Services/>, id: TopLevelCategory.Services },
    { route: '/books', name: 'Книги', icon: <Books/>, id: TopLevelCategory.Books },
    { route: '/products', name: 'Товары', icon: <Products/>, id: TopLevelCategory.Products },
]

const Menu = ({nav_item, children, ...props}: IMenu): JSX.Element => {
    const router = usePathname();

    const firstLevel = (menu: FirstLevelMenu[]): JSX.Element => {
        return (
            <>
                {menu.map(element => {                    
                    return (
                        <li 
                            className={classNames(style.nav__item, {
                                [style['nav__item-selected']]: router == `/${element.route.split('/')[1]}`,
                            })} 
                            key={element.id}>
                                <Link href={element.route}>{element.icon}<span>{element.name}</span></Link>
                                <div>{secondLevel(element.route)}</div>
                        </li>
                    )
                })}
            </>
        )
    };

    const secondLevel = (targetRoute: string): JSX.Element => {
        console.log(targetRoute);
        
        return (
            <>
                {/* {nav_item.map(element => {                    
                    return (
                        <li>
                            <p>{element._id.secondCategory}</p>
                        </li>
                    )
                })} */}
            </>
        )

    };

    const thirdLevel = (): JSX.Element => {
        return <></>
    };

    return (
        <div className={style.menu} {...props}>
            <Logo className={style.menu__logo} naming={true}/>
            <Search className={style.menu__search} button={true} target='Поиск...'></Search>
            <nav className={classNames(style.nav__menu, style.menu__nav)}>
                <ul>
                    {firstLevel(levelMenu)}
                    {/* <li className={classNames(style.nav__item)}><a href='#'><Courses/><span>{'Курсы'}</span></a></li>
                    <li className={classNames(style.nav__item, style['nav__item-selected'])}><a href='#'><Services/><span>{'Сервисы'}</span></a></li>
                    <li className={classNames(style.nav__item)}><a href='#'><Books/><span>{'Книги'}</span></a></li>
                    <li className={classNames(style.nav__item)}><a href='#'><Products/><span>{'Товары'}</span></a></li> */}
                </ul>
            </nav>
        </div>
    );
};

export default Menu;