import classNames from 'classnames';
import styles from './Button.module.css';
import { IButton } from './Button.types';

const Button = ({children, appearance = 'primary', className, ...props}: IButton): JSX.Element => {
    return (
        // classNames принимает дэфолт стили + условный объект
        <button type='button' className={classNames(styles.button, className, {
            [styles.primary]: appearance == 'primary',
            [styles.ghost]: appearance == 'ghost',
        })} 
        {...props}>
            {children}
        </button>
    );
};

export default Button;