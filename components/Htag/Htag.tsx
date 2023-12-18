import styles from './Htag.module.css';
import { IHtag } from './Htag.types';

export const Htag = (props: IHtag): JSX.Element => {
    const {children = 'DefaultValue', tag = 'h2'} = props;

    return (
        <>
            {tag === 'h1' &&  <h1 className={styles.h1}>{children}</h1>}
            {tag === 'h2' &&  <h2 className={styles.h2}>{children}</h2>}
            {tag === 'h3' &&  <h3 className={styles.h3}>{children}</h3>}
        </>
    )
} 