import classNames from 'classnames';
import { ITag } from './Tag.types';
import styles from './Tag.module.css';

const Tag = ({children, filling}: ITag): JSX.Element => {
    return (
        <div className={classNames(styles.tag, {
            [styles.gray]: filling === 'gray',
            [styles.red]: filling === 'red',
            [styles.green]: filling === 'green',

            [styles.lilac]: filling === 'lilac',
            [styles.ghost]: filling === 'ghost',
        })}>
            {children}
        </div>
    );
};

export default Tag;