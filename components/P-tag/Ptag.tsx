import classNames from "classnames";
import { IPtag } from "./Ptag.types";
import styles from './Ptag.module.css';

const Ptag = ({size = 'l', children}: IPtag) => {
    return (
        <p className={classNames(styles.p, {
            [styles.large]: size == 'l', 
            [styles.small]: size == 's', 
            [styles.medium]: size == 'm', 
        })}>{children}</p>
    );
};

export default Ptag;