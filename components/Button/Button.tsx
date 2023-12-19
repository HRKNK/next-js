import classNames from 'classnames';
import styles from './Button.module.css';
import { IButton } from './Button.types';

const Button = ({children, appearance = 'primary'}: IButton): JSX.Element => {
    return (
        // classNames принимает дэфолт стили + условный объект
        <button className={classNames(styles.button, {
            [styles.primary]: appearance == 'primary',
            [styles.ghost]: appearance == 'ghost',
        })}>
            {children}
        </button>
    );
};

export default Button;