import classNames from 'classnames';
import styles from './Htag.module.css';
import { IHtag } from './Htag.types';

const Htag = (props: IHtag): JSX.Element => {
    const {children = 'DefaultValue', tag = 'h2'} = props;

    return (
        <>
            {tag === 'h1' &&  <h1 className={classNames(styles.h1, styles.h)}>{children}</h1>}
            {tag === 'h2' &&  <h2 className={classNames(styles.h2, styles.h)}>{children}</h2>}
            {tag === 'h3' &&  <h3 className={classNames(styles.h3, styles.h)}>{children}</h3>}
        </>
    )
} 

export default Htag;