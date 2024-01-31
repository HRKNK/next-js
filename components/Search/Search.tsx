'use client';

import { type ChangeEvent, useEffect, useState } from 'react';
import { ISearch } from './Search.types';
import styles from './Search.module.css';
import Lens from '@/public/lens.svg';
import classNames from 'classnames';

const Search = ({button, target, className, ...props}: ISearch): JSX.Element => {
    const [value, setValue] = useState<string>('');
    const [focus, setFocus] = useState<boolean>(false);

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
        // if (e.target.value.length >= 1) {
            // TODO send response
        // }
    }

    return (
        <div className={classNames(styles.search__wrapper, className, {
            [styles['search__wrapper-focus']]: focus,
        })}>
            <input
                onFocus={()=> setFocus(true)}
                onBlur={()=> setFocus(false)}
            
                className={styles.input__search} 
                placeholder={target} 
                type='text'
                value={value} 
                onChange={onChange}
                {...props}
            />
            {button && <button onClick={()=> console.log('Click!')} className={styles.button__search} type='button'><Lens fill="white"/></button>}
        </div>
    );
};

export default Search;