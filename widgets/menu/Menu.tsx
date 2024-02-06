'use client'

import classNames from 'classnames';
import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';
import style from './menu.module.css';
import { MenuItem, PageItem } from '@/interfaces/IMenu';
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

                                {router == `/${element.route.split('/')[1]}` && <ul className={style['nav__item--secondLevel']}>{secondLevel(element)}</ul>}
                        </li>
                    )
                })}
            </>
        )
    };

    const secondLevel = (router: FirstLevelMenu): JSX.Element => {
        return (
            <>
                {nav_item.map(element => {                    
                    return (
                        <li key={element._id.secondCategory}>
                            <a href=''>{element._id.secondCategory.toUpperCase()}</a>
                            {/* <ul>{thirdLevel(element.pages, router.route)}</ul> */}
                        </li>
                    )
                
                })}
            </>
        )

    };

    const thirdLevel = (pages: PageItem[], route: string): JSX.Element => {
        return (
            <li>
                {pages.map(p => {
                    return <a href={`/${route}/${p.alias}`}>{p.category}</a>
                })}
            </li>
        )
    };

    return (
        <div className={style.menu} {...props}>
            <Logo className={style.menu__logo} naming={true}/>
            <Search className={style.menu__search} button={true} target='Поиск...'></Search>
            <nav className={classNames(style.nav__menu, style.menu__nav)}>
                <ul>
                    {firstLevel(levelMenu)}
                </ul>
            </nav>
        </div>
    );
};

export default Menu;