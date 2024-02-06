'use client';

import React, { useEffect, useReducer, useState } from 'react';
import { ISort, sortEnum } from './Sort.types';
import styles from './Sort.module.css';
import classNames from 'classnames';

import SortIcon from '@/public/sort.svg'
import { sortReducer } from './sort.reducer';

const Sort = ({sort, setSort, className, ...props}: ISort): JSX.Element => {
    const [selected, setSelected] = useState<sortEnum>(sort);

    // принимает сам Reducer, его начальное значение
    const [{products: sortedProducts}, dispatchSort] = useReducer(sortReducer, { sort: 'rating', products: [] });

    return (
        <div className={classNames(styles.sort__wrapper, className)} {...props}>
            <button 
                onClick={() => setSelected('rating')} 
                className={classNames(styles.sort__button, 
                    selected === 'rating' ? styles['sort__button-selected']: styles['sort__button-gray'],
                )} 
                type="button"
            >{selected === 'rating' && <SortIcon/>}{'По рейтингу'}</button>
            <button 
                onClick={() => setSelected('price')}
                className={classNames(styles.sort__button, 
                    selected === 'price' ? styles['sort__button-selected']: styles['sort__button-gray'],    
                )} 
                type="button"
            >{selected === 'price' && <SortIcon/>}{'По цене'}</button>
        </div>
    );
};

export default Sort;