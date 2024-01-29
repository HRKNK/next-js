import classNames from 'classnames';
import { ITag } from './Tag.types';
import styles from './Tag.module.css';

const Tag = ({children, color = 'ghost', size = 's', href, ...props}: ITag): JSX.Element => {
    return (
        <div>
            <span className={classNames(styles.tag, {
                    [styles.gray]: color === 'gray',
                    [styles.red]: color === 'red',
                    [styles.green]: color === 'green',

                    [styles.lilac]: color === 'lilac',
                    [styles.ghost]: color === 'ghost',

                    [styles.s]: size === 's',
                    [styles.m]: size === 'm',
                })} {...props}>

                {!href && <>{children}</>}
                {href && <a target='_blank' href={href}>{children}</a>}
            </span>
        </div>
    );
};

export default Tag;