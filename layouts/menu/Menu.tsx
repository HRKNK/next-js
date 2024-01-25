import classNames from 'classnames';
import React, { DetailedHTMLProps, HTMLAttributes, ReactNode, useContext } from 'react';
import style from './menu.module.css';
import { getMenu } from '@/api/page';
import { MenuItem } from '@/interfaces/IMenu';
import LogoOwlTop from '@/public/logo-owl-top.svg';
import Search from '@/components/Search/Search';

interface IMenu extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	children?: ReactNode;
    nav_item: MenuItem[];
};

const Menu = async ({nav_item, children, ...props}: IMenu): Promise<JSX.Element> => {
    return (
        <div className={classNames()} {...props}>
            <div className={style.logo__wrapper}>
                <LogoOwlTop className={style.logo}/>
                <h2>OWL<span>top</span></h2>
            </div>
            <div>
                <Search button={true} target='Поиск...'></Search>
            </div>
            {nav_item.map(i => (<li key={i._id.secondCategory}>{i._id.secondCategory}</li>) )}
        </div>
    );
};

export default Menu;