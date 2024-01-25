'use client';

import React, { useEffect, useState } from 'react';
import { ISearch } from './Search.types';
import styles from './Search.module.css';
import Lens from '@/public/lens.svg';
import classNames from 'classnames';

const Search = ({...props}: ISearch): JSX.Element => {
    const [value, setValue] = useState<string>('');
    const [focus, setFocus] = useState<boolean>(false);

    return (
        <div className={classNames(styles.search__wrapper, {
            [styles['search__wrapper-focus']]: focus,
        })}>
            <input
                onFocus={()=> setFocus(true)}
                onBlur={()=> setFocus(false)}
            
                className={styles.input__search} 
                placeholder={'Поиск...'} 
                type='text'
                value={value} 
                onChange={e => setValue(e.target.value)}
                {...props}
            />
            <button className={styles.button__search} type='button'><Lens fill="white"/></button>
        </div>
    );
};

export default Search;