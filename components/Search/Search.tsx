'use client';

import React, { useEffect, useState } from 'react';
import { ISearch } from './Search.types';
import styles from './Search.module.css';
import Lens from '@/public/lens.svg';

const Search = ({...props}: ISearch) => {
    const [value, setValue] = useState<string>('');
    

    return (
        <div className={styles.search__wrapper}>
            <input 
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