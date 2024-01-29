'use client';

import React, { useEffect, useState } from 'react';
import { ISort } from './Sort.types';
import styles from './Sort.module.css';
import classNames from 'classnames';

import SortIcon from '@/public/sort.svg'

const Sort = ({className, ...props}: ISort): JSX.Element => {
    const [selected, setSelected] = useState<string>('by rating');

    return (
        <div className={classNames(styles.sort__wrapper, className)} {...props}>
            <button 
                onClick={() => setSelected('by rating')} 
                className={classNames(styles.sort__button, {
                    [styles['sort__button-selected']]: selected === 'by rating',
                    [styles['sort__button-gray']]: selected !== 'by rating',
                })} 
                type="button"
            >{selected === 'by rating' && <SortIcon/>}{'По рейтингу'}</button>
            <button 
                onClick={() => setSelected('by price')}
                className={classNames(styles.sort__button, {
                    [styles['sort__button-selected']]: selected === 'by price',
                    [styles['sort__button-gray']]: selected !== 'by price',
                })} 
                type="button"
            >{selected === 'by price' && <SortIcon/>}{'По цене'}</button>
        </div>
    );
};

export default Sort;